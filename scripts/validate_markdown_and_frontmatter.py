# -*- coding: utf-8 -*-
"""
Stdlib-only limited frontmatter checker and local Markdown link validator.
Note: This is a lightweight, targeted frontmatter checker for SKILL.md files,
not a complete general-purpose YAML validator.
"""

import sys
import re
import argparse
from pathlib import Path
from typing import Optional
from urllib.parse import unquote


MD_LINK_PATTERN = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
FRONTMATTER_PATTERN = re.compile(r'^---\s*\r?\n(.*?)\r?\n---\s*(?:\r?\n|$)', re.DOTALL)


def strip_fenced_code_blocks(content: str) -> str:
    """Strip fenced code blocks (``` and ~~~) to avoid parsing example links inside code."""
    content = re.sub(r'```[\s\S]*?```', '', content)
    content = re.sub(r'~~~[\s\S]*?~~~', '', content)
    return content


def parse_link_destination(raw_target: str) -> str:
    """
    Parse destination from raw target string.
    Supports:
    - Normal relative paths: 'file.md'
    - Angle-bracketed paths with spaces: '<path with spaces/file.md>'
    - Anchors: 'file.md#anchor'
    - Optional quoted titles: 'file.md "My Title"' or '<file.md> \'My Title\''
    """
    t = raw_target.strip()
    if not t:
        return ""

    if t.startswith('<'):
        end_idx = t.find('>')
        if end_idx != -1:
            return t[1:end_idx].strip()

    # Optional quoted title at the end: path "title" or path 'title'
    parts = t.split(None, 1)
    if len(parts) > 1:
        potential_title = parts[1].strip()
        if (potential_title.startswith('"') and potential_title.endswith('"')) or \
           (potential_title.startswith("'") and potential_title.endswith("'")):
            return parts[0].strip()

    return t


def extract_markdown_links(content: str):
    """Extract all (text, parsed_url) pairs from markdown content outside fenced code blocks."""
    cleaned = strip_fenced_code_blocks(content)
    raw_links = MD_LINK_PATTERN.findall(cleaned)
    return [(text, parse_link_destination(target)) for text, target in raw_links]


def is_external_or_anchor(target: str) -> bool:
    """Check if target is an external URL, mailto, or pure anchor."""
    t = target.strip()
    if t.startswith('#'):
        return True
    lower = t.lower()
    for proto in ('http://', 'https://', 'mailto:', 'ftp://', 'data:', 'javascript:'):
        if lower.startswith(proto):
            return True
    return False


def validate_markdown_links(root_dir: Path, exclude_dirs=None) -> list:
    """
    Validate that all local relative links in markdown files point to existing files/dirs.
    Returns list of error messages.
    """
    if not root_dir.exists() or not root_dir.is_dir():
        return [f"Root directory does not exist or is not a directory: '{root_dir}'"]

    if exclude_dirs is None:
        exclude_dirs = {'.git', '__pycache__', '.pytest_cache', 'venv', '.venv'}

    errors = []
    root_resolved = root_dir.resolve()

    for md_file in root_resolved.rglob('*.md'):
        if any(part in exclude_dirs for part in md_file.parts):
            continue

        try:
            content = md_file.read_text(encoding='utf-8')
        except Exception as e:
            errors.append(f"Cannot read {md_file}: {e}")
            continue

        for text, clean_target in extract_markdown_links(content):
            if not clean_target or is_external_or_anchor(clean_target):
                continue

            # Strip query params and anchors if present (e.g. file.md#heading -> file.md)
            path_part = clean_target.split('#')[0].split('?')[0].strip()
            if not path_part:
                continue

            # Unquote URL encoded characters (e.g. %20)
            unquoted_path = unquote(path_part)

            # Resolve relative to current md_file directory
            target_path = (md_file.parent / unquoted_path).resolve()

            if not target_path.exists():
                rel_source = md_file.relative_to(root_resolved)
                errors.append(
                    f"{rel_source}: broken local link to '{clean_target}' (resolved as '{target_path}')"
                )

    return errors


def extract_frontmatter_field(text: str, field_name: str) -> Optional[str]:
    """
    Extract a single-line scalar field from frontmatter without crossing newlines.
    Strips surrounding quotes if present.
    """
    pattern = re.compile(rf'^[ \t]*{re.escape(field_name)}:[ \t]*(.*?)[ \t]*$', re.MULTILINE)
    match = pattern.search(text)
    if not match:
        return None
    val = match.group(1).strip()
    if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
        if len(val) >= 2:
            val = val[1:-1].strip()
    return val


def validate_skill_frontmatter(root_dir: Path, exclude_dirs=None) -> list:
    """
    Validate that all SKILL.md files contain valid YAML frontmatter
    with non-empty 'name' and 'description' keys.
    """
    if not root_dir.exists() or not root_dir.is_dir():
        return [f"Root directory does not exist or is not a directory: '{root_dir}'"]

    if exclude_dirs is None:
        exclude_dirs = {'.git', '__pycache__', '.pytest_cache', 'venv', '.venv'}

    errors = []
    root_resolved = root_dir.resolve()

    for skill_file in root_resolved.rglob('SKILL.md'):
        if any(part in exclude_dirs for part in skill_file.parts):
            continue

        rel_path = skill_file.relative_to(root_resolved)
        try:
            content = skill_file.read_text(encoding='utf-8')
        except Exception as e:
            errors.append(f"{rel_path}: cannot read file ({e})")
            continue

        match = FRONTMATTER_PATTERN.match(content)
        if not match:
            errors.append(f"{rel_path}: missing or malformed YAML frontmatter (must start with '---')")
            continue

        frontmatter_text = match.group(1)
        name_val = extract_frontmatter_field(frontmatter_text, "name")
        desc_val = extract_frontmatter_field(frontmatter_text, "description")

        if not name_val:
            errors.append(f"{rel_path}: missing or empty 'name' field in frontmatter")
        if not desc_val:
            errors.append(f"{rel_path}: missing or empty 'description' field in frontmatter")

    return errors


def run_all_validations(root_dir: Path) -> bool:
    """Run both link and frontmatter validation, print output, return success boolean."""
    print(f"[INFO] Validating repository at: {root_dir.resolve()}")

    link_errors = validate_markdown_links(root_dir)
    frontmatter_errors = validate_skill_frontmatter(root_dir)

    all_passed = True

    if link_errors:
        all_passed = False
        print(f"[FAIL] Found {len(link_errors)} broken markdown links:")
        for err in link_errors:
            print(f"  - {err}")
    else:
        print("[OK] All local markdown links point to valid targets.")

    if frontmatter_errors:
        all_passed = False
        print(f"[FAIL] Found {len(frontmatter_errors)} frontmatter issues in SKILL.md files:")
        for err in frontmatter_errors:
            print(f"  - {err}")
    else:
        print("[OK] All SKILL.md files have valid frontmatter (name and description present).")

    return all_passed


def main():
    parser = argparse.ArgumentParser(description="Validate Markdown links and SKILL.md frontmatter.")
    parser.add_argument("--root", default=".", help="Root directory of the repository")
    args = parser.parse_args()

    root_dir = Path(args.root).resolve()
    success = run_all_validations(root_dir)
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()

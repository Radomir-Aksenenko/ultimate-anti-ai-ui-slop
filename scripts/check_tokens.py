#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Executable CSS token syntax checker using tinycss2 (optional dependency).
Recursively parses stylesheet rules and declarations, including @media blocks.
"""

import sys
from pathlib import Path

try:
    import tinycss2
except ImportError:
    print("[ERROR] tinycss2 is required for CSS token validation but not installed.", file=sys.stderr)
    print("Install it via: pip install tinycss2", file=sys.stderr)
    sys.exit(1)


def check_rules(rule_list, errors, stats):
    """Recursively check rules, declarations, and nested blocks (e.g. @media)."""
    for rule in rule_list:
        if rule.type == 'error':
            errors.append(f"Parse error: {rule.message} at line {rule.source_line}:{rule.source_column}")
            stats['errors'] += 1
        elif rule.type == 'qualified-rule':
            stats['qualified_rules'] += 1
            declarations = tinycss2.parse_declaration_list(
                rule.content, skip_comments=True, skip_whitespace=True
            )
            for decl in declarations:
                if decl.type == 'error':
                    errors.append(f"Declaration error: {decl.message} at line {decl.source_line}:{decl.source_column}")
                    stats['errors'] += 1
                elif decl.type == 'declaration':
                    stats['declarations'] += 1
        elif rule.type == 'at-rule':
            stats['at_rules'] += 1
            if rule.content is not None:
                nested_rules = tinycss2.parse_rule_list(
                    rule.content, skip_comments=True, skip_whitespace=True
                )
                check_rules(nested_rules, errors, stats)


def validate_css_tokens(css_path: Path) -> int:
    if not css_path.exists():
        print(f"[ERROR] CSS file not found: {css_path}", file=sys.stderr)
        return 1

    try:
        content = css_path.read_bytes()
    except Exception as exc:
        print(f"[ERROR] Failed to read {css_path}: {exc}", file=sys.stderr)
        return 1

    rules, _ = tinycss2.parse_stylesheet_bytes(
        content, skip_comments=True, skip_whitespace=True
    )

    errors = []
    stats = {'qualified_rules': 0, 'at_rules': 0, 'declarations': 0, 'errors': 0}
    check_rules(rules, errors, stats)

    if errors:
        print(f"[FAIL] {css_path.name}: {len(errors)} error(s) found:")
        for err in errors:
            print(f"  - {err}")
        return 1

    print(
        f"[OK] {css_path.name}: {stats['qualified_rules']} qualified rules, "
        f"{stats['at_rules']} at-rules, {stats['declarations']} declarations parsed successfully. 0 errors."
    )
    return 0


def main():
    repo_root = Path(__file__).resolve().parent.parent
    target_css = Path(sys.argv[1]) if len(sys.argv) > 1 else repo_root / "tokens.css"
    sys.exit(validate_css_tokens(target_css))


if __name__ == '__main__':
    main()

# -*- coding: utf-8 -*-
"""
Unit tests for scripts/validate_markdown_and_frontmatter.py using temporary fixtures.
Does not test specific literal text of skill instructions.
"""

import unittest
import tempfile
import shutil
from pathlib import Path

from scripts.validate_markdown_and_frontmatter import (
    validate_markdown_links,
    validate_skill_frontmatter,
    is_external_or_anchor,
    extract_markdown_links,
)


class TestValidatorHelperFunctions(unittest.TestCase):
    def test_extract_markdown_links(self):
        content = "Here is [a link](target.md) and another [second link](dir/file.txt#anchor)."
        links = extract_markdown_links(content)
        self.assertEqual(len(links), 2)
        self.assertEqual(links[0], ("a link", "target.md"))
        self.assertEqual(links[1], ("second link", "dir/file.txt#anchor"))

    def test_is_external_or_anchor(self):
        self.assertTrue(is_external_or_anchor("#internal-heading"))
        self.assertTrue(is_external_or_anchor("https://example.com/api"))
        self.assertTrue(is_external_or_anchor("http://localhost:3000"))
        self.assertTrue(is_external_or_anchor("mailto:info@domain.com"))
        self.assertFalse(is_external_or_anchor("local_file.md"))
        self.assertFalse(is_external_or_anchor("../sub/doc.md#section"))


class TestMarkdownLinkValidation(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.mkdtemp()
        self.root = Path(self.temp_dir)

    def tearDown(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_valid_existing_links(self):
        doc1 = self.root / "doc1.md"
        doc2 = self.root / "sub" / "doc2.md"
        doc2.parent.mkdir(parents=True, exist_ok=True)

        doc1.write_text("[Go to Doc 2](sub/doc2.md)\n[Anchor link](#heading)", encoding="utf-8")
        doc2.write_text("[Back to Doc 1](../doc1.md#heading)\n[External](https://domain.com)", encoding="utf-8")

        errors = validate_markdown_links(self.root)
        self.assertEqual(len(errors), 0, f"Expected 0 errors, got: {errors}")

    def test_broken_relative_link(self):
        doc = self.root / "readme.md"
        doc.write_text("See [Missing](non_existent_file.md) for details.", encoding="utf-8")

        errors = validate_markdown_links(self.root)
        self.assertEqual(len(errors), 1)
        self.assertIn("non_existent_file.md", errors[0])

    def test_link_with_anchor_and_url_decoding(self):
        target = self.root / "my file.md"
        target.write_text("# Target", encoding="utf-8")

        source = self.root / "index.md"
        source.write_text("[Space File](my%20file.md#target)", encoding="utf-8")

        errors = validate_markdown_links(self.root)
        self.assertEqual(len(errors), 0, f"Expected 0 errors, got: {errors}")

    def test_nonexistent_root_dir_fails(self):
        errors = validate_markdown_links(Path("non_existent_directory_xyz123"))
        self.assertTrue(len(errors) > 0)
        self.assertIn("does not exist", errors[0])

    def test_ignore_fenced_code_blocks(self):
        doc = self.root / "code.md"
        doc.write_text(
            "Here is an example in code block:\n```markdown\n[Example](non_existent_in_code.md)\n```\nAnd tilde fence:\n~~~bash\n[Tilde](missing.md)\n~~~\n",
            encoding="utf-8",
        )
        errors = validate_markdown_links(self.root)
        self.assertEqual(len(errors), 0, f"Expected 0 errors, got: {errors}")

    def test_link_with_angle_brackets_spaces_and_optional_title(self):
        target_dir = self.root / "sub dir"
        target_dir.mkdir(parents=True, exist_ok=True)
        target_file = target_dir / "target file.md"
        target_file.write_text("# Target", encoding="utf-8")

        source = self.root / "source.md"
        source.write_text(
            "[Link 1](<sub dir/target file.md>)\n"
            "[Link 2](<sub dir/target file.md> \"Optional Quoted Title\")\n"
            "[Link 3](<sub dir/target file.md> 'Single Quoted Title')\n"
            "[Link 4](sub%20dir/target%20file.md \"Title\")\n"
            "[Link 5](<sub dir/target file.md>#section)\n",
            encoding="utf-8",
        )
        errors = validate_markdown_links(self.root)
        self.assertEqual(len(errors), 0, f"Expected 0 errors, got: {errors}")


class TestSkillFrontmatterValidation(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.mkdtemp()
        self.root = Path(self.temp_dir)

    def tearDown(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_valid_skill_frontmatter(self):
        skill_file = self.root / "SKILL.md"
        skill_file.write_text(
            "---\nname: my-skill\ndescription: A valid skill description.\n---\n# My Skill\n",
            encoding="utf-8",
        )
        errors = validate_skill_frontmatter(self.root)
        self.assertEqual(len(errors), 0, f"Expected 0 errors, got: {errors}")

    def test_missing_frontmatter_delimiters(self):
        skill_file = self.root / "SKILL.md"
        skill_file.write_text("# Just Markdown without frontmatter\n", encoding="utf-8")

        errors = validate_skill_frontmatter(self.root)
        self.assertEqual(len(errors), 1)
        self.assertIn("missing or malformed YAML frontmatter", errors[0])

    def test_missing_required_name_or_description(self):
        sub_dir = self.root / "sub"
        sub_dir.mkdir(parents=True, exist_ok=True)
        skill_file = sub_dir / "SKILL.md"

        # Missing name
        skill_file.write_text("---\ndescription: Only description\n---\n", encoding="utf-8")
        errors = validate_skill_frontmatter(self.root)
        self.assertEqual(len(errors), 1)
        self.assertIn("missing or empty 'name'", errors[0])

        # Missing description
        skill_file.write_text("---\nname: test-skill\n---\n", encoding="utf-8")
        errors = validate_skill_frontmatter(self.root)
        self.assertEqual(len(errors), 1)
        self.assertIn("missing or empty 'description'", errors[0])

    def test_empty_and_quoted_empty_name_or_description(self):
        sub_dir = self.root / "empty_case"
        sub_dir.mkdir(parents=True, exist_ok=True)
        skill_file = sub_dir / "SKILL.md"

        # name empty line
        skill_file.write_text("---\nname:   \ndescription: Valid desc\n---\n", encoding="utf-8")
        errors = validate_skill_frontmatter(sub_dir)
        self.assertEqual(len(errors), 1)
        self.assertIn("missing or empty 'name'", errors[0])

        # quoted empty values
        skill_file.write_text("---\nname: \"\"\ndescription: ''\n---\n", encoding="utf-8")
        errors2 = validate_skill_frontmatter(sub_dir)
        self.assertEqual(len(errors2), 2)
        self.assertTrue(any("missing or empty 'name'" in e for e in errors2))
        self.assertTrue(any("missing or empty 'description'" in e for e in errors2))

    def test_malformed_unclosed_frontmatter(self):
        skill_file = self.root / "SKILL.md"
        skill_file.write_text("---\nname: test\ndescription: unclosed frontmatter", encoding="utf-8")

        errors = validate_skill_frontmatter(self.root)
        self.assertEqual(len(errors), 1)
        self.assertIn("missing or malformed YAML frontmatter", errors[0])

    def test_nonexistent_root_dir_fails(self):
        errors = validate_skill_frontmatter(Path("non_existent_folder_xyz"))
        self.assertTrue(len(errors) > 0)
        self.assertIn("does not exist", errors[0])


if __name__ == "__main__":
    unittest.main()

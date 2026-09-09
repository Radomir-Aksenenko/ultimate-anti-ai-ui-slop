# -*- coding: utf-8 -*-
"""
Unit tests for DesignDNAAnalyzer using temporary fixtures.
"""

import unittest
import tempfile
import shutil
import json
from pathlib import Path
from PIL import Image

from scraper.analyzer import DesignDNAAnalyzer


class TestDesignDNAAnalyzer(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.mkdtemp()
        self.data_dir = Path(self.temp_dir) / "data"
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.media_dir = self.data_dir / "media"
        self.media_dir.mkdir(parents=True, exist_ok=True)

    def tearDown(self):
        shutil.rmtree(self.temp_dir, ignore_errors=True)

    def test_analyzer_no_images(self):
        posts = [
            {
                "id": 1,
                "text": "Text post about #figma and design",
                "hashtags": ["figma"],
                "formats": ["Figma"],
                "media_path": None,
            }
        ]
        posts_file = self.data_dir / "posts.json"
        posts_file.write_text(json.dumps(posts), encoding="utf-8")

        analyzer = DesignDNAAnalyzer(data_dir=str(self.data_dir))
        result = analyzer.analyze_dataset()

        self.assertEqual(result["total_posts_analyzed"], 1)
        self.assertEqual(result["total_images_analyzed"], 0)
        self.assertIsNone(result["average_aspect_ratio"])
        self.assertEqual(result["core_rules_extracted"], {})
        self.assertEqual(
            result["manual_guidelines"]["provenance"],
            "repository-authored suggestions; not inferred from this dataset; unverified source attribution",
        )

    def test_analyzer_with_image_fixture(self):
        img_path = self.media_dir / "test_sample.png"
        img = Image.new("RGB", (200, 100), color=(30, 60, 90))
        img.save(img_path)

        posts = [
            {
                "id": 2,
                "text": "Post with #device mockup #psd",
                "hashtags": ["device", "psd"],
                "formats": ["PSD"],
                "media_path": str(img_path.relative_to(self.data_dir.parent)),
            }
        ]
        posts_file = self.data_dir / "posts.json"
        posts_file.write_text(json.dumps(posts), encoding="utf-8")

        analyzer = DesignDNAAnalyzer(data_dir=str(self.data_dir))
        result = analyzer.analyze_dataset()

        self.assertEqual(result["total_images_analyzed"], 1)
        self.assertEqual(len(result["sample_palettes"]), 1)
        self.assertGreaterEqual(len(result["sample_palettes"][0]), 1)
        self.assertEqual(result["average_aspect_ratio"], 2.0)


if __name__ == "__main__":
    unittest.main()

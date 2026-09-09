# -*- coding: utf-8 -*-
"""
Unit tests for scraper/export_parser.py using TemporaryDirectory.
Ensures parser does not modify tracked repository data.
"""

import json
import unittest
import tempfile
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from scraper.export_parser import ExportParser


class TestExportParser(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.tmp_path = Path(self.temp_dir.name)

    def tearDown(self):
        self.temp_dir.cleanup()

    def test_parse_export_isolated(self):
        export_dir = self.tmp_path / 'export_dir'
        export_dir.mkdir(parents=True, exist_ok=True)

        sample_data = {
            'messages': [
                {
                    'id': 1,
                    'type': 'message',
                    'date': '2026-03-01T00:00:00',
                    'text': 'Test Post #design #mockup https://example.com/asset',
                    'views': 100,
                    'forwards': 10
                },
                 {
                    'id': 2,
                    'type': 'service'
                }
            ]
        }
        with open(export_dir / 'result.json', 'w', encoding='utf-8') as f:
            json.dump(sample_data, f, ensure_ascii=False)

        data_dir = self.tmp_path / 'data_out'
        parser = ExportParser(data_dir=str(data_dir))
        posts = parser.parse_export(str(export_dir), copy_media=False)

        self.assertEqual(len(posts), 1)
        self.assertEqual(posts[0]['id'], 1)
        self.assertIn('design', posts[0]['hashtags'])
        self.assertIn('mockup', posts[0]['hashtags'])
        self.assertTrue((data_dir / 'posts.json').exists())


if __name__ == '__main__':
    unittest.main()

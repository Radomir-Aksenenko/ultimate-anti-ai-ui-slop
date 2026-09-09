"""
Unit test for ExportParser and Analyzer.
"""
import json
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scraper.export_parser import ExportParser
from scraper.analyzer import DesignDNAAnalyzer


import tempfile


def test_export_pipeline():
    with tempfile.TemporaryDirectory() as tmp_dir:
        test_dir = Path(tmp_dir) / "export_dir"
        test_dir.mkdir(parents=True, exist_ok=True)

        # Synthetic result.json from Telegram Desktop
        sample_export = {
            "name": "Джем Мокап / Jam Mockup",
            "type": "public_channel",
            "id": 123456789,
            "messages": [
                {
                    "id": 501,
                    "type": "message",
                    "date": "2026-03-05T10:00:00",
                    "text": "Ultra Minimalist Poster Frame Mockup in Concrete Studio\n\n- Photorealistic sunlight beam\n- 4K resolution\n- Figma & PSD included\n#poster #minimalism #concrete #figma #psd",
                    "views": 2500,
                    "forwards": 180,
                },
                {
                    "id": 502,
                    "type": "message",
                    "date": "2026-03-06T12:00:00",
                    "text": "Matte Glass Cosmetic Dropper Bottle\n\n- Refractive liquid caustics\n- Editable label via smart layers\n#packaging #cosmetics #bottle #psd",
                    "views": 3100,
                    "forwards": 220,
                },
            ],
        }

        with open(test_dir / "result.json", "w", encoding="utf-8") as f:
            json.dump(sample_export, f, ensure_ascii=False, indent=2)

        # Isolated parser data directory in tempdir to avoid touching tracked data/posts.json
        output_data_dir = Path(tmp_dir) / "parser_data"
        parser = ExportParser(data_dir=str(output_data_dir))
        posts = parser.parse_export(str(test_dir))
        assert len(posts) == 2, f"Expected 2 posts, got {len(posts)}"
        assert (output_data_dir / "posts.json").exists(), "posts.json was not created in temp data dir"
        print("[OK] ExportParser unit test passed successfully!")


if __name__ == "__main__":
    test_export_pipeline()

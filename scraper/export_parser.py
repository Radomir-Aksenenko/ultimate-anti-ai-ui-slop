"""
Telegram Export Parser Module.
Parses Telegram Desktop export archives (result.json + media folders) into normalized dataset.
"""

import os
import re
import json
import shutil
from pathlib import Path
from typing import Dict, List, Any, Optional


class ExportParser:
    """
    Parser for Telegram Desktop JSON export dumps.
    """

    def __init__(self, data_dir: str = "data"):
        self.data_dir = Path(data_dir)
        self.media_dir = self.data_dir / "media"
        self.output_json = self.data_dir / "posts.json"

        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.media_dir.mkdir(parents=True, exist_ok=True)

    def _extract_text_content(self, text_obj: Any) -> str:
        """Extract flat string from Telegram export text entities or string."""
        if isinstance(text_obj, str):
            return text_obj
        elif isinstance(text_obj, list):
            parts = []
            for item in text_obj:
                if isinstance(item, str):
                    parts.append(item)
                elif isinstance(item, dict) and "text" in item:
                    parts.append(item["text"])
            return "".join(parts)
        return ""

    def _extract_metadata(self, text: str) -> Dict[str, Any]:
        """Extract hashtags, URLs, and design formats from text."""
        if not text:
            return {"hashtags": [], "links": [], "formats": []}

        hashtags = re.findall(r"#(\w+)", text)
        urls = re.findall(r"https?://[^\s<>\"']+", text)

        formats = []
        lower = text.lower()
        if "psd" in lower or ".psd" in lower:
            formats.append("PSD")
        if "figma" in lower or ".fig" in lower:
            formats.append("Figma")
        if "ai" in lower or "illustrator" in lower:
            formats.append("Illustrator")
        if "smart object" in lower or "смарт" in lower:
            formats.append("Smart Object")
        if "c4d" in lower or "cinema 4d" in lower or "blender" in lower:
            formats.append("3D Source")

        return {
            "hashtags": hashtags,
            "links": urls,
            "formats": list(set(formats)),
        }

    def parse_export(
        self,
        export_path: str,
        copy_media: bool = True,
    ) -> List[Dict[str, Any]]:
        """
        Parse Telegram export folder or direct result.json file.
        """
        path = Path(export_path)
        if path.is_dir():
            json_file = path / "result.json"
            base_dir = path
        else:
            json_file = path
            base_dir = path.parent

        if not json_file.exists():
            raise FileNotFoundError(f"[FAIL] Export JSON not found at: {json_file}")

        print(f"[INFO] Reading Telegram export from: {json_file}")
        with open(json_file, "r", encoding="utf-8") as f:
            raw_data = json.load(f)

        messages = raw_data.get("messages", [])
        print(f"[INFO] Found {len(messages)} total messages in export.")

        posts = []
        for msg in messages:
            if msg.get("type") != "message":
                continue

            raw_text = msg.get("text", "")
            text = self._extract_text_content(raw_text)
            meta = self._extract_metadata(text)

            # Check media
            media_rel = None
            media_src = msg.get("photo") or msg.get("file")
            if media_src:
                src_path = base_dir / media_src
                if src_path.exists():
                    target_filename = f"export_{msg.get('id')}_{src_path.name}"
                    dest_file = self.media_dir / target_filename
                    if copy_media and not dest_file.exists():
                        shutil.copy2(src_path, dest_file)
                        media_rel = str(dest_file.relative_to(self.data_dir.parent))
                    elif dest_file.exists():
                        media_rel = str(dest_file.relative_to(self.data_dir.parent))
                    else:
                        media_rel = str(src_path)

            post_entry = {
                "id": msg.get("id"),
                "date": msg.get("date"),
                "text": text,
                "hashtags": meta["hashtags"],
                "links": meta["links"],
                "formats": meta["formats"],
                "media_path": media_rel,
                "views": msg.get("views", 0),
                "forwards": msg.get("forwards", 0),
            }
            posts.append(post_entry)

        with open(self.output_json, "w", encoding="utf-8") as f:
            json.dump(posts, f, ensure_ascii=False, indent=2)

        print(f"[OK] Parsed and saved {len(posts)} posts to {self.output_json}")
        return posts

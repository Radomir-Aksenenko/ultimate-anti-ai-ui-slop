"""
Unified CLI Pipeline for Jam Mockup Harvester & Visual DNA Analysis.
"""

import sys
import os
import argparse
import asyncio
from pathlib import Path
from dotenv import load_dotenv

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from scraper.tg_harvester import TelegramHarvester
from scraper.export_parser import ExportParser
from scraper.analyzer import DesignDNAAnalyzer


def run_demo_mode(data_dir: str = "data"):
    """
    Generate synthetic sample dataset mimicking Jam Mockup channel
    for instant offline testing and verification.
    """
    import json
    from PIL import Image, ImageDraw

    data_path = Path(data_dir)
    media_path = data_path / "media"
    data_path.mkdir(parents=True, exist_ok=True)
    media_path.mkdir(parents=True, exist_ok=True)

    # Generate synthetic mockup image with realistic studio backdrop
    sample_img_path = media_path / "sample_iphone16_studio.jpg"
    img = Image.new("RGB", (1200, 900), color=(235, 235, 237))
    draw = ImageDraw.Draw(img)

    # Soft studio floor shadow
    draw.ellipse([300, 650, 900, 780], fill=(200, 202, 206))
    draw.ellipse([380, 680, 820, 750], fill=(175, 178, 184))

    # Device body representation
    draw.rounded_rectangle([420, 180, 780, 700], radius=48, fill=(35, 37, 40), outline=(70, 72, 78), width=3)
    # Screen inner
    draw.rounded_rectangle([435, 195, 765, 685], radius=38, fill=(18, 19, 21))
    # Dynamic island
    draw.rounded_rectangle([550, 215, 650, 235], radius=10, fill=(0, 0, 0))

    img.save(sample_img_path, quality=95)

    sample_posts = [
        {
            "id": 1001,
            "date": "2026-03-01T14:30:00",
            "text": "iPhone 16 Pro Titanium Studio Mockup\n\n- Ultra-realistic 6K resolution (6000x4500 px)\n- Separated shadow layers & ambient occlusion\n- Smart Object screen replacement\n- Figma & PSD formats included\n\nDownload: https://disk.yandex.ru/d/sample_mockup_01\n#mockup #iphone #device #studio #psd #figma",
            "hashtags": ["mockup", "iphone", "device", "studio", "psd", "figma"],
            "links": ["https://disk.yandex.ru/d/sample_mockup_01"],
            "formats": ["PSD", "Figma", "Smart Object"],
            "media_path": "data/media/sample_iphone16_studio.jpg",
            "views": 4820,
            "forwards": 312,
        },
        {
            "id": 1002,
            "date": "2026-03-02T11:15:00",
            "text": "Hardcover Book & Editorial Branding Mockup\n\n- Embossed foil logo effect\n- Tactile cotton paper texture\n- 3 natural sunlight shadow overlays\n- Format: PSD, 300 DPI\n\nDownload: https://drive.google.com/sample_book_02\n#editorial #book #branding #stationery #paper #psd",
            "hashtags": ["editorial", "book", "branding", "stationery", "paper", "psd"],
            "links": ["https://drive.google.com/sample_book_02"],
            "formats": ["PSD", "Smart Object"],
            "media_path": "data/media/sample_iphone16_studio.jpg",
            "views": 3950,
            "forwards": 240,
        },
        {
            "id": 1003,
            "date": "2026-03-03T16:45:00",
            "text": "MacBook Pro Liquid Retina & Studio Display Workspace\n\n- 45-degree angled perspective view\n- Realistic reflection maps\n- Changeable background color & desk surface\n\n#macbook #apple #display #workspace #figma",
            "hashtags": ["macbook", "apple", "display", "workspace", "figma"],
            "links": [],
            "formats": ["Figma"],
            "media_path": "data/media/sample_iphone16_studio.jpg",
            "views": 5210,
            "forwards": 415,
        },
    ]

    posts_file = data_path / "posts.json"
    with open(posts_file, "w", encoding="utf-8") as f:
        json.dump(sample_posts, f, ensure_ascii=False, indent=2)

    print(f"[OK] Demo dataset generated with {len(sample_posts)} sample posts and mockup asset at {posts_file}")


def main():
    load_dotenv()

    parser = argparse.ArgumentParser(
        description="Jam Mockup Harvester, Parser & Visual DNA Pipeline."
    )
    parser.add_argument(
        "--mode",
        choices=["telethon", "export", "analyze", "demo"],
        default="demo",
        help="Operation mode: telethon (direct MTProto), export (Telegram Desktop dump), analyze (visual DNA), demo (offline test)",
    )
    parser.add_argument(
        "--channel",
        default=os.getenv("TG_CHANNEL_INVITE", "https://t.me/+Hp5DjFnpWXdhMTBi"),
        help="Channel invite link or @handle",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=100,
        help="Number of messages to scrape via Telethon",
    )
    parser.add_argument(
        "--export-path",
        default="export",
        help="Path to Telegram Desktop export folder or result.json",
    )
    parser.add_argument(
        "--data-dir",
        default="data",
        help="Target data storage directory",
    )
    parser.add_argument(
        "--analyze",
        action="store_true",
        help="Automatically trigger visual DNA analysis after harvesting",
    )

    args = parser.parse_args()

    if args.mode == "demo":
        print("[STAGE] Running in demo mode...")
        run_demo_mode(data_dir=args.data_dir)
        analyzer = DesignDNAAnalyzer(data_dir=args.data_dir)
        analyzer.analyze_dataset()
        print("[OK] Demo pipeline run completed successfully.")

    elif args.mode == "telethon":
        print(f"[STAGE] Connecting to Telegram MTProto for channel: {args.channel}")
        harvester = TelegramHarvester(data_dir=args.data_dir)
        phone = os.getenv("TG_PHONE")
        asyncio.run(harvester.initialize_client(phone=phone))
        asyncio.run(harvester.harvest(args.channel, limit=args.limit))
        if args.analyze:
            analyzer = DesignDNAAnalyzer(data_dir=args.data_dir)
            analyzer.analyze_dataset()

    elif args.mode == "export":
        print(f"[STAGE] Parsing Telegram Desktop export from: {args.export_path}")
        parser_inst = ExportParser(data_dir=args.data_dir)
        parser_inst.parse_export(args.export_path)
        if args.analyze:
            analyzer = DesignDNAAnalyzer(data_dir=args.data_dir)
            analyzer.analyze_dataset()

    elif args.mode == "analyze":
        print("[STAGE] Running Design DNA Analyzer...")
        analyzer = DesignDNAAnalyzer(data_dir=args.data_dir)
        analyzer.analyze_dataset()


if __name__ == "__main__":
    main()

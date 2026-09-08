"""
Telegram Harvester Module using Telethon MTProto Client.
Scrapes messages, media, external download links, and hashtags from private or public channels.
"""

import os
import re
import json
import asyncio
from datetime import datetime
from pathlib import Path
from typing import Optional, List, Dict, Any

try:
    from telethon import TelegramClient
    from telethon.tl.functions.messages import ImportChatInviteRequest, CheckChatInviteRequest
    from telethon.tl.types import MessageMediaPhoto, MessageMediaDocument, ChatInviteAlready
    from telethon.errors import UserAlreadyParticipantError, FloodWaitError
    TELETHON_AVAILABLE = True
except ImportError:
    TELETHON_AVAILABLE = False


class TelegramHarvester:
    """
    Harvester for Telegram channel content via Telethon.
    """

    def __init__(
        self,
        api_id: Optional[int] = None,
        api_hash: Optional[str] = None,
        session_name: str = "jam_session",
        data_dir: str = "data",
    ):
        self.api_id = api_id or int(os.getenv("TG_API_ID", "0"))
        self.api_hash = api_hash or os.getenv("TG_API_HASH", "")
        self.session_name = session_name
        self.data_dir = Path(data_dir)
        self.media_dir = self.data_dir / "media"
        self.output_json = self.data_dir / "posts.json"

        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.media_dir.mkdir(parents=True, exist_ok=True)

        self.client: Optional[Any] = None

    def _extract_invite_hash(self, invite_link: str) -> str:
        """Extract hash from invite link like https://t.me/+Hp5DjFnpWXdhMTBi."""
        link = invite_link.strip()
        if "+" in link:
            return link.split("+")[-1]
        elif "joinchat/" in link:
            return link.split("joinchat/")[-1]
        return link

    def _extract_metadata(self, text: str) -> Dict[str, Any]:
        """Extract hashtags, URLs, and design formats from text."""
        if not text:
            return {"hashtags": [], "links": [], "formats": []}

        hashtags = re.findall(r"#(\w+)", text)
        urls = re.findall(r"https?://[^\s<>\"']+", text)

        formats = []
        lower_text = text.lower()
        if "psd" in lower_text or ".psd" in lower_text:
            formats.append("PSD")
        if "figma" in lower_text or ".fig" in lower_text:
            formats.append("Figma")
        if "ai" in lower_text or "illustrator" in lower_text:
            formats.append("Illustrator")
        if "smart object" in lower_text or "смарт-объект" in lower_text:
            formats.append("Smart Object")

        return {
            "hashtags": hashtags,
            "links": urls,
            "formats": list(set(formats)),
        }

    async def initialize_client(self, phone: Optional[str] = None):
        """Initialize and start Telegram client session."""
        if not TELETHON_AVAILABLE:
            raise RuntimeError(
                "[FAIL] Telethon is not installed. Install via: pip install telethon"
            )

        if not self.api_id or not self.api_hash:
            raise ValueError(
                "[FAIL] TG_API_ID and TG_API_HASH must be provided in .env or passed directly."
            )

        self.client = TelegramClient(self.session_name, self.api_id, self.api_hash)
        await self.client.start(phone=phone)
        print("[OK] Telegram client connected successfully.")

    async def join_or_get_channel(self, channel_identifier: str):
        """Resolve channel entity, joining via invite hash if necessary."""
        if not self.client:
            raise RuntimeError("[FAIL] Client is not initialized.")

        if "+" in channel_identifier or "joinchat" in channel_identifier:
            invite_hash = self._extract_invite_hash(channel_identifier)
            print(f"[INFO] Resolving invite hash: {invite_hash}")
            try:
                updates = await self.client(ImportChatInviteRequest(invite_hash))
                print("[OK] Joined channel via invite link.")
                return updates.chats[0]
            except UserAlreadyParticipantError:
                print("[INFO] Already a participant in this channel.")
                check = await self.client(CheckChatInviteRequest(invite_hash))
                if hasattr(check, "chat"):
                    return check.chat
                return await self.client.get_entity(channel_identifier)
            except Exception as e:
                print(f"[WARN] Invite request check: {e}. Trying entity direct lookup...")
                return await self.client.get_entity(channel_identifier)
        else:
            return await self.client.get_entity(channel_identifier)

    async def harvest(
        self,
        channel_identifier: str,
        limit: int = 200,
        download_media: bool = True,
    ) -> List[Dict[str, Any]]:
        """Harvest messages, media and metadata from the specified channel."""
        entity = await self.join_or_get_channel(channel_identifier)
        print(f"[INFO] Starting harvest for channel: {getattr(entity, 'title', channel_identifier)}")

        posts = []
        count = 0

        async for message in self.client.iter_messages(entity, limit=limit):
            count += 1
            text = message.text or ""
            meta = self._extract_metadata(text)

            media_path = None
            if download_media and message.media:
                try:
                    file_ext = ".jpg"
                    if isinstance(message.media, MessageMediaPhoto):
                        file_ext = ".jpg"
                    elif isinstance(message.media, MessageMediaDocument):
                        mime = getattr(message.media.document, "mime_type", "")
                        if "image" in mime:
                            file_ext = ".png"
                        else:
                            file_ext = ".bin"

                    target_filename = f"msg_{message.id}{file_ext}"
                    dest = self.media_dir / target_filename

                    if not dest.exists():
                        print(f"[{count}/{limit}] Downloading media for msg {message.id}...")
                        downloaded = await self.client.download_media(message, file=str(dest))
                        if downloaded:
                            media_path = str(Path(downloaded).relative_to(self.data_dir.parent))
                    else:
                        media_path = str(dest.relative_to(self.data_dir.parent))
                except FloodWaitError as fw:
                    print(f"[WARN] Rate limited. Waiting {fw.seconds} seconds...")
                    await asyncio.sleep(fw.seconds)
                except Exception as ex:
                    print(f"[WARN] Failed to download media for msg {message.id}: {ex}")

            post_entry = {
                "id": message.id,
                "date": message.date.isoformat() if message.date else None,
                "text": text,
                "hashtags": meta["hashtags"],
                "links": meta["links"],
                "formats": meta["formats"],
                "media_path": media_path,
                "views": getattr(message, "views", 0),
                "forwards": getattr(message, "forwards", 0),
            }
            posts.append(post_entry)

        # Save to JSON
        with open(self.output_json, "w", encoding="utf-8") as f:
            json.dump(posts, f, ensure_ascii=False, indent=2)

        print(f"[OK] Harvested {len(posts)} posts. Saved to {self.output_json}")
        return posts

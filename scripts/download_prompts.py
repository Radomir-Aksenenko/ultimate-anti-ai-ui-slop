import urllib.request
import json
import time
from pathlib import Path

supabase_url = "https://xgdzyqfalbibzelpdpvr.supabase.co"
anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZHp5cWZhbGJpYnplbHBkcHZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4MzUwMDYsImV4cCI6MjA4NzQxMTAwNn0.u8lH5Y14xx2WxrNEBp8ngkJlijIYHJASq_gOzTaINZY"

out_dir = Path("data/motionsites")
out_dir.mkdir(parents=True, exist_ok=True)
prompts_dir = out_dir / "raw_prompts"
prompts_dir.mkdir(parents=True, exist_ok=True)

# 1. Fetch metadata for all free prompts
url_free = f"{supabase_url}/rest/v1/prompts?select=id,title,category,type,is_free,github_url,created_at,sort_order,page_type&is_free=eq.true&order=sort_order.asc"
req = urllib.request.Request(url_free, headers={"apikey": anon_key, "Authorization": f"Bearer {anon_key}"})

with urllib.request.urlopen(req) as resp:
    free_prompts_meta = json.loads(resp.read().decode("utf-8"))

print(f"Total free prompts available: {len(free_prompts_meta)}")

# Target at least 60 prompts
target_count = min(70, len(free_prompts_meta))
selected_meta = free_prompts_meta[:target_count]
print(f"Downloading full prompt text for {len(selected_meta)} prompts...")

func_url = f"{supabase_url}/functions/v1/get-prompt"

collected = []
success_count = 0

for i, meta in enumerate(selected_meta):
    pid = meta["id"]
    title = meta["title"]
    print(f"[{i+1}/{len(selected_meta)}] Fetching {title} ({pid})...", end=" ", flush=True)

    f_req = urllib.request.Request(
        func_url,
        data=json.dumps({"prompt_id": pid}).encode("utf-8"),
        headers={
            "apikey": anon_key,
            "Authorization": f"Bearer {anon_key}",
            "Content-Type": "application/json"
        }
    )

    try:
        with urllib.request.urlopen(f_req, timeout=15) as f_resp:
            res = json.loads(f_resp.read().decode("utf-8"))
            prompt_text = res.get("prompt_text")
            sections = res.get("sections")
            section_names = res.get("section_names")

            if prompt_text:
                item = {
                    **meta,
                    "prompt_text": prompt_text,
                    "sections": sections,
                    "section_names": section_names,
                    "length": len(prompt_text)
                }
                collected.append(item)
                success_count += 1
                # save individual prompt file
                p_path = prompts_dir / f"{pid}.md"
                with open(p_path, "w", encoding="utf-8") as pf:
                    pf.write(f"# {title}\n\n")
                    pf.write(f"- ID: {pid}\n")
                    pf.write(f"- Category: {meta.get('category')}\n")
                    pf.write(f"- Type: {meta.get('type')}\n\n")
                    pf.write("## Prompt Content\n\n")
                    pf.write(prompt_text)
                print(f"OK ({len(prompt_text)} chars)")
            else:
                print(f"No prompt text (code: {res.get('code')})")
    except Exception as e:
        print(f"Error: {e}")
    time.sleep(0.1)

# Save combined json
with open(out_dir / "prompts_dataset.json", "w", encoding="utf-8") as out_f:
    json.dump(collected, out_f, ensure_ascii=False, indent=2)

print(f"\nSuccessfully downloaded and saved {success_count} prompts to {out_dir}")

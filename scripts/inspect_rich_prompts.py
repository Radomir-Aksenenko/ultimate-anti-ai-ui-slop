import json
from pathlib import Path

dataset_path = Path("data/motionsites/prompts_dataset.json")
with open(dataset_path, "r", encoding="utf-8") as f:
    prompts = json.load(f)

# Sort prompts by length to examine the richest ones
sorted_prompts = sorted(prompts, key=lambda x: x["length"], reverse=True)

for p in sorted_prompts[:6]:
    print("=" * 80)
    print(f"TITLE: {p['title']} | CATEGORY: {p.get('category')} | LENGTH: {p['length']}")
    print("=" * 80)
    # print first 1500 chars
    print(p["prompt_text"][:1500])
    print("\n...\n")

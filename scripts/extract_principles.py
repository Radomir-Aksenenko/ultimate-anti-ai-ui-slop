import json
import re
from pathlib import Path
from collections import defaultdict

dataset_path = Path("data/motionsites/prompts_dataset.json")
with open(dataset_path, "r", encoding="utf-8") as f:
    prompts = json.load(f)

extracted = {
    "motion_patterns": defaultdict(list),
    "css_utilities": set(),
    "layout_structures": defaultdict(list),
    "typography_rules": defaultdict(list),
    "color_and_surfaces": defaultdict(list),
    "interactive_components": defaultdict(list),
    "prompt_structure_templates": []
}

css_block_regex = re.compile(r'```(?:css|postcss)?\s*(.*?)```', re.DOTALL)
tailwind_config_regex = re.compile(r'```(?:ts|js)?\s*(?:tailwind\.config.*?)```', re.DOTALL)

for p in prompts:
    title = p["title"]
    text = p["prompt_text"]
    cat = p.get("category", "General")
    
    # Extract CSS utilities
    for match in css_block_regex.findall(text):
        for line in match.strip().split("\n"):
            line = line.strip()
            if line.startswith(".") and "{" in line:
                cls_name = line.split("{")[0].strip()
                extracted["css_utilities"].add(cls_name)

    # Extract motion details
    if "framer-motion" in text.lower() or "gsap" in text.lower() or "keyframes" in text:
        # search for easing or transitions
        easings = re.findall(r'ease[a-zA-Z-]*|cubic-bezier\([^)]+\)|\[[0-9.,\s]+\]', text)
        staggers = re.findall(r'stagger[a-zA-Z]*[:=]?\s*[0-9.]+', text, re.IGNORECASE)
        durations = re.findall(r'duration[:=]?\s*[0-9.]+[ms]*', text, re.IGNORECASE)
        if easings or staggers or durations:
            extracted["motion_patterns"][title] = {
                "category": cat,
                "staggers": list(set(staggers))[:3],
                "durations": list(set(durations))[:3],
                "easings": list(set(easings))[:3]
            }

    # Extract typography
    font_matches = re.findall(r'(?:font-family|font)\s*[:=]\s*["\']?([^"\',;\n]+)', text, re.IGNORECASE)
    if font_matches:
        extracted["typography_rules"][title] = list(set([f.strip() for f in font_matches if len(f.strip()) < 40]))[:4]

    # Extract surfaces / glassmorphism
    if "liquid-glass" in text or "backdrop-blur" in text or "rgba(" in text:
        rgba_matches = re.findall(r'rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[0-9.]+\s*\)', text)
        if rgba_matches:
            extracted["color_and_surfaces"][title] = list(set(rgba_matches))[:5]

    # Extract interactive components
    for comp in ["calculator", "slider", "marquee", "radial", "bento", "tab", "modal", "cursor"]:
        if comp in text.lower():
            extracted["interactive_components"][comp].append(title)

output_file = Path("data/motionsites/extracted_principles.json")
with open(output_file, "w", encoding="utf-8") as f:
    json.dump({
        "total_prompts": len(prompts),
        "css_utilities": sorted(list(extracted["css_utilities"])),
        "motion_patterns": dict(extracted["motion_patterns"]),
        "typography_rules": dict(extracted["typography_rules"]),
        "color_and_surfaces": dict(extracted["color_and_surfaces"]),
        "interactive_components": {k: list(set(v)) for k, v in extracted["interactive_components"].items()}
    }, f, ensure_ascii=False, indent=2)

print(f"Extracted principles saved to {output_file}")
print(f"Found {len(extracted['css_utilities'])} CSS utility classes")
print(f"Found {len(extracted['motion_patterns'])} prompts with explicit motion curves")
print(f"Found {len(extracted['color_and_surfaces'])} prompts with surface/alpha tokens")

import json
import re
from pathlib import Path
from collections import Counter, defaultdict

dataset_path = Path("data/motionsites/prompts_dataset.json")
with open(dataset_path, "r", encoding="utf-8") as f:
    prompts = json.load(f)

print(f"Analyzing {len(prompts)} prompts...")

stats = {
    "total": len(prompts),
    "categories": Counter(),
    "tech_stack": Counter(),
    "animation_libraries": Counter(),
    "animation_techniques": Counter(),
    "typography": Counter(),
    "color_themes": Counter(),
    "interactive_features": Counter(),
    "prompt_structure_sections": Counter(),
    "average_length": sum(p["length"] for p in prompts) / len(prompts),
    "component_types": Counter()
}

detailed_insights = []

for p in prompts:
    text = p["prompt_text"]
    title = p["title"]
    category = p.get("category", "Unknown")
    stats["categories"][category] += 1
    
    # Tech stack
    for tech in ["React", "TypeScript", "Vite", "Tailwind CSS", "Next.js", "Vue", "Three.js", "Spline", "Canvas", "WebGL"]:
        if re.search(r'\b' + re.escape(tech) + r'\b', text, re.IGNORECASE):
            stats["tech_stack"][tech] += 1
            
    # Animation libraries
    for lib in ["framer-motion", "gsap", "lenis", "lucide-react", "tailwind-animate", "canvas-confetti"]:
        if re.search(r'\b' + re.escape(lib) + r'\b', text, re.IGNORECASE):
            stats["animation_libraries"][lib] += 1
            
    # Animation techniques
    for tech in ["stagger", "spring", "marquee", "parallax", "magnetic", "tilt", "glow", "gradient", "blur", "hover", "counter", "typewriter", "reveal", "scroll"]:
        matches = len(re.findall(r'\b' + re.escape(tech) + r'\b', text, re.IGNORECASE))
        if matches > 0:
            stats["animation_techniques"][tech] += 1

    # Fonts mentioned
    fonts = re.findall(r'(?:font|family|google font)[s]?\s*[:=]?\s*["\']?([A-Z][a-zA-Z\s]+)["\']?', text)
    known_fonts = ["Kanit", "Inter", "Plus Jakarta Sans", "Syne", "Outfit", "Space Grotesk", "Clash Display", "Satoshi", "Geist", "Manrope", "Cinzel", "Cabinet Grotesk"]
    for kf in known_fonts:
        if kf.lower() in text.lower():
            stats["typography"][kf] += 1

    # Color themes & visual elements
    if "dark" in text.lower():
        stats["color_themes"]["dark_theme"] += 1
    if "light" in text.lower() and "light theme" in text.lower():
        stats["color_themes"]["light_theme"] += 1
    if "glass" in text.lower() or "glassmorphism" in text.lower() or "backdrop-blur" in text.lower():
        stats["color_themes"]["glassmorphism"] += 1
    if "gradient" in text.lower():
        stats["color_themes"]["gradient_accents"] += 1
    if "video" in text.lower():
        stats["color_themes"]["video_background"] += 1

    # Interactive features
    for feat in ["modal", "dialog", "drawer", "slider", "calculator", "filter", "tabs", "tooltip", "copy to clipboard", "audio", "video player"]:
        if feat in text.lower():
            stats["interactive_features"][feat] += 1

    # Prompt structure sections
    headings = re.findall(r'^[#]{1,4}\s*(.+)$', text, re.MULTILINE)
    for h in headings:
        h_clean = h.strip()
        stats["prompt_structure_sections"][h_clean] += 1

report_path = Path("data/motionsites/analysis_summary.json")
with open(report_path, "w", encoding="utf-8") as f:
    json.dump(stats, f, ensure_ascii=False, indent=2)

print("\n--- Summary of 70 MotionSites Prompts ---")
print(f"Average length: {stats['average_length']:.0f} chars")
print("\nTop Categories:", stats["categories"].most_common(10))
print("\nTech Stack:", stats["tech_stack"].most_common())
print("\nAnimation Libraries:", stats["animation_libraries"].most_common())
print("\nAnimation Techniques:", stats["animation_techniques"].most_common())
print("\nTypography:", stats["typography"].most_common())
print("\nVisual Patterns:", stats["color_themes"].most_common())
print("\nInteractive Features:", stats["interactive_features"].most_common(10))

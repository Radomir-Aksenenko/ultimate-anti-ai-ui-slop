---
name: color-and-gradients
description: Sub-skill for calibrated color palettes, mesh gradients, dark/light contrast, and anti-slop color rules. Directly incorporates palettes from @wtcolor_bot.
---

# Sub-Skill: Color & Gradient Master Formulas

> For selecting color palettes, creating CSS/SVG mesh gradients, and enforcing contrast.
> Includes exact hex formulas harvested from `@wtcolor_bot` and modern luxury design systems.

---

## 1. CALIBRATED PALETTES FROM @WTCOLOR_BOT

### 1.1 The Saturated Editorial Palette (High Impact, Zero Slop)
- Primary Deep Accent: `#096D23` (Deep Pine Emerald)
- Secondary Royal Accent: `#7A4BDD` (Noble Royal Violet)
- Warm Craft Accent: `#B96539` (Burnt Terracotta / Rust)
- Soft Light Tint: `#D1C0F6` (Lavender Mist)
- Crisp Mint Tint: `#CEF2CC` (Pale Mint Chip)
- Surface Base: `#FAFAFA` (Light) or `#0B0C0E` (Dark)

### 1.2 The Cold Luxury Palette (Hardware & High-Tech)
- Background: `#F1F3F5` (Silver-Grey)
- Deep Contrast: `#18181B` (Charcoal Obsidian)
- Muted Chrome: `#94A3B8` (Cool Slate)
- Razor Pop Accent: `#2563EB` (Electric Cobalt) or `#10B981` (Emerald)

---

## 2. MESH GRADIENT CSS FORMULAS

Generic AI slop uses single-point linear purple gradients (`from-purple-600 to-indigo-600`).
True modern design uses **multi-focal mesh gradients** with soft Gaussian blur.

### 2.1 CSS Ambient Studio Mesh Gradient
```css
.studio-mesh-bg {
  background-color: #0c0d11;
  background-image:
    radial-gradient(at 15% 20%, rgba(9, 109, 35, 0.25) 0px, transparent 50%),
    radial-gradient(at 85% 25%, rgba(122, 75, 221, 0.22) 0px, transparent 50%),
    radial-gradient(at 50% 80%, rgba(185, 101, 57, 0.18) 0px, transparent 50%);
  filter: contrast(105%);
}
```

### 2.2 Glass Card with Light Gradient Refraction
```css
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}
```

---

## 3. STRICT COLOR RULES FOR AI MODELS

1. **Max 1 Primary Accent:** Choose one accent (`#096D23`, `#2563EB`, or `#B96539`). Use it consistently for all primary buttons, active tabs, and focus rings.
2. **Never Black on White Drop Shadows:** On light cards, use tinted shadows: `rgba(15, 23, 42, 0.06)`, never `rgba(0, 0, 0, 0.25)`.
3. **WCAG AA Compliance:** White text on buttons must have contrast >= 4.5:1. Never use white text on yellow, cyan, or pastel green buttons.

---

## 4. COLOR TEMPERATURE & TACTILE TEXTURE (ANTI-SYNTHETIC INGREDIENTS)

Pure `#000000` or `#0a0a0a` feels like a synthetic bot terminal. Human craftsmanship uses **color temperature**:

### 4.1 Temperature Presets:
- **Warm Obsidian (Craft & Editorial):**
  - Background: `#131211`
  - Card Surface: `#1D1C1A`
  - Border: `rgba(255, 255, 255, 0.08)`
  - Text: `#F5F4F0`
- **Deep Ink Midnight (High Tech & DevOps):**
  - Background: `#080C14`
  - Card Surface: `#0F172A`
  - Border: `rgba(56, 189, 248, 0.1)`
  - Text: `#F8FAFC`
- **Warm Silk Off-White (Clean Luxury):**
  - Background: `#F7F6F2`
  - Card Surface: `#FFFFFF`
  - Border: `#E5E2DA`
  - Text: `#1A1918`

### 4.2 Micro-Grain Texture (CSS Noise Overlay):
Adding 2-3% procedural grain eliminates plastic digital smoothness:
```css
.tactile-surface {
  position: relative;
}
.tactile-surface::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.035;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```


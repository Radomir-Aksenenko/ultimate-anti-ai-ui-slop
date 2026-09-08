---
name: figma-mastery
description: Sub-skill for Figma design systems, website frames, Auto Layout, tokens, variables, component sets, and vector device staging. Engineered for lightweight/flash AI models with deterministic rules.
---

# Sub-Skill: Figma Mastery & Website Systems

> **CORE PRINCIPLE:** Figma is the professional workbench for designing **real websites and digital products**.
> Do not treat Figma as a toy for loose rectangles. Every frame represents a production-ready web or product layout.

---

## 1. FIGMA CANVAS STRUCTURE FOR WEBSITES

When designing a website in Figma, create a clean, organized hierarchy:

```
[Page: "🖥️ Desktop - 1440px"]
└── [Frame: "Page / Home"] (W: 1440, Auto Layout: Vertical, Gap: 0)
    ├── [Frame: "01_Navbar"] (W: Fill, H: 72, Auto Layout: Horizontal)
    ├── [Frame: "02_Hero"] (W: Fill, Min-H: 800, Auto Layout: Vertical, Padding: 96px)
    │   └── [Frame: "Hero_Container_1200"] (W: 1200, Auto Layout: Split 60/40)
    ├── [Frame: "03_SocialProof"] (W: Fill, Padding: 48px)
    ├── [Frame: "04_BentoFeatures"] (W: Fill, Padding: 120px)
    ├── [Frame: "05_MetricsSpec"] (W: Fill, Padding: 96px)
    ├── [Frame: "06_CTA"] (W: Fill, Padding: 120px)
    └── [Frame: "07_Footer"] (W: Fill, Padding: 64px)
```

---

## 2. AUTO LAYOUT IS MANDATORY (NO FLOATING LAYERS)

Every container, card, button, and section MUST use Auto Layout.
- **Direction:** `Horizontal` for rows (navbar, button content, tag pills); `Vertical` for stacks (cards, forms, hero copy).
- **Width Sizing:**
  - Full-width sections & cards: `Fill container` (W: Fill).
  - Text inside cards: `Fill container` (W: Fill) with Auto height so it wraps naturally.
  - Buttons, badges, icons: `Hug contents` (W: Hug, H: Hug).
- **Padding Scale (8pt Grid):**
  - Buttons: Horizontal 16px, Vertical 10px (`px-4 py-2.5`).
  - Cards: Inner padding 24px (`p-6`) or 32px (`p-8`).
  - Page Sections: Desktop vertical padding 80px to 120px (`py-20` to `py-30`).

---

## 3. VARIABLE & TOKEN TAXONOMY

When outputting design tokens, use this exact two-tier structure:

### Tier 1: Primitives (Fixed Color Codes)
- `neutral/0`: `#FFFFFF`
- `neutral/100`: `#F1F5F9`
- `neutral/200`: `#E2E8F0`
- `neutral/800`: `#1E293B`
- `neutral/900`: `#0F172A`
- `neutral/950`: `#020617`
- `accent/emerald`: `#096D23`
- `accent/cobalt`: `#2563EB`
- `accent/terracotta`: `#B96539`

### Tier 2: Semantics (Light vs Dark Mode)
| Token Name | Light Mode Value | Dark Mode Value |
|---|---|---|
| `surface/page` | `neutral/100` (`#F1F5F9`) | `neutral/950` (`#020617`) |
| `surface/card` | `neutral/0` (`#FFFFFF`) | `neutral/900` (`#0F172A`) |
| `surface/elevated` | `neutral/0` + shadow | `neutral/800` (`#1E293B`) |
| `text/primary` | `neutral/950` (`#020617`) | `neutral/0` (`#FFFFFF`) |
| `text/secondary` | `neutral/800` (65% opacity) | `neutral/200` (70% opacity) |
| `border/subtle` | `neutral/200` (`#E2E8F0`) | `neutral/800` (`#1E293B`) |
| `border/focus` | `accent/cobalt` | `accent/cobalt` |

---

## 4. COMPONENT SETS & VARIANT MATRIX

Every interactive component in Figma must have defined states:
- **Button:**
  - Properties: `Variant: Primary | Secondary | Ghost`, `State: Default | Hover | Pressed | Disabled`, `Size: Sm | Md | Lg`.
  - Pressed State rule: Shift inner content Y +1px or reduce scale to 98%.
- **Input Field:**
  - States: `Default | Focused (2px accent border) | Filled | Error (Red border + caption below)`.
  - Always keep labels OUTSIDE and ABOVE the input field.

---

## 5. HARDWARE MOCKUP FRAMING IN FIGMA

When presenting mobile or desktop screens:
- **Mobile Frame:** 393x852 px (iPhone 16 Pro). Corner radius: `55px`. Top notch: Dynamic Island (`width: 120px, height: 35px, radius: 20px, fill: #000000`).
- **Desktop Frame:** 1440x900 px or 1920x1080 px. Top window bar height: `44px`. Traffic light circles: 12px diameter, 8px gap.
- **Presentation Backdrop:** 2560x1440 px frame with subtle studio gray (`#F1F3F5`) and multi-layer shadows.

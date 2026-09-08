# Figma Design System Architecture & Studio Staging

This guide establishes production-grade Figma standards, token taxonomy, and studio mockup presentation setups.

---

## 1. Token Taxonomy & Variables

Organize Figma Variables into three clear collections:

### 1.1 Primitive Tokens (`primitives/`)
- `color/neutral/0` (White: `#ffffff`)
- `color/neutral/50` (`#f8fafc`)
- `color/neutral/100` (`#f1f5f9`)
- `color/neutral/200` (`#e2e8f0`)
- `color/neutral/800` (`#1e293b`)
- `color/neutral/900` (`#0f172a`)
- `color/neutral/950` (`#020617`)
- `color/brand/500` (Base Accent, e.g., `#2563eb` or `#10b981`)

### 1.2 Semantic Tokens (`semantic/`)
- `surface/primary`: Mode Light -> `neutral/0`, Mode Dark -> `neutral/950`
- `surface/secondary`: Mode Light -> `neutral/50`, Mode Dark -> `neutral/900`
- `surface/elevated`: Mode Light -> `neutral/0` + shadow, Mode Dark -> `neutral/800`
- `text/primary`: Mode Light -> `neutral/900`, Mode Dark -> `neutral/50`
- `text/secondary`: Mode Light -> `neutral/600`, Mode Dark -> `neutral/400`
- `text/accent`: Mode Light -> `brand/500`, Mode Dark -> `brand/400`
- `border/subtle`: Mode Light -> `neutral/200`, Mode Dark -> `neutral/800`
- `border/focus`: `brand/500`

### 1.3 Spacing & Radius Scales
- `space/2` (2px), `space/4` (4px), `space/8` (8px), `space/12` (12px), `space/16` (16px), `space/24` (24px), `space/32` (32px), `space/48` (48px), `space/64` (64px)
- `radius/sm` (6px), `radius/md` (10px), `radius/lg` (16px), `radius/full` (9999px)

---

## 2. Auto Layout & Component Hierarchy

- **Rule 1:** NEVER leave unconstrained loose frames. Every container, card, modal, or page section MUST use Auto Layout with defined `Fill container` or `Hug contents`.
- **Rule 2:** Standard component states for interactive elements:
  - `Default`
  - `Hover`
  - `Pressed / Active` (with 1-2px vertical inward offset or subtle scale down)
  - `Focus` (visible 2px accent outline ring)
  - `Disabled` (35-40% opacity, non-interactive)

---

## 3. Jam Mockup Studio Staging Frames

When presenting designs, UI kits, or web flows inside Figma:
- **Canvas Setup:**
  - Create a presentation frame: `1920x1080` (16:9) or `2560x1440` (QHD).
  - Background color: Studio gray (`#f1f3f5` light mode) or deep obsidian (`#0b0c0e` dark mode).
- **Device Frame / Hardware Staging:**
  - Frame corner radius matching genuine hardware (e.g. iPhone 16 Pro = 55px radius, MacBook Pro = 16px top radius).
  - Multi-layer shadow structure:
    - Layer 1 (Ambient Occlusion): `Y: 4, Blur: 8, Spread: 0, Color: #000000 16%`
    - Layer 2 (Directional Key): `Y: 24, Blur: 48, Spread: -8, Color: #000000 12%`
    - Layer 3 (Floor Bounce): `Y: 48, Blur: 96, Spread: -16, Color: #000000 6%`
- **Specular Top Highlight:**
  - Inner shadow or top stroke: `Inside, 1px, #ffffff 15%` simulating an overhead studio softbox.

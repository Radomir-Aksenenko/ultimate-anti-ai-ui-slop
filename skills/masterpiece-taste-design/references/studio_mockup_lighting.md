# Jam Mockup Studio Lighting & Physical Realism Guide

Extracted from the aesthetic design patterns of *Джем Мокап (Jam Mockup)*.

---

## 1. Studio Lighting Formulas

In digital rendering and CSS/Figma mockups, flat single-layer shadows create artificial "computer-generated" slop. Real studio photography uses multi-source diffuse light.

### 1.1 Multi-Layer Shadow Formula (CSS)
```css
.studio-mockup-shadow {
  box-shadow:
    /* Layer 1: Contact shadow / Ambient occlusion directly under device */
    0 2px 4px rgba(0, 0, 0, 0.08),
    /* Layer 2: Tight directional shadow */
    0 8px 16px rgba(0, 0, 0, 0.06),
    /* Layer 3: Soft ambient floor dispersion */
    0 24px 48px -8px rgba(0, 0, 0, 0.05),
    /* Layer 4: Distant environment bounce */
    0 48px 80px -16px rgba(0, 0, 0, 0.03);
}
```

### 1.2 Dark Mode Studio Shadow Formula
On dark backdrops (`#0b0c0e` or `#121316`), pure black shadows become invisible. Instead:
- Use elevated background lightness (`#1c1d22`).
- Add a 1px micro-border with gradient opacity:
  `border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]`
- Add an ambient highlight gradient on the top surface.

---

## 2. Realistic Textures & Micro-Surfaces

- **Tactile Paper Texture:** For editorial and packaging mockups, integrate subtle grain (1-2% monochromatic SVG noise overlay) or CSS noise filter.
- **Glass Refraction & Caustics:** Use `backdrop-filter: blur(20px) saturate(160%)` accompanied by a light border (`border: 1px solid rgba(255, 255, 255, 0.18)`).
- **Metal Chassis (Brushed Titanium / Aluminum):** Anisotropic reflection gradients running along device bezels.

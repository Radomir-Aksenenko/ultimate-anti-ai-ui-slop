---
name: photoshop-mockups
description: Sub-skill for Photoshop layer architecture, studio mockup creation, physical lighting, smart objects, and analog textures. Engineered for lightweight/flash AI models.
---

# Sub-Skill: Photoshop Mockup Architecture & Studio Lighting

> For creating, structuring, or generating photorealistic design mockups and raster graphics.
> Reverse-engineered from commercial studio mockups (Jam Mockup) and production Photoshop workflows.

---

## THE 3-TIER LAYER FORMULA (MANDATORY IN ALL MOCKUPS)

Every photorealistic mockup MUST be constructed in three distinct physical tiers:

```
[Layer 3 - TOP]    Lighting & Specular Reflections (Blend: Screen, Opacity: 25-35%)
[Layer 2 - MIDDLE] Smart Object: Your Design Here (Blend: Multiply or Normal, Opacity: 90-100%)
[Layer 1 - BASE]   Physical Surface Texture (Wall, Paper, Concrete, Device chassis)
```

### 1. Base Layer (Physical Surface)
- Background resolution: Minimum 4000x3000 px, 300 DPI.
- Texture: Real physical material (concrete plaster, cotton paper, matte aluminum, wood grain).
- Color Tone: Desaturated neutral (`#E8ECEF` for light studio; `#111215` for dark studio).

### 2. Design Layer (Smart Object)
- Placed Layer: Embedded Smart Object allowing non-destructive replacement.
- Blending Mode:
  - **`Multiply` (Умножение):** Used for paper, posters, tote bags, fabrics, and cardboard. Allows underlying paper grain and texture to naturally bleed through the artwork.
  - **`Normal` at 90% Opacity:** Used for digital displays (iPhone, OLED screens) to preserve brightness while letting subtle screen depth show.

### 3. Lighting & Specular Reflection Layer
- Blending Mode: **`Screen` (Осветление)**.
- Opacity: 20% to 35% (never 100% or it washes out the design).
- Content: 45-degree directional softbox light gradient, window shadow caustics, or diagonal glass streak.

---

## ANALOG FILM & TEXTURE GRADING

To remove the "sterile AI computer render" look:
1. **Grain Overlay:** Add a solid gray layer (`#808080`), apply `Filter > Noise > Add Noise (2.5%, Gaussian, Monochromatic)`, set blend mode to **`Overlay`** at 35% opacity.
2. **Contact Shadows (Ambient Occlusion):**
   - Layer A: Tight contact shadow (black, blur 4px, opacity 40%) directly touching the ground.
   - Layer B: Distant diffused shadow (black, blur 40px, opacity 15%) offset along the light angle.

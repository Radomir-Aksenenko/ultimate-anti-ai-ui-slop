---
name: website-product-architecture
description: Sub-skill for architecting complete award-winning websites, landings, and product UI (in Figma or code). Engineered so lightweight/flash AI models understand that Figma tasks are real website design tasks.
---

# Sub-Skill: Website & Product Design Architecture (Figma & Web)

> **CORE PRINCIPLE FOR ALL AI MODELS:**
> When the user asks for "Figma design", "landing page", "website", or "screen design" — **this is NOT an abstract task of drawing boxes**.
> This is architecting a **complete, commercial, high-conversion digital product experience** with narrative pacing, spatial rhythm, typography hierarchy, and interactive states.

---

## 1. THE 8-SECTION WEBSITE NARRATIVE ARC (UNIVERSAL BLUEPRINT)

Every award-winning website (e.g. *Flowty, Truffle, Funner, Linear, Stripe*) follows a strict narrative progression. When designing in Figma or writing web code, follow this sequence:

```
[1. NAVIGATION]    Floating Dynamic Island Pill or Compact 64px Header (Single-line, pl-20)
       ↓
[2. HERO STAGE]    Asymmetric Split (60% value prop / 40% real 3D hardware or interactive UI)
       ↓
[3. SOCIAL PROOF]  Minimalist monochrome SVG logo strip (Simple Icons, NO industry labels)
       ↓
[4. VALUE HOOK]    Single bold editorial statement with architectural 1px visible grid lines
       ↓
[5. BENTO MATRIX]  Asymmetric Feature Showcase (7:5 split cell ratio with visual depth)
       ↓
[6. METRICS & SPEC] 2-column Spec Tiles with large display numbers (NO boring 20-row tables)
       ↓
[7. CONVERSION CTA] Focused, high-contrast closing card with single-line action button
       ↓
[8. FOOTER]        Clean 4-column sitemap, status badge, copyright, and legal links
```

---

## 2. THE 4 COMPOSITIONAL ARCHETYPES (PICK ONE PER PROJECT)

To prevent models from defaulting to the generic "centered hero + 3 cards" slop, pick one of these verified website archetypes from real references (*Ludochka Ref*):

### Archetype A: The 3D Product Stage (*Reference: Flowty, Truffle*)
- **Hero:** Left-aligned punchy headline (max 5 words) + right-aligned floating 3D device or interactive element.
- **Vibe:** Clean, focused, heavy negative space, dynamic scroll-linked transitions.
- **Palette:** Deep obsidian or crisp snow with a single razor-sharp accent (e.g. Electric Cobalt `#2563EB`).

### Archetype B: Architectural Grid & Structural Lines (*Reference: NEXOLA, Pattern Breaking*)
- **Layout:** Explicit 1px hairlines (`border-neutral-200` or `border-white/10`) dividing columns and rows.
- **Rhythm:** Alternating densities; numbers displayed in bold monospace (`font-mono text-4xl`).
- **Palette:** Monochromatic slate with high-voltage accent tags (Acid Lime or Pine Emerald `#096D23`).

### Archetype C: Category-Driven Functional Color (*Reference: Funner*)
- **Strategy:** Color is not mere decoration — distinct pastel tints categorize product families or features.
- **Components:** Rounded pill tags, bold display grotesque headlines, tactile cards with micro-borders.

### Archetype D: Cold Luxury & Glass Elevation (*Reference: AIR Business Center, Aino*)
- **Atmosphere:** Frosted glass cards (`backdrop-filter: blur(24px)`), silver-grey canvas (`#F1F3F5`), micro-specular highlights.
- **Typography:** Refined sans display (Geist Display or Cabinet Grotesk) with generous line-height on body text.

---

## 3. SECTION-BY-SECTION DESIGN LAWS

### 3.1 The Navigation Header
- **Desktop Height:** Fixed 64px to 72px (never eat more than 8% of the viewport).
- **Structure:** Logo left -> Nav links center (max 4-5 items) -> Action CTA right.
- **Single Line Guarantee:** Navigation items must NEVER wrap to a second line.

### 3.2 The Hero Section
- **Viewport Fit:** Entire hero MUST be visible above the fold on desktop (`min-h-[100dvh]` in CSS, `1440x900` frame in Figma).
- **Headline Budget:** Maximum 2 lines on desktop. Max 8 words total.
- **Subtext Budget:** Maximum 20 words and maximum 3 lines.
- **CTA Rule:** Maximum 1 primary button + 1 ghost/secondary button.
- **BANNED IN HERO:** Trust logos, bullet feature lists, and pricing tables belong in subsequent sections, NEVER crammed into the hero.

### 3.3 The Feature Bento Grid
- **Cell Ratio:** Asymmetric `7:5` or `8:4` split. Never 3 identical symmetrical squares.
- **Content:** Every bento cell must feature rich visual assets (micro-UI component, interactive slider, or studio device mockup), not just plain white cards with text.

### 3.4 The Conversion CTA Card
- **Layout:** Centered or asymmetric card with deep dark background and subtle ambient gradient.
- **CTA Label:** Single line, maximum 3 words (e.g. "Start Building", "Explore Platform").

---

## 4. FIGMA FRAME TRANSLATION SPECIFICATION

When producing or describing Figma deliverables for a website design:
1. **Root Desktop Frame:** `1440px` width (or `1920px` for widescreen), Auto Layout: `Vertical`, Gap: `0px`, Padding: `0px`.
2. **Page Section Frames:** Width: `Fill container`, Height: `Hug contents`, Top/Bottom Padding: `96px` to `128px`.
3. **Inner Content Containers:** Auto Layout: `Horizontal` or `Vertical`, Max-Width: `1200px` (or `1280px`), Margin: `Auto` (centered).
4. **Responsive Mobile Frame:** `390px` width (iPhone 16), Auto Layout: `Vertical`, Padding: `16px` or `24px`.

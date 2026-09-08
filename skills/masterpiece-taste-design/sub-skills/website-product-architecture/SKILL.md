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
- **BANNED IN NAVIGATION:** Pulsing green online status dots ("All systems operational", "Available for work"). This is a notorious AI slop cliche. If system status is essential, use clean, static typography: `[Status: Normal]` in a compact monospace tag.

### 3.2 The Hero Section
- **Viewport Fit:** Entire hero MUST be visible above the fold on desktop (`min-h-[100dvh]` in CSS, `1440x900` frame in Figma).
- **Headline Budget:** Maximum 2 lines on desktop. Max 8 words total.
- **Editorial Italic Accent:** Always consider setting 1 key concept word in a contrasting italic serif (e.g., `<h1 className="text-5xl font-bold font-sans">Zero latency <span className="font-serif italic font-normal text-neutral-300">rendering</span></h1>`). This single detail instantly shatters the generic AI look.
- **Subtext Budget:** Maximum 20 words and maximum 3 lines. Real technical numbers and capabilities, NO corporate buzzwords ("empower", "seamless").
- **Layer Bleed:** Visual asset (device or UI preview) must partially overlap background boundaries (`-mt-8 md:-mt-14 relative z-10`) to eliminate rigid sterile box framing.
- **CTA Rule:** Maximum 1 primary button + 1 ghost/secondary button.
- **BANNED IN HERO:**
  - Trust logos, bullet feature lists, and pricing tables belong in subsequent sections, NEVER crammed into the hero.
  - Floating corner pseudo-labels (`SYSTEM // v1.0`, `TELEMETRY ACTIVE`, fake uptime counters).
  - Giant pulsing status bubbles.

### 3.3 The Feature Bento Grid
- **Cell Ratio:** Asymmetric `7:5` or `8:4` split. Never 3 identical symmetrical squares.
- **Content:** Every bento cell must feature rich visual assets (micro-UI component, interactive slider, or studio device mockup), not just plain white cards with text.
- **No Pseudo-Table Clutter:** Never turn bento cells into multi-row pseudo-spreadsheets with horizontal hairlines.

### 3.4 The Conversion CTA Card
- **Layout:** Centered or asymmetric card with deep dark background and subtle ambient gradient.
- **CTA Label:** Single line, maximum 3 words (e.g. "Start Building", "Explore Platform").

---

## 4. THE 4 HARD BANS FOR FLASH/LIGHTWEIGHT MODELS (ANTI-SLOP GUARDRAILS)

1. **NO EGG CURVATURE ("Яишность закруглений"):**
   - Weak models alternate between two extremes: either brutalist 0px everywhere or giant cartoonish `rounded-full` egg-pills on every container.
   - Use non-standard, calibrated radii: `rounded-xl` (12px) or `rounded-2xl` (16px) for cards, and `rounded-lg` (8px) for buttons.
   - Apply the Concentric Law: $R_{\text{inner}} = \max(0, R_{\text{outer}} - \text{padding})$.

2. **NO PULSING ONLINE STATUS DOTS:**
   - Never inject pulsating green/emerald glowing dots with "All systems operational" or "Online" into headers, avatars, or hero sections unless building an actual DevOps incident status page.

3. **NO MICRO-LABEL CORNER SPAM:**
   - Never scatter useless decorative micro-tags in corners (`// PROTOCOL v2.4`, `LATENCY 0.12ms`, `SYS.MONITOR`). Every element must have real product utility.

4. **NO SPURIOUS SPREADSHEET TABULARITY:**
   - Do not divide sections into endless stacked rows with 1px border lines and miniature column headers. Use modern asymmetric bento cards, 2-column spec tiles, or editorial typography.

---

## 5. THE ANTI-AI SOUL INOCULATION (KILLING THE 50/50 "COOL BUT AI-ISH" PARADOX)

Why do AI designs often feel "50% cool, 50% generic slop"? Because LLMs algorithmically generate **uniform symmetry, single-font flatness, and abstract buzzwords**. Apply these three human design injections:

### 5.1 Typographic Friction & Editorial Contrast
Never use one font for the entire layout. Pair fonts with distinct genetic traits:
- **Rule:** Display Grotesk (e.g. `Cabinet Grotesk`, `Clash Display`, or `PP Neue Machina`) for Headlines + Clean Geometric Sans (`Geist`, `Plus Jakarta Sans`, `Inter`) for Body.
- **The Editorial Accent:** In the main H1 or value statement, set 1-2 words in an italic serif font:
  ```html
  <h1 class="text-6xl font-bold font-sans tracking-tight">
    Architecting <span class="font-serif italic font-normal text-neutral-300">uncompromising</span> digital taste.
  </h1>
  ```

### 5.2 Dynamic Visual Pacing (The Wave)
Never stack consecutive sections with the same height, padding, or 3-column cards. Follow the **Pacing Wave**:
1. **Air & Scale:** Hero has heavy negative space and 1 giant focal point.
2. **Dense Functional Matrix:** 7:5 Asymmetric Bento Grid packed with micro-UI details.
3. **Scale Breaker:** A single full-width editorial typographic quote or massive monospace metric (`text-7xl font-mono`).
4. **Action Focus:** High-contrast conversion card with dark tactile background.

### 5.3 Concrete Domain Copywriting (The Anti-Buzzword Filter)
Never use generic AI filler words. Translate abstract slop into concrete realities:
| Banned AI Buzzword Phrase | Real Human Engineering Replacement |
|---|---|
| "Transform your workflow with intelligent AI" | "Render 120fps raytraced frames with 0.4ms latency" |
| "Seamless collaboration for modern teams" | "Real-time CRDT sync with local-first SQLite persistence" |
| "Empowering next-generation digital products" | "Calibrated design systems exported directly to CSS & Figma variables" |
| "All-in-one platform built for efficiency" | "Zero-config asset pipelines from raw PSD to production SVG" |

---

## 6. FIGMA FRAME TRANSLATION SPECIFICATION

When producing or describing Figma deliverables for a website design:
1. **Root Desktop Frame:** `1440px` width (or `1920px` for widescreen), Auto Layout: `Vertical`, Gap: `0px`, Padding: `0px`.
2. **Page Section Frames:** Width: `Fill container`, Height: `Hug contents`, Top/Bottom Padding: `96px` to `128px`.
3. **Inner Content Containers:** Auto Layout: `Horizontal` or `Vertical`, Max-Width: `1200px` (or `1280px`), Margin: `Auto` (centered).
4. **Responsive Mobile Frame:** `390px` width (iPhone 16), Auto Layout: `Vertical`, Padding: `16px` or `24px`.



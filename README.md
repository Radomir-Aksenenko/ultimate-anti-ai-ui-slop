# ⚡ Ultimate Anti-AI UI Slop & Human-Craft Design System (v9.0)

> **The Universal System Prompt, Design Tokens, and Ruleset that forces ANY AI (ChatGPT, Claude, Cursor, Copilot, Gemini, Grok, DeepSeek, v0) to output production-grade, human-engineered Enterprise web applications (Stripe / Linear / Apple / Vercel / Bloomberg standard) without "AI smells" across ANY industry domain.**

---

## 🚀 Quick Start: How to Feed to Your AI

### Option 1: Copy-Paste into Chat / Custom Instructions
Simply copy the entire contents of **[`SKILL.md`](./SKILL.md)** and paste it into:
* **System Prompt / Custom Instructions** (ChatGPT, Claude Projects, Cursor `.cursorrules`, Windsurf, Copilot, v0)
* Or directly at the beginning of your prompt:  
  *«Adopt the following design system rules: [paste SKILL.md] Now build ...»*

### Option 2: Clone & Use Tokens in Your Project
```bash
git clone https://github.com/Radomir-Aksenenko/ultimate-anti-ai-ui-slop.git
```
Include `tokens.css` into your CSS bundle for instant access to the 6 curated Google Fonts archetypes and Swiss micro-radii tokens.

---

## 🎯 The Core Problem: Why AI Web Designs Feel "AI-ish"

When users look at AI-generated sites and say *"It looks okay, but it feels like AI made it"*, they are reacting to 8 subconscious **AI Smells (Маркеры нейросети)**:

| AI Slop Anti-Pattern 🚫 | Why LLMs Do It | The Human Senior Solution (The Inversion) ✅ |
| :--- | :--- | :--- |
| **1. Bubble UI & Inflatable Radii** | Applies `24px–48px` curves and `rounded-full` pills everywhere (Duolingo effect). | **Swiss Micro-Radii (4px–8px Max).** Strict geometry: `4px` tags/inputs, `6px` buttons, `8px` max outer shells. Zero pills. |
| **2. Fake Tactile Gimmicks** | Injects SVG noise filters (`opacity: 0.03`) and `@keyframes sheen` button sweeps. | **Zero Noise. Zero Gimmicks.** Crystal-clean solid canvas, subtle 1px hairline borders (`rgba(15,23,42,0.08)`). |
| **3. Typography Monotony or Serif Chaos** | Uses uncalibrated Inter everywhere or injects random *Playfair italic* into Sans H1s. | **6 Curated Google Fonts Archetypes.** High-character display grotesks paired with tabular mono (`tabular-nums`). |
| **4. Bento-Spam & Monotonous 3-Card Grids** | Stacks identical `grid-cols-3` cards with stock circular icons from top to bottom. | **Universal Layout Rhythm & Alternation.** Alternates between Split-View Inspectors, Parametric Matrices, and Spec Sheets. |
| **5. Toy Window 'Traffic Lights'** | Puts red/yellow/green Mac OS dots on preview containers. | **Authentic Enterprise Context.** Professional Breadcrumbs, Environment Badges, and live WebSocket telemetry. |
| **6. Emoji & Icon Spam** | Puts `🚀`, `✨`, `⚡`, `💡` in headings, badges, and CTAs. | **Strict Vector Precision.** Monoline 1.5px SVG vectors (`stroke="currentColor"`). Zero emojis in UI. |
| **7. Corporate AI Fluff & Buzzwords** | "Revolutionary platform unlocking the full potential of next-gen workflows". | **Factual Domain Reality (Humanizer-Pro 2.0).** "SU-214 • Gate B12 • p99 latency 14ms • HRC 62 alloy tolerance ±0.002mm • 100% compliance with ISO 27001". |
| **8. Static Mockup Illusions** | Colored rectangles pretending to be software. | **Real Working Browser Micro-Apps.** Master-detail split inspectors, search filters, and working ⌘K modals. |

---

## 📐 The Swiss Micro-Radii Scale

```css
:root {
  --r-xs: 2px;     /* Checkboxes, micro status indicators */
  --r-sm: 4px;     /* Tags, chips, inputs, search fields, segmented controls */
  --r-md: 6px;     /* Action buttons, cockpit cards, dropdown popovers */
  --r-lg: 8px;     /* Outer shells, data tables, main containers */
  --r-xl: 10px;    /* Modals (absolute maximum ceiling) */
  --r-pill: 4px;   /* BANNED 9999px pills — use technical 4px tags */
}
```

---

## 🔤 Curated Google Fonts Typography Engine (6 Archetypes)

All pairs support **Cyrillic + Latin** and tabular figures (`font-variant-numeric: tabular-nums`):

1. **Modern High-Tech (Linear / Raycast / Vercel)**: `Plus Jakarta Sans` (600..800) + `JetBrains Mono` (500)
2. **Swiss Brutalism (Dieter Rams / Basel)**: `Space Grotesk` (600..700) + `Manrope` + `Space Mono`
3. **FinTech & Infrastructure (Stripe / Ramp)**: `Outfit` (600..800) + `Inter` + `Fira Code`
4. **DeepTech & Hardware AI (Scale AI / OpenAI)**: `Unbounded` (600..800) + `Onest` + `JetBrains Mono`
5. **Editorial Craft (Notion / Pitch)**: `Manrope` (700..800) + `Onest` + `JetBrains Mono`
6. **Enterprise Core & Gov (IBM / SAP)**: `IBM Plex Sans` (600..700) + `IBM Plex Mono` (500)

---

## 🏛️ The 7 Universal Section Archetypes

1. **Section 1: Hero & Live Action Canvas** (Asymmetric Split 60/40 + Live Action Cockpit)
2. **Section 2: Core Engine & Master-Detail Split Inspector** (Entity list + Live property drawer)
3. **Section 3: High-Density Parametric Matrix** (Data grid with instant filter, count, and export)
4. **Section 4: Technical Specifications & Class Matrix** (Segmented spec sheet with verified physical units)
5. **Section 5: Institutional Proof & Compliance Strip** (4-column monochromatic standards grid)
6. **Section 6: Native Domain Commercial Engine** (Natural pricing model: class matrix, quote slider, volume tiers)
7. **Section 7: Enterprise Quad-Column Footer** (System status ping, telemetry, and legal structure)

---

## 📂 Repository Contents

* **[`SKILL.md`](./SKILL.md)** — The master universal prompt / skill instructions for LLMs.
* **[`tokens.css`](./tokens.css)** — Production CSS design tokens (6 Google Fonts themes, Light/Dark WCAG AAA palettes, Swiss Micro-Radii).
* **[`anti-patterns.md`](./anti-patterns.md)** — Detailed 7-layer visual comparison guide (AI Slop vs Human Senior Craft).
* **[`index.html`](./index.html)** — Live reference showcase demonstrating the Swiss Micro-Radii and Google Fonts dynamic switching.

---

## 📜 License

MIT License — Feel free to use in your commercial projects, prompts, and design systems.  
Crafted for engineers and designers who demand high-fidelity web products.

# ⚡ Ultimate Anti-AI UI Slop & Human-Craft Design System (v8.6)

> **The Universal System Prompt, Design Tokens, and Ruleset that forces ANY AI (ChatGPT, Claude, Cursor, Copilot, Gemini, Grok, DeepSeek, v0) to output production-grade, human-engineered Enterprise web applications (Stripe / Linear / Apple / Vercel standard) without "AI smells".**

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

| AI Slop Anti-Pattern 🚫 | Why LLMs Do It | The Human Senior Solution ✅ |
| :--- | :--- | :--- |
| **1. Bubble UI & Inflatable Radii** | Applies `24px–48px` curves and `9999px` pills everywhere (Duolingo effect). | **Swiss Micro-Radii (4px–8px Max).** Strict geometry: `4px` tags/inputs, `6px` buttons, `8px` max outer shells. Zero pills. |
| **2. Fake Tactile Gimmicks** | Injects SVG noise filters (`opacity: 0.03`) and `@keyframes sheen` button sweeps. | **Zero Noise. Zero Gimmicks.** Crystal-clean solid canvas, subtle 1px hairline borders (`rgba(15,23,42,0.08)`). |
| **3. Typography Monotony or Serif Chaos** | Uses uncalibrated Inter everywhere or injects random *Playfair italic* into Sans H1s. | **6 Curated Google Fonts Archetypes.** High-character display grotesks paired with tabular mono (`tabular-nums`). |
| **4. Symmetrical Card-itis / Bento-Spam** | 6 identical floating white cards with circular icons and 2 sentences of empty text. | **Asymmetric Functional Architecture.** Live interactive consoles, data registers, and contextual side inspectors. |
| **5. Toy Window 'Traffic Lights'** | Puts red/yellow/green Mac OS dots on preview containers. | **Authentic Enterprise Context.** Professional Breadcrumbs, Environment Badges, and live WebSocket telemetry. |
| **6. Emoji & Icon Spam** | Puts `🚀`, `✨`, `⚡`, `💡` in headings, badges, and CTAs. | **Strict Vector Precision.** Monoline 1.5px SVG vectors (`stroke="currentColor"`). Zero emojis in titles. |
| **7. Corporate AI Fluff & Buzzwords** | "Revolutionary platform unlocking the full potential of next-gen workflows". | **Factual Domain Reality (Humanizer-Pro).** "Synchronizes 120 teacher rosters in real-time. Zero room overlap, offline SQLite sync." |
| **8. Static Mockup Illusions** | Colored rectangles pretending to be software. | **Real Working Browser Micro-Apps.** Clickable tabs, live conflict resolvers, search filters, and ⌘K modals. |

---

## 📐 The Swiss Micro-Radii Scale

```css
:root {
  --r-xs: 2px;     /* Checkboxes, micro status indicators */
  --r-sm: 4px;     /* Tags, chips, inputs, schedule cards, segmented controls */
  --r-md: 6px;     /* Action buttons, cockpit cards, dropdown popovers */
  --r-lg: 8px;     /* Outer shells, data tables, main containers */
  --r-xl: 10px;    /* Modals (absolute maximum ceiling) */
  --r-pill: 4px;   /* BANNED 9999px pills — use technical 4px tags */
}
```

---

## 🔤 Curated Google Fonts Typography Engine (6 Archetypes)

All pairs support **Cyrillic + Latin** and tabular figures (`font-variant-numeric: tabular-nums`):

1. **Modern High-Tech (Raycast / Vercel)**: `Plus Jakarta Sans` (600..800) + `JetBrains Mono` (500)
2. **Swiss Brutalism (Linear / Dieter Rams)**: `Space Grotesk` (600..700) + `Manrope` + `Space Mono`
3. **FinTech & Infrastructure (Stripe / Ramp)**: `Outfit` (600..800) + `Inter` + `Fira Code`
4. **DeepTech & AI (Scale AI / OpenAI)**: `Unbounded` (600..800) + `Onest` + `JetBrains Mono`
5. **Editorial Craft (Notion / Pitch)**: `Manrope` (700..800) + `Onest` + `JetBrains Mono`
6. **Enterprise Core & Gov (IBM / SAP)**: `IBM Plex Sans` (600..700) + `IBM Plex Mono` (500)

---

## 📂 Repository Contents

* **[`SKILL.md`](./SKILL.md)** — The master skill / prompt instruction document for LLMs.
* **[`tokens.css`](./tokens.css)** — Production CSS tokens (6 Google Fonts themes, Light/Dark WCAG AAA palettes, Micro-Radii).
* **[`anti-patterns.md`](./anti-patterns.md)** — Detailed reference comparing AI Slop vs Enterprise Human Craft.
* **[`index.html`](./index.html)** — Live reference showcase: *Велвар — Enterprise Schedule & Room Orchestration System* featuring a live Google Fonts switcher, asymmetric cockpit, and SanPiN inspector.

---

## 📜 License

MIT License — Feel free to use in your commercial projects, prompts, and design systems.
Crafted for engineers and designers who demand high-fidelity web products.

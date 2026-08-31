---
name: enterprise-human-craft
description: "Universal Enterprise & Human-Craft Design System (v8.6). Guarantees authentic, production-grade, human-architected UI/UX from ANY LLM tier (from Flash models to Opus/Pro). Banned all AI smells: no noise overlays, no gimmick shine buttons, no random serif italics, no empty bento cards, no marketing fluff. Enforces Swiss Micro-Radii (4px–8px max, zero bubble/pill UI), curated Google Fonts typography pairings, 8pt spatial grid, asymmetric functional density, deep interactive domain tools (cockpits, tables, inspectors, heatmaps), and factual human copy (Humanizer-Pro)."
version: "8.6.0"
author: "Human Senior Design & Architecture Alliance"
tags:
  - enterprise-ui
  - design-system
  - swiss-micro-radii
  - google-fonts-typography
  - anti-ai-slop
  - human-craft
  - frontend-engineering
  - linear-craft
  - stripe-standards
  - vercel-clean
  - shadcn-ui
---

# Enterprise Human-Craft Master System (v8.6)
### The Universal Blueprint for Crafting Human-Senior Grade Digital Products

> **THE SUPREME DIRECTIVE**:
> **Never build decorative AI toys, 'bubble-pill' templates, or 'Dribbble-bait' mockups. Deliver calm, confident, ultra-functional, Enterprise-grade web products that feel engineered by a Principal Frontend Architect and a Staff Product Designer at Stripe, Linear, Apple, Vercel, or GitHub.**

---

## 0. THE CORE DIAGNOSIS: WHY AI WEBSITES FEEL "AI-ISH"

When users look at an AI-generated site and say *"It looks pretty, but it feels AI-ish"*, they are reacting to 8 specific subconscious **AI Smells (Маркеры нейросети)**:

| The AI Smell 🚫 | Why LLMs Do It | The Human Senior Solution ✅ |
| :--- | :--- | :--- |
| **1. Hyper-Rounded 'Bubble' Radii & Pills** | Applies `border-radius: 24px–48px` to containers and `9999px` pills everywhere, making the UI look like a mobile toy (Duolingo effect). | **Swiss Micro-Radii (4px–8px Max).** Strict geometric discipline: `4px` for tags/inputs/cards, `6px` for buttons, `8px` max for main shells. Zero 9999px pills. Shared 1px hairline grid dividers. |
| **2. Fake Tactile Gimmicks** | Overlays SVG noise filters, adds `@keyframes sheen` moving gradients across buttons. | **Zero Noise. Zero Gimmicks.** Crystal-clean canvas, subtle 1px hairline borders (`rgba(0,0,0,0.08)`), top edge bevel (`inset 0 1px 0 rgba(255,255,255,0.15)`). |
| **3. Typography Boredom or Serif Chaos** | Uses default uncalibrated Inter everywhere or injects random `Playfair italic` in Sans H1s. | **Curated Google Fonts Archetypes.** Precision pairing of high-character grotesque + tabular mono with exact optical tracking. |
| **4. Symmetrical Card-itis / Bento-Spam** | 6 identical floating white cards on a grey background with circular icons and 2 lines of text. | **Asymmetric Functional Architecture.** Live interactive consoles, real data tables, split-view panels, metric streams, and inspector sidebars. |
| **5. Toy-like Window 'Traffic Lights'** | Puts red/yellow/green Mac OS circles on every preview div. | **Authentic Enterprise Context.** Professional Breadcrumbs, Environment Badges, and Live Sync telemetry indicators. |
| **6. Emoji & Icon Spam** | Puts `🚀`, `✨`, `⚡`, `💡` in headings, badges, and buttons. | **Strict Vector Precision.** Only 1.5–1.75px stroke SVG icons (Lucide, Radix, Phosphor) using `stroke="currentColor"`. Zero emojis in headings/CTAs. |
| **7. Marketing Fluff & Vague Claims** | "Revolutionary platform unlocking the full potential of next-gen workflows". | **Factual Technical Reality.** "Synchronizes 120 teacher rosters in real-time. Full compliance with SanPiN 2.4.3648-20, zero room overlap, offline SQLite sync." |
| **8. Static Mockup Illusions** | Draws colored rectangles with drop shadows pretending to be an app. | **Real Working Browser Micro-App.** Live clickable tabs, search/filter inputs, conflict resolution toggles, sortable columns, and working modals. |

---

## 1. THE SWISS MICRO-RADII SYSTEM (Precision Geometric Discipline)

Enterprise software (Linear, Stripe, Bloomberg, GitHub, Vercel, VS Code) does not float in huge rounded bubbles. It is built with **orthogonally disciplined, micro-radius geometry and shared 1px hairline borders**:

```css
:root {
  --r-xs: 2px;     /* Micro indicators, checkboxes */
  --r-sm: 4px;     /* Chips, tags, inputs, schedule cards, segmented pills */
  --r-md: 6px;     /* Action buttons, cockpit cards, dropdowns */
  --r-lg: 8px;     /* Outer shells, data tables, main containers */
  --r-xl: 10px;    /* Modals, absolute maximum ceiling */
  --r-pill: 4px;   /* Technical rectangular tag instead of round pill */
}
```

### The 4 Laws of Enterprise Corner Geometry:
1. 🚫 **Absolute Ban on `> 10px` Radii**: Never use `rounded-2xl` (16px), `rounded-3xl` (24px+), or `rounded-full` on cards/containers.
2. 🚫 **Absolute Ban on 9999px Pill Containers**: Tags, status badges, and switches must be sharp `4px` rectangles with 1px hairline borders.
3. 🚫 **No Nested Double-Cushioning ('Sandwich' Borders)**: Do not wrap a rounded shell inside another padded rounded box with a 10px gap. Render single flush monolithic panels with internal hairline dividers.
4. ✅ **Concentric Orthogonal Grid**: When elements are nested, $R_{inner} = \max(0, R_{outer} - padding)$.

---

## 2. THE GOOGLE FONTS CURATED TYPOGRAPHY ENGINE (6 Brand Archetypes)

Pair curated display grotesks with precision monospace layers from Google Fonts. All pairs support **Cyrillic + Latin** and tabular figures (`font-variant-numeric: tabular-nums`).

### Archetype 1: Modern High-Tech & Precision Engineering (Raycast / Vercel vibe)
* **Display & Headings**: `Plus Jakarta Sans` (wght 600..800, tracking -0.03em)
* **UI & Body**: `Plus Jakarta Sans` / `Inter` (wght 400..500)
* **Tabular & Code**: `JetBrains Mono` (wght 500..600)

### Archetype 2: Swiss Brutalism & Industrial Architecture (Linear / Dieter Rams vibe)
* **Display & Headings**: `Space Grotesk` (wght 600..700, tracking -0.035em)
* **UI & Body**: `Manrope` (wght 400..600)
* **Tabular & Code**: `Space Mono` (wght 400..700)

### Archetype 3: FinTech & Global Infrastructure (Stripe / Ramp vibe)
* **Display & Headings**: `Outfit` (wght 600..800, geometric modern clarity)
* **UI & Body**: `Inter` / `Outfit` (wght 400..500)
* **Tabular & Code**: `Fira Code` (wght 500..600)

### Archetype 4: DeepTech & AI Intelligence (Scale AI / Futuristic B2B)
* **Display & Headings**: `Unbounded` (wght 600..800, heavy geometric tech)
* **UI & Body**: `Onest` (wght 400..600, ultra-clean humanist grotesk)
* **Tabular & Code**: `JetBrains Mono` (wght 500..600)

### Archetype 5: Editorial Craft & Enterprise Operations (Notion / Pitch vibe)
* **Display & Headings**: `Manrope` (wght 700..800, warm, solid, authentic)
* **UI & Body**: `Onest` (wght 400..500)
* **Tabular & Code**: `JetBrains Mono` (wght 500)

### Archetype 6: Strict Enterprise & Gov Standard (IBM / SAP modern standard)
* **Display & Headings**: `IBM Plex Sans` (wght 600..700, authoritative, precise)
* **UI & Body**: `IBM Plex Sans` (wght 400..500)
* **Tabular & Code**: `IBM Plex Mono` (wght 500)

---

## 3. THE 25 HARD TABOOS (ZERO AI-SLOP LAWS)

When generating code, the following 25 anti-patterns are **STRICTLY FORBIDDEN**:

1. 🚫 **NO Huge 16px-48px Rounded Cards & 9999px Pills**: Restrict radii to `4px - 8px` max. No inflatable bubble UI.
2. 🚫 **NO Nested Double-Cushion Wrappers**: Single-layer structural shells with crisp 1px borders.
3. 🚫 **NO SVG Noise Overlays**: Never put `filter="url(#noise)"` or `<div class="noise-layer">` over the page.
4. 🚫 **NO Moving Sheen Animations**: Never use `@keyframes sheen` or fake shimmering gradient sweeps across buttons.
5. 🚫 **NO Serif Italic In Sans Headings**: Never inject `<em class="font-serif italic">` into a clean sans-serif H1.
6. 🚫 **NO Emoji Anywhere in UI**: No `🚀`, `✨`, `⚡`, `🎯`, `💡`. Use strictly 1.5px monoline SVGs.
7. 🚫 **NO Toy Traffic Light Dots**: Never draw red/yellow/green Mac OS dots. Use real breadcrumbs and status chips.
8. 🚫 **NO Left-Border Color Strips**: No `border-l-4 border-blue-500` card hacks.
9. 🚫 **NO Empty Bento Boxes**: Every grid cell must contain high-density operational data or a live mini-tool.
10. 🚫 **NO AI Purple / Lila Neon**: No `#6366F1` or `#8B5CF6` neon glow blobs. Use pristine slate, navy, or deep onyx.
11. 🚫 **NO Pure Black on Pure White**: No `#000000` text on `#FFFFFF` with `#2563EB` links without refined tokens.
12. 🚫 **NO Vague Marketing Text**: Never write 'Experience the power of revolutionizing your synergy'.
13. 🚫 **NO Wrapping Button Text**: Buttons must be 1–3 precise words on a single line.
14. 🚫 **NO Fake div screenshots**: No colored rectangles pretending to be software. Render real HTML components.
15. 🚫 **NO Disabled Keyboard Focus**: Always include `focus-visible:ring-2 focus-visible:ring-offset-2`.
16. 🚫 **NO Slow Animations**: All transitions must be `140ms–200ms` with `cubic-bezier(0.16, 1, 0.3, 1)`.
17. 🚫 **NO Eyebrow Badge Spam**: Maximum 1 eyebrow chip per major section (max 2–3 on entire page).
18. 🚫 **NO Misaligned Numbers**: All pricing, timestamps, room codes, and stats must use `font-mono tabular-nums`.
19. 🚫 **NO Broken Viewports**: Never lock viewport to `h-screen`. Always use `min-h-[100dvh]`.
20. 🚫 **NO Missing Dark Mode**: Every component must gracefully toggle between light and dark palettes.
21. 🚫 **NO 1-Star / Fake Reviews**: No 'John Doe, 5 stars, amazing app'. Use verified role + organization badges.
22. 🚫 **NO Dead Links / Non-functional Tabs**: Every tab in preview sandboxes must have JS click handlers that switch views.
23. 🚫 **NO Unstyled Scrollbars**: Custom scrollbars with thin 4px subtle tracks.
24. 🚫 **NO Huge Empty Footers**: Footers must have structured columns, system status indicator, copyright, and language/theme toggle.
25. 🚫 **NO Layout Jitter on Hover**: Never change layout dimensions or border-widths on hover. Use subtle opacity/background/shadow changes.

---

## 4. HUMANIZER-PRO: LIVING FACTUAL COPYWRITING (RU / EN)

### The 20 Hard Bans on Bureaucratic / AI Copy
1. **«Является / выступает в качестве»** -> Тире или активный глагол (*«Сервис синхронизирует...»*).
2. **«В современном мире / На сегодняшний день»** -> Сразу к факту.
3. **«Стоит отметить / Необходимо подчеркнуть»** -> Удалять полностью.
4. **«Данный / указанный»** -> *«Этот»* или опустить.
5. **«Осуществление / процесс реализации»** -> Глагол (*«чтобы настроить»*).
6. **«Бесшовный / интуитивно понятный»** -> Точное свойство (*«без перезагрузки страницы»*, *«за 2 клика»*).
7. **«Революционный / инновационный / передовой»** -> Удалять самолюбование.
8. **«Раскрыть потенциал / выйти на новый уровень»** -> Измеримый результат (*«сокращает время сборки расписания с 2 недель до 40 минут»*).
9. **«Комплексный подход / синергия»** -> Назвать конкретные шаги.
10. **«Позволяет вам / дает возможность»** -> Глагол действия (*«Вы получаете...»*).
11. **«Не просто X, а Y»** -> Убирать клише.
12. **«Широкий спектр / многообразие»** -> Назвать 2–3 примера.
13. **«Как известно / ни для кого не секрет»** -> Сразу факт.
14. **«Оказывает положительное влияние»** -> *«Ускоряет / снижает затраты»*.
15. **«Ключевой особенностью является»** -> *«Главное: ...»*.
16. **«С целью / во избежание»** -> *«Чтобы / чтобы не»*.
17. **«Псевдо-сократические вопросы»** -> Писать прямо.
18. **«Псевдо-терапия»** -> Спокойное профессиональное уважение.
19. **«Триады-клише»** (*«быстрый, надежный, мощный»*) -> Одно точное слово.
20. **«Фейковая статистика»** -> Только реальные проверяемые данные.

---

## 5. PRE-FLIGHT COMPLIANCE AUDIT GATE

Before outputting code, run this 8-point checklist:
- [ ] **1. Zero AI Tells**: No noise SVG overlay, no shiny button sweeps, no serif italics in sans H1, no emoji, no toy window dots.
- [ ] **2. Swiss Micro-Radii Applied**: All radii strictly `4px–8px` max. No 9999px pills, no double-cushioning.
- [ ] **3. Curated Google Fonts Pair Applied**: Selected from 6 archetypes with tabular mono layer.
- [ ] **4. Enterprise Palette Applied**: Clean Slate, Titanium, Azure, or Emerald palette with WCAG AAA contrast.
- [ ] **5. Strict 8pt Grid & Proportions**: All margins/paddings follow multiples of 4/8px.
- [ ] **6. Asymmetric Living Cockpit**: The Hero contains a working, clickable browser application demo with live inspector/heatmap.
- [ ] **7. High-Density Data Tables**: Tables include real domain data, sorting, statuses, category filters, and monospace values.
- [ ] **8. Humanizer-Pro Text Clean**: 20 AI clichés eradicated. Zero fluff, 100% factual domain authority.
# Anti-Patterns Guide: AI Slop vs Domain-Calibrated Human Craft (v11.0)

This reference guide details why standard AI-generated code looks artificial, childish, and unrefined, AND why naive attempts to fix it result in **over-engineered "IT-devtools spam" or "DOS-box angularity"** on ordinary websites. All solutions are benchmarked against **20 Non-AI Masterwork Systems** (Stripe, Linear, Apple, Bloomberg, GitHub, Gov.uk, Figma, McMaster-Carr, Ableton, Porsche, Flightradar24, Datadog, Basecamp, Substack, Raycast, A24, PostHog, Vercel, IKEA, Wikipedia).

---

## 1. Border-Radii & Container Geometry (The Bubble vs The Brick)

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **Bubble UI & Omni-Rounding**: Applying `24px - 48px` or `rounded-full` pills everywhere. The whole UI looks like an inflatable toy (Duolingo effect). | **Calibrated Natural Geometry**: Strict geometric discipline: **`6px–8px`** for buttons and inputs, **`10px–12px`** for content cards, **`16px`** for modals. Zero 9999px pills. Tactile and soft without cartoonish balloons. | **Stripe / Pitch / Uniqlo** |
| **Accidental 0px DOS Boxiness**: Stripping all radii to `0px` in an over-correction, making a bakery, clinic, or clothing brand look like a brutalist 90s DOS spreadsheet. | **Balanced Domain Radii**: `0px` is used strictly for data tables, split dividers, and raw grids; consumer and service cards enjoy natural, refined `8px–14px` curvatures. | **Apple / IKEA / Substack** |
| **Nested Rounded Wrappers ('Sandwich' Borders)**: Wrapping a `rounded-2xl` shell inside another `rounded-3xl` container with 10px padding. | **Flush Monolithic Containers**: Single-layer structural shells with crisp 1px borders and internal hairline grid dividers. Concentric geometry: $R_{inner} = \max(0, R_{outer} - padding)$. | **GitHub / Linear / VS Code** |

---

## 2. DevTools Contamination vs Domain Authenticity (Гипер-айтишность)

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **DevTools Bleed in Consumer Web**: Dumping terminal build loggers, raw JSON drawers, commit hash badges, and WebSocket tickers onto a bakery, beauty salon, or law firm website. | **Authentic Business Artifacts**: True domain-native components: visual menus with real ingredients and allergens, appointment date/time reservation calendars, verified doctor/lawyer credentials, and physical address passports with opening hours. | **Monocle / Uniqlo / Gov.uk** |
| **Micro-Label & Metadata Clutter**: Spamming `[STATUS: OK]`, `[CLUSTER-01]`, `[PING: 12ms]`, `[ID: #892]` above every heading on ordinary lifestyle or retail pages. | **Visual Breathing Room (Zero-Fat Layout)**: Clean typography, concise headlines, and generous whitespace. Metadata is only used when genuinely helpful to the customer. | **Substack / NYT / Apple** |

---

## 3. Typography & Font Pairing

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **Typography Monotony (Inter-Only Everywhere)**: Using default uncalibrated Inter with no optical tracking on every single project, making every site look like a clone. | **Curated Google Fonts Archetypes**: Precision matching of font personality to domain (`Plus Jakarta Sans` for DevTools, `Space Grotesk` for Swiss Grid, `Outfit` for FinTech, `Unbounded` for Hardware, `Manrope` for Lifestyle/Editorial, `IBM Plex` for Banking/Gov). | **Raycast / Pitch / Stripe** |
| **Serif Italic Injection**: Injects Playfair Display or Georgia italic into the middle of a sans-serif H1 ("Беспосадочные *перелеты по миру*"). | **Mono-Family Purity & Tabular Figures**: One master geometric grotesk. Tight negative optical tracking (`letter-spacing: -0.035em`) on large headings and `tabular-nums` on all numbers. | **Apple / Bloomberg / A24** |

---

## 4. Surfaces & Ambient Depth

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **SVG Noise Overlay**: Stretches a 0.03 opacity fractal noise SVG over the whole page (`fixed inset-0 pointer-events-none`). Looks dirty and amateurish. | **Pristine Canvas & Hairline Bevel**: Crystal-clean solid background (`#F8FAFC` light / `#090B0E` dark). Zero noise. Micro-bevel on top edge (`inset 0 1px 0 rgba(255,255,255,0.15)`). | **Stripe / Linear** |
| **Neon Glow Spheres**: Giant blurred purple or indigo blobs floating in background (`bg-gradient-to-tr from-purple-500 to-indigo-500 blur-3xl`). | **Directional Ambient Lighting**: High-contrast, calm surface panels with clean monochrome slate/onyx hierarchy and warm, tasteful accent tones. | **Porsche / Leica / Gov.uk** |

---

## 5. Section Architecture & Layout Rhythm

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **Bento-Spam & Monotonous 3-Card Grids**: Stacking identical `grid-cols-3` cards from top to bottom (Features -> Bento -> Pricing -> Reviews). | **Universal Layout Alternation**: Every section changes its structural format: Asymmetric 60/40 Split -> Master-Detail Inspector / Visual Showcase -> Parametric Matrix / Menu -> Spec Sheet -> Proof Strip. | **Linear / Figma / Cloudflare** |
| **Toy Window Traffic Lights**: Slapping red, yellow, green Mac OS circles on every container div pretending it is an app window. | **Authentic Breadcrumbs & Clear Context**: Real breadcrumb paths, active filtering chips, and clear status tags. | **Datadog / PostHog / Vercel** |

---

## 6. Commercial & Parametric Density

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **Forced Generic SaaS Cards on Non-SaaS**: Shoving a "Monthly/Annual $19/$49/$99" subscription box onto an airline, hardware store, restaurant, or clinic website. | **Native Economic Engine**: Pricing format matches the true commercial model: Menu items with gram weights for dining, Fare Matrix for travel, Cost Estimator for architecture, Volume Tiers for supply. | **IKEA / McMaster-Carr / Monocle** |
| **Fluff Icons without Specs**: Empty circle icons with 2 lines of marketing prose. | **Parametric Matrix with Physical Units**: Monospace columns with exact tolerances, weights, dimensions ($mm$, $kg$, $g$, $ms$, $kW$, $Hz$, $₽$, $\$$). | **McMaster-Carr / Apple Specs** |

---

## 7. Copywriting & Factual Depth (Humanizer-Pro 3.0)

| AI Slop Anti-Pattern 🚫 | Domain-Calibrated Human Craft Solution ✅ | Non-AI Benchmark System |
| :--- | :--- | :--- |
| **Marketing Fluff & Bureaucracy**: "Инновационный комплексный сервис, раскрывающий потенциал синергии ваших путешествий". | **Tangible Domain Reality**: "Выпекаем круассаны на сливочном масле 82.5% каждое утро к 07:30. Зерно свежей обжарки из Эфиопии. Покровка, 12." | **Basecamp / Monocle / NYT** |
| **Fake 5-Star Reviews**: "Иван И., 5 звезд: Отличный сайт, все летает!". | **Institutional Proof Matrix**: Сертификаты ISO, лицензии Минздрава, аккредитации, точные годы непрерывной практики и реальные клиентские гарантии. | **Gov.uk / Stripe / Bloomberg** |
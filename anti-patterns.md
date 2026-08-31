# Anti-Patterns Guide: AI Slop vs Enterprise Human Craft (v9.0)

This reference guide details why standard AI-generated code looks artificial, childish, and unrefined, contrasted against production-grade **Enterprise Human Craft** (Stripe, Linear, Apple, Vercel, Bloomberg).

---

## 1. Border-Radii & Container Geometry (The Bubble Syndrome)

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Bubble UI & Omni-Rounding**: Applying `24px - 32px - 48px` or `rounded-2xl / rounded-3xl` to outer containers and `rounded-full` pills everywhere. The whole UI looks like an inflatable toy or children's game (Duolingo effect). | **Swiss Micro-Radii & Monolithic Grid**: Strict geometric discipline: **`4px - 6px`** for interactive controls, **`8px`** maximum ceiling for main viewport shells. Zero 9999px pills. Structural panels have orthogonal shared 1px hairline borders (`rgba(15,23,42,0.08)`). |
| **Nested Rounded Wrappers ('Sandwich' Borders)**: Wrapping a `rounded-2xl` shell inside another `rounded-3xl` container with 10px padding. | **Flush Monolithic Containers**: Single-layer structural shells with crisp 1px borders and internal hairline grid dividers. Concentric geometry: $R_{inner} = \max(0, R_{outer} - padding)$. |

---

## 2. Typography & Font Pairing

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Typography Monotony (Inter-Only Everywhere)**: Using default uncalibrated Inter with no optical tracking on every single project, making every site look like a clone. | **Curated Google Fonts Archetypes**: Precision matching of font personality to domain (`Plus Jakarta Sans` for DevTools, `Space Grotesk` for Swiss Grid, `Outfit` for FinTech, `Unbounded` for Hardware, `Manrope` for Operations, `IBM Plex` for Banking). |
| **Serif Italic Injection**: Injects Playfair Display or Georgia italic into the middle of a sans-serif H1 ("Беспосадочные *перелеты по миру*"). | **Mono-Family Purity**: One master geometric grotesk. Tight negative optical tracking (`letter-spacing: -0.035em`) on large headings. |

---

## 3. Surfaces & Ambient Depth

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **SVG Noise Overlay**: Stretches a 0.03 opacity fractal noise SVG over the whole page (`fixed inset-0 pointer-events-none`). Looks dirty and amateurish. | **Pristine Canvas & Hairline Bevel**: Crystal-clean solid background (`#F8FAFC` light / `#090B0E` dark). Zero noise. Micro-bevel on top edge (`inset 0 1px 0 rgba(255,255,255,0.12)`). |
| **Neon Glow Spheres**: Giant blurred purple or indigo blobs floating in background (`bg-gradient-to-tr from-purple-500 to-indigo-500 blur-3xl`). | **Directional Ambient Lighting**: High-contrast, calm surface panels with clean monochrome slate/onyx hierarchy. |

---

## 4. Section Architecture & Layout Rhythm

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Bento-Spam & Monotonous 3-Card Grids**: Stacking identical `grid-cols-3` cards from top to bottom (Features -> Bento -> Pricing -> Reviews). | **Universal Layout Alternation**: Every section changes its structural format: Asymmetric 60/40 Split -> Master-Detail Split Inspector -> Parametric Matrix -> Spec Sheet -> Proof Strip. |
| **Toy Window Traffic Lights**: Slapping red, yellow, green Mac OS circles on every container div pretending it is an app window. | **Enterprise Metadata & Breadcrumbs**: `Регион: eu-central-1 / Кластер 04 [Синхронизировано]` with latency metrics (`12ms`) and live WebSocket status pills. |

---

## 5. Interactivity & Micro-Utility

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Static Fake Divs**: Colored rectangles with drop shadows pretending to be an app, with dead non-clickable buttons. | **Live Working Browser Micro-App**: Functional tabs, master-detail item inspection, instant table search/filter, and working keyboard command palette (`⌘K`). |
| **Hover Layout Jitter**: Changing `border-width` or padding on `:hover`, causing whole page layout to twitch and jitter. | **Zero-Shift State Transitions**: Transitions only affect background, border-color, or micro-translate (`translateY(-0.5px)`), with `focus-visible:ring-2`. |

---

## 6. Commercial & Pricing Alignment

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Forced Generic SaaS Cards**: Shoving a "Monthly/Annual $19/$49/$99" subscription box onto an airline, hardware store, or clinic website. | **Native Economic Engine**: Pricing format matches the true commercial model: Class/Fare Matrix for travel, Parameter Slider / Quote Calculator for engineering, Volume Tiers for supply. |

---

## 7. Copywriting & Factual Depth (Humanizer-Pro 2.0)

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Marketing Fluff & Bureaucracy**: "Инновационный комплексный сервис, раскрывающий потенциал синергии ваших путешествий". | **Technical Reality**: "SU-214 • Boeing 787-9 • Шаг кресел 34\" • Gate B12 • Питание от шеф-повара • 100% соответствие IATA IOSA." |
| **Fake 5-Star Reviews**: "Иван И., 5 звезд: Отличный сайт, все летает!". | **Institutional Proof Matrix**: Сертификаты ISO 9001, IATA, ГОСТ, шифрование AES-256, аудит-логи и гарантированный SLA 99.99%. |
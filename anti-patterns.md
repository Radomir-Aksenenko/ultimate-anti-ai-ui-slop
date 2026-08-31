# Anti-Patterns Guide: AI Slop vs Enterprise Human Craft (v8.6)

This reference guide details why standard AI-generated code looks artificial and unrefined, contrasted against production-grade **Enterprise Human Craft** (Stripe, Linear, Apple, Vercel, Bloomberg).

---

## 1. Border-Radii & Container Geometry (The Bubble Syndrome)

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Bubble UI & Omni-Rounding**: Applying `24px - 32px - 48px` or `rounded-2xl / rounded-3xl` to outer containers and `rounded-full` pills everywhere. The whole UI looks like an inflatable toy or children's game (Duolingo effect). | **Swiss Micro-Radii & Monolithic Grid**: Strict geometric discipline: **`4px - 6px`** for interactive controls, **`8px`** maximum ceiling for main viewport shells. Zero 9999px pills. Structural panels have orthogonal shared 1px hairline borders (`rgba(15,23,42,0.08)`). |
| **Nested Rounded Wrappers ('Sandwich' Borders)**: Wrapping a `rounded-2xl` shell inside another `rounded-3xl` container with 10px padding. | **Flush Monolithic Containers**: Single-layer structural shells with crisp 1px borders and internal hairline grid dividers. No redundant outer cushioning. |

---

## 2. Typography & Font Pairing

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Typography Monotony (Inter-Only Everywhere)**: Using default uncalibrated Inter with no optical tracking on every single project, making every site look like a clone. | **Curated Google Fonts Archetypes**: Precision matching of font personality to domain (e.g. `Plus Jakarta Sans` for DevTools, `Space Grotesk` for Swiss Grid, `Outfit` for FinTech, `Manrope` for Operations, `IBM Plex` for Gov/Banking). |
| **Serif Italic Injection**: Injects Playfair Display or Georgia italic into the middle of a sans-serif H1 ("Расписание *без наложений*"). | **Mono-Family Purity**: One master geometric grotesk. Emphasis achieved through weight (`font-bold`), contrast, or tight tracking (`-0.035em`). |

---

## 3. Surfaces & Backgrounds

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **SVG Noise Overlay**: Stretches a 0.03 opacity fractal noise SVG over the whole page (`fixed inset-0 pointer-events-none`). Looks dirty, unwashed, and amateurish. | **Pristine Slate Canvas**: Crystal-clean solid background (`#F8FAFC` light / `#090B0E` dark). Zero noise. Subtle 1px hairline borders (`rgba(15,23,42,0.08)`) and pure layered ambient elevation. |
| **Neon Glow Spheres**: Giant blurred purple or indigo blobs floating in background (`bg-gradient-to-tr from-purple-500 to-indigo-500 blur-3xl`). | **Zero Neon Bleed**: High-contrast, calm surface panels with purposeful directional lighting only in specific data visualizer headers. |

---

## 4. Window & Sandbox Realism

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Toy Window Traffic Lights**: Slapping red, yellow, green Mac OS circles on every container div pretending it is an app window. | **Enterprise Breadcrumbs & Telemetry**: `Организация / Корпус 1 / Сетка v8.4 [Синхронизировано]` with latency metrics and live WebSocket status pills. |
| **Static Fake Divs**: Colored rectangles with no interactivity. | **Live Working Browser Micro-App**: Functional tabs, live conflict resolution, sidebar inspector drawer, and working keyboard shortcut (`⌘K`) modal. |

---

## 5. Copywriting & Factual Depth

| AI Slop Anti-Pattern 🚫 | Enterprise Human Craft Solution ✅ |
| :--- | :--- |
| **Marketing Fluff & Bureaucracy**: "Инновационный комплексный сервис, раскрывающий потенциал синергии учебного процесса". | **Technical Reality (Humanizer-Pro)**: "Синхронизация расписания 120 преподавателей. Контроль перегрузки по СанПиН 2.4.3648-20, устранение окон и офлайн-синхронизация." |
| **Fake 5-Star Reviews**: "Иван И., 5 звезд: Отличный сайт, все летает!". | **Enterprise Proof Matrix**: SLA 99.99%, 152-ФЗ, СП 2.4.3648-20, RBAC Audit Logs. |
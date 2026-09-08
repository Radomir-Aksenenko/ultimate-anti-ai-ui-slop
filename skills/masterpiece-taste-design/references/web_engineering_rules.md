# Web Engineering & Modern UI Directives

Standards for building web applications and marketing interfaces with React, Next.js, and Tailwind v4.

---

## 1. Stack & Runtime Conventions

- **Framework:** Next.js (App Router, RSC by default).
- **Styling:** Tailwind CSS v4.
  - Avoid legacy utility hacks. Use CSS Grid for complex grids.
  - Responsive standard: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`.
- **Animation:** `motion/react` (Motion).
  - Use `useMotionValue` and `useTransform` for continuous pointer/scroll physics.
  - Never use React `useState` for high-frequency coordinate tracking.

---

## 2. Anti-Slop Layout Engineering

### 2.1 Viewport Stability
- Never use `h-screen` on mobile or hero sections.
- Always use `min-h-[100dvh]` to account for dynamic mobile browser chrome (Safari / Chrome URL bars).

### 2.2 Fluid Typography
- Use `clamp()` or Tailwind responsive font scaling:
  `text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight`
- Avoid breaking headlines into more than 2 lines on desktop.

### 2.3 Single-Line CTA Labels
- CTA buttons must never wrap to multiple lines on desktop.
- Keep CTA labels concise (1 to 3 words): e.g. "Start Building", "Explore Catalog", "Download Kit".

### 2.4 Tactile Button States
```tsx
<button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-150 active:scale-[0.98] active:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
  Action Label
</button>
```

---

## 3. Real Visuals Over Fake UI

- Never render fake div-based UI mockups (e.g. 5 grey rectangles mimicking a dashboard).
- Priority order:
  1. Generate real image assets using image generation tools.
  2. Use real photography placeholders (`https://picsum.photos/seed/...`).
  3. Render real functional mini-components instead of fake screenshots.

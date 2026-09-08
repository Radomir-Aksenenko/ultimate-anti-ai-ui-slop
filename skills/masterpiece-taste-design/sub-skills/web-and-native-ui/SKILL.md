---
name: web-and-native-ui
description: Sub-skill for frontend web engineering (Tailwind v4, Next.js RSC, Motion) and native application polish (macOS/iOS HIG, Windows Mica). Engineered for lightweight/flash AI models.
---

# Sub-Skill: Web & Native UI Engineering

> Concrete, unbreakable code standards for web applications and native desktop/mobile interfaces.
> Designed for lightweight/flash LLMs to generate bug-free, award-winning layouts.

---

## 1. THE 5 UNBREAKABLE WEB RULES

1. **NO `h-screen` ON HERO SECTIONS:**
   - ALWAYS write `min-h-[100dvh]`. `h-screen` causes jarring layout shifts on mobile Safari and Chrome when URL bars expand/collapse.
2. **NO FLEX PERCENTAGE MATH:**
   - NEVER write `w-[calc(33%-1rem)]` or `flex-wrap`.
   - ALWAYS use CSS Grid: `grid grid-cols-1 md:grid-cols-3 gap-6`.
3. **HERO TEXT BUDGET (MAX 4 ELEMENTS):**
   - 1. Optional Eyebrow (e.g. `SYSTEM OVERVIEW`)
   - 2. Headline: Max 2 lines on desktop (`text-4xl md:text-6xl font-semibold tracking-tight`)
   - 3. Subtext: Max 20 words and max 3 lines (`text-base text-neutral-400 max-w-xl`)
   - 4. Action row: 1 primary CTA + max 1 secondary link
4. **CTA BUTTON SINGLE LINE RULE:**
   - Button labels must NEVER wrap to 2 lines on desktop. Max 3 words: "Start Free Trial", "Download Kit", "Get Access".
5. **TACTILE INTERACTION FEEDBACK:**
   - Buttons must feel physical:
     ```tsx
     <button className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-150 active:scale-[0.98] active:translate-y-[1px]">
       Explore System
     </button>
     ```

---

## 2. NATIVE DESKTOP POLISH (macOS / WINDOWS)

- **macOS Window Traffic Lights:** Leave `pl-20` (72px padding) on the top navbar so window controls do not overlap navigation items.
- **Translucent Materials:**
  - Sidebar: `backdrop-blur-xl bg-neutral-900/60 border-r border-white/5`.
  - Floating Command Bar (Raycast-style): `bg-neutral-900/90 backdrop-blur-2xl shadow-2xl border border-white/10 rounded-xl`.
- **Desktop Typography:** System font cascade: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif`.

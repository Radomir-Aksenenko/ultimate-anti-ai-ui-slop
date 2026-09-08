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

## 2. CONCENTRIC GEOMETRY (ANTI-EGG RADIUS LAWS)

Lightweight models either make everything 0px boxy or abuse `rounded-full` egg-pills. Follow this strict radius scale:

```tsx
{/* Outer Card (Radius: 16px) */}
<div className="rounded-2xl p-6 bg-neutral-900 border border-white/10">
  {/* Inner Element (Radius = max(0, 16px - 24px) -> 0 to 8px max) */}
  <div className="rounded-lg bg-neutral-950 p-4 border border-white/5">
    {/* Concentric inner content */}
  </div>

  {/* Button inside card: rounded-lg (8px), NOT rounded-full! */}
  <button className="mt-4 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium">
    Action
  </button>
</div>
```

- **Outer container:** `rounded-2xl` (16px) or `rounded-xl` (12px).
- **Inner items / buttons:** `rounded-lg` (8px) or `rounded-md` (6px).
- **Banned:** Wrapping standard rectangular cards or buttons in `rounded-full` (egg-bubble aesthetic).

---

## 3. CLEAN STATUS BADGES (BANNING PULSING ONLINE DOTS)

Generic AI designs always add a pulsing green dot + "All systems operational". Ban this slop.
Use subtle typographic tags:

```tsx
{/* BAD (AI Slop): */}
{/* <span className="flex h-3 w-3 relative"><span className="animate-ping bg-green-400 rounded-full" /></span> All systems operational */}

{/* GOOD (Clean Editorial): */}
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-neutral-800/80 border border-neutral-700/60 text-xs font-mono text-neutral-300">
  <span className="text-neutral-500">[STATUS]</span>
  <span>Operational</span>
</div>
```

---

## 4. NATIVE DESKTOP POLISH (macOS / WINDOWS)

- **macOS Window Traffic Lights:** Leave `pl-20` (72px padding) on the top navbar so window controls do not overlap navigation items.
- **Translucent Materials:**
  - Sidebar: `backdrop-blur-xl bg-neutral-900/60 border-r border-white/5`.
  - Floating Command Bar (Raycast-style): `bg-neutral-900/90 backdrop-blur-2xl shadow-2xl border border-white/10 rounded-xl`.
- **Desktop Typography:** System font cascade: `-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif`.


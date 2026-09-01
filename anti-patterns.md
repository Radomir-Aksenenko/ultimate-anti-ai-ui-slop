# 🚫 Anti-Patterns Guide: AI Slop vs Human-Senior Craft (v9.0)

> This document contrasts the **12 most common AI generation traps (AI Slop 1.0 & 2.0)** against the **real architectural and visual solutions used by Staff Designers and Lead Engineers** at Apple, Stripe, Wise, Notion, Vercel, and Teenage Engineering.

---

## 1. The 12 AI Slop Traps vs Human-Senior Solutions

### 1. The Cookie-Cutter Linear/Dark Clone Trap (AI-Slop 2.0)
* 🚫 **AI Mistake**: Turning *every* website into a dark-mode `#090B0E` dashboard with 4px borders and fake server latency numbers, even if the project is a luxury boutique, a children's book, or a bakery.
* ✅ **Human Solution**: **Intent-Driven Archetype Selection.** Match the project to its true identity: Warm Humanist Editorial for publications/blogs, Luxury Sanctuary for physical goods, Bold Neo-Brutalist for high-energy fintech, or Modern Swiss for devtools.

---

### 2. Rainbow & Neon Text Gradient Overload
* 🚫 **AI Mistake**:
  ```html
  <!-- AI Slop -->
  <h1 class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
    The Future of Next-Gen Synergistic Intelligence
  </h1>
  ```
* ✅ **Human Solution**:
  ```html
  <!-- Human Craft: Solid, confident typography with optical tracking -->
  <h1 class="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.035em] text-slate-900 leading-[1.1]">
    Automated accounting for multi-currency teams.
  </h1>
  ```

---

### 3. Symmetrical Bento-Spam (6 Identical Cards)
* 🚫 **AI Mistake**: 6 identical floating cards in a `grid grid-cols-3` with a generic Lucide icon in a rounded circle and 2 lines of filler text.
* ✅ **Human Solution**: **Dynamic Asymmetric Rhythm.**
  - Block 1: Split-screen deep dive with sticky narrative on the left and a live interactive view on the right.
  - Block 2: A single massive display metric callout (`1.4s`, `42% faster`).
  - Block 3: An interactive browser playground with tabs.

---

### 4. Fake macOS Traffic Lights on Everything
* 🚫 **AI Mistake**: Drawing red, yellow, and green dots (`w-3 h-3 rounded-full bg-red-500...`) at the top of every card pretending it's an operating system window.
* ✅ **Human Solution**: Real context indicators: functional breadcrumbs, environment chips (`PROD-US-EAST-1`), branch names (`feat/billing-v2`), or live sync telemetry dots.

---

### 5. Emoji & Icon Glaze in Headings and Buttons
* 🚫 **AI Mistake**:
  ```html
  <!-- AI Slop -->
  <button class="bg-indigo-600 text-white">🚀 Start Free Trial ✨</button>
  <h2>⚡ Supercharge Your Growth 💡</h2>
  ```
* ✅ **Human Solution**:
  ```html
  <!-- Human Craft -->
  <button class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors">
    <span>Open Live Sandbox</span>
    <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M6 3l5 5-5 5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  ```

---

### 6. Shimmering "Sheen" Gradient Sweep on Buttons
* 🚫 **AI Mistake**: Adding `@keyframes sheen` or moving reflective gradient sweeps that look like a 2012 scam banner.
* ✅ **Human Solution**: Crisp 1px hairline border, subtle top-edge bevel highlight (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.15)`), and physical active tap scale (`active:scale-[0.98]`).

---

### 7. Static Fake Mockup Divs in Hero
* 🚫 **AI Mistake**: Drawing grey rounded boxes with drop shadows pretending to be a software screenshot.
* ✅ **Human Solution**: **A Real Living Micro-Tool.** A working currency converter, an interactive API code switcher with instant syntax output, or a draggable kanban board with real state.

---

### 8. Monospace Navigation Links
* 🚫 **AI Mistake**: Setting the top navigation bar or main CTA buttons in monospace font (`font-mono tracking-widest text-xs`).
* ✅ **Human Solution**: Navigation and buttons use clean, highly legible `font-sans`. Monospace is strictly reserved for prices, hashes, IP addresses, database rows, and timestamps with `tabular-nums`.

---

### 9. Nested Double-Cushion "Sandwich" Cards
* 🚫 **AI Mistake**: Wrapping a padded card inside another padded card with a 12px gap, creating a bloated "cushion inside a cushion" effect.
* ✅ **Human Solution**: Single-layer flush panels with internal 1px hairline dividers (`divide-y divide-slate-200/10`).

---

### 10. Vague Marketing Fluff
* 🚫 **AI Mistake**: *"Our revolutionary, AI-powered next-generation solution empowers enterprises to unlock unprecedented growth and seamless synergy."*
* ✅ **Human Solution**: *"Reconciles 50,000 stripe transactions against QuickBooks in 14 seconds. Flags mismatched payouts automatically."*

---

### 11. Uncalibrated Slow Transitions
* 🚫 **AI Mistake**: Setting `transition: all 0.5s ease` on cards and buttons, making the interface feel sluggish and underwater.
* ✅ **Human Solution**: Natural human spring curves: `transition: transform 140ms cubic-bezier(0.16, 1, 0.3, 1), background-color 140ms ease`.

---

### 12. Broken Focus and Keyboard Accessibility
* 🚫 **AI Mistake**: `outline: none` without replacing it, breaking keyboard navigation for accessibility tools.
* ✅ **Human Solution**: Complete `:focus-visible` rings: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400`.
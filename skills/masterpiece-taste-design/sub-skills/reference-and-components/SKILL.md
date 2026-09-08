---
name: reference-and-components
description: Sub-skill for production-ready design components, bento grids, glassmorphism cards, and editorial layouts. Engineered for lightweight/flash AI models.
---

# Sub-Skill: Production Components & Layout Patterns

> Ready-to-implement structural templates extracted from top design resources (Ludochka Design / Ref).
> Solves the "AI template trap" by giving deterministic component blueprints.

---

## 1. THE ASYMMETRIC BENTO GRID (ANTI-SLOP)

Instead of 3 equal cards, use an asymmetric 3-cell or 4-cell bento rhythm:

```tsx
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
  {/* Primary Hero Cell: Span 7 */}
  <div className="md:col-span-7 rounded-2xl bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative group">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Core Engine</span>
      <h3 className="text-2xl font-medium text-white mt-3">Precision Layouts without AI Slop</h3>
      <p className="text-neutral-400 text-sm mt-2 max-w-md">Deterministic component trees with strict spatial rhythm.</p>
    </div>
    <div className="mt-8 rounded-xl bg-neutral-950/80 border border-white/5 p-4 aspect-video flex items-center justify-center">
      {/* Visual Asset or Interactive Micro-UI */}
      <div className="text-xs text-neutral-500 font-mono">[Interactive Component Canvas]</div>
    </div>
  </div>

  {/* Secondary Highlight Cell: Span 5 */}
  <div className="md:col-span-5 rounded-2xl bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between">
    <div>
      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Telemetry</span>
      <h3 className="text-2xl font-medium text-white mt-3">Sub-millisecond Feedback</h3>
      <p className="text-neutral-400 text-sm mt-2">Zero-latency state transforms.</p>
    </div>
    <div className="mt-6 flex items-baseline gap-3">
      <span className="text-5xl font-mono font-bold text-white tracking-tight">99.8%</span>
      <span className="text-xs text-emerald-400 font-medium">Uptime Guarantee</span>
    </div>
  </div>
</div>
```

---

## 2. EDITORIAL SPEC CARD (ALTERNATIVE TO BORING TABLES)

Never render a 20-row plain table with hairlines. Use the 2-column Spec Tile pattern:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
  <div className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 flex items-start justify-between">
    <div>
      <span className="text-xs text-neutral-500 uppercase tracking-wider">Display Surface</span>
      <h4 className="text-lg font-medium text-white mt-1">Liquid Retina XDR</h4>
      <p className="text-xs text-neutral-400 mt-1">1600 nits peak brightness, 1,000,000:1 contrast ratio.</p>
    </div>
    <span className="text-sm font-mono text-neutral-300">120Hz</span>
  </div>
</div>
```

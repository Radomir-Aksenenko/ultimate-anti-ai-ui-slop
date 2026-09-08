---
name: reference-and-components
description: Sub-skill for clean, production-ready design components, bento grids, concentric radii, and clutter-free editorial layouts. Engineered for lightweight/flash AI models.
---

# Sub-Skill: Production Components & Layout Patterns

> Ready-to-implement structural templates extracted from top design resources (Ludochka Design / Ref).
> Strictly enforces the **Micro-Label Purge**, **Concentric Curvature**, and **Anti-Slop Cleanliness**.

---

## 1. THE ASYMMETRIC BENTO GRID (CLEAN & CLUTTER-FREE)

Notice: **ZERO pointless corner micro-labels** (`SYSTEM // v1.0`, `TELEMETRY`).
Notice: **Concentric corner radii** (outer card `rounded-2xl` = 16px, inner canvas `rounded-lg` = 8px with 16px padding).

```tsx
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
  {/* Primary Hero Cell: Span 7 */}
  <div className="md:col-span-7 rounded-2xl bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between overflow-hidden relative">
    <div>
      <h3 className="text-2xl font-medium text-white tracking-tight">Real-time Visual Synthesis</h3>
      <p className="text-neutral-400 text-sm mt-2 max-w-md leading-relaxed">
        Direct frame-by-frame rendering with hardware acceleration and zero telemetry lag.
      </p>
    </div>
    <div className="mt-8 rounded-lg bg-neutral-950/80 border border-white/5 p-4 aspect-video flex items-center justify-center">
      {/* Real Functional Asset / Preview */}
      <img src="/assets/preview-stage.jpg" alt="Preview Stage" className="w-full h-full object-cover rounded-md" />
    </div>
  </div>

  {/* Secondary Highlight Cell: Span 5 */}
  <div className="md:col-span-5 rounded-2xl bg-neutral-900 border border-white/10 p-8 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-medium text-white tracking-tight">Precision Metrics</h3>
      <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
        Deterministic latency under maximum concurrent GPU throughput.
      </p>
    </div>
    <div className="mt-6 flex items-baseline gap-2">
      <span className="text-5xl font-mono font-bold text-white tracking-tight">0.4ms</span>
    </div>
  </div>
</div>
```

---

## 2. EDITORIAL SPEC CARD (CLEAN ALTERNATIVE TO TABULAR NOISE)

Instead of dense tables with 20 hairline rows or floating mini-badges:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
  <div className="p-6 rounded-xl bg-neutral-900/60 border border-white/10 flex items-center justify-between">
    <div>
      <h4 className="text-lg font-medium text-white">Liquid Retina XDR</h4>
      <p className="text-sm text-neutral-400 mt-1">1600 nits peak brightness, 1,000,000:1 contrast ratio.</p>
    </div>
    <span className="text-sm font-mono font-medium text-neutral-300 ml-4">120Hz</span>
  </div>
</div>
```

---

## 3. CONCENTRIC RADIUS MATH (THE ANTI-EGG LAW)

Weak models fail at geometry by either:
1. Slapping extreme `rounded-full` pills on everything (Egg-look / "Яишность").
2. Making everything completely 0px sharp without architectural reason.
3. Nesting rounded elements with mismatched radiuses.

### The Concentric Formula:
$$\text{Radius}_{\text{inner}} = \max(0, \text{Radius}_{\text{outer}} - \text{Padding})$$

- If Outer Card has `border-radius: 16px` and padding `12px`:
  -> Inner Image/Button MUST have `border-radius: 4px` (or 6px).
  -> Putting a `rounded-full` (9999px) pill inside a `16px` card looks broken and amateurish.

### Recommended Production Radius Scale:
- **Subtle Architectural:** `rounded-md` (6px) or `rounded-lg` (8px). Clean, precise, sharp.
- **Modern Surface Squircle:** `rounded-xl` (12px) or `rounded-2xl` (16px). For cards and modal windows.
- **Buttons:** Match card curvature (`rounded-lg` 8px to `rounded-xl` 12px). **Never default to full pill (`rounded-full`)**.

---

## 4. CHARACTER & NON-STANDARD RADII (ELEVATED TECHNIQUES)

Top design references (*Integrated Biosciences, Seamless Studio, Wolverine*) use non-standard geometry to escape AI-slop uniformity:

### 4.1 Diagonal Asymmetric Curvature:
Rounding only opposite diagonal corners gives a signature organic/architectural silhouette:
```tsx
{/* Leaf / Diagonal Silhouette */}
<div className="rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-8 bg-neutral-900 border border-white/10">
  {/* Content */}
</div>
```

### 4.2 Chamfered / Cut Corners (Technical & Biotech Aesthetic):
Instead of curved radius, 45-degree cut corners convey precision engineering:
```tsx
<div 
  className="p-6 bg-neutral-900 border border-white/10"
  style={{
    clipPath: 'polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0% calc(100% - 16px), 0% 16px)'
  }}
>
  {/* Precision hardware card */}
</div>
```

### 4.3 Morphing Radius on Hover (Tactile Spring Physics):
Subtly expanding the corner curvature on user interaction makes static layouts feel responsive:
```tsx
<div className="rounded-xl hover:rounded-2xl transition-all duration-300 ease-out p-6 bg-neutral-900 border border-white/10">
  {/* Tactile morph card */}
</div>
```

### 4.4 Web Implementation of Apple Squircle:
```css
/* Modern CSS Squircle (CSS Borders and Box Decorations Level 4) */
.squircle-card {
  border-radius: 20px;
  corner-shape: squircle;
}
```


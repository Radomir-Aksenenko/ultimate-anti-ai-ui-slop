# Anti-Patterns Guide: AI Slop vs Swiss Human Craft (v8.6 Base)

This reference guide details why standard AI-generated code looks artificial, childish, and unrefined, contrasted against **Swiss Micro-Radii and Human Senior Engineering** (Linear, Stripe, Raycast, Apple, GitHub standard).

---

## 1. The 8 Core AI Tells vs Swiss Human Solutions

| AI Slop Anti-Pattern 🚫 | Swiss Human Craft Solution ✅ | Benchmark System |
| :--- | :--- | :--- |
| **1. Bubble UI & Inflatable 9999px Pills**: Applying `24px - 48px` curves and massive pill containers to everything. Looks like a toy. | **Swiss Micro-Radii (4px–8px)**: `4px` tags/inputs, `6px` buttons, `8px` container cards. No 9999px pills. Shared 1px hairline dividers. | **Linear / VS Code** |
| **2. Fake Tactile Gimmicks**: Stretches SVG noise overlays over the whole page or adds shimmering button sweeps. | **Zero Noise. Zero Gimmicks**: Pristine solid canvas, crisp 1px borders, subtle top-edge bevel (`inset 0 1px 0 rgba(255,255,255,0.15)`). | **Stripe / Pitch** |
| **3. Typography Monotony or Serif Chaos**: Uncalibrated default Inter or random serif italics in sans-serif headings. | **6 Curated Google Fonts Archetypes**: Precision display grotesks + tabular mono with exact optical letter-spacing (`-0.03em`). | **Raycast / A24** |
| **4. Symmetric Bento-Spam**: 6 identical floating cards with round circle icons and 2 lines of text. | **Asymmetric Functional Architecture**: Live interactive cockpits, real data tables, split-view panels, and inspector toolbars. | **Figma / Supabase** |
| **5. Toy Traffic Light Dots**: Slapping red, yellow, green Mac OS circles on every container div pretending it is a window. | **Authentic Enterprise Context**: Professional breadcrumbs, environment badges, and real live sync status tags. | **GitHub / Vercel** |
| **6. Emoji & Icon Spam**: Putting `🚀`, `✨`, `⚡`, `💡` in headings, badges, and CTAs. | **Strict Vector Precision**: Minimal 1.5px stroke SVG icons using `stroke="currentColor"`. Zero emojis in headings/CTAs. | **Lucide / Radix** |
| **7. Marketing Fluff & Vague Claims**: "Revolutionary platform unlocking the full potential of next-gen synergy". | **Factual Domain Reality**: Exact measurable metrics, real technical specs, and concrete numbers (Humanizer-Pro). | **Basecamp / Apple Specs** |
| **8. Static Mockup Illusions**: Drawing colored rectangles with drop shadows pretending to be software. | **Real Working Browser Micro-App**: Clickable tabs, search/filter inputs, sortable tables, and working modals. | **Linear / Stripe Dashboard** |

---

## 2. Corner Geometry & Concentric Orthogonal Rules

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

* **Concentric Nested Law**: When containers are nested, $R_{inner} = \max(0, R_{outer} - padding)$.
* **Single-Layer Flush Panels**: No nested double-cushioning ('sandwich' borders).
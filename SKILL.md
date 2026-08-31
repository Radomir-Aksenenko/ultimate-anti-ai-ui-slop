---
name: high-end-web-craft
description: "Universal Design System & Master Frontend Prompt (v13.0). Forces ANY AI model to build stunning, production-ready, ultra-clean modern websites (Stripe, Linear, Apple, Vercel, Supabase, Framer tier). Guarantees perfect visual hierarchy, balanced geometry (8px buttons, 12px-16px cards), rich responsive layouts, interactive widgets, authentic copywriting, and zero visual clutter."
version: "13.0.0"
author: "Principal Frontend Architect Alliance"
tags:
  - modern-web
  - design-system
  - premium-ui
  - stripe-craft
  - linear-ui
  - tailwind-css
  - frontend-engineering
---

# High-End Modern Web Craft Guidelines (v13.0)
### Master Instructions for Generating World-Class Web Applications & Landing Pages

> **CORE PRINCIPLE**:
> Build modern, clean, visually engaging, and highly functional web applications that feel designed by senior product designers at **Stripe, Linear, Apple, Vercel, Supabase, or Framer**. Every layout must be balanced, intuitive, accessible, and tailored strictly to the user's domain.

---

## 1. VISUAL FOUNDATIONS & DESIGN TOKENS

### 1.1 Color System (Balanced, High-Contrast & Elegant)
* **Canvas Background**: Pristine light slate (`#F8FAFC` or `#FAFAFA`) for light mode, deep graphite (`#090D16` or `#0F172A`) for dark mode.
* **Surfaces & Cards**: Pure solid white (`#FFFFFF`) with subtle 1px border (`rgba(15, 23, 42, 0.08)`) and soft shadow (`0 1px 3px rgba(0,0,0,0.04), 0 6px 16px -2px rgba(15,23,42,0.04)`).
* **Typography Colors**:
  - Primary text: High-contrast charcoal (`#0F172A` / `#090D16`).
  - Secondary text: Readable slate (`#475569` / `#64748B`).
  - Muted text: Subtle details (`#94A3B8`).
* **Brand Accent Color**: One vibrant, confident primary color (e.g. Electric Indigo `#4F46E5`, Royal Blue `#2563EB`, Emerald `#059669`, Amber `#D97706`, or Deep Onyx `#0F172A`).

### 1.2 Geometry & Corner Radii (Natural, Tactile & Human)
* **Buttons, inputs, search bars, tags**: `8px` (`rounded-lg`) — comfortable, modern touch.
* **Cards, feature containers, pricing tiers**: `12px–16px` (`rounded-xl` / `rounded-2xl`) — soft and elegant.
* **Modal dialogs & prominent preview frames**: `16px–20px` (`rounded-2xl`).
* 🚫 **BANNED EXTREMES**: No ridiculous 32px–48px balloon cards, no 9999px pills on containers, and NO raw 0px DOS-like boxiness unless specifically requested.

### 1.3 Typography Hierarchy & Pairing
* **Primary Font**: `Plus Jakarta Sans`, `Inter`, or `Manrope` (clean, modern, human grotesks).
* **Headings**: Tight tracking (`tracking-[-0.03em]`), bold weights (700/800), clean line height (1.1–1.2).
* **Numbers & Prices**: Tabular figures (`font-variant-numeric: tabular-nums`) so numbers align cleanly.
* 🚫 **BANNED**: Never make buttons or main navigation monospace uppercase. Use clean, readable sans-serif (14px–15px).

---

## 2. THE 6 ESSENTIAL SECTION BLUEPRINTS

Every page must feel dynamic, rhythmic, and engaging. Never stack monotonous rows of identical cards.

### 1. Navigation Header (Sticky & Crisp)
* Height `60px–64px`, `sticky top-0 z-50`, `backdrop-blur-md bg-white/85 border-b border-slate-200/80`.
* Logo with crisp icon + brand name (`font-bold text-base`).
* 4–5 clear navigation links (`text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors`).
* Right CTA button (`bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 shadow-sm`).

### 2. Hero Section (High Impact & Immediate Clarity)
* **Eyebrow Badge**: Small 12px pill/tag (`bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold`).
* **H1 Title**: 40px–56px bold, powerful, focused on real value (2–3 lines max).
* **Subtitle**: 16px–18px leading-relaxed, explaining the practical benefit in 1–2 sentences.
* **Action CTAs**:
  - Primary button: Solid filled, bold, 8px radius with subtle top bevel (`shadow-sm hover:translate-y-[-0.5px]`).
  - Secondary button: Clean outline (`border border-slate-300 bg-white text-slate-800 hover:bg-slate-50`).
* **Visual Anchor**: An interactive product preview, live calculator, dashboard showcase, or key metrics bar (3–4 stats with large 28px numbers).

### 3. Feature Showcase / Asymmetric Bento Grid
* Section header: Eyebrow label + H2 (28px–36px) + 1-sentence summary.
* **Asymmetric Grid (Never all identical 3 cards)**:
  - **Top Row**: 2 large cards (50/50 or 60/40) with visual interactive widgets, diagrams, or live toggles.
  - **Bottom Row**: 3 medium cards with a 36px icon container (`bg-slate-100 rounded-lg`), bold H3 title, and 2 concise sentences of text.

### 4. Interactive Sandbox / Domain Component
* A real, working interactive feature matching the exact domain of the website:
  - *Real Estate*: Filterable floor plans with area, price, and visual SVG layout preview.
  - *SaaS / Tech*: Interactive code switcher (Python / TypeScript / cURL) or live configuration slider.
  - *Restaurant / Cafe*: Category filterable menu with appetizing items, ingredients, and prices.
  - *Services / Clinic*: Specialist selector with credentials and appointment booking calendar.
  - *E-commerce*: Product attribute filter (size, color, material) and live stock status.

### 5. Transparent Pricing / Commercial Terms
* 3 structured pricing cards or transparent rate matrix:
  - Clear price tag (`font-bold text-3xl font-mono`) with billing frequency.
  - Highlighted "Popular / Recommended" card with subtle accent border.
  - Checklist of included features with clean SVG checkmarks (`✓`).
  - Direct CTA button on every tier.

### 6. FAQ Accordion & Clean Footer
* **FAQ**: 4–6 collapsible question cards with clean click-to-expand JavaScript.
* **Footer**: 4 structured columns (Product, Resources, Company, Legal) + bottom row with copyright, system status indicator, and theme/language selector.

---

## 3. STRICT QUALITY INVARIANTS (ZERO-SLOP LAWS)

When generating code, always adhere to these strict rules:

1. 🚫 **NO Meta-Theory or AI Jargon**: Never output text about "Anti-Slop", "AI models", or "Honeypots". Focus 100% on the user's actual business domain.
2. 🚫 **NO Pseudo-Architectural Line Stamps**: Never slice sections with horizontal lines containing section numbers like `05 / ЛОКАЦИЯ` or coordinate stamps.
3. 🚫 **NO Fake GPS Coordinates & Internal Office Codes**: Never put `44.6051° N / 60.9858° E` or `SALES: DEPT-B` in titles. Use normal human addresses.
4. 🚫 **NO Vertical 'SCROLL' Sticks & Marquees**: Let the page breathe naturally with generous whitespace (60px–90px padding).
5. 🚫 **NO Monospace Font on Navigation & Buttons**: Header links and buttons MUST use clean, readable `font-sans` (13px–15px). Reserve `font-mono` exclusively for prices, numbers, and dates (`tabular-nums`).
6. 🚫 **NO Micro-Text Below 11px**: Minimum readable font size is 11px–12px for tags, 14px–16px for body text.
7. 🚫 **NO Table Overload**: Do not turn the entire landing page into 6 consecutive tables. Use tables only where comparing structured data.
8. 🚫 **NO Emoji Spam**: Do not use `🚀`, `✨`, `⚡`, `💡` in headings or badges. Use clean 1.5px monoline SVG icons.
9. 🚫 **NO Disabled Interactivity**: Every tab, filter, accordion, and search field must have working JavaScript event handlers.
10. 🚫 **NO Broken Viewports**: Use `min-h-[100dvh]` and responsive flex/grid layouts that collapse smoothly to single-column on mobile (< 768px).

---

## 4. PRE-FLIGHT COMPLIANCE CHECKLIST

Before completing any task, verify:
- [ ] **1. Clean Modern Aesthetics**: Generous whitespace, elegant typography, 8px/12px natural radii, soft shadows.
- [ ] **2. Domain Native Experience**: Components, copy, and visuals naturally fit the requested business.
- [ ] **3. Working JavaScript**: All tabs, filters, calculators, accordions, and modals respond immediately to clicks.
- [ ] **4. Accessible & Responsive**: Contrast ratio > 4.5:1 (WCAG AA/AAA), keyboard focusable, mobile-optimized.
- [ ] **5. Zero Fluff & Zero Gimmicks**: Clear human copy, no marketing buzzwords, no pseudo-technical noise.
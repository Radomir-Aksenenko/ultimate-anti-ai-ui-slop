# Desktop & Mobile Native Application Design Guidelines

Architectural principles for desktop (macOS, Windows) and mobile (iOS, Android) interfaces.

---

## 1. Window Chrome & Frame Ergonomics

### 1.1 macOS Desktop Apps
- **Traffic Light Integration:** Leave standard padding (`pl-20` or 72px) for native window controls.
- **Unified Toolbar:** Keep the search bar, segmented controls, and action items aligned on the same horizontal plane as the window title.
- **Translucent Sidebars:** Utilize `backdrop-blur-md` or native NSVisualEffectView (`material: sidebar`) with subtle 1px border dividers (`border-r border-black/5 dark:border-white/10`).
- **Corner Radii:** Windows should utilize native 10-12px outer radius.

### 1.2 Windows Desktop Apps (Mica / Acrylic)
- Adhere to Windows 11 Fluent 2 design principles: subtle Mica background tinting, crisp 8px corner radii, and custom draggable titlebar region (`app-region: drag`).

---

## 2. Mobile Ergonomics (iOS & Android)

- **Touch Target Minimums:** 44x44 points (iOS) or 48x48 dp (Material).
- **Safe Area Insets:** Always honor `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- **Thumb Zone Navigation:** Primary navigation and quick-actions must reside within bottom sheets or tab bars within comfortable reach of the thumb.
- **Haptic & Visual Feedback:** Immediate visual feedback on touch down (`scale(0.97)`).

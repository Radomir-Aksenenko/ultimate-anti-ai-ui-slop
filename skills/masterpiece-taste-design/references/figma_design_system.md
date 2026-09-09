# Figma Design System Architecture

Структура токенов, переменных и компонентов для поддержания целостности дизайн-системы.

---

## 1. Иерархия переменных

1. **Primitives (Базовые палитры):**
   - Цвета: шкала нейтральных оттенков (`neutral-0` ... `neutral-950`), палитры бренда (`brand-50` ... `brand-900`), функциональные статусы (success, warning, error, info).
   - Отступы: шаг 4/8pt (space-4, space-8, space-12, space-16, space-24, space-32, space-48).
   - Радиусы: `radius-sm` (4px), `radius-md` (8px), `radius-lg` (12px), `radius-xl` (16px), `radius-full` (9999px).
2. **Semantics (Семантические роли):**
   - Назначаются в зависимости от темы (Light / Dark):
     - `surface-base`, `surface-raised`, `surface-overlay`.
     - `text-primary`, `text-secondary`, `text-muted`.
     - `border-subtle`, `border-strong`, `border-focus`.

---

## 2. Auto Layout и масштабируемость

- Вложенные элементы используют концентрическую геометрию: внутренний радиус согласуется с внешним радиусом и отступом.
- Текстовые блоки имеют режим Fill container для корректного переноса строк.
- Интерактивные элементы группируются в варианты компонентов со всеми состояниями (Default, Hover, Active, Focus, Disabled).

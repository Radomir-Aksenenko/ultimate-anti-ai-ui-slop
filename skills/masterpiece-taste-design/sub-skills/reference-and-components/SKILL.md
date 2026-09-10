---
name: reference-and-components
description: Поднавык компонентных паттернов: таблицы данных, списки, адаптивные карточки, бенто-сетки и концентрические скругления без визуального шума.
---

# Sub-Skill: Компонентные паттерны и организация данных

Руководство по проектированию структурированных компонентов: от плотных таблиц данных до карточек и адаптивных сеток.

---

## 1. Таблицы данных и реестры (Data Tables)

Для сценариев с высокой плотностью информации (расписания, списки тикетов, аналитика, инвентарь) табличная форма является приоритетной:

- **Структура:** строка заголовков с четким выравниванием (текст — влево, числа — вправо, статусы — по центру/влево).
- **Разделители:** деликатные границы 1px solid var(--border-subtle) вместо тяжелых рамок.
- **Интерактивность:** подсветка строки при наведении (hover:bg-neutral-500/5), поддержка фокуса клавиатуры при табличной навигации.
- **Отказ от псевдо-карточек:** не заменять 20 строк структурированных данных на 20 раздутых карточек.

```tsx
<table className="w-full text-left text-sm border-collapse">
  <thead>
    <tr className="border-b border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 uppercase">
      <th className="py-3 px-4 font-medium">Время</th>
      <th className="py-3 px-4 font-medium">Дисциплина</th>
      <th className="py-3 px-4 font-medium">Аудитория</th>
      <th className="py-3 px-4 font-medium">Преподаватель</th>
      <th className="py-3 px-4 font-medium text-right">Статус</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
    <tr className="hover:bg-neutral-500/5 transition-colors">
      <td className="py-3 px-4 font-mono text-xs">09:00 — 10:30</td>
      <td className="py-3 px-4 font-medium">Теория вероятностей</td>
      <td className="py-3 px-4 text-neutral-500">Ауд. 408 (Главный корпус)</td>
      <td className="py-3 px-4">проф. Смирнов А. В.</td>
      <td className="py-3 px-4 text-right">
        <span className="inline-block px-2 py-0.5 text-xs rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          Идет сейчас
        </span>
      </td>
    </tr>
  </tbody>
</table>
```

---

## 2. Карточки спецификаций и параметров (Spec Tiles)

Для демонстрации ключевых характеристик объекта или услуги используются компактные плитки:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="p-5 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900">
    <span className="text-xs text-neutral-500 uppercase tracking-wide">Диагностика</span>
    <div className="text-xl font-semibold mt-1">Бесплатно</div>
    <p className="text-xs text-neutral-500 mt-2">При согласии на последующий ремонт в мастерской</p>
  </div>
</div>
```

---

## 3. Адаптивные Bento-сетки

Бенто-сетка применяется при неоднородной иерархии контента (когда есть 1 доминирующий объект и несколько вспомогательных):

- Соотношение колонок задается реальной важностью контента (например, 2:1, 1:2 или 8:4), а не абстрактной догмой 7:5.
- Внутри ячеек размещается функциональный контент, а не декоративный шум.
- Отсутствие фейковых угловых тегов (SYSTEM // v1.0, случайные числа).

---

## 4. Концентрическая геометрия скруглений

Радиусы выбираются по роли компонента. Для нового интерфейса без заданной геометрии: кнопки и поля 8–12px, карточки 12–20px. Существующие токены, референс или явный угловатый стиль имеют приоритет. Таблицы, прямоугольные секции и строгая сетка совместимы со скругленными кнопками.

Правило оптической концентричности относится только к соседним вложенным контурам, повторяющим форму друг друга: например, изображению внутри рамки. Оно не определяет радиус самостоятельной кнопки, поля или бейджа внутри карточки.

`R_inner = max(0, R_outer - gap)`

- **Вложенные контуры:** рамка с радиусом 20px и зазором 8px содержит изображение с радиусом 12px.
- **Независимый контрол:** карточка с радиусом 16px и padding 16px может содержать кнопку с радиусом 8px. Вычитание padding из радиуса карточки к кнопке не применяется.
- **Форма кнопок и бейджей:** задавай явный радиус через семантический токен или класс, например `rounded-[8px]`. `rounded-full` допустим для кнопок, тегов и бейджей, когда соответствует выбранному направлению; радиусы разных ролей не обязаны совпадать.
- **Проверка в браузере:** проверь computed `border-radius` кнопок и полей. Если выбран мягкий стиль, значение 0 из reset, отсутствующего класса или неверного токена нужно исправить.

---

## 5. Интерактивные калькуляторы и слайдеры параметров

Вместо статичных прайс-таблиц используются функциональные калькуляторы параметров с мгновенным пересчетом:
- Ползунок (`<input type="range">`) с поддержкой управления клавишами стрелок, `Home`, `End` и явным атрибутом `aria-valuenow`.
- Числовой тикер: значение вычисляется в реальном времени с плавной сменой чисел.
- Прозрачная математика: отображение формулы или составляющих цены без скрытых условий и синтетических скидок.

```tsx
<div className="p-6 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md">
  <div className="flex justify-between items-center mb-4">
    <label htmlFor="nodes-range" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Количество вычислительных узлов
    </label>
    <span className="text-lg font-bold font-mono text-neutral-900 dark:text-white">
      {nodeCount} шт.
    </span>
  </div>
  <input
    id="nodes-range"
    type="range"
    min="1"
    max="64"
    value={nodeCount}
    onChange={(e) => setNodeCount(Number(e.target.value))}
    className="w-full h-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
  />
  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
    <span className="text-xs text-neutral-500">Оценка стоимости в месяц:</span>
    <span className="text-xl font-bold text-neutral-900 dark:text-white">{estimatedCost} ₽</span>
  </div>
</div>
```

---

## 6. Бесшовный бесконечный Marquee (Чистый CSS)

Бегущая строка логотипов партнеров, стеков или параметров без скриптовых таймеров и скачков:

```tsx
<div className="marquee-wrapper overflow-hidden select-none">
  <div className="marquee-track flex gap-8 whitespace-nowrap">
    <div className="marquee-group flex gap-8 items-center shrink-0">
      {items.map((item) => (
        <span key={item.id} className="text-sm font-medium text-neutral-500">
          {item.name}
        </span>
      ))}
    </div>
    <div className="marquee-group flex gap-8 items-center shrink-0" aria-hidden="true">
      {items.map((item) => (
        <span key={`dup-${item.id}`} className="text-sm font-medium text-neutral-500">
          {item.name}
        </span>
      ))}
    </div>
  </div>
</div>
```

```css
.marquee-track {
  animation: marquee-scroll 28s linear infinite;
}

@keyframes marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 2rem)); }
}

@media (hover: hover) {
  .marquee-wrapper:hover .marquee-track {
    animation-play-state: paused;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    overflow-x: auto;
  }
}
```

---

## 7. Плавающая островная навигация (Floating Island Dock)

Компактная навигация для первого экрана и одностраничных интерфейсов:
- Размещение: по центру вверху экрана с отступом `top-4` или `top-6`.
- Оформление: `.liquid-glass`, скругление `rounded-full`, отступы `px-4 py-2`.
- Высота: 44–52px. Сохранение доступности сенсорной зоны (контролы внутри имеют высоту не менее 36px).
- Активный таб: плавный переход подложки с физикой пружины (Framer Motion `layoutId="active-dock-pill"`).


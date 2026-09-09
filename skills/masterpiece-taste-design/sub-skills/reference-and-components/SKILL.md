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

`	sx
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
`

---

## 2. Карточки спецификаций и параметров (Spec Tiles)

Для демонстрации ключевых характеристик объекта или услуги используются компактные плитки:

`	sx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="p-5 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900">
    <span className="text-xs text-neutral-500 uppercase tracking-wide">Диагностика</span>
    <div className="text-xl font-semibold mt-1">Бесплатно</div>
    <p className="text-xs text-neutral-500 mt-2">При согласии на последующий ремонт в мастерской</p>
  </div>
</div>
`

---

## 3. Адаптивные Bento-сетки

Бенто-сетка применяется при неоднородной иерархии контента (когда есть 1 доминирующий объект и несколько вспомогательных):

- Соотношение колонок задается реальной важностью контента (например, 2:1, 1:2 или 8:4), а не абстрактной догмой 7:5.
- Внутри ячеек размещается функциональный контент, а не декоративный шум.
- Отсутствие фейковых угловых тегов (SYSTEM // v1.0, случайные числа).

---

## 4. Концентрическая геометрия скруглений

Для гармоничного вложения элементов соблюдается правило оптической концентричности:

\text{Радиус}_{\text{внутренний}} = \max(0, \text{Радиус}_{\text{внешний}} - \text{Внутренний отступ})

- **Пример:** Внешняя карточка имеет радиус 16px и внутренний отступ 16px.
  Вложенный контейнер должен иметь радиус max(0, 16 - 16) = 0...4px.
- **Форма кнопок и бейджей:** скругление кнопок (
ounded-lg 6–8px) согласуется с шагом карточки. Полные таблетки (
ounded-full) допустимы для компактных бейджей и тегов, но не должны навязываться прямоугольным карточкам без контекстной причины.

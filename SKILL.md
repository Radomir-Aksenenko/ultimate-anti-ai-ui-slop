---
name: anti-ai-ui-slop
description: Universal production framework to create human-grade, anti-AI-slop web designs based on design systems of Apple, Google DeepMind, Cloudflare, GitHub, Microsoft, and Linear. Eliminates generic gradients, boilerplate layouts, synthetic copy, and poor typography.
---

# ANTI-AI-SLOP: РУКОВОДСТВО ПО СОЗДАНИЮ ВЕБ-ИНТЕРФЕЙСОВ МИРОВОГО УРОВНЯ

Данный скилл является обязательной директивой для проектирования и верстки веб-сайтов, лендингов, дашбордов и компонентов. Он полностью устраняет паттерны так называемого 'нейросетевого мусора' (AI UI Slop) и переводит генерацию интерфейсов на уровень ведущих технологических компаний: Apple, Google DeepMind, Cloudflare, GitHub, Microsoft, Linear и Stripe.

---

## ЧАСТЬ 1: ФИЛОСОФИЯ ЧЕЛОВЕЧЕСКОГО РЕМЕСЛА ПРОТИВ СТАТИСТИЧЕСКОГО СЛОПА

### Почему типовой дизайн нейросетей выглядит плохо:
Нейросеть обучалась на миллионах шаблонов и средних кодовых баз. Когда ей задают команду 'сделай современный сайт', она вычисляет статистическое медианное значение:
1. Фиолетовый градиент `from-purple-600 to-indigo-600` на темно-синем фоне `slate-900`.
2. Огромные размытые круги свечения (`blur-[120px]`).
3. Три одинаковые карточки фич (`grid-cols-3`) с иконками в кружочках.
4. Бессмысленный водянистый копирайтинг ('Supercharge your workflow', 'Seamless future').
5. Отсутствие реальных данных, таблиц, кода, телеметрии и клавиатурных подсказок.

### Главный закон анти-слопа:
**Дизайн создается через ограничения, конкретику и физику материалов, а не через декоративные украшательства.**

---

## ЧАСТЬ 2: THE BAN LIST (ЧЕРНЫЙ СПИСОК НЕЙРОСЕТЕВЫХ КЛИШЕ)

При генерации интерфейсов КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО использовать:
1. **Градиентные заголовки `bg-clip-text text-transparent`**: запрещены переходы розовый-фиолетовый-синий. Заголовок должен быть контрастным, сплошным и четким (`#ffffff`, `#f5f5f7` или `#111215`). Допустим только легкий вертикальный оптический спад (100% white -> 85% white).
2. **Неоновые размытые пятна (Blurred Orbs)**: никаких абсолютных кругов с `filter: blur(80px...150px)`. Структура создается границами и разделителями, а не цветной грязью.
3. **Шаблон '3 одинаковые карточки'**: никогда не выстраивать 3 одинаковые карточки с иконкой по центру и двумя предложениями текста. Использовать асимметричные Bento-сетки (2:1, 1:2, 3:1).
4. **Летающие абстрактные 3D-объекты**: никаких парящих стеклянных сфер, кубов и хромированных колец, не несущих смысловой нагрузки.
5. **Синтетический маркетинговый копирайтинг**: слова 'Supercharge', 'Unleash', 'Next-gen', 'Seamless synergy', 'Revolutionize' запрещены. Текст обязан описывать конкретную инженерную функцию, предмет и числовой результат.
6. **Круглые кнопки-таблетки с гигантской размытой тенью**: запрещен `shadow-[0_10px_30px_rgba(...)]`. Использовать аккуратные микро-тени с внутренним хайлайтом `inset 0 1px 0 rgba(255,255,255,0.1)`.
7. **Декоративные эмодзи**: запрещено использовать смайлики (ракеты, молнии, лампочки, огонь) в заголовках, карточках и бейджах.
8. **Голый неуправляемый шрифт**: запрещено использовать стандартный Inter без компенсации отрицательного трекинга на крупных кеглях.

---

## ЧАСТЬ 3: ПЯТЬ ИНДУСТРИАЛЬНЫХ АРХЕТИПОВ

Перед написанием любой строки кода выберите ровно ОДИН архетип. Смешивание архетипов запрещено.

### АРХЕТИП 1: GOOGLE DEEPMIND EDITORIAL (Научно-исследовательский лаб)
- **Для чего**: ИИ-исследования, фундаментальная наука, технические публикации, аналитические платформы, глубокие технологии.
- **Шрифтовая пара**: Классическая антиква (Serif) для заголовков (`Newsreader`, `Charter`, `Georgia`) + высокоточный гротеск для интерфейса (`Google Sans Flex`, `SF Pro Display`).
- **Палитра**: Глубокий обсидиан (`#090a0f`), графит (`#12141c`), ледяной синий акцент (`#8ab4f8`), тончайшие разделители `rgba(255, 255, 255, 0.08)`.
- **Композиция**:
  - Асимметричный сплит: заголовок и исследовательский вопрос слева (40%), тезисы и авторы справа (60%).
  - Горизонтальные линейки `hairline-b` вместо рамок и карточек.
  - Строгие капсы метаданных: `RESEARCH PAPER // ARCHITECTURE // 2026.09`.
  - Монохромные схемы архитектуры нейросетей или математические диаграммы.

### АРХЕТИП 2: APPLE MONUMENTAL (Аппаратный минимализм и масштаб)
- **Для чего**: Презентация физических продуктов, премиальные приложения, флагманские SaaS-платформы, дизайн-системы.
- **Шрифтовая пара**: `SF Pro Display` (заголовки 56px-96px с жестким трекингом `-0.03em`) + `SF Pro Text` (17px-21px, relaxed line-height).
- **Палитра**: 90% монохром (чистый черный `#000000`, сатинированный серый `#161617`, титановый `#1d1d1f`, белый `#f5f5f7`), строго 1 функциональный акцент (фирменный синий `#0071e3` или `#2997ff`).
- **Композиция**:
  - Монументальный масштаб: экранное пространство 120-180px паддингов. Продукт дышит.
  - Физичные материалы: сатинированный металл, матовое стекло (`backdrop-filter: saturate(180%) blur(20px)`), внутренний микро-кант `inset 0 0 0 1px rgba(255, 255, 255, 0.08)`.
  - Микро-eyebrow над заголовком: мелкий плотный текст, обозначающий контекст.

### АРХЕТИП 3: CLOUDFLARE TELEMETRY (Инженерная плотность и живые метрики)
- **Для чего**: Сетевая инфраструктура, облачные сервисы, DevOps, мониторинг, кибербезопасность, базы данных.
- **Шрифтовая пара**: Технический гротеск (`Inter`, `Segoe UI`, `-apple-system`) + моноширинный шрифт для всех цифр и метрик (`JetBrains Mono`, `SF Mono`, `ui-monospace`).
- **Палитра**: Темный графит (`#0f1117`, `#141720`), границы `#262b3a`, фирменный оранжевый акцент `#f6821f`, зеленый телеметрический статус `#10b981`.
- **Композиция**:
  - Высокая информационная плотность: живые счетчики запросов, таблицы задержек, графики пинга, распределение по точкам PoP.
  - Bento-сетки с неравномерными блоками (2:1 и 1:2).
  - Подсветка границ: при наведении мыши карточка не прыгает вверх, а плавно меняет цвет границы (`border-color: #3d455d`).

### АРХЕТИП 4: GITHUB PRIMER (Инструментарий разработчика и терминал)
- **Для чего**: Open Source проекты, CLI-утилиты, компиляторы, API-платформы, SDK.
- **Шрифтовая пара**: Системный стек GitHub (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`) + моноширинный код (`ui-monospace, SFMono-Regular, Consolas`).
- **Палитра**: Официальная палитра Primer Dark: фон `#0d1117`, панели `#161b22`, границы `#30363d`, приглушенные границы `#21262d`, синий акцент `#2f81f7`.
- **Композиция**:
  - Терминальный блок как центральный элемент: шапка окна с кнопкой копирования, реальная команда вставки (`$ npm i @core/engine`), вывод версии.
  - Визуализация git-деревьев, коммитов, веток и статусов проверок CI/CD.
  - Четкие утилитарные бейджи со строгими рамками: `border: 1px solid rgba(56, 139, 253, 0.4); background: rgba(56, 139, 253, 0.1)`.

### АРХЕТИП 5: LINEAR ULTRA-SAAS (Микро-бордеры и хоткеи)
- **Для чего**: B2B продуктивность, таск-трекеры, финтех, CRM нового поколения, профессиональные SaaS.
- **Шрифтовая пара**: Геометрический нейтральный гротеск с оптической компенсацией + моноширинные теги клавиш.
- **Палитра**: Глубокий обсидиан `#08090a`, уровни поверхностей `#0f1011` (surface-0), `#151618` (surface-1), `#1c1d20` (surface-2), фиолетово-серый деликатный акцент `#5e6ad2`.
- **Композиция**:
  - Интегрированные подсказки горячих клавиш: бейджи `<kbd class="kbd-badge">⌘K</kbd>`, `<kbd class="kbd-badge">G then I</kbd>`.
  - Границы hairline (1px solid rgba(255,255,255,0.08)) с направленным градиентным светом по верхнему ребру.
  - Табличные рабочие процессы: плотные строки, статусные индикаторы, выпадающие меню с моментальным откликом без задержек.

---

## ЧАСТЬ 4: ПОШАГОВЫЙ ПРОТОКОЛ СОЗДАНИЯ СТРАНИЦЫ

Каждый раз, когда вам поручено сверстать страницу или компонент, строго выполняйте следующие 6 шагов:

### ШАГ 1: ФИКСАЦИЯ АРХЕТИПА
Определите сущность задачи и зафиксируйте архетип. В коде укажите корневой атрибут, например `data-archetype="deepmind"` или `data-archetype="cloudflare"`.

### ШАГ 2: ТИПОГРАФИЧЕСКАЯ КАЛИБРОВКА
- Для главного заголовка H1 используйте адаптивный размер через `clamp()`:
  `font-size: clamp(2.5rem, 5vw, 4.5rem);`
  `line-height: 1.1;`
  `letter-spacing: -0.03em;`
  `font-weight: 600;`
- Длина строки текста (body) никогда не должна превышать 65-70 символов: ограничение `max-w-xl` или `max-w-[65ch]`.
- Добавьте микро-заголовок (Eyebrow): 11-13px, semi-bold, uppercase, letter-spacing: 0.08em.

### ШАГ 3: МАТЕМАТИКА ПОВЕРХНОСТЕЙ И СВЕТА
Создайте иерархию слоев (Elevations):
- Canvas (Фон страницы): `#000000` или `#090a0f`.
- Surface-0 (Контейнеры/карточки): `#0e1017` или `#141720`.
- Surface-1 (Вложенные элементы, поля ввода): `#151821` или `#1a1e2a`.
- Border: `1px solid rgba(255, 255, 255, 0.08)`.
- Никаких цветных неоновых теней. Тени только физические: `box-shadow: 0 1px 2px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2)`.

### ШАГ 4: СТРУКТУРИРОВАНИЕ BENTO-СЕТКИ
Вместо 3 одинаковых колонок создайте функциональную сетку с переменным размахом:
- Колонка 1 (Span 2): Основной интерактивный артефакт (терминал, график, визуализатор структуры).
- Колонка 2 (Span 1): Числовая инженерная метрика с моноширинным значением и статусной точкой.
- Колонка 3 (Span 1): Компактный список технических параметров или стек протоколов.
- Колонка 4 (Span 2): Полноразмерный интерактивный блок с вкладками кода.

### ШАГ 5: ИНЖЕНЕРНЫЙ КОПИРАЙТИНГ
Замените всю абстрактную воду на реальные термины:
- Плохо: 'Our AI delivers unparalleled performance.'
- Отлично: 'Optimized inference latency under 8.4ms with INT4 quantization on Hopper architecture.'
- Плохо: 'Easy integration with your stack.'
- Отлично: 'Zero-config SDK with native bindings for TypeScript, Python, Rust, and Go.'

### ШАГ 6: ПРОВЕРКА ЧЕРЕЗ QUALITY GATE
Перед выводом кода сверьтесь с 10 пунктами контрольного списка из Части 6.

---

## ЧАСТЬ 5: ПРИМЕРЫ ЭТАЛОННЫХ КОМПОНЕНТОВ

### 1. ЭТАЛОН: Google DeepMind Editorial Hero
```html
<section class="theme-deepmind min-h-[85vh] bg-[#090a0f] text-[#f5f6f8] px-6 py-24 border-b border-white/10 flex flex-col justify-between">
  <!-- Верхний бар метаданных -->
  <div class="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#9ea4b0] tracking-wider uppercase border-b border-white/10 pb-4">
    <span>Research Architecture // Core Lab</span>
    <span>Document Ref: 2026-DM-094</span>
  </div>

  <!-- Редакционный асимметричный заголовок -->
  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto pt-16">
    <div class="lg:col-span-7">
      <p class="text-xs font-mono uppercase tracking-widest text-[#8ab4f8] mb-4">Frontier Reasoning</p>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.025em] leading-[1.08] text-white">
        Scalable verification in autonomous neural reasoning.
      </h1>
    </div>
    <div class="lg:col-span-5 flex flex-col justify-end">
      <p class="text-lg text-[#9ea4b0] font-sans leading-relaxed max-w-lg mb-8">
        We introduce formal mathematical constraints into generative pipelines, eliminating hallucinations and delivering deterministic proof graphs at scale.
      </p>
      <div class="flex items-center gap-6 text-sm font-mono">
        <a href="#paper" class="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:border-[#8ab4f8] hover:text-[#8ab4f8] transition-colors">
          <span>Read Research Paper [PDF]</span>
          <span>-></span>
        </a>
        <a href="#code" class="text-[#9ea4b0] hover:text-white transition-colors">
          View Weights & Code
        </a>
      </div>
    </div>
  </div>

  <!-- Техническая плашка метрик -->
  <div class="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10 text-xs font-mono text-[#9ea4b0]">
    <div>
      <span class="block text-white text-lg font-sans font-semibold">99.42%</span>
      <span>Formal Verification Rate</span>
    </div>
    <div>
      <span class="block text-white text-lg font-sans font-semibold">&lt; 14ms</span>
      <span>Proof Generation P95</span>
    </div>
    <div>
      <span class="block text-white text-lg font-sans font-semibold">Zero-Leak</span>
      <span>Differential Privacy</span>
    </div>
    <div>
      <span class="block text-white text-lg font-sans font-semibold">Apache 2.0</span>
      <span>Model Weights License</span>
    </div>
  </div>
</section>
```

### 2. ЭТАЛОН: Cloudflare Telemetry Bento Grid
```html
<section class="theme-cloudflare bg-[#0f1117] text-[#f3f4f6] py-20 px-6">
  <div class="max-w-7xl mx-auto">
    <!-- Секция заголовка -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#262b3a]">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="telemetry-dot bg-[#10b981]"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-[#9ca3af]">Global Edge Status: All Systems Operational</span>
        </div>
        <h2 class="text-3xl font-sans font-semibold tracking-[-0.02em] text-white">
          Edge compute metrics across 330 points of presence.
        </h2>
      </div>
      <div class="mt-4 md:mt-0 font-mono text-xs text-[#9ca3af]">
        Sample Interval: 1000ms // Live Stream
      </div>
    </div>

    <!-- Асимметричный Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Большой блок: P95 Latency (Span 2) -->
      <div class="md:col-span-2 bg-[#141720] border border-[#262b3a] rounded-[4px] p-6 hover:border-[#3d455d] transition-colors">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">Synthetic Route Latency (Global P95)</h3>
          <span class="text-xs font-mono text-[#f6821f] bg-[#f6821f]/10 px-2 py-1 rounded">11.8ms Median</span>
        </div>
        <!-- Симуляция графика -->
        <div class="h-40 flex items-end gap-1.5 pt-4 border-b border-[#262b3a]">
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[40%] rounded-t-sm" title="Tokyo: 14ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[65%] rounded-t-sm" title="London: 9ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[35%] rounded-t-sm" title="Frankfurt: 11ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[80%] rounded-t-sm" title="San Francisco: 8ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[50%] rounded-t-sm" title="Singapore: 15ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[45%] rounded-t-sm" title="Sydney: 18ms"></div>
          <div class="flex-1 bg-[#f6821f] h-[30%] rounded-t-sm" title="Origin Edge: 4ms"></div>
        </div>
        <div class="flex justify-between text-[11px] font-mono text-[#9ca3af] mt-3">
          <span>NRT (Tokyo)</span>
          <span>LHR (London)</span>
          <span>FRA (Frankfurt)</span>
          <span>SFO (Silicon Valley)</span>
          <span>SIN (Singapore)</span>
          <span>SYD (Sydney)</span>
          <span>EDGE (Local)</span>
        </div>
      </div>

      <!-- Малый блок: Rate Limiting & Protection (Span 1) -->
      <div class="bg-[#141720] border border-[#262b3a] rounded-[4px] p-6 hover:border-[#3d455d] transition-colors flex flex-col justify-between">
        <div>
          <div class="text-xs font-mono text-[#9ca3af] uppercase tracking-wider mb-2">Automated Threat Mitigation</div>
          <div class="text-3xl font-mono font-bold text-white mb-1">184.2 M/s</div>
          <div class="text-xs text-[#10b981] font-mono">DDoS Requests Mitigated at L3/L4/L7</div>
        </div>
        <div class="border-t border-[#262b3a] pt-4 mt-6">
          <div class="flex justify-between text-xs font-mono mb-2">
            <span class="text-[#9ca3af]">BGP Anycast Convergence</span>
            <span class="text-white">&lt; 300ms</span>
          </div>
          <div class="flex justify-between text-xs font-mono">
            <span class="text-[#9ca3af]">TLS 1.3 0-RTT Handshake</span>
            <span class="text-[#10b981]">Enabled</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. ЭТАЛОН: Linear Keyboard-Driven Command Bar
```html
<div class="theme-linear bg-[#08090a] p-8">
  <div class="max-w-2xl mx-auto bg-[#0f1011] border border-white/[0.08] rounded-lg shadow-2xl overflow-hidden">
    <!-- Поле ввода с клавиатурной подсказкой -->
    <div class="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
      <svg class="w-4 h-4 text-[#8a8f98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Type a command or search deployments..." class="bg-transparent text-sm text-white placeholder-[#52555a] focus:outline-none w-full font-sans" />
      <span class="kbd-badge text-[10px] text-[#8a8f98] bg-white/[0.06] border border-white/[0.1] px-1.5 py-0.5 rounded font-mono">ESC</span>
    </div>

    <!-- Список действий -->
    <div class="py-2 text-xs">
      <div class="px-4 py-1 text-[11px] font-mono uppercase tracking-wider text-[#52555a]">Recent Actions</div>
      <div class="px-3 py-2 mx-2 rounded flex items-center justify-between hover:bg-white/[0.04] cursor-pointer group">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#10b981]"></span>
          <span class="text-[#f7f8f8] group-hover:text-white font-medium">Deploy release v2.14.0 to production</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="kbd-badge font-mono text-[10px]">⌘</span>
          <span class="kbd-badge font-mono text-[10px]">D</span>
        </div>
      </div>
      <div class="px-3 py-2 mx-2 rounded flex items-center justify-between hover:bg-white/[0.04] cursor-pointer group">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#8ab4f8]"></span>
          <span class="text-[#f7f8f8] group-hover:text-white font-medium">Rebuild vector index partitions</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="kbd-badge font-mono text-[10px]">⌘</span>
          <span class="kbd-badge font-mono text-[10px]">R</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## ЧАСТЬ 6: QUALITY GATE (КОНТРОЛЬНЫЙ СПИСОК САМОПРОВЕРКИ)

Перед выдачей сгенерированного макета, страницы или компонента, проверьте результат по следующим 10 критериям. При хотя бы одном ответе 'ДА' на вопросы 1-5 код считается браком и подлежит немедленной переработке:

| № | Проверка на признаки AI Slop | Статус |
|---|---|---|
| 1 | Присутствуют ли фиолетово-индиговые градиенты текста или фона? | ДОЛЖНО БЫТЬ НЕТ |
| 2 | Присутствуют ли размытые цветные круги (`blur-[100px]`) на заднем плане? | ДОЛЖНО БЫТЬ НЕТ |
| 3 | Используется ли заезженная сетка из 3 одинаковых карточек? | ДОЛЖНО БЫТЬ НЕТ |
| 4 | Содержит ли копирайтинг пустые фразы ('Supercharge', 'Seamless', 'Next-gen')? | ДОЛЖНО БЫТЬ НЕТ |
| 5 | Присутствуют ли декоративные эмодзи в разметке? | ДОЛЖНО БЫТЬ НЕТ |
| 6 | Выбран ли один четкий архетип (DeepMind, Apple, Cloudflare, GitHub, Linear)? | ДОЛЖНО БЫТЬ ДА |
| 7 | Задан ли отрицательный трекинг (`-0.02em...-0.03em`) для заголовков больше 32px? | ДОЛЖНО БЫТЬ ДА |
| 8 | Ограничена ли длина строк текста параграфов (`max-w-xl` / 65 символов)? | ДОЛЖНО БЫТЬ ДА |
| 9 | Присутствуют ли физические границы (1px hairline) и внутренний микро-рельеф? | ДОЛЖНО БЫТЬ ДА |
| 10 | Содержит ли макет реальные артефакты (терминалы, таблицы, графики, метрики, kbd)? | ДОЛЖНО БЫТЬ ДА |
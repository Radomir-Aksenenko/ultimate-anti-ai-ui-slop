# Отчет об аудите дизайн-системы

## 1. Исходные проблемы
- Шаблонность второго порядка: навязывание 8 секций лендинга на любые задачи.
- Догматизм верстки: обязательный Bento 7:5, принудительный layer bleed (-mt-12), искусственный запрет таблиц («anti-tabularity») и запрет одного шрифта.
- Декоративная телеметрия: пульсирующие точки и фиктивные задержки (p95 latency).
- Ложно extracted атрибуции: неподтвержденные правила в scraper/analyzer.py выдавались за извлеченные из датасета.

## 2. Что изменено
- Иерархия: доступность (WCAG 2.1 AA) > бриф и бренд > эвристики библиотеки.
- Контекстность: сняты запреты на таблицы, стандартные сетки и одну гарнитуру; введены Section Purpose Map и 2-3 гипотезы для концепций.
- Модульность: канонический роутер в skills/masterpiece-taste-design/SKILL.md и компактный входной SKILL.md.
- Токены (tokens.css): нейтральная light/dark семантика, scoped focus-ring, изоляция reduced-motion.
- Scraper: очищен provenance (repository-authored suggestions; unverified source attribution).
- Проверки: добавлены скрипт валидации ссылок/frontmatter и автономный чекер CSS-токенов.

## 3. Подтверждено reviewer
Фактические результаты выполнения проверочных команд в репозитории:
- `python -m unittest discover -s tests`: 17 tests (14 validator, 2 analyzer, 1 export), exit code 0.
- `python scraper/test_export.py`: парсинг экспорта Telegram завершен успешно, exit code 0.
- `python scripts/validate_markdown_and_frontmatter.py`: все локальные ссылки и frontmatter корректны, exit code 0.
- `python scripts/check_tokens.py`: 22 qualified rules, 2 at-rules, 363 declarations, 0 errors, exit code 0.

## 4. Ограничения верификации
- CSS без браузерной проверки: токены валидированы синтаксически через tinycss2; визуальный рендеринг в браузерах не тестировался.
- Поведение генераций не тестировалось: качество генераций LLM по обновленным инструкциям на реальных моделях не замерялось.
- Статический валидатор проверяет только существование локальных файлов и базовый frontmatter, не тестируя внешние URL.

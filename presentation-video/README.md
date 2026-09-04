# Welvar Taste Craft - Presentation Video

Промо-видеоролик кинематографичного уровня в белой теме для **Human Senior Web Architecture & Craft System (v9.0 Base)**, созданный на Remotion (React + TypeScript).

---

## 1. Запуск интерактивной студии (Remotion Preview)

Для покадрового просмотра, кастомизации и тестирования в браузере в реальном времени:

```bash
cd presentation-video
npm start
```
Браузер откроется автоматически по адресу `http://localhost:3000`. Вы сможете переключать кадры, приближать сцены и менять текст/стили с мгновенным обновлением (Hot Module Replacement).

---

## 2. Рендеринг финального MP4 видео

Для сборки готового видеоролика в максимальном качестве (1080p, 60fps или 30fps, кодек H.264):

```bash
cd presentation-video
npm run render
```
Готовый видеофайл будет сохранен по пути `presentation-video/out/promo.mp4`.

Рендер одного кадра-скриншота (например, кадр 200 с чекбоксами):
```bash
npm run render:still
```

---

## 3. Замена музыкального трека

1. Ознакомьтесь с файлом `../PROMPTS_MUSIC.md` и сгенерируйте свой трек с темпом **94 BPM** во Flow Music, Suno или Udio.
2. Сохраните аудиофайл как `presentation-video/public/audio/soundtrack.wav`.
3. Запустите `npm run render`.

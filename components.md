# БИБЛИОТЕКА ЭТАЛОННЫХ КОМПОНЕНТОВ (PRODUCTION BLUEPRINTS)

Готовые к использованию, проверенные на отсутствие AI-слопа компоненты для каждого из 8 индустриальных архетипов. Написаны на чистом HTML + семантических классах Tailwind CSS.

---

## 1. GOOGLE DEEPMIND: РЕДАКЦИОННЫЙ HERO И ПОЛОСА МЕТРИК
```html
<section class="theme-deepmind min-h-[85vh] bg-[#090a0f] text-[#f5f6f8] px-6 py-20 border-b border-white/10 flex flex-col justify-between" data-archetype="deepmind">
  <!-- Верхний мета-бар -->
  <div class="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#9ea4b0] tracking-wider uppercase border-b border-white/10 pb-4">
    <div class="flex items-center gap-3">
      <span class="inline-block w-2 h-2 rounded-full bg-[#8ab4f8]"></span>
      <span>Research Lab // Architecture Group</span>
    </div>
    <span>Ref: 2026-DM-094 // Formal Logic</span>
  </div>

  <!-- Редакционный асимметричный заголовок -->
  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto pt-14">
    <div class="lg:col-span-7">
      <p class="text-xs font-mono uppercase tracking-[0.08em] text-[#8ab4f8] mb-3">Frontier Reasoning</p>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-[-0.025em] leading-[1.08] text-white">
        Deterministic verification in autonomous neural proofs.
      </h1>
    </div>
    <div class="lg:col-span-5 flex flex-col justify-end">
      <p class="text-base sm:text-lg text-[#9ea4b0] font-sans leading-relaxed max-w-[65ch] mb-8">
        We introduce mathematical constraint boundaries into generative transformer architectures, eliminating hallucinations and producing formally verifiable proof graphs.
      </p>
      <div class="flex items-center gap-6 text-sm font-mono">
        <a href="#paper" class="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:border-[#8ab4f8] hover:text-[#8ab4f8] transition-colors">
          <span>Read Research Paper [PDF]</span>
          <span aria-hidden="true">→</span>
        </a>
        <a href="#weights" class="text-[#9ea4b0] hover:text-white transition-colors">
          Weights & Benchmarks
        </a>
      </div>
    </div>
  </div>

  <!-- Техническая полоса метрик -->
  <div class="max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10 text-xs font-mono text-[#9ea4b0]">
    <div>
      <span class="block text-white text-xl font-sans font-semibold mb-0.5 tabular-nums">99.84%</span>
      <span>Proof Verification Rate</span>
    </div>
    <div>
      <span class="block text-white text-xl font-sans font-semibold mb-0.5 tabular-nums">&lt; 12.4ms</span>
      <span>Graph Resolution P95</span>
    </div>
    <div>
      <span class="block text-white text-xl font-sans font-semibold mb-0.5">Zero-Leak</span>
      <span>Differential Privacy Guarantee</span>
    </div>
    <div>
      <span class="block text-white text-xl font-sans font-semibold mb-0.5">Apache 2.0</span>
      <span>Open Verification Suite</span>
    </div>
  </div>
</section>
```

---

## 2. APPLE MONUMENTAL: АППАРАТНЫЙ HERO С КИНЕМАТОГРАФИЧЕСКИМ МАСШТАБОМ
```html
<section class="theme-apple-dark bg-black text-[#f5f5f7] pt-24 pb-32 px-6 flex flex-col items-center text-center overflow-hidden" data-archetype="apple">
  <div class="max-w-4xl mx-auto flex flex-col items-center">
    <!-- Микро-eyebrow -->
    <p class="text-xs font-semibold uppercase tracking-[0.08em] text-[#86868b] mb-4">
      Titanium Precision Architecture
    </p>

    <!-- Монументальный заголовок с отрицательным трекингом -->
    <h1 class="text-5xl sm:text-7xl lg:text-8xl font-sans font-semibold tracking-[-0.035em] leading-[1.05] text-white max-w-3xl mb-6">
      Engineered for extreme performance.
    </h1>

    <!-- Сдержанный подзаголовок -->
    <p class="text-lg sm:text-xl text-[#a1a1a6] font-normal leading-relaxed max-w-xl mb-10">
      M4 Pro and M4 Max. Up to 128GB unified memory with 546GB/s bandwidth. Unprecedented power in an aerospace-grade enclosure.
    </p>

    <!-- Физичные кнопки с внутренним микро-кантом -->
    <div class="flex items-center gap-4">
      <a href="#buy" class="btn-tactile px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
        Order Now
      </a>
      <a href="#specs" class="btn-tactile px-6 py-2.5 rounded-full bg-[#1d1d1f] hover:bg-[#2d2d2f] text-[#2997ff] text-sm font-medium border border-white/10 transition-colors">
        View Full Specifications
      </a>
    </div>
  </div>

  <!-- Фокусный аппаратный рендер -->
  <div class="mt-16 w-full max-w-5xl relative">
    <div class="w-full aspect-[16/9] bg-[#121213] border border-white/10 rounded-2xl flex items-center justify-center relative shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
      <div class="text-center font-mono text-xs text-[#6e6e73]">
        <div class="text-[#f5f5f7] text-sm font-sans mb-1 font-medium">3D Hardware Viewport</div>
        <div>Scale 1:1 // Aerospace Titanium Frame</div>
      </div>
    </div>
  </div>
</section>
```

---

## 3. CLOUDFLARE: ЖИВАЯ ТЕЛЕМЕТРИЯ И АСИММЕТРИЧНЫЙ BENTO GRID
```html
<section class="theme-cloudflare bg-[#0f1117] text-[#f3f4f6] py-20 px-6" data-archetype="cloudflare">
  <div class="max-w-7xl mx-auto">
    <!-- Шапка секции -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#262b3a]">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="telemetry-dot"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-[#9ca3af]">Edge Telemetry: Global Network Active</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-sans font-semibold tracking-[-0.02em] text-white">
          Real-time packet routing across 330 Points of Presence.
        </h2>
      </div>
      <div class="mt-4 md:mt-0 font-mono text-xs text-[#9ca3af]">
        Telemetry Feed // 1000ms Polling
      </div>
    </div>

    <!-- Асимметричный Bento Grid (2:1 split) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Блок графика задержки (Span 2) -->
      <div class="md:col-span-2 bg-[#141720] border border-[#262b3a] rounded-[4px] p-6 hover:border-[#3d455d] transition-colors">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xs font-mono uppercase tracking-wider text-white">Synthetic Anycast Latency (Global P95)</h3>
          <span class="text-xs font-mono text-[#f6821f] bg-[#f6821f]/10 px-2 py-0.5 rounded border border-[#f6821f]/20">11.4ms Median</span>
        </div>
        <!-- Гистограмма латентности -->
        <div class="h-36 flex items-end gap-2 pt-4 border-b border-[#262b3a]">
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[40%] rounded-t-sm" title="Tokyo: 14ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[60%] rounded-t-sm" title="London: 9ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[35%] rounded-t-sm" title="Frankfurt: 11ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[80%] rounded-t-sm" title="Silicon Valley: 8ms"></div>
          <div class="flex-1 bg-[#262b3a] hover:bg-[#f6821f] transition-colors h-[50%] rounded-t-sm" title="Singapore: 15ms"></div>
          <div class="flex-1 bg-[#f6821f] h-[25%] rounded-t-sm" title="Local PoP: 3.2ms"></div>
        </div>
        <div class="flex justify-between text-[11px] font-mono text-[#9ca3af] mt-3">
          <span>NRT</span>
          <span>LHR</span>
          <span>FRA</span>
          <span>SFO</span>
          <span>SIN</span>
          <span class="text-white font-semibold">LOCAL EDGE</span>
        </div>
      </div>

      <!-- Блок отраженных атак (Span 1) -->
      <div class="bg-[#141720] border border-[#262b3a] rounded-[4px] p-6 hover:border-[#3d455d] transition-colors flex flex-col justify-between">
        <div>
          <div class="text-xs font-mono text-[#9ca3af] uppercase tracking-wider mb-2">Automated L3/L4 Mitigation</div>
          <div class="text-3xl font-mono font-bold text-white mb-1 tabular-nums">192.4 M/s</div>
          <div class="text-xs text-[#10b981] font-mono">DDoS Vectors Dropped at Line-Rate</div>
        </div>
        <div class="border-t border-[#262b3a] pt-4 mt-6">
          <div class="flex justify-between text-xs font-mono mb-2">
            <span class="text-[#9ca3af]">TLS 1.3 0-RTT</span>
            <span class="text-[#10b981]">Active</span>
          </div>
          <div class="flex justify-between text-xs font-mono">
            <span class="text-[#9ca3af]">BGP Convergence</span>
            <span class="text-white tabular-nums">&lt; 280ms</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 4. GITHUB PRIMER: ТЕРМИНАЛ И ПАЙПЛАЙН CI/CD
```html
<div class="theme-github-dark bg-[#0d1117] p-8" data-archetype="github">
  <div class="max-w-3xl mx-auto bg-[#161b22] border border-[#30363d] rounded-md overflow-hidden shadow-2xl">
    <!-- Шапка терминала -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-[#010409] border-b border-[#30363d]">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
        <span class="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
        <span class="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
        <span class="text-xs font-mono text-[#848d97] ml-2">bash — release-pipeline</span>
      </div>
      <button class="text-xs font-mono text-[#848d97] hover:text-white px-2 py-1 rounded bg-[#21262d] border border-[#30363d] transition-colors">
        Copy
      </button>
    </div>

    <!-- Тело терминала -->
    <div class="p-4 font-mono text-xs leading-relaxed text-[#e6edf3] bg-[#0d1117]">
      <div class="text-[#848d97] mb-2">// 1. Install production engine with zero native dependencies</div>
      <div class="flex items-center gap-2 mb-3">
        <span class="text-[#2f81f7]">$</span>
        <span>npm install @primer/workflow-engine@latest</span>
      </div>
      <div class="text-[#848d97] mb-2">// 2. Execution output</div>
      <div class="text-[#3fb950] mb-1">✔ Resolved 42 packages in 184ms</div>
      <div class="text-[#3fb950] mb-1">✔ Verified SHA256 integrity signatures</div>
      <div class="text-[#848d97]">✔ CI/CD Matrix: 8/8 runners green [x86_64, arm64]</div>
    </div>
  </div>
</div>
```

---

## 5. LINEAR: КОМАНДНАЯ СТРОКА (<kbd>Cmd + K</kbd>)
```html
<div class="theme-linear bg-[#08090a] p-8" data-archetype="linear">
  <div class="max-w-2xl mx-auto bg-[#0f1011] border border-white/[0.08] rounded-lg shadow-2xl overflow-hidden">
    <!-- Поле ввода с подсказкой ESC -->
    <div class="flex items-center gap-3 px-4 py-3 border-b border-white/[0.08]">
      <svg class="w-4 h-4 text-[#8a8f98]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Type a command or search issues..." class="bg-transparent text-sm text-[#f7f8f8] placeholder-[#52555a] focus:outline-none w-full font-sans" />
      <span class="kbd-badge">ESC</span>
    </div>

    <!-- Список действий -->
    <div class="py-2 text-xs">
      <div class="px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider text-[#52555a]">Recent Actions</div>
      <div class="px-3 py-2 mx-2 rounded flex items-center justify-between hover:bg-white/[0.04] cursor-pointer group transition-colors">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#10b981]"></span>
          <span class="text-[#f7f8f8] group-hover:text-white font-medium">Deploy release v2.16.0 to production</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="kbd-badge">⌘</span>
          <span class="kbd-badge">D</span>
        </div>
      </div>
      <div class="px-3 py-2 mx-2 rounded flex items-center justify-between hover:bg-white/[0.04] cursor-pointer group transition-colors">
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full bg-[#5e6ad2]"></span>
          <span class="text-[#f7f8f8] group-hover:text-white font-medium">Re-index vector database clusters</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="kbd-badge">⌘</span>
          <span class="kbd-badge">R</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## 6. VERCEL GEIST: КАРТОЧКА РАЗВЕРТЫВАНИЯ С SHADOW-AS-BORDER
```html
<div class="theme-vercel-dark bg-black p-8 text-[#ededed] font-sans" data-archetype="vercel">
  <div class="max-w-xl mx-auto bg-[#0a0a0a] rounded-md p-6 relative border border-[#262626] hover:border-[#474747] transition-colors">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#0070f3]"></span>
        <span class="text-sm font-medium text-white">production-edge-api</span>
      </div>
      <span class="text-xs font-mono text-[#a1a1a1] bg-[#1f1f1f] px-2 py-0.5 rounded border border-[#333333]">Ready</span>
    </div>

    <div class="text-xs text-[#a1a1a1] mb-6 font-mono">
      <div>Domain: <a href="#preview" class="text-white hover:underline">edge.platform.internal</a></div>
      <div class="mt-1">Commit: <span class="text-white">feat(routing): zero-latency cache fallback (4f9e1a)</span></div>
    </div>

    <div class="flex items-center justify-between text-xs font-mono pt-4 border-t border-[#262626] text-[#707070]">
      <span>Built in 1.84s</span>
      <span>Branch: main</span>
    </div>
  </div>
</div>
```

---

## 7. TEENAGE ENGINEERING: АППАРАТНАЯ ПАНЕЛЬ С ТУМБЛЕРОМ
```html
<div class="theme-teenage bg-[#e6e6e6] p-8 text-black font-mono" data-archetype="teenage">
  <div class="max-w-lg mx-auto bg-[#ffffff] border border-black p-6 shadow-[4px_4px_0px_#000000]">
    <!-- Верхний дисплей -->
    <div class="bg-[#141414] text-[#25d366] p-4 border border-black mb-6 text-xs flex justify-between items-center">
      <div>
        <div class="text-[10px] text-[#9c9c9c] uppercase mb-1">SYNTH CORE // 44.1kHz</div>
        <div class="text-base font-bold">OSC-1: SAWTOOTH [432Hz]</div>
      </div>
      <div class="w-3 h-3 rounded-full bg-[#ff5e00] animate-pulse" title="REC"></div>
    </div>

    <!-- Механические органы управления -->
    <div class="grid grid-cols-2 gap-4 text-xs">
      <div>
        <div class="text-[10px] uppercase text-[#666666] mb-1.5">OCTAVE SELECT</div>
        <div class="hardware-switch">
          <span class="switch-active">-1</span>
          <span class="switch-inactive">0</span>
          <span class="switch-inactive">+1</span>
        </div>
      </div>
      <div>
        <div class="text-[10px] uppercase text-[#666666] mb-1.5">ANALOG FILTER</div>
        <div class="hardware-switch">
          <span class="switch-active">LPF 24dB</span>
          <span class="switch-inactive">BYPASS</span>
        </div>
      </div>
    </div>

    <!-- Нижняя плашка со винтами -->
    <div class="mt-8 pt-4 border-t border-black flex justify-between items-center text-[10px] text-[#666666]">
      <span>⊕ CHASSIS SCREW</span>
      <span>MODEL: OP-FIELD-2026</span>
      <span>⊕ CHASSIS SCREW</span>
    </div>
  </div>
</div>
```

---

## 8. STRIPE CRAFT: ИНТЕРАКТИВНЫЙ БИЛЛИНГ И РАСЧЕТ
```html
<div class="theme-stripe bg-[#f6f9fc] p-8 text-[#0a2540] font-sans" data-archetype="stripe">
  <div class="max-w-md mx-auto bg-white rounded-lg p-6 border border-[#e3e8ee] shadow-[0_13px_27px_-5px_rgba(50,50,93,0.1),0_8px_16px_-8px_rgba(0,0,0,0.1)]">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-base font-semibold text-[#0a2540]">Usage-Based Settlement</h3>
      <span class="text-xs font-mono text-[#635bff] bg-[#635bff]/10 px-2 py-0.5 rounded font-medium">Live Rates</span>
    </div>

    <div class="bg-[#f8fafc] border border-[#e3e8ee] rounded p-4 mb-4">
      <div class="text-xs text-[#727f96] mb-1">Estimated Monthly Processing</div>
      <div class="text-2xl font-bold text-[#0a2540] tabular-nums">$250,000</div>
    </div>

    <div class="space-y-2 text-xs text-[#425466] border-t border-[#e3e8ee] pt-4 mb-6">
      <div class="flex justify-between">
        <span>Interchange Plus</span>
        <span class="font-mono text-[#0a2540]">0.8% + $0.10</span>
      </div>
      <div class="flex justify-between">
        <span>Instant Card Payouts</span>
        <span class="font-mono text-[#0a2540]">Included</span>
      </div>
    </div>

    <button class="btn-tactile w-full py-2.5 rounded bg-[#635bff] hover:bg-[#5349e0] text-white text-xs font-semibold tracking-wide transition-colors">
      Activate Integration
    </button>
  </div>
</div>
```

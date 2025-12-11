# LUMIÈRE SPA 官方網站開發計畫 (Implementation Plan)

> **版本**: V1.0  
> **建立日期**: 2024-12-11  
> **專案類型**: 靜態官方網站  
> **技術堆疊**: Astro + React + Framer Motion + Tailwind CSS

---

## 📋 目錄

1. [專案概述](#1-專案概述)
2. [技術架構](#2-技術架構)
3. [開發環境設定](#3-開發環境設定)
4. [專案結構規劃](#4-專案結構規劃)
5. [組件開發計畫](#5-組件開發計畫)
6. [樣式系統設計](#6-樣式系統設計)
7. [動畫策略](#7-動畫策略)
8. [響應式設計策略](#8-響應式設計策略)
9. [開發階段與里程碑](#9-開發階段與里程碑)
10. [品質保證](#10-品質保證)

---

## 1. 專案概述

### 1.1 專案目標

將現有的 React 單檔案原型 (`code.md`) 轉換為使用 **Astro + React + Framer Motion** 的生產級靜態網站，實現：

- ✅ 更好的 SEO 效能（Astro 靜態生成）
- ✅ 豐富的交互動畫（Framer Motion）
- ✅ 高效的開發體驗（Tailwind CSS）
- ✅ 組件化架構（React Islands）

### 1.2 核心設計理念

| 設計原則 | 實現方式 |
|---------|---------|
| 奢華質感 | 毛玻璃效果、大範圍柔和陰影、精緻的過渡動畫 |
| 雜誌排版 | Zig-Zag 佈局、特殊圓角處理、破格視覺效果 |
| 響應式體驗 | 手機/桌機差異化呈現、Mobile-First 開發 |
| 高轉換率 | 明確的 CTA、懸浮預約選單、底部固定按鈕 |

---

## 2. 技術架構

### 2.1 技術選型

```
┌─────────────────────────────────────────────────────┐
│                    Frontend Stack                    │
├─────────────────────────────────────────────────────┤
│  Framework:     Astro 4.x (SSG/Static Site)          │
│  UI Library:    React 18.x (Islands Architecture)    │
│  Animation:     Framer Motion 10.x                   │
│  Styling:       Tailwind CSS 3.x                     │
│  Icons:         Lucide React                         │
│  Fonts:         Google Fonts (Playfair, Cormorant)   │
└─────────────────────────────────────────────────────┘
```

### 2.2 Astro Islands 策略

```
Page (Static HTML)
├── Navbar (React Island - 需要 client:load)
├── Hero (React Island - 需要 client:visible 動畫)
├── Philosophy (React Island - 需要 client:visible 動畫)
├── Treatment (React Island - 需要 client:visible 動畫)
├── Stats (React Island - 需要 client:visible 動畫)
├── CTA (React Island - 需要 client:visible 動畫)
└── Footer (Static Astro Component)
```

### 2.3 效能目標

| 指標 | 目標值 |
|------|-------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## 3. 開發環境設定

### 3.1 專案初始化命令

```bash
# 建立 Astro 專案
npx create-astro@latest ./ --template basics --typescript strict --yes

# 安裝 React 整合
npx astro add react --yes

# 安裝 Tailwind CSS
npx astro add tailwind --yes

# 安裝動畫與圖示庫
npm install framer-motion lucide-react
```

### 3.2 必要配置檔案

| 檔案 | 用途 |
|------|------|
| `astro.config.mjs` | Astro 配置、React 整合設定 |
| `tailwind.config.mjs` | 顏色、字體、動畫擴展 |
| `tsconfig.json` | TypeScript 路徑別名 |

---

## 4. 專案結構規劃

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # 導覽列 (React)
│   │   ├── MobileMenu.tsx       # 手機選單 (React)
│   │   ├── Footer.astro         # 頁尾 (Astro)
│   │   └── Container.astro      # 主容器 (Astro)
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # 主視覺區塊 (React)
│   │   ├── PhilosophySection.tsx # 品牌理念 (React)
│   │   ├── TreatmentSection.tsx  # 獨家療程 (React)
│   │   ├── StatsSection.tsx      # 數據見證 (React)
│   │   └── CTASection.tsx        # 行動呼籲 (React)
│   │
│   ├── ui/
│   │   ├── BookingBar.tsx       # 懸浮預約選單 (React)
│   │   ├── FloatingButton.tsx   # 手機底部按鈕 (React)
│   │   ├── FeatureCard.tsx      # 功能卡片 (React)
│   │   └── AnimatedText.tsx     # 動畫文字 (React)
│   │
│   └── shared/
│       ├── SectionLabel.tsx     # 區塊標籤
│       ├── GlassCard.tsx        # 毛玻璃卡片
│       └── ImageFrame.tsx       # 圖片框架
│
├── layouts/
│   └── BaseLayout.astro         # 基礎佈局
│
├── pages/
│   └── index.astro              # 首頁
│
├── styles/
│   ├── global.css               # 全域樣式
│   └── fonts.css                # 字體載入
│
├── assets/
│   └── images/                  # 本地圖片
│
└── lib/
    ├── animations.ts            # Framer Motion 變體
    └── constants.ts             # 常數定義
```

---

## 5. 組件開發計畫

### 5.1 組件清單與優先順序

#### Phase 1: 基礎架構 (Day 1)

| 組件 | 類型 | 說明 | 難度 |
|------|------|------|------|
| `BaseLayout.astro` | Layout | HTML 基礎結構、Meta 標籤、字體載入 | ⭐ |
| `Container.astro` | Layout | 主卡片容器（圓角陰影效果） | ⭐⭐ |
| `global.css` | Style | 基礎樣式、CSS 變數、動畫定義 | ⭐⭐ |

#### Phase 2: 導覽系統 (Day 1-2)

| 組件 | 類型 | 說明 | 難度 |
|------|------|------|------|
| `Navbar.tsx` | React | 毛玻璃導覽列、桌機選單 | ⭐⭐⭐ |
| `MobileMenu.tsx` | React | 全螢幕遮罩選單、動畫過渡 | ⭐⭐⭐ |
| `FloatingButton.tsx` | React | 手機底部固定預約按鈕 | ⭐⭐ |

#### Phase 3: Hero 區塊 (Day 2)

| 組件 | 類型 | 說明 | 難度 |
|------|------|------|------|
| `HeroSection.tsx` | React | 全版背景、漸層遮罩、動畫文字 | ⭐⭐⭐⭐ |
| `BookingBar.tsx` | React | 懸浮預約搜尋欄（破格設計） | ⭐⭐⭐⭐ |
| `AnimatedText.tsx` | React | Slide Up / Fade In 文字動畫 | ⭐⭐ |

#### Phase 4: 內容區塊 (Day 3-4)

| 組件 | 類型 | 說明 | 難度 |
|------|------|------|------|
| `PhilosophySection.tsx` | React | 左右穿插佈局、特殊圓角圖片 | ⭐⭐⭐ |
| `TreatmentSection.tsx` | React | 正圓形圖片、懸浮標籤 | ⭐⭐⭐ |
| `StatsSection.tsx` | React | 雜誌風格數據、Hover 動畫 | ⭐⭐⭐ |
| `CTASection.tsx` | React | 非對稱式設計、雙按鈕 | ⭐⭐⭐ |

#### Phase 5: 頁尾與整合 (Day 5)

| 組件 | 類型 | 說明 | 難度 |
|------|------|------|------|
| `Footer.astro` | Astro | 極簡頁尾、社群連結 | ⭐ |
| `index.astro` | Page | 組裝所有組件、設定 Islands | ⭐⭐ |

### 5.2 關鍵組件規格

#### Navbar.tsx
```typescript
interface NavbarProps {
  menuItems: { label: string; href: string }[];
  ctaLabel: string;
}

// 功能需求:
// - 半透明毛玻璃效果 (backdrop-blur-md)
// - Hover 時背景透明度變化
// - 響應式：桌機顯示完整選單，手機顯示漢堡按鈕
// - 與 MobileMenu 狀態同步
```

#### HeroSection.tsx
```typescript
interface HeroSectionProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: string;
  description: string;
}

// 功能需求:
// - 全版背景圖 + 漸層遮罩
// - 文字入場動畫 (stagger)
// - 包含 BookingBar（桌機版）
// - 響應式高度：手機 100vh，桌機 900px
```

#### BookingBar.tsx
```typescript
interface BookingBarProps {
  treatments: string[];
  locations: string[];
}

// 功能需求:
// - 毛玻璃效果
// - 破格定位（負 margin）
// - 三個選擇欄位 + 圓形提交按鈕
// - 只在桌機版顯示
```

---

## 6. 樣式系統設計

### 6.1 Tailwind 擴展配置

```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 品牌色系
        brand: {
          light: '#F2F0EB',    // 外層背景
          surface: '#FAFAFA',   // 內容卡片
          accent: '#FB7185',    // 玫瑰強調色
          dark: '#171717',      // 深色區塊
        },
        // 中性色系
        neutral: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // 玫瑰色系
        rose: {
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2.5rem',  // 40px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

### 6.2 全域 CSS 變數

```css
/* src/styles/global.css */
:root {
  /* 間距系統 */
  --spacing-section: 5rem;
  --spacing-content: 2rem;
  
  /* 過渡時間 */
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
  
  /* 陰影 */
  --shadow-card: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-soft: 0 10px 40px rgba(0, 0, 0, 0.1);
  
  /* 毛玻璃 */
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-border: rgba(255, 255, 255, 0.4);
  --glass-blur: blur(16px);
}
```

---

## 7. 動畫策略

### 7.1 Framer Motion 變體庫

```typescript
// src/lib/animations.ts
import { Variants } from 'framer-motion';

// 淡入上滑動畫
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

// 交錯動畫容器
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2 
    }
  }
};

// 縮放動畫
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' 
    }
  }
};

// 圖片懸停效果
export const imageHover = {
  scale: 1.05,
  transition: { duration: 0.8, ease: 'easeOut' }
};

// 按鈕懸停效果
export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};
```

### 7.2 Scroll-Triggered 動畫

```typescript
// 使用 useInView 觸發動畫
import { useInView } from 'framer-motion';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      {children}
    </motion.section>
  );
}
```

---

## 8. 響應式設計策略

### 8.1 斷點定義

| 斷點 | 寬度 | 用途 |
|------|------|------|
| `sm` | 640px | 小型手機 → 大型手機 |
| `md` | 768px | 手機 → 平板 |
| `lg` | 1024px | 平板 → 桌機 |
| `xl` | 1280px | 標準桌機 |
| `2xl` | 1536px | 大螢幕 |

### 8.2 響應式策略對照表

| 元素 | 手機版 (<768px) | 桌機版 (≥768px) |
|------|-----------------|-----------------|
| 外層容器 | 無邊距、無圓角 | 8px 內縮、40px 圓角、陰影 |
| 導覽列 | 漢堡選單 | 完整水平選單 |
| Hero 高度 | `100vh` | `900px` |
| 懸浮預約欄 | 隱藏 | 顯示（破格設計） |
| 底部預約按鈕 | 固定顯示 | 隱藏 |
| 內容佈局 | 垂直堆疊 | 左右穿插 (Zig-Zag) |
| 統計數據 | 單欄堆疊 | 三欄並排 |

### 8.3 Mobile-First 開發原則

```css
/* 基礎樣式 (手機) */
.container {
  @apply w-full px-6;
}

/* 桌機樣式 */
@screen md {
  .container {
    @apply max-w-7xl px-16;
  }
}
```

---

## 9. 開發階段與里程碑

### 9.1 時程規劃 (5 個工作天)

```
Day 1: 專案設置與基礎架構
├── [ ] 初始化 Astro 專案
├── [ ] 配置 React、Tailwind、TypeScript
├── [ ] 建立專案結構
├── [ ] 設定 Tailwind 擴展配置
├── [ ] 建立 BaseLayout 與 Container
└── [ ] 設定 Google Fonts 載入

Day 2: 導覽與 Hero 區塊
├── [ ] 開發 Navbar 組件
├── [ ] 開發 MobileMenu 組件
├── [ ] 開發 HeroSection 組件
├── [ ] 開發 BookingBar 組件
├── [ ] 實作文字入場動畫
└── [ ] 測試響應式行為

Day 3: 內容區塊 (上)
├── [ ] 開發 PhilosophySection 組件
├── [ ] 實作特殊圓角圖片效果
├── [ ] 開發 TreatmentSection 組件
├── [ ] 實作圓形圖片遮罩
├── [ ] 加入懸浮標籤效果
└── [ ] 實作 Scroll 觸發動畫

Day 4: 內容區塊 (下) + 互動
├── [ ] 開發 StatsSection 組件
├── [ ] 實作 Hover 數據動畫
├── [ ] 開發 CTASection 組件
├── [ ] 開發 Footer 組件
├── [ ] 開發 FloatingButton 組件
└── [ ] 整合所有組件至首頁

Day 5: 優化與部署
├── [ ] 跨瀏覽器測試
├── [ ] 效能優化 (圖片壓縮、懶載入)
├── [ ] Lighthouse 評分調整
├── [ ] SEO Meta 標籤設定
├── [ ] 最終響應式測試
└── [ ] 部署至 Vercel/Netlify
```

### 9.2 驗收標準

| 項目 | 驗收標準 |
|------|---------|
| 視覺還原 | 與 code.md 原型視覺一致度 ≥ 95% |
| 響應式 | 320px ~ 1920px 無佈局破損 |
| 動畫流暢度 | 所有動畫 60fps 無卡頓 |
| 首屏載入 | LCP < 2.5s |
| 無障礙 | 通過 WCAG 2.1 AA 級別 |

---

## 10. 品質保證

### 10.1 測試清單

#### 功能測試
- [ ] 導覽列連結點擊正常
- [ ] 手機選單開關動畫正常
- [ ] 所有按鈕 Hover 效果正常
- [ ] Scroll 觸發動畫正常執行
- [ ] 圖片載入無破圖

#### 響應式測試
- [ ] iPhone SE (375px)
- [ ] iPhone 14 Pro (390px)
- [ ] iPad (768px)
- [ ] iPad Pro (1024px)
- [ ] Desktop (1440px)
- [ ] Wide Screen (1920px)

#### 瀏覽器相容性
- [ ] Chrome (最新版)
- [ ] Safari (最新版)
- [ ] Firefox (最新版)
- [ ] Edge (最新版)

#### 效能測試
- [ ] Lighthouse Performance ≥ 90
- [ ] 所有圖片使用 WebP 格式
- [ ] JavaScript Bundle < 100KB (gzipped)

### 10.2 上線前檢查清單

```markdown
## Pre-Launch Checklist

### SEO
- [ ] Title 標籤已設定
- [ ] Meta Description 已設定
- [ ] Open Graph 標籤已設定
- [ ] Canonical URL 已設定
- [ ] Sitemap.xml 已生成
- [ ] robots.txt 已配置

### 效能
- [ ] 圖片已壓縮優化
- [ ] 字體已預載入
- [ ] CSS/JS 已壓縮
- [ ] 啟用瀏覽器快取

### 安全性
- [ ] HTTPS 已啟用
- [ ] Content Security Policy 已設定

### 分析
- [ ] Google Analytics 已安裝
- [ ] 事件追蹤已設定
```

---

## 附錄 A: 圖片資源清單

| 用途 | Unsplash 來源 | 建議尺寸 |
|------|--------------|---------|
| Hero 背景 | photo-1616394584738-fc6e612e71b9 | 2400 × 1600 |
| 品牌理念主圖 | photo-1519823551278-64ac92734fb1 | 1200 × 1600 |
| 裝飾小圖 | photo-1605265058693-855115206973 | 400 × 400 |
| 療程區圖片 | photo-1544161515-4ab6ce6db874 | 1200 × 1200 |
| CTA 背景圖 | photo-1540555700478-4be289fbecef | 1600 × 1200 |

---

## 附錄 B: 常數定義

```typescript
// src/lib/constants.ts

export const BRAND = {
  name: 'LUMIÈRE',
  tagline: 'Spa',
  fullName: 'LUMIÈRE SPA',
  copyright: '© 2024 LUMIÈRE SPA. All Rights Reserved.',
};

export const NAV_ITEMS = [
  { label: 'The Brand', href: '#brand' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Line', href: '#' },
];

export const STATS = [
  { 
    number: '1500+', 
    title: 'Happy Clients', 
    description: '累積超過千位女性的見證，找回自信光采。' 
  },
  { 
    number: '98%', 
    title: 'Satisfaction', 
    description: '幾近完美的滿意度，來自對細節的極致苛求。' 
  },
  { 
    number: '12', 
    title: 'Years Experience', 
    description: '十年磨一劍，獨家研發的深層美胸手技。' 
  },
];

export const FEATURES = [
  { 
    icon: 'Sparkles', 
    title: 'Natural Oil', 
    description: '歐盟認證有機精油' 
  },
  { 
    icon: 'Heart', 
    title: 'Private Room', 
    description: '全獨立包廂隱私' 
  },
];

export const TREATMENT_BENEFITS = [
  '疏通乳腺堆積',
  '改善副乳問題',
  '提升胸型輪廓',
  '產後恢復彈性',
];
```

---

> **📝 備註**: 此計畫書將隨開發進程更新。如有任何疑問或變更需求，請於開發前確認。

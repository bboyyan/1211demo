// src/lib/animations.ts
import type { Variants } from 'framer-motion';

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
  transition: { duration: 0.8 }
};

// 按鈕懸停效果
export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

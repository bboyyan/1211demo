// src/components/sections/PhilosophySection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer, imageHover } from '@/lib/animations';
import { FEATURES } from '@/lib/constants';

const PhilosophySection: React.FC = () => {
  return (
    <motion.section
      className="flex flex-col lg:flex-row items-center gap-12 md:gap-20 mb-32"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* 圖片區 */}
      <motion.div
        className="w-full lg:w-1/2 -mt-10 md:-mt-48 relative"
        variants={fadeInUp}
      >
        <div className="relative h-[500px] md:h-[600px] w-full rounded-t-[200px] rounded-b-[20px] overflow-hidden shadow-2xl">
          <motion.img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2149&auto=format&fit=crop"
            alt="Elegant Woman"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            whileHover={imageHover}
          />
        </div>
        <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 rounded-full border-8 border-brand-surface overflow-hidden shadow-xl animate-pulse-slow">
          <img
            src="https://images.unsplash.com/photo-1605265058693-855115206973?q=80&w=2070&auto=format&fit=crop"
            alt="Oil"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* 文字區 */}
      <motion.div
        className="w-full lg:w-1/2 pt-0 md:pt-10"
        variants={fadeInUp}
      >
        <span className="text-rose-400 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
          Our Philosophy
        </span>
        <h2 className="text-4xl md:text-5xl font-display text-neutral-900 mb-8 leading-tight">
          The Art of <br />
          <span className="italic text-rose-400">Sculpting Curves</span>
        </h2>
        <p className="text-neutral-500 text-lg leading-loose font-light mb-8 font-body">
          我們相信，美是一種流動的能量。LUMIÈRE 結合傳統中醫經絡智慧與現代解剖學，獨創「深層律動手技」。
        </p>
        <div className="grid grid-cols-2 gap-6 mb-10">
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon === 'Sparkles' ? Sparkles : Heart;
            return (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <IconComponent size={16} className="text-rose-400" />
                  <h4 className="font-bold text-sm uppercase">{feature.title}</h4>
                </div>
                <p className="text-neutral-400 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <button className="group flex items-center gap-4 text-neutral-900 text-sm font-bold tracking-[0.2em] uppercase hover:text-rose-500 transition-colors">
          Discover Our Story
          <div className="w-12 h-[1px] bg-neutral-300 group-hover:bg-rose-500 transition-colors"></div>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default PhilosophySection;

// src/components/sections/StatsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { STATS } from '@/lib/constants';

const StatsSection: React.FC = () => {
  return (
    <motion.section
      className="mb-20 border-t border-neutral-200 pt-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <motion.div variants={fadeInUp}>
          <span className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
            Our Impact
          </span>
          <h3 className="text-4xl font-display text-neutral-800">
            Results that Speak
          </h3>
        </motion.div>
        <motion.div className="hidden md:block" variants={fadeInUp}>
          <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all">
            View All Reviews
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l-0 md:border-l border-neutral-200">
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            className="border-r-0 md:border-r border-b border-neutral-200 p-8 md:p-10 hover:bg-white transition-colors group"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h4
              className="text-5xl md:text-6xl font-body text-neutral-300 group-hover:text-rose-400 transition-colors mb-4"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {stat.number}
            </motion.h4>
            <p className="text-neutral-900 font-bold tracking-widest uppercase text-xs mb-2">
              {stat.title}
            </p>
            <p className="text-neutral-500 text-xs font-light leading-relaxed">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Only Button */}
      <motion.div
        className="mt-8 md:hidden text-center"
        variants={fadeInUp}
      >
        <button className="border border-neutral-300 rounded-full px-8 py-3 text-xs tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all w-full">
          View All Reviews
        </button>
      </motion.div>
    </motion.section>
  );
};

export default StatsSection;

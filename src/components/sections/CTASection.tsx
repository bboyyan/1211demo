// src/components/sections/CTASection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const CTASection: React.FC = () => {
  return (
    <motion.section
      className="relative rounded-[30px] overflow-hidden bg-neutral-900 text-white min-h-[400px] flex flex-col md:flex-row mb-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* 左側圖片 */}
      <motion.div
        className="w-full md:w-1/2 relative h-64 md:h-auto"
        variants={fadeInUp}
      >
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
          alt="Spa Atmosphere"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
      </motion.div>

      {/* 右側文字內容 - 靠右對齊的視覺 */}
      <motion.div
        className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start relative z-10 bg-neutral-900 md:bg-transparent"
        variants={fadeInUp}
      >
        <span className="text-rose-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
          Book Appointment
        </span>
        <h3 className="text-3xl md:text-5xl font-display italic mb-6 leading-tight">
          Ready to start your <br/> transformation?
        </h3>
        <p className="text-neutral-400 max-w-md mb-10 font-body text-lg">
          給自己一個下午的時間，享受一場身心靈的極致寵愛。名額有限，建議提前一週預約。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button className="bg-white text-neutral-900 px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-rose-200 transition-colors text-center">
            Book Now
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white/10 transition-colors text-center">
            Contact Us
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;

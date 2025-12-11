// src/components/ui/BookingBar.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BookingBarProps {
  treatments?: string[];
  locations?: string[];
  className?: string;
}

const BookingBar: React.FC<BookingBarProps> = ({
  treatments = ["Full Body & Bust Care"],
  locations = ["Taipei Flagship"],
  className = ""
}) => {
  return (
    <div className={`bg-white/80 backdrop-blur-2xl p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] justify-between items-center max-w-5xl border border-white/40 ${className}`}>
      <div className="flex">
        <div className="flex-1 px-8 py-5 group cursor-pointer border-r border-neutral-200/50">
          <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">Treatment</div>
          <div className="text-neutral-800 font-display text-lg italic group-hover:text-rose-500 transition-colors">
            {treatments[0]}
          </div>
        </div>
        <div className="flex-1 px-8 py-5 group cursor-pointer border-r border-neutral-200/50">
          <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">Location</div>
          <div className="text-neutral-800 font-display text-lg italic group-hover:text-rose-500 transition-colors">
            {locations[0]}
          </div>
        </div>
        <div className="flex-1 px-8 py-5 group cursor-pointer">
          <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-bold">Date</div>
          <div className="text-neutral-800 font-display text-lg italic group-hover:text-rose-500 transition-colors">
            Select a Date
          </div>
        </div>
      </div>
      <button className="bg-neutral-900 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-300 shadow-lg transform hover:scale-105 ml-4">
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default BookingBar;

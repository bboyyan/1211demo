// src/components/ui/FloatingButton.tsx
import React from 'react';
import { Calendar } from 'lucide-react';

interface FloatingButtonProps {
  onClick?: () => void;
  className?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  className = ""
}) => {
  return (
    <div className={`md:hidden fixed bottom-6 left-6 right-6 z-50 ${className}`}>
      <button
        className="w-full bg-rose-500 text-white py-4 rounded-full shadow-xl font-bold tracking-widest uppercase text-sm flex items-center justify-center gap-2 hover:bg-rose-600 transition-colors"
        onClick={onClick}
      >
        <Calendar size={18} />
        Book Appointment
      </button>
    </div>
  );
};

export default FloatingButton;

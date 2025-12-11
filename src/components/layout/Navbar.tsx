// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

interface NavbarProps {
  menuItems?: { label: string; href: string }[];
  ctaLabel?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  menuItems = NAV_ITEMS,
  ctaLabel = "Book Now"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-[0.15em] drop-shadow-sm z-50">
          LUMIÈRE <span className="text-rose-200 font-light italic">Spa</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-white/5 backdrop-blur-md px-10 py-4 rounded-full border border-white/10 space-x-10 items-center hover:bg-white/10 transition-all duration-300">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-white/90 hover:text-white transition-colors tracking-[0.2em] uppercase font-sans"
            >
              {item.label}
            </a>
          ))}
          <div className="w-px h-3 bg-white/20 mx-2"></div>
          <button className="text-white/90 text-xs font-bold hover:text-white transition-colors tracking-widest uppercase">
            {ctaLabel}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 relative p-2 bg-white/10 backdrop-blur rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-display text-white tracking-widest italic"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

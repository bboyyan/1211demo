// src/components/layout/MobileMenu.tsx
import React from 'react';
import { NAV_ITEMS } from '@/lib/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems?: { label: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  menuItems = NAV_ITEMS
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-2xl font-display text-white tracking-widest italic hover:text-rose-200 transition-colors"
          onClick={onClose}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default MobileMenu;

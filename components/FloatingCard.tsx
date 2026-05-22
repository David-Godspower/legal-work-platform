'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  color: 'blue' | 'orange' | 'green' | 'purple' | 'dark' | 'slate';
  rotation: string;
  icon: ReactNode;
  label: string;
  xOffset: 'left' | 'right';
  yOffset: number;
  delay: number;
  width?: string; 
}

const colorStyles = {
  blue: 'bg-white border-blue-100 text-blue-600',
  orange: 'bg-white border-orange-100 text-orange-600',
  green: 'bg-white border-green-100 text-green-600',
  purple: 'bg-white border-purple-100 text-purple-600',
  dark: 'bg-slate-900 border-slate-800 text-white',
  slate: 'bg-white border-slate-100 text-slate-700',
};

export default function FloatingCard({ 
  color, rotation, icon, label, xOffset, yOffset, delay, width = "w-48" 
}: FloatingCardProps) {
  const duration = 3 + Math.random() * 2;
  const floatY = [0, -10, 0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: floatY, scale: 1 }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: duration, repeat: Infinity, ease: 'easeInOut', delay: delay },
      }}
      whileHover={{ scale: 1.05, zIndex: 50 }}
      className={`absolute z-10 ${xOffset === 'left' ? 'left-[5%]' : 'right-[5%]'} cursor-pointer`}
      style={{ top: `${yOffset * 100}%` }}
    >
      <div className={`
        flex items-center gap-3 px-6 py-4 rounded-2xl 
        shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
        border ${colorStyles[color]} ${rotation} ${width}
      `}>
        <div className="shrink-0">{icon}</div>
        <span className="font-semibold text-sm whitespace-nowrap">{label}</span>
      </div>
    </motion.div>
  );
}
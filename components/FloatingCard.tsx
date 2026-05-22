'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface FloatingCardProps {
  color: 'blue' | 'orange' | 'tasks-dark' | 'docs-dark' | 'skeleton';
  rotation: number; 
  icon: ReactNode;
  label: string;
  leftOffset: string;
  topOffset: string;  
  delay: number;
  customWidth?: string;
}

const colorStyles = {
  blue: 'bg-[#1d4ed8] text-white border-transparent px-8 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]',
  orange: 'bg-[#ea580c] text-white border-transparent px-8 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]',
  'tasks-dark': 'bg-[#1e1b4b] text-[#f97316] border-transparent px-8 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]',
  'docs-dark': 'bg-[#111827] text-[#f97316] border-transparent px-8 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]',
  skeleton: 'bg-blue-100/40 dark:bg-slate-800/30 border-transparent h-14 md:h-16 pointer-events-none',
};

export default function FloatingCard({
  color,
  rotation,
  icon,
  label,
  leftOffset,
  topOffset,
  delay,
  customWidth,
}: FloatingCardProps) {
  const [duration, setDuration] = useState(4);

  useEffect(() => {
    setDuration(color === 'skeleton' ? 5 + Math.random() * 2 : 3.5 + Math.random() * 1.5);
  }, [color]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotation, y: 0 }}
      animate={{ 
        opacity: color === 'skeleton' ? 1 : 1, 
        scale: 1,
        y: color === 'skeleton' ? [0, -4, 0] : [0, -10, 0] 
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: duration, repeat: Infinity, ease: 'easeInOut', delay: color === 'skeleton' ? delay + 0.5 : delay },
      }}
      whileHover={color !== 'skeleton' ? { scale: 1.05, zIndex: 50 } : undefined}
      className={`absolute ${color === 'skeleton' ? 'z-0' : 'z-10 cursor-pointer'} select-none origin-center`}
      style={{ 
        left: leftOffset, 
        top: topOffset,
      }}
    >
      <div className={`
        flex items-center gap-3 rounded-full border
        ${colorStyles[color]}
        ${customWidth || (color === 'skeleton' ? 'w-72 md:w-96' : '')}
      `}>
        {icon && <div className="shrink-0 transform scale-110">{icon}</div>}
        {label && <span className="font-semibold text-lg tracking-wide whitespace-nowrap">{label}</span>}
      </div>
    </motion.div>
  );
}

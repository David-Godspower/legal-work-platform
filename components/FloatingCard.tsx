'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface FloatingCardProps {
  color: 'blue' | 'orange' | 'tasks-dark' | 'docs-dark';
  rotation: number; 
  icon: ReactNode;
  label: string;
  leftOffset: string;
  topOffset: string;  
  delay: number;
}
const colorStyles = {
  blue: 'bg-[#1d4ed8] text-white border-transparent',
  orange: 'bg-[#ea580c] text-white border-transparent',
  'tasks-dark': 'bg-[#1e1b4b] text-[#f97316] border-transparent',
  'docs-dark': 'bg-[#111827] text-[#f97316] border-transparent',
};

export default function FloatingCard({
  color,
  rotation,
  icon,
  label,
  leftOffset,
  topOffset,
  delay,
}: FloatingCardProps) {
  const [duration, setDuration] = useState(4);

  useEffect(() => {
    setDuration(3.5 + Math.random() * 1.5);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: rotation, y: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0] 
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { duration: duration, repeat: Infinity, ease: 'easeInOut', delay: delay },
      }}
      whileHover={{ scale: 1.05, zIndex: 50 }}
      className="absolute z-10 cursor-pointer select-none origin-center"
      style={{ 
        left: leftOffset, 
        top: topOffset,
      }}
    >
      <div className={`
        flex items-center gap-3 px-8 py-5 rounded-full
        shadow-[0_20px_40px_rgba(0,0,0,0.12)] 
        border ${colorStyles[color]}
      `}>
        <div className="shrink-0 transform scale-110">{icon}</div>
        <span className="font-semibold text-lg tracking-wide whitespace-nowrap">{label}</span>
      </div>
    </motion.div>
  );
}

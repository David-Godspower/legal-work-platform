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
}

const colorStyles = {
  blue: 'bg-blue-50/90 border-blue-200 text-blue-700 dark:bg-blue-900/40 dark:border-blue-800 dark:text-blue-300',
  orange: 'bg-orange-50/90 border-orange-200 text-orange-700 dark:bg-orange-900/40 dark:border-orange-800 dark:text-orange-300',
  green: 'bg-green-50/90 border-green-200 text-green-700 dark:bg-green-900/40 dark:border-green-800 dark:text-green-300',
  purple: 'bg-purple-50/90 border-purple-200 text-purple-700 dark:bg-purple-900/40 dark:border-purple-800 dark:text-purple-300',
  dark: 'bg-gray-800/90 border-gray-700 text-white dark:bg-gray-800 dark:border-gray-700',
  slate: 'bg-slate-100/90 border-slate-200 text-slate-700 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-300',
};

export default function FloatingCard({
  color,
  rotation,
  icon,
  label,
  xOffset,
  yOffset,
  delay,
}: FloatingCardProps) {
  const getPosition = () => {
    const leftPos = xOffset === 'left' ? '3%' : 'auto';
    const rightPos = xOffset === 'right' ? '3%' : 'auto';
    const topPos = `${yOffset * 100}%`;
    return { left: leftPos, right: rightPos, top: topPos };
  };

  const position = getPosition();
  const floatY = [0, -8, 0];
  const duration = 3 + Math.random() * 2;
  const delayFloat = delay * 0.5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
      }}
      transition={{ 
        duration: 0.4, 
        delay, 
        ease: 'easeOut',
        y: {
          duration: duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delayFloat,
        }
      }}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 30 }}
      className={`absolute z-10 ${rotation} cursor-pointer transition-all duration-300`}
      style={position}
    >
      <div
        className={`flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium shadow-md backdrop-blur-sm ${colorStyles[color]}`}
      >
        <span className="opacity-80">{icon}</span>
        <span>{label}</span>
      </div>
    </motion.div>
  );
}
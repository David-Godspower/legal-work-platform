'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';
import ThemeToggle from './ThemeToggle';
import { Gavel, FileText, CheckSquare, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-blue-200/40 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[5%] h-96 w-96 rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:items-center min-h-[calc(100vh-6rem)]">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 space-y-6 pt-8 lg:pt-0"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              A single platform to manage
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                every part
              </span>{' '}
              of your legal work
            </h1>
            
            <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Track matters, coordinate schedules, manage clients, centralize documents,
              and handle communication — all in one system.
            </p>
          </motion.div>

          <div className="relative flex-1 w-full h-[550px] lg:h-[600px]">
            
            <FloatingCard 
              color="orange" 
              rotation={-12} 
              icon={<Gavel size={20} />} 
              label="Matters" 
              leftOffset="0%" 
              topOffset="32%" 
              delay={0.1} 
            />

            <FloatingCard 
              color="blue" 
              rotation={14} 
              icon={<ShieldCheck size={20} />} 
              label="Billing" 
              leftOffset="38%" 
              topOffset="8%" 
              delay={0.2} 
            />

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95, rotate: 2 }}
              animate={{ 
                opacity: 1, 
                y: [0, -6, 0], 
                scale: 1 
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.3 },
                scale: { duration: 0.5, delay: 0.3 },
                y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.04, zIndex: 40 }}
              className="absolute left-[32%] top-[40%] z-20 w-80 rounded-2xl border border-indigo-200/50 bg-indigo-100/80 p-4 shadow-xl backdrop-blur-md dark:bg-slate-900/90 dark:border-slate-800"
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-10 bg-orange-500 rounded-full shrink-0 mt-0.5" />
                
                <div className="h-9 w-9 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden shrink-0 flex items-center justify-center text-sm">
                  👤
                </div>
                
                <div className="flex flex-col min-w-0">
                  <p className="font-bold text-xs text-gray-900 dark:text-white truncate">John Doe - Portal</p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300 mt-0.5 line-clamp-2 leading-normal">
                    Hey! Could you please review a document for me?
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">MAT-2233 • 2h ago</p>
                </div>
              </div>
            </motion.div>

            <FloatingCard 
              color="tasks-dark" 
              rotation={-5} 
              icon={<CheckSquare size={20} />} 
              label="Tasks" 
              leftOffset="12%" 
              topOffset="68%" 
              delay={0.4} 
            />
            <FloatingCard 
              color="docs-dark" 
              rotation={-8} 
              icon={<FileText size={20} />} 
              label="Documents" 
              leftOffset="56%" 
              topOffset="62%" 
              delay={0.5} 
            />

          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50"><ThemeToggle /></div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingCard from './FloatingCard';
import ThemeToggle from './ThemeToggle';
import { Gavel, FileText, CheckSquare, Clock, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-[10%] h-72 w-72 rounded-full bg-blue-200/40 dark:bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-[5%] h-96 w-96 rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:items-center">
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

          <div className="relative flex-1">
            <div className="relative h-[600px] w-full">
              <FloatingCard color="blue" rotation="-rotate-6" icon={<Gavel size={16} />} label="Matters" xOffset="left" yOffset={0.15} delay={0.1} />
              <FloatingCard color="orange" rotation="rotate-3" icon={<FileText size={16} />} label="Documents" xOffset="right" yOffset={0.25} delay={0.2} />
              <FloatingCard color="green" rotation="-rotate-2" icon={<CheckSquare size={16} />} label="Tasks" xOffset="left" yOffset={0.55} delay={0.3} />
              <FloatingCard color="purple" rotation="rotate-5" icon={<Clock size={16} />} label="Billing" xOffset="right" yOffset={0.65} delay={0.4} />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-1/2 top-1/2 z-20 w-80 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">JD</div>
                  <div>
                    <p className="font-semibold text-gray-900">John Doe - Portal</p>
                    <p className="text-xs text-gray-500">MAT-2233 • 2h ago</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">Hey! Could you please review a document for me?</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50"><ThemeToggle /></div>
    </section>
  );
}
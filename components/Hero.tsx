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
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-200/20 dark:bg-purple-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 space-y-6 pt-8 lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              <span className="mr-1.5">⚖️</span> All-in-one legal platform
            </motion.div>
            
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
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-gray-900 px-8 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Start free trial →
            </motion.button>
          </motion.div>

          <div className="relative flex-1">
            <div className="relative h-[500px] w-full sm:h-[550px] lg:h-[600px]">
              <FloatingCard
                color="blue"
                rotation="-rotate-6"
                icon={<Gavel size={16} />}
                label="Matters"
                xOffset="left"
                yOffset={0.08}
                delay={0}
              />
              <FloatingCard
                color="orange"
                rotation="rotate-3"
                icon={<FileText size={16} />}
                label="Documents"
                xOffset="right"
                yOffset={0.2}
                delay={0.1}
              />
              <FloatingCard
                color="green"
                rotation="-rotate-2"
                icon={<CheckSquare size={16} />}
                label="Tasks"
                xOffset="left"
                yOffset={0.32}
                delay={0.2}
              />
              <FloatingCard
                color="purple"
                rotation="rotate-5"
                icon={<Clock size={16} />}
                label="Billing"
                xOffset="right"
                yOffset={0.44}
                delay={0.3}
              />
              <FloatingCard
                color="dark"
                rotation="rotate-8"
                icon={<Users size={16} />}
                label="Clients"
                xOffset="left"
                yOffset={0.56}
                delay={0.4}
              />
              <FloatingCard
                color="slate"
                rotation="-rotate-4"
                icon={<Briefcase size={16} />}
                label="Calendar"
                xOffset="right"
                yOffset={0.68}
                delay={0.5}
              />

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="absolute left-1/2 top-1/2 z-20 w-72 -translate-x-1/2 -translate-y-1/2 sm:w-80"
              >
                <div className="rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm transition-all hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900/95">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                        <span className="text-sm font-bold text-white">JD</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          John Doe - Portal
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          MAT-2233
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                      2h ago
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                    Hey! Could you please review a document for me?
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                      Review request
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-blue-100/50 blur-2xl dark:bg-blue-500/5"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-100/50 blur-2xl dark:bg-purple-500/5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </section>
  );
}
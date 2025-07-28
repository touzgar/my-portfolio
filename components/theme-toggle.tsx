"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Palette, Sparkles } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={toggleTheme}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Main Toggle Container */}
        <div className="relative w-20 h-10 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-purple-600 dark:to-blue-500 rounded-full shadow-lg overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-indigo-600 dark:to-purple-700"
            animate={{
              opacity: theme === 'light' ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Sliding Circle */}
          <motion.div
            className="absolute top-1 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
            animate={{
              x: theme === 'light' ? 2 : 46,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="w-5 h-5 text-yellow-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Moon className="w-5 h-5 text-blue-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sparkle Effects */}
          <AnimatePresence>
            {theme === 'light' && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {theme === 'dark' && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-md"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Theme Label */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </motion.div>
      </motion.button>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-purple-400 rounded-full"
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;

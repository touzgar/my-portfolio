"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Code, Mail, Briefcase, Menu, X } from "lucide-react";

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navItems = [
    { id: "home", icon: Home, label: "Home", color: "from-blue-500 to-cyan-500" },
    { id: "about", icon: User, label: "About", color: "from-purple-500 to-pink-500" },
    { id: "skills", icon: Code, label: "Skills", color: "from-green-500 to-emerald-500" },
    { id: "projects", icon: Briefcase, label: "Projects", color: "from-orange-500 to-red-500" },
    { id: "contact", icon: Mail, label: "Contact", color: "from-indigo-500 to-purple-500" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: scrollY > 100 ? 0.9 : 1
        }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
      >
        <motion.div
          className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg"
          animate={{
            boxShadow: scrollY > 100 ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
          }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                activeSection === item.id
                  ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <item.icon className="h-5 w-5" />

              {/* Enhanced Tooltip */}
              <motion.div
                className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg"
                initial={{ scale: 0.8, y: 10 }}
                whileHover={{ scale: 1, y: 0 }}
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
              </motion.div>

              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed top-6 right-6 z-50 md:hidden"
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsExpanded(false);
                    }}
                    className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                        : "text-slate-700 dark:text-slate-300 hover:bg-white/20"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default FloatingNav;

"use client";

import { motion } from "framer-motion";
import { Code, Globe, Database, Smartphone } from "lucide-react";

interface ProjectPlaceholderProps {
  title: string;
  tech: string[];
}

const ProjectPlaceholder = ({ title, tech }: ProjectPlaceholderProps) => {
  const getIcon = () => {
    if (tech.some(t => t.toLowerCase().includes('next') || t.toLowerCase().includes('react') || t.toLowerCase().includes('angular'))) {
      return <Globe className="h-12 w-12" />;
    }
    if (tech.some(t => t.toLowerCase().includes('java') || t.toLowerCase().includes('python') || t.toLowerCase().includes('c#'))) {
      return <Code className="h-12 w-12" />;
    }
    if (tech.some(t => t.toLowerCase().includes('sql') || t.toLowerCase().includes('database'))) {
      return <Database className="h-12 w-12" />;
    }
    return <Smartphone className="h-12 w-12" />;
  };

  const getGradient = () => {
    if (tech.some(t => t.toLowerCase().includes('next') || t.toLowerCase().includes('react'))) {
      return "from-blue-400 via-cyan-500 to-blue-600";
    }
    if (tech.some(t => t.toLowerCase().includes('angular'))) {
      return "from-red-400 via-pink-500 to-red-600";
    }
    if (tech.some(t => t.toLowerCase().includes('java'))) {
      return "from-orange-400 via-yellow-500 to-orange-600";
    }
    if (tech.some(t => t.toLowerCase().includes('python'))) {
      return "from-green-400 via-emerald-500 to-green-600";
    }
    if (tech.some(t => t.toLowerCase().includes('c#'))) {
      return "from-purple-400 via-violet-500 to-purple-600";
    }
    return "from-slate-400 via-gray-500 to-slate-600";
  };

  return (
    <div className={`w-full h-48 bg-gradient-to-br ${getGradient()} flex items-center justify-center relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-24 h-24 bg-white/15 rounded-full blur-lg"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full shadow-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, 5, 0],
          opacity: [0.3, 0.9, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-8 right-8 w-2 h-2 bg-white/40 rounded-full shadow-md"
        animate={{
          y: [0, -20, 0],
          x: [0, -8, 0],
          opacity: [0.2, 0.8, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-6 left-8 w-4 h-4 bg-white/25 rounded-full shadow-lg"
        animate={{
          y: [0, -12, 0],
          x: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div
        className="absolute top-1/2 right-4 w-1 h-1 bg-white/50 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main Icon with Enhanced Animation */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.2,
          rotate: 10,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="text-white/90 drop-shadow-lg"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {getIcon()}
        </motion.div>

        {/* Icon Glow Effect */}
        <motion.div
          className="absolute inset-0 text-white/20 blur-sm"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {getIcon()}
        </motion.div>
      </motion.div>

      {/* Tech Stack Indicators */}
      <div className="absolute top-2 left-2 flex flex-wrap gap-1">
        {tech.slice(0, 3).map((techItem, index) => (
          <motion.div
            key={techItem}
            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {techItem}
          </motion.div>
        ))}
      </div>

      {/* Enhanced Project Title Overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-sm p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-white text-sm font-semibold truncate mb-1">{title}</p>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/80 text-xs">Active Project</span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPlaceholder;

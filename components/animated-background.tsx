"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950/95 dark:via-blue-950/40 dark:to-purple-950/40" />
      
      {/* Static Gradient - More performant */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

      {/* Reduced Floating Orbs - Only 3 for better performance */}
      {[...Array(3)].map((_, i) => {
        const positions = [
          { x: 20, y: 30 },
          { x: 70, y: 20 },
          { x: 40, y: 70 }
        ];
        const pos = positions[i];

        return (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full blur-2xl opacity-15"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
              }, transparent)`,
              willChange: "transform"
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
          />
        );
      })}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

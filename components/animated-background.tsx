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
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30" />
      
      {/* Animated Mesh Gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 60% 20%, #ec4899 0%, transparent 50%)",
            "radial-gradient(circle at 40% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 60% 80%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 20% 50%, #ec4899 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 40% 80%, #ec4899 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Orbs */}
      {[...Array(6)].map((_, i) => {
        const positions = [
          { x: 10, y: 20 },
          { x: 80, y: 10 },
          { x: 20, y: 70 },
          { x: 70, y: 80 },
          { x: 50, y: 30 },
          { x: 30, y: 60 }
        ];
        const pos = positions[i];
        
        return (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full blur-3xl opacity-20"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899'
              }, transparent)`
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 50, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
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

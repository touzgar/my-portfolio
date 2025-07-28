"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);

  // Memoize particles to prevent recreation on every render
  const particles = useMemo(() => {
    const colors = ["#3B82F6", "#8B5CF6", "#06B6D4"];
    const newParticles: Particle[] = [];

    // Reduced from 20 to 8 particles for better performance
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 2, // Smaller particles
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 8 + 12, // Slower animations
        delay: Math.random() * 3,
      });
    }
    return newParticles;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-10" // Reduced opacity
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: "transform", // Optimize for animations
          }}
          animate={{
            y: [0, -50, 0], // Reduced movement range
            scale: [1, 1.2, 1], // Reduced scale change
            opacity: [0.1, 0.3, 0.1], // Lower opacity range
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear", // More performant easing
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;

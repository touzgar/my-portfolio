"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const createParticles = () => {
      if (typeof window === 'undefined') return;

      const newParticles: Particle[] = [];
      // Use deterministic positions to avoid hydration mismatch
      for (let i = 0; i < 50; i++) {
        const angle = (i / 50) * Math.PI * 2;
        const radius = 100 + (i % 10) * 50;
        newParticles.push({
          id: i,
          x: window.innerWidth / 2 + Math.cos(angle) * radius,
          y: window.innerHeight / 2 + Math.sin(angle) * radius,
          size: 1 + (i % 3),
          speedX: (Math.cos(angle) * 0.2) + (i % 2 === 0 ? 0.1 : -0.1),
          speedY: (Math.sin(angle) * 0.2) + (i % 3 === 0 ? 0.1 : -0.1),
          opacity: 0.1 + (i % 5) * 0.1,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener("resize", createParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", createParticles);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            particle.speedX *= -1;
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            particle.speedY *= -1;
          }

          // Keep particles within bounds
          newX = Math.max(0, Math.min(window.innerWidth, newX));
          newY = Math.max(0, Math.min(window.innerHeight, newY));

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => {
        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        );
        const isNearMouse = distanceToMouse < 100;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: isNearMouse ? particle.opacity * 2 : particle.opacity,
            }}
            animate={{
              scale: isNearMouse ? 1.5 : 1,
              opacity: isNearMouse ? particle.opacity * 2 : particle.opacity,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        );
      })}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.map((particle, index) => {
          return particles.slice(index + 1).map((otherParticle, otherIndex) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 150) {
              return (
                <motion.line
                  key={`${index}-${otherIndex}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={otherParticle.x}
                  y2={otherParticle.y}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  opacity={0.1 - distance / 1500}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              );
            }
            return null;
          });
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ParticleBackground;

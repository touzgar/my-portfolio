"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "Java", level: 95, color: "from-orange-500 to-red-600", icon: "☕" },
  { name: "Spring Boot", level: 90, color: "from-green-500 to-emerald-600", icon: "🍃" },
  { name: "Next.js", level: 88, color: "from-black to-gray-800", icon: "⚡" },
  { name: "React", level: 85, color: "from-blue-500 to-cyan-600", icon: "⚛️" },
  { name: "TypeScript", level: 82, color: "from-blue-600 to-blue-800", icon: "📘" },
  { name: "Python", level: 80, color: "from-yellow-500 to-blue-600", icon: "🐍" },
  { name: "Django", level: 78, color: "from-green-600 to-green-800", icon: "🎯" },
  { name: "C#", level: 75, color: "from-purple-600 to-purple-800", icon: "#️⃣" },
  { name: "Angular", level: 72, color: "from-red-600 to-red-800", icon: "🅰️" },
  { name: "MySQL", level: 85, color: "from-blue-600 to-orange-500", icon: "🗄️" },
  { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-900", icon: "🐘" },
  { name: "SQL", level: 88, color: "from-gray-600 to-gray-800", icon: "📊" }
];

const AnimatedSkills = () => {
  const [mounted, setMounted] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 }
          }}
          onHoverStart={() => setHoveredSkill(skill.name)}
          onHoverEnd={() => setHoveredSkill(null)}
          className="relative group cursor-pointer"
        >
          {/* Skill Card */}
          <div className="relative p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
            
            {/* Animated Background */}
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              animate={{
                scale: hoveredSkill === skill.name ? [1, 1.02, 1] : 1,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Icon */}
            <motion.div
              className="text-4xl mb-3 text-center"
              animate={{
                rotate: hoveredSkill === skill.name ? [0, 10, -10, 0] : 0,
                scale: hoveredSkill === skill.name ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
            
            {/* Skill Name */}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white text-center mb-3">
              {skill.name}
            </h3>
            
            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1 + 0.5,
                    ease: "easeOut"
                  }}
                />
              </div>
              
              {/* Percentage */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + 1.5 
                }}
                className="absolute -top-8 right-0"
              >
                <Badge 
                  variant="secondary" 
                  className={`text-xs font-bold bg-gradient-to-r ${skill.color} text-white border-0`}
                >
                  {skill.level}%
                </Badge>
              </motion.div>
            </div>
            
            {/* Floating Particles */}
            {hoveredSkill === skill.name && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ 
                      opacity: 0,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                      scale: 0
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      y: -50,
                      scale: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                    style={{
                      left: `${20 + i * 30}%`,
                      top: "50%"
                    }}
                  />
                ))}
              </>
            )}
          </div>
          
          {/* Glow Effect */}
          <motion.div
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
            animate={{
              scale: hoveredSkill === skill.name ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSkills;

"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowDown, Code, Sparkles, Zap, Rocket, Linkedin } from "lucide-react";
import Image from "next/image";


const InnovativeHero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const typingTexts = [
    "Building innovative web solutions",
    "Crafting seamless user experiences",
    "Developing scalable applications",
    "Creating digital masterpieces"
  ];

  // Only initialize scroll after component is mounted
  const { scrollYProgress } = useScroll({
    target: mounted ? containerRef : undefined,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const words = ["Full Stack Developer", "Problem Solver", "Code Enthusiast", "Tech Innovator"];
  const skills = ["Java Spring Boot", "Next.js", "Python Django", "C# .NET", "Angular"];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={mounted ? { y, opacity, scale } : {}}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rotate-45 opacity-20 blur-lg"
          animate={{
            rotate: [45, 225, 45],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg opacity-20 blur-md"
          animate={{
            rotate: [0, 360],
            x: [0, 120, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 dark:border-blue-800"
            >
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Welcome to my digital space
              </span>
            </motion.div>

            {/* Name with Animated Background */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Ghaith
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">Slama</span>
              </h1>
              
              {/* Animated underline */}
              <motion.div
                className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              className="text-lg text-slate-600 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-medium"
                >
                  {typingTexts[currentText]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Skills Badges */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => {
                  // Download your actual CV file
                  const link = document.createElement('a');
                  link.href = '/Ghaith_Slama_CV.pdf';
                  link.download = 'Ghaith_Slama_CV.pdf';
                  link.target = '_blank';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                onClick={() => {
                  // Open LinkedIn profile directly
                  window.open('https://www.linkedin.com/in/slama-ghaith-141aaa29b/', '_blank');
                }}
              >
                <Linkedin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Innovative Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Simplified Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl opacity-60" />

              {/* Single Rotating Border - More performant */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900"></div>
              </motion.div>

              {/* Main Image Container with 3D Effect */}
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden shadow-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 15,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image with Overlay Effects */}
                <div className="relative w-full h-full">
                  <Image
                    src="/profile.jpeg"
                    alt="Ghaith Slama"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Holographic Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)",
                        "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
                        "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(147, 51, 234, 0.1) 100%)",
                        "linear-gradient(315deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Scanning Line Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent h-8"
                    animate={{ y: [-32, 320, -32] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              {[
                { icon: Code, color: "from-blue-500 to-purple-600", position: "-top-6 -right-6", delay: 0 },
                { icon: Rocket, color: "from-green-500 to-teal-600", position: "-bottom-6 -left-6", delay: 1 },
                { icon: Zap, color: "from-yellow-500 to-orange-600", position: "-top-6 -left-6", delay: 2 },
                { icon: Sparkles, color: "from-pink-500 to-red-600", position: "-bottom-6 -right-6", delay: 3 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} w-14 h-14 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    delay: item.delay
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </motion.div>
              ))}

              {/* Orbiting Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: `${120 + i * 20}px 0px`
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
              Discover More
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="h-6 w-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InnovativeHero;

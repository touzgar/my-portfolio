"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, MessageCircle, X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:ghaithslama115@gmail.com", "_blank"),
      color: "from-blue-500 to-blue-600",
      delay: 0.1
    },
    {
      icon: Phone,
      label: "Call",
      action: () => window.open("tel:+21629291484", "_blank"),
      color: "from-green-500 to-green-600",
      delay: 0.2
    },
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open("https://github.com/touzgar", "_blank"),
      color: "from-gray-700 to-gray-800",
      delay: 0.3
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/slama-ghaith-141aaa29b/", "_blank"),
      color: "from-blue-600 to-blue-700",
      delay: 0.4
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 flex flex-col space-y-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: option.delay, duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={option.action}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} hover:shadow-lg transition-all duration-300 group relative`}
                  size="sm"
                >
                  <option.icon className="h-5 w-5 text-white" />
                  
                  {/* Tooltip */}
                  <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {option.label}
                  </div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          size="sm"
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: `conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`
            }}
          />
          
          {/* Button Content */}
          <div className="relative z-10 bg-gradient-to-r from-purple-500 to-pink-500 w-full h-full rounded-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Button>

        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-purple-500/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default FloatingContact;

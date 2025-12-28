"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, X, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! 👋 I'm Ghaith's AI assistant. I'm here to help you learn more about his skills, experience, and projects. Feel free to ask me anything - whether it's about his technical expertise, past work, or how to get in touch with him!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "Hey there! 👋 Thanks for reaching out! I'm here to tell you all about Ghaith. He's an amazing full-stack developer who really knows his stuff. What would you like to know about him?",
    "Great question! Ghaith is super skilled with Java Spring Boot, Next.js, Python Django, and C#. He's one of those developers who can handle both frontend and backend like a pro. Which technology interests you most?",
    "Absolutely! Ghaith has an impressive track record - 50+ completed projects and 25+ happy clients who keep coming back. His work speaks for itself! Want to hear about a specific type of project?",
    "Sure thing! You can reach Ghaith directly at ghaithslama115@gmail.com or give him a call at +216 29291484. He's really responsive and loves discussing new opportunities. Are you thinking about a project?",
    "Oh, you'll love this! Ghaith is genuinely passionate about creating solutions that make a real difference. He doesn't just code - he crafts experiences. Every project gets his full creative energy!",
    "Definitely check out his GitHub! 🚀 https://github.com/touzgar - He's got some really cool projects there. You can see his coding style and the quality of his work. Pretty impressive stuff!",
    "Perfect timing! Ghaith is currently available for new opportunities. Whether it's freelance work or a full-time position, he brings dedication and innovation to every challenge. What kind of project are you working on?",
    "You should totally connect with him on LinkedIn! https://www.linkedin.com/in/slama-ghaith-141aaa29b/ - He shares great insights about development and is always up for professional networking.",
    "That's what I love about Ghaith - he's always learning! React, Angular, MySQL, PostgreSQL... he stays on top of the latest trends but also masters the fundamentals. A true tech enthusiast!",
    "You know what sets Ghaith apart? He doesn't just write code - he solves problems. His clients often mention how he goes beyond their expectations and delivers solutions they didn't even know they needed.",
    "Smart question! Ghaith follows modern best practices - clean code, version control, testing, agile methodologies. He believes code should be readable by humans, not just computers. Quality is his priority!",
    "Interesting! Ghaith has worked across different industries - e-commerce, management systems, web applications. He adapts quickly to new domains and always delivers maintainable, scalable solutions.",
    "Absolutely! Feel free to download his CV from the portfolio or reach out directly. Ghaith is always excited to discuss new projects and see how he can help bring your ideas to life! 🎯"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSmartResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('bonjour')) {
      return "Hey there! 👋 Great to meet you! I'm Ghaith's AI assistant. I'd love to tell you about his amazing work as a full-stack developer. What interests you most?";
    }

    // Skills and technologies
    if (input.includes('skill') || input.includes('technology') || input.includes('tech') || input.includes('programming') || input.includes('java') || input.includes('react') || input.includes('angular')) {
      return "Ghaith's tech stack is really impressive! 💻 He's a master with Java Spring Boot and Python Django on the backend, plus Next.js, React, and Angular on the frontend. He also works with C#, MySQL, and PostgreSQL. Which technology would you like to know more about?";
    }

    // Experience and projects
    if (input.includes('experience') || input.includes('project') || input.includes('work') || input.includes('portfolio') || input.includes('client')) {
      return "Oh, you'll be impressed! 🚀 Ghaith has completed 50+ projects and worked with 25+ happy clients. His portfolio showcases everything from e-commerce platforms to complex management systems. Want to see some specific examples?";
    }

    // Contact information
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach') || input.includes('call')) {
      return "Absolutely! 📧 You can reach Ghaith at ghaithslama115@gmail.com or call him at +216 29291484. He's super responsive and loves discussing new opportunities. Are you thinking about starting a project together?";
    }

    // Availability and hiring
    if (input.includes('available') || input.includes('hire') || input.includes('freelance') || input.includes('job') || input.includes('opportunity')) {
      return "Perfect timing! ⭐ Ghaith is currently available for new opportunities. Whether it's freelance work or a full-time position, he brings creativity and dedication to every project. What kind of work are you looking to get done?";
    }

    // GitHub and LinkedIn
    if (input.includes('github') || input.includes('linkedin') || input.includes('social') || input.includes('profile')) {
      return "Great idea! 🔗 Check out his GitHub at https://github.com/touzgar for his latest projects, and connect on LinkedIn: https://www.linkedin.com/in/slama-ghaith-141aaa29b/ - He shares awesome insights about development!";
    }

    // CV and resume
    if (input.includes('cv') || input.includes('resume') || input.includes('download')) {
      return "Sure thing! 📄 You can download Ghaith's CV directly from this portfolio - just look for the download button in the hero section. It has all his experience, skills, and project details. Need help finding it?";
    }

    // Price and cost questions
    if (input.includes('price') || input.includes('cost') || input.includes('rate') || input.includes('budget')) {
      return "Great question! 💰 Ghaith's rates are very competitive and depend on the project scope. He offers flexible pricing for both short-term and long-term projects. I'd recommend reaching out to him directly to discuss your specific needs and get a personalized quote!";
    }

    // Default responses for other inputs
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Simulate realistic typing delay (1-3 seconds based on response length)
    const response = getSmartResponse(currentInput);
    const typingDelay = Math.min(Math.max(response.length * 25, 1200), 3000);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Static Background - More performant */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500" />
          
          {/* Button Content */}
          <div className="relative z-10 bg-gradient-to-r from-blue-500 to-purple-600 w-full h-full rounded-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Simplified Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </Button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-40 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Ghaith&rsquo;s Assistant</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
                <motion.div
                  className="ml-auto"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isBot ? 'bg-blue-500' : 'bg-purple-500'}`}>
                      {message.isBot ? <Bot className="h-4 w-4 text-white" /> : <User className="h-4 w-4 text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl ${message.isBot ? 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white' : 'bg-blue-500 text-white'}`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                          Assistant is typing...
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 rounded-full border-slate-300 dark:border-slate-600"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="rounded-full bg-blue-500 hover:bg-blue-600 w-10 h-10 p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatInterface;

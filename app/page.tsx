"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star, Users, Coffee, Code, Mail, Phone, Rocket, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import FloatingNav from "@/components/floating-nav";
import ScrollProgress from "@/components/scroll-progress";
import LoadingScreen from "@/components/loading-screen";
import InnovativeHero from "@/components/innovative-hero";
import Card3D from "@/components/3d-card";
import AnimatedBackground from "@/components/animated-background";
import AnimatedSkills from "@/components/animated-skills";
import ThemeToggle from "@/components/theme-toggle";
import AnimatedCounter from "@/components/animated-counter";
import FloatingParticles from "@/components/floating-particles";
import SkillProgress from "@/components/skill-progress";
import LazyWrapper from "@/components/lazy-wrapper";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projects = [
    {
      title: "Dental Camp Platform",
      description: "Comprehensive dental clinic management system with appointment booking and patient management",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/touzgar",
      live: "https://www.dental-camp.com/",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Shopify Headless Store",
      description: "Modern e-commerce platform built with headless Shopify architecture for optimal performance",
      tech: ["Next.js", "Shopify API", "React", "Tailwind CSS"],
      github: "https://github.com/touzgar",
      live: "https://shopify-headless-store-sigma.vercel.app/",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Club Management System",
      description: "Full-stack club management application with member tracking and event organization",
      tech: ["Java", "Spring Boot", "Angular", "MySQL"],
      github: "https://github.com/touzgar/Gestion_club.git",
      live: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Club Management Frontend",
      description: "Modern frontend interface for club management with responsive design",
      tech: ["Angular", "TypeScript", "Bootstrap", "RxJS"],
      github: "https://github.com/touzgar/Gestion_Club_Front.git",
      live: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "C# Desktop Application",
      description: "Desktop application built with C# for efficient data management and processing",
      tech: ["C#", ".NET", "WPF", "SQL Server"],
      github: "https://github.com/touzgar/ProjectC-.git",
      live: "#",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Python Data Analytics",
      description: "Data analysis and visualization project using Python with advanced algorithms",
      tech: ["Python", "Django", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/touzgar/python_project.git",
      live: "#",
      image: "/api/placeholder/400/250"
    }
  ];

  const stats = [
    { icon: Star, label: "Projects Completed", value: 50, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 25, suffix: "+" },
    { icon: Coffee, label: "Cups of Coffee", value: 1000, suffix: "+" },
    { icon: Code, label: "Lines of Code", value: 100, suffix: "K+" }
  ];

  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      <FloatingParticles />
      <div className="min-h-screen relative">
        <ScrollProgress />

        <FloatingNav />

      {/* Innovative Hero Section */}
      <InnovativeHero />

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    I&rsquo;m a passionate full-stack developer specializing in Java Spring Boot, Next.js,
                    Python Django, and C#. I create robust, scalable applications that solve real-world
                    problems with clean, efficient code. My expertise spans both frontend and backend
                    development, with a strong focus on modern frameworks and database technologies.
                  </p>
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    I work with cutting-edge technologies including Angular, React, MySQL, PostgreSQL,
                    and SQL databases. I&rsquo;m always eager to learn new technologies and contribute to
                    innovative projects that make a difference.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-white shadow-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Clean Code
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Writing maintainable, scalable code
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-400 dark:to-teal-500 text-white shadow-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      UI/UX Design
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Creating intuitive user experiences
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 text-white shadow-lg">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      Performance
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Optimizing for speed and efficiency
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Proficient in modern technologies with a focus on full-stack development and innovative solutions.
            </p>
          </motion.div>

          <AnimatedSkills />

          {/* Dynamic Skills Progress - Lazy Loaded */}
          <LazyWrapper>
            <motion.div
              className="mt-16 grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-gradient backdrop-blur-sm rounded-2xl p-8 border-gradient shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Backend Technologies</h3>
                <SkillProgress skill="Java & Spring Boot" percentage={95} color="#60A5FA" delay={0.1} />
                <SkillProgress skill="Python & Django" percentage={90} color="#34D399" delay={0.2} />
                <SkillProgress skill="C# & .NET" percentage={85} color="#A78BFA" delay={0.3} />
                <SkillProgress skill="MySQL & PostgreSQL" percentage={88} color="#38BDF8" delay={0.4} />
              </div>

              <div className="card-gradient backdrop-blur-sm rounded-2xl p-8 border-gradient shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Frontend Technologies</h3>
                <SkillProgress skill="Next.js & React" percentage={92} color="#FBBF24" delay={0.1} />
                <SkillProgress skill="Angular" percentage={87} color="#F87171" delay={0.2} />
                <SkillProgress skill="TypeScript" percentage={90} color="#60A5FA" delay={0.3} />
                <SkillProgress skill="Tailwind CSS" percentage={95} color="#38BDF8" delay={0.4} />
              </div>
            </motion.div>
          </LazyWrapper>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating
              innovative digital solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group"
              >
                <Card3D className="h-full">
                  <Card className="h-full overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {project.tech.slice(0, 3).map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-white/20 text-white">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-4">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 hover:bg-white transform hover:scale-105 transition-all duration-200"
                            onClick={() => window.open(project.github, '_blank')}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                          {project.live !== "#" && (
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                              onClick={() => window.open(project.live, '_blank')}
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group px-8 py-3 rounded-full border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                ghaithslama115@gmail.com
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                +216 29 291 484
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Github className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                GitHub
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                github.com/touzgar
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('mailto:ghaithslama115@gmail.com', '_blank')}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-4 rounded-full border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                onClick={() => window.open('https://github.com/touzgar', '_blank')}
              >
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View GitHub Profile
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ghaith Slama
              </h3>
              <p className="text-slate-400 mt-2">
                Building innovative solutions with modern technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex space-x-6"
            >
              {[
                { icon: Github, href: "https://github.com/touzgar", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ghaithslama115@gmail.com", label: "Email" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-slate-400"
          >
            <p>&copy; 2024 Ghaith Slama. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </>
  );
}

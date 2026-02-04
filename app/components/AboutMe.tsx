'use client'

import { motion } from 'framer-motion'
import { Server, Cloud, Cpu, Terminal, Code, Zap, TrendingUp, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const competencies = [
    {
      icon: Cpu,
      title: "Algorithmic Efficiency",
      description: "I don't just make it work; I make it optimized. Grounded in rigorous algorithmic training, I prioritize time complexity and resource efficiency in every solution I build.",
      tags: ["Data Structures", "Algorithms", "Optimization"],
      color: "blue"
    },
    {
      icon: Server,
      title: "Scalable Systems",
      description: "Moving beyond monoliths. I architect event-driven microservices using Spring Boot and asynchronous messaging patterns, ensuring applications are decoupled, resilient, and scalable.",
      tags: ["Spring Boot", "Microservices", "Event-Driven", "REST APIs"],
      color: "purple"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Bridging development and deployment. I use Docker for containerization and am actively exploring CI/CD pipelines to understand the full software lifecycle.",
      tags: ["Docker", "PostgreSQL", "Git", "Cloud Basics"],
      color: "emerald"
    }
  ]

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Scalable Solutions</span> in the Java Ecosystem
            </h2>
            
            <div className="space-y-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I am a Computer Science undergraduate passionate about building software that works efficiently under the hood.
              </p>
              <p>
                My journey started with <span className="font-semibold text-gray-900 dark:text-white">competitive programming</span>, where I honed my logic. Now, I apply that optimization mindset to build scalable <span className="font-semibold text-gray-900 dark:text-white">microservices</span> and robust APIs using the Java ecosystem.
              </p>

              {/* R&D / Learning Block */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Currently Exploring
                  </h3>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Deepening my understanding of <span className="font-medium text-blue-600 dark:text-blue-400">Kubernetes orchestration</span> and exploring how to integrate <span className="font-medium text-blue-600 dark:text-blue-400">AI models</span> into Java backends.
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">650+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Algorithmic challenges solved</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 italic">
                "Applying optimization principles to enterprise architecture"
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Competencies */}
          <div className="space-y-6">
            {competencies.map((item, index) => {
              const isHovered = hoveredIndex === index
              const colorClass = {
                blue: 'text-blue-600 dark:text-blue-400',
                purple: 'text-purple-600 dark:text-purple-400',
                emerald: 'text-emerald-600 dark:text-emerald-400'
              }[item.color]

              const borderColorClass = {
                blue: 'border-blue-200 dark:border-blue-900',
                purple: 'border-purple-200 dark:border-purple-900',
                emerald: 'border-emerald-200 dark:border-emerald-900'
              }[item.color]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-6 border-l-4 rounded-r-lg transition-all duration-300 ${
                    isHovered 
                      ? `${borderColorClass} bg-gray-50 dark:bg-gray-900/30 shadow-sm` 
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      isHovered 
                        ? `${borderColorClass} bg-white dark:bg-gray-900` 
                        : 'bg-gray-50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800'
                    }`}>
                      <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                        isHovered ? colorClass : 'text-gray-700 dark:text-gray-300'
                      }`} />
                    </div>

                    <div className="flex-1 space-y-3">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        isHovered ? colorClass : 'text-gray-900 dark:text-white'
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                        {item.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
                              isHovered
                                ? 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border shadow-sm'
                                : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CENTERED PHILOSOPHY SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            {/* Philosophy text */}
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              I believe the most elegant solutions emerge at the intersection of{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">mathematical rigor</span> and{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">practical engineering</span>
              —where every algorithm serves a purpose and every architecture tells a story.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
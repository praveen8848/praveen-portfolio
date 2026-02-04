'use client'

import { motion } from 'framer-motion'
import { Code2, Brain, Users, MessageSquare, Award, TrendingUp, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const achievements = [
  {
    icon: Code2,
    title: "Competitive Programming",
    description: "Advanced algorithmic problem-solving across platforms",
    details: "650+ problems solved with focus on Dynamic Programming, Graph Algorithms, and Optimization",
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com/u/knowpraveeno/", stats: "550+ Problems" },
      { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/knowitspxh5k", stats: "50+ Solutions" }
    ],
    year: "2024-Present",
    highlight: false
  },
  {
    icon: Brain,
    title: "DSA Proficiency",
    description: "Top-tier data structures and algorithms mastery",
    details: "Advanced problem-solving techniques, ranking in top 20% on competitive platforms",
    metrics: ["Complex Algorithm Design", "Performance Optimization", "Systematic Approach"],
    year: "2024-Present",
  },
  {
    icon: Users,
    title: "Microsoft Learn Student Ambassador",
    description: "Technical leadership and community mentorship",
    details: "Organized 10+ technical workshops impacting 150+ students",
    metrics: ["Technical Workshops", "Peer Mentorship", "Community Building"],
    year: "2024-2025"
  },
  {
    icon: MessageSquare,
    title: "Communication Excellence",
    description: "1st place in Extempore Competition at Jñānāgni 2025",
    details: "Demonstrated exceptional public speaking and critical thinking abilities",
    metrics: ["Public Speaking", "Critical Analysis", "Technical Communication"],
    year: "2025"
  },
  {
    icon: Award,
    title: "Technical Recognition",
    description: "2nd place in GDSC AI/ML workshop competition",
    details: "Google Developer Student Clubs recognition for technical excellence",
    metrics: ["Workshop Competition", "Technical Implementation", "Innovation"],
    year: "2025"
  }
]

export default function Achievements() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-8 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Achievements & Recognition
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Technical Excellence & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Achievement Timeline
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Documented progression of Achievements, Participations, and recognition....
          </motion.p>
        </div>

        {/* Timeline/Table Layout */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative pl-8 group"
              >
                {/* Animated Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 overflow-hidden">
                  {/* Static line */}
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800"></div>
                  
                  {/* Glowing line effect on hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ y: '-100%' }}
                      animate={{ y: '100%' }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 w-full bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 dark:from-blue-500 dark:via-blue-400 dark:to-blue-300 opacity-80"
                    ></motion.div>
                  )}
                </div>

                {/* Animated Timeline dot */}
                <div className={`absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full z-10 transition-all duration-300 ${
                  isHovered 
                    ? 'bg-blue-500 ring-4 ring-blue-500/30 scale-110'
                    : achievement.highlight
                    ? 'bg-blue-500 ring-4 ring-blue-500/20'
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}>
                  {/* Inner glowing dot */}
                  {isHovered && (
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.8, 0.2, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-full bg-blue-400"
                    ></motion.div>
                  )}
                </div>

                {/* Year indicator */}
                <div className="absolute left-8 top-0">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                    isHovered
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800'
                  }`}>
                    {achievement.year}
                  </span>
                </div>

                {/* Content container */}
                <div className="pt-8 pb-6">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left column - Icon and title */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`p-3 rounded-lg flex-shrink-0 transition-all duration-300 ${
                          isHovered
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                            : achievement.highlight
                            ? 'bg-blue-50 dark:bg-blue-900/30'
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}
                      >
                        <achievement.icon className={`w-6 h-6 transition-colors duration-300 ${
                          isHovered
                            ? 'text-blue-600 dark:text-blue-400'
                            : achievement.highlight
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300'
                        }`} />
                      </motion.div>
                      <div>
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                          isHovered
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {achievement.title}
                        </h3>
                        {achievement.highlight && (
                          <div className="inline-flex items-center gap-1 mt-1 text-blue-600 dark:text-blue-400 text-sm">
                            <TrendingUp className="w-3 h-3" />
                            <span>Primary Focus</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Middle column - Description and details */}
                    <div className="space-y-3">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {achievement.description}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {achievement.details}
                      </p>

                      {/* Metrics */}
                      {achievement.metrics && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {achievement.metrics.map((metric, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                                isHovered
                                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right column - Platforms or metrics */}
                    <div>
                      {achievement.platforms ? (
                        <div className="space-y-3">
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Verified Platforms
                          </div>
                          <div className="space-y-2">
                            {achievement.platforms.map((platform) => (
                              <motion.a
                                key={platform.name}
                                href={platform.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 3 }}
                                className="flex items-center justify-between group"
                              >
                                <div className="flex items-center gap-2">
                                  <ExternalLink className={`w-3 h-3 transition-colors duration-300 ${
                                    isHovered
                                      ? 'text-blue-500'
                                      : 'text-gray-400'
                                  }`} />
                                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {platform.name}
                                  </span>
                                </div>
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                  {platform.stats}
                                </span>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      ) : achievement.metrics ? (
                        <div className="space-y-3">
                          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Demonstrated Skills
                          </div>
                          <div className="space-y-2">
                            {achievement.metrics.slice(0, 3).map((metric, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                                  isHovered
                                    ? 'bg-blue-500'
                                    : 'bg-gray-400 dark:bg-gray-600'
                                }`}></div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Recognized for technical excellence and practical implementation
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom border */}
                {index < achievements.length - 1 && (
                  <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-300 ${
                    isHovered
                      ? 'bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-500'
                      : 'bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent'
                  }`}></div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">650+</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Problems Solved</div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Students Impacted</div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Workshops Conducted</div>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Recognition Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
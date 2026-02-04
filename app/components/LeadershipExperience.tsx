'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Award } from 'lucide-react'

const experiences = [
  {
    role: 'Microsoft Learn Student Ambassador',
    company: 'Microsoft',
    period: 'July 2024 – Feb 2025',
    icon: Users,
    achievements: [
      'Orchestrated 10+ technical workshops on Azure Cloud, AI, and GitHub Copilot',
      'Impacted 150+ students through hands-on learning sessions',
      'Provided peer-to-peer mentoring and technical guidance',
      'Bridged industry tools with academic learning',
    ],
    color: 'bg-blue-500',
  },
]

export default function LeadershipExperience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Leadership & Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${exp.color} text-white`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <Award className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
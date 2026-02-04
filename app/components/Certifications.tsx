'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Calendar, ExternalLink, Award, Brain, Cloud, Cpu, Users } from 'lucide-react'

const certifications = [
  {
    name: 'Cloud Computing Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'August 2025',
    description: 'Mastered core cloud concepts including IaaS, PaaS, SaaS, virtualization, and containerization. Gained hands-on experience with cloud deployment models, security best practices, and cost optimization strategies.',
    skills: ['Cloud Architecture', 'Virtualization', 'Containerization'],
    icon: Cloud,
    color: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-gray-100 dark:border-gray-800',
    highlight: false
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    date: 'June 2025',
    description: 'Comprehensive AI fundamentals covering machine learning concepts, neural networks, and practical AI applications. Focused on ethical AI development and implementing AI solutions in real-world scenarios.',
    skills: ['Machine Learning', 'Neural Networks', 'AI Ethics'],
    icon: Cpu,
    color: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-gray-100 dark:border-gray-800',
    highlight: false
  },
  {
    name: 'AI Agents Intensive',
    issuer: 'Google Kaggle',
    date: 'December 2025',
    description: 'Completed Google\'s intensive 5-day AI Agents program, mastering agentic architectures, Model Context Protocol (MCP), and multi-agent systems. Focused on building autonomous AI agents for complex problem-solving.',
    skills: ['Agentic AI', 'MCP Protocol', 'Multi-Agent Systems'],
    icon: Brain,
    color: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-500 dark:border-blue-500',
    highlight: false
  },
  {
    name: 'Virtual Internship Completion',
    issuer: 'Edunet Foundation & AICTE',
    date: 'December 2025',
    description: 'Completed a virtual internship program focusing on modern software development practices, agile methodologies, and industry-standard project workflows with real-world business solutions.',
    skills: ['Agile Methodology', 'Project Management', 'Team Collaboration'],
    icon: Users,
    color: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-gray-100 dark:border-gray-800',
    highlight: false
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-600 dark:bg-blue-500"></div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Certifications
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Professional Credentials & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Specialized Training
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Industry-recognized certifications that validate technical expertise and commitment 
            to continuous learning in modern software development and AI technologies.
          </p>
        </motion.div>

        {/* CERTIFICATIONS LIST - Editorial Style */}
        <div className="space-y-12 mb-24">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex items-start gap-8 border-l-2 pl-8 transition-colors ${
                  cert.highlight 
                    ? 'border-blue-500 dark:border-blue-500' 
                    : 'border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500'
                }`}
              >
                <div className={`shrink-0 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl ${
                  cert.highlight 
                    ? 'bg-blue-600 dark:bg-blue-600 text-white' 
                    : 'text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
                } transition-all`}>
                  <IconComponent size={28} />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* View credential button removed here */}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* STATS SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
                <Award size={14} />
                <span>Credentials Overview</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Certification Metrics
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                A quantitative view of specialized training and professional development achievements.
              </p>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    value: certifications.length.toString(),
                    label: 'Total Credentials',
                    description: 'Professional certifications'
                  },
                  { 
                    value: '2',
                    label: 'AI Specializations',
                    description: 'Advanced AI training'
                  },
                  { 
                    value: '4',
                    label: 'Industry Leaders',
                    description: 'Leading organizations'
                  },
                  { 
                    value: '2024',
                    label: 'Active Since',
                    description: 'Continuous learning'
                  }
                ].map((stat, idx) => (
                  <div key={stat.label} className="text-center p-4">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Continuously pursuing advanced certifications in cloud-native architectures and AI systems engineering
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
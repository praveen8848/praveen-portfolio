'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, School, Book, ChevronRight } from 'lucide-react'

import { FaGraduationCap, FaSchool, FaBook } from 'react-icons/fa'

export default function Education() {
  const educationTimeline = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Gurukul Kangri Vishwavidyalaya, Haridwar",
      year: "2023 - 2027",
      cgpa: "8.5/10.0",
      status: "Current",
      icon: GraduationCap,
      highlight: false
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science Stream (PCM)",
      institution: "Divine Public School, Ambedkarnagar",
      year: "2022",
      percentage: "85%",
      location: "Uttar Pradesh",
      icon: School
    },
    {
      degree: "High School (10th Grade)",
      field: "Science & Mathematics",
      institution: "Divine Public School, Ambedkarnagar",
      year: "2020",
      percentage: "90%",
      location: "Uttar Pradesh",
      icon: School
    }
  ]

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems", 
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Object-Oriented Programming"
  ]

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-950">
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
              Education
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Foundation & Journey
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            A consistent academic trajectory with focus on computer science fundamentals, and engineering principles.
          </p>
        </motion.div>

        {/* EDUCATION TIMELINE */}
        <div className="space-y-12 mb-24">
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col md:flex-row gap-8 items-start border-l-2 pl-8 transition-colors ${
                edu.highlight 
                  ? 'border-blue-500 dark:border-blue-500' 
                  : 'border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500'
              }`}
            >
              <div className={`shrink-0 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl ${
                edu.highlight 
                  ? 'bg-blue-600 dark:bg-blue-600 text-white' 
                  : 'text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white'
              } transition-all`}>
                <edu.icon size={28} />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.field}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {edu.institution}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    {edu.location || "Haridwar, Uttarakhand"}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.highlight 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}>
                    {edu.cgpa || edu.percentage}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    edu.status === 'Current' 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    <Award className="w-4 h-4" />
                    {edu.status || 'Completed'}
                  </div>
                </div>
                
                {/* Coursework for BTech only */}
                {edu.highlight && (
                  <div className="pt-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      Core Coursework
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course) => (
                        <span 
                          key={course}
                          className="px-3 py-1.5 text-sm rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ACADEMIC SUMMARY */}
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
                <span>Academic Performance</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Performance Summary
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Consistent academic excellence across all educational levels with 
                strong foundation in science and technology.
              </p>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    90%
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    High School
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    2020 • 10th Grade
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    85%
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Intermediate
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    2022 • 12th Grade
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    8.5 CGPA
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    B.Tech CSE
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    2023-2027 • Ongoing
                  </div>
                </div>
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
              Currently pursuing B.Tech in Computer Science with focus on software engineering and system design...
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Server, Database, Shield, Zap, Layers, GitBranch, ArrowRight } from 'lucide-react'

// --- Types ---
interface ProjectFeature {
  title: string;
  detail: string;
}

interface ProjectData {
  id: string;
  title: string;
  category: string;
  description: string;
  architecture: string; // Brief arch summary
  features: ProjectFeature[];
  techStack: string[];
  githubLink: string;
  liveLink?: string; // Optional if you have a deployment
}

// --- Data ---
const projects: ProjectData[] = [
  {
    id: "01",
    title: "FitTracker Analytics",
    category: "Microservices Ecosystem",
    description: "A distributed fitness analytics platform designed to handle high-volume user data. Decomposed into autonomous microservices (User, Workout, Analytics) communicating asynchronously via Apache Kafka. The system ensures fault tolerance and independent scalability of read/write operations.",
    architecture: "Event-Driven Microservices",
    features: [
      { title: "Async Communication", detail: "Decoupled services using Apache Kafka for high-throughput event streaming." },
      { title: "Polyglot Persistence", detail: "Optimized data storage using PostgreSQL for transactional data and MongoDB for logs/analytics." },
      { title: "Security Layer", detail: "Centralized authentication via API Gateway implementing JWT and Keycloak." }
    ],
    techStack: ["Java 21", "Spring Boot 3", "Apache Kafka", "Docker", "PostgreSQL", "MongoDB"],
    githubLink: "https://github.com/praveen8848/FitTracker-Application"
  },
  {
    id: "02",
    title: "FirstJobApp Portal",
    category: "Enterprise Monolith",
    description: "A robust recruitment management system built with a focus on code maintainability and enterprise-grade patterns. Implements a strict Layered Architecture to ensure separation of concerns, offering comprehensive job lifecycle management and company profiling.",
    architecture: "Layered MVC Architecture",
    features: [
      { title: "Clean Architecture", detail: "Strict separation of concerns (Controller-Service-Repository) for testability." },
      { title: "Containerization", detail: "Fully Dockerized application ensures consistent behavior across dev/prod environments." },
      { title: "Robust APIs", detail: "RESTful endpoints with comprehensive error handling and input validation." }
    ],
    techStack: ["Spring Boot", "Spring Data JPA", "Hibernate", "Docker", "PostgreSQL", "Swagger"],
    githubLink: "https://github.com/praveen8848/First_Job_App"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      {/* Changed max-w-6xl to max-w-7xl to match the left margin of other pages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Consistent Style */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-8 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Engineering Showcase
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">   Projects</span>
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            A selection of technical projects demonstrating my ability to build robust backend systems, from distributed microservices to clean enterprise monoliths.
          </motion.p>
        </div>

        {/* PROJECTS LIST */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCaseStudy key={project.id} data={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

// --- Sub-Component: Project Case Study ---
function ProjectCaseStudy({ data, index }: { data: ProjectData; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* 1. Top Bar: ID & Category */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-mono font-light text-gray-300 dark:text-gray-700 select-none">
            {data.id}
          </span>
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800"></div>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            {data.category}
          </span>
        </div>
        
        {/* Architecture Badge (Desktop) */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800">
          <Layers className="w-3.5 h-3.5" />
          {data.architecture}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* 2. Left Column: Narrative & Links (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {data.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              {data.description}
            </p>
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            {/* Subtle View Source Button */}
            <a 
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
            
            {/* Optional Live Demo Button - Now more prominent if exists */}
            {data.liveLink && (
               <a 
               href={data.liveLink}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
             >
               <ExternalLink className="w-4 h-4" />
               <span>Live Demo</span>
             </a>
            )}
          </div>
        </div>

        {/* 3. Right Column: Tech Specs (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 p-8">
            
            {/* Engineering Highlights */}
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                <Zap className="w-4 h-4 text-amber-500" />
                Key Engineering Decisions
              </h4>
              <div className="space-y-4">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                    <div>
                      <span className="block text-sm font-bold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </span>
                      <span className="block text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-8"></div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                <Server className="w-4 h-4 text-blue-500" />
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {data.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-xs font-mono font-medium text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  )
}
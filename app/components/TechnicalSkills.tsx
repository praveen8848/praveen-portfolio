'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Cpu, Database, Layout, GitMerge, Layers, Code2, Globe, Server, Zap, Shield, Package, Cloud, Code, Rocket, CheckCircle, Coffee } from 'lucide-react'

// --- Types ---
interface TechBadgeProps {
  children: React.ReactNode;
  highlight?: boolean;
}

interface SkillRowProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
  delay: number;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
}

export default function Skills() {
  // Java & Spring Boot Ecosystem
  const javaEcosystem: SkillCategory[] = [
    {
      title: "Spring Framework",
      description: "Enterprise-grade application development",
      technologies: ["Spring Boot 3", "Spring MVC", "Spring Security", "Spring Data JPA", "Spring Cloud"],
      icon: <Leaf className="w-5 h-5" />,
      color: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Java Core",
      description: "Advanced Java programming expertise",
      technologies: ["Java 21", "Streams API", "Multithreading", "Collections Framework", "Design Patterns"],
      icon: <Coffee className="w-5 h-5" />,
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    {
      title: "Persistence & ORM",
      description: "Database interaction and management",
      technologies: ["Hibernate", "JPA", "JDBC", "Query Optimization", "Transaction Management"],
      icon: <Database className="w-5 h-5" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    }
  ]

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-8 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Technical Arsenal
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Specialized in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Java & Spring Boot</span><br />
            with full-stack architectural expertise
          </motion.h2>
        </div>

        {/* SECTION 1: JAVA & SPRING BOOT ECOSYSTEM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                Primary Expertise
              </h3>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                Java & Spring Boot Ecosystem
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
                Specialized in building robust, scalable backend systems using modern Java technologies 
                and Spring Framework with production-ready patterns and best practices.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {javaEcosystem.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 cursor-default"
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2: CORE STACK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
            Full Technical Stack
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Backend Architecture */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Server className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                Backend Architecture
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Designing and implementing scalable microservices and distributed systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <TechBadge highlight>Microservices</TechBadge>
                <TechBadge>Apache Kafka</TechBadge>
                <TechBadge>REST APIs</TechBadge>
                <TechBadge>Docker</TechBadge>
                <TechBadge>API Gateway</TechBadge>
                <TechBadge>Load Balancing</TechBadge>
              </div>
            </motion.div>

            {/* Problem Solving & Algorithms */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all"
            >
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Cpu className="w-6 h-6 text-purple-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default">
                Algorithms & Optimization
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                650+ problems solved with focus on time/space complexity optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <TechBadge highlight>650+ Problems</TechBadge>
                <TechBadge>LeetCode Expert</TechBadge>
                <TechBadge>Dynamic Programming</TechBadge>
                <TechBadge>Graph Algorithms</TechBadge>
                <TechBadge>System Design</TechBadge>
              </div>
            </motion.div>

            {/* DevOps & Tools */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-bl-full -mr-4 -mt-4"></div>
              
              <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <Rocket className="w-6 h-6 text-emerald-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-default">
                DevOps & Tools
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Production deployment, monitoring, and development workflow optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <TechBadge highlight>Docker</TechBadge>
                <TechBadge>Git/GitHub</TechBadge>
                <TechBadge>Maven/Gradle</TechBadge>
                <TechBadge>Linux</TechBadge>
                <TechBadge>CI/CD</TechBadge>
                <TechBadge>Postman</TechBadge>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* SECTION 3: COMPREHENSIVE SKILLS INVENTORY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Detailed Inventory
              </h3>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                Comprehensive Technical Skills
              </h4>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/30 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-8">
              <div className="space-y-6">
                <SkillRow 
                  icon={<Terminal className="w-5 h-5 text-blue-500" />}
                  title="Languages & Development"
                  description="Proficient in multiple programming paradigms and languages"
                  skills={["Java 21", "Python", "JavaScript", "SQL", "C++", "TypeScript", "Bash"]}
                  delay={0.1}
                  highlight
                />

                <SkillRow 
                  icon={<Database className="w-5 h-5 text-emerald-500" />}
                  title="Databases & Storage"
                  description="Expertise in relational, NoSQL, and caching solutions"
                  skills={["PostgreSQL", "MongoDB", "MySQL", "Redis", "Hibernate", "JPA", "Query Optimization"]}
                  delay={0.2}
                />

                <SkillRow 
                  icon={<Cloud className="w-5 h-5 text-indigo-500" />}
                  title="Cloud & Infrastructure"
                  description="Cloud-native development and deployment strategies"
                  skills={["Docker", "Microservices", "AWS Fundamentals", "Load Balancing", "Containerization"]}
                  delay={0.3}
                />

                <SkillRow 
                  icon={<Shield className="w-5 h-5 text-amber-500" />}
                  title="Security & Authentication"
                  description="Enterprise-grade security implementation"
                  skills={["Spring Security", "JWT", "OAuth2", "Keycloak", "API Security", "Data Encryption"]}
                  delay={0.4}
                />

                <SkillRow 
                  icon={<Layout className="w-5 h-5 text-pink-500" />}
                  title="Frontend & UI"
                  description="Modern frontend development for full-stack applications"
                  skills={["React", "Next.js", "Tailwind CSS", "Material UI", "Responsive Design", "Vite"]}
                  delay={0.5}
                />

                <SkillRow 
                  icon={<GitMerge className="w-5 h-5 text-orange-500" />}
                  title="Development Practices"
                  description="Industry-standard development workflows and collaboration"
                  skills={["Git/GitHub", "Agile/Scrum", "Code Reviews", "Testing (JUnit)", "API Documentation", "Clean Code"]}
                  delay={0.6}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <p className="text-gray-600 dark:text-gray-400">
              Continuously expanding skills in distributed systems, cloud-native architectures, and AI/ML integration
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

function TechBadge({ children, highlight = false }: TechBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
      highlight 
        ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
    }`}>
      {children}
    </span>
  )
}

function SkillRow({ icon, title, description, skills, delay, highlight = false }: SkillRowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
      className="group flex flex-col lg:flex-row items-start lg:items-center p-6 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30"
    >
      <div className="lg:w-1/3 flex items-start gap-4 mb-4 lg:mb-0">
        <div className={`p-3 rounded-lg ${highlight ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-white dark:bg-gray-800'} shadow-sm border border-gray-100 dark:border-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors`}>
          {icon}
        </div>
        <div>
          <h4 className={`text-base font-bold mb-1 transition-colors ${
            highlight 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
          }`}>
            {title}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="lg:w-2/3 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all hover:scale-105 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

// Leaf icon for Spring
const Leaf = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l.71-1.39C6.65 19.44 7 18.65 7 17.5 7 14.46 9.46 12 12.5 12c2.5 0 4.5 1.5 4.5 4 0 1.43-.86 2.55-2.13 3.17L15 19h6v-6l-2.09 2.09C18.69 14.55 19 13.84 19 13c0-3.87-3.13-7-7-7-3.22 0-5.93 2.18-6.74 5.12C8.06 8.42 10.62 6 13.5 6 15.29 6 16.83 6.69 17 8z"/>
  </svg>
)
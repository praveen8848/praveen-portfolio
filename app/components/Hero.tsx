'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, FileText, Terminal } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 relative overflow-hidden pt-16 lg:pt-0">
      
      {/* Background Decorator (Subtle gradient blob) */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left column - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
              >
                <Terminal className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                  Computer Science Engineer
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                <span className="block">Praveen</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Verma</span>
              </h1>

              <div className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-8">
                <span className="text-gray-400 mr-2">&gt;</span>
                <TypeAnimation
                  sequence={[
                    'Java Spring Boot Developer',
                    2000,
                    'Backend Engineering',    
                    2000,
                    'Distributed Systems',    
                    2000,
                    'Algorithmic Problem Solver', 
                    2000,
                  ]}
                  wrapper="span"
                  speed={80}
                  repeat={Infinity}
                  className="text-gray-900 dark:text-white"
                />
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Applying a strong <span className="font-semibold text-gray-900 dark:text-white">algorithmic mindset</span> to build scalable backend systems. 
                I focus on writing clean, efficient code while continuously exploring modern architectures and engineering best practices.
              </p>
            </div>

            {/* CTA Buttons - Professional Sizing */}
            {/* CTA Buttons - Fully Inlined & Height Aligned */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Resume Button */}
              {/* Resume Button - UPDATED */}
<motion.a
 href="/Praveen_RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    // Add confirmation
    console.log('Attempting to open resume...');
    
    // Optional: Add delay to see if file loads
    setTimeout(() => {
      console.log('If file doesn\'t open, check console for 404 error');
    }, 100);
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm border border-transparent"
>
  <FileText className="w-4 h-4" />
  <span>Resume</span>
</motion.a>
              
              {/* GitHub Button */}
              <motion.a
                href="https://github.com/praveen8848"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/praveen-verma-9649a4292/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              
              {/* Email Button */}
              <motion.a
                href="mailto:praveen.work.dev@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>

            </div>
          </motion.div>

          {/* Right column - Terminal Display (Restored to Original Content) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative z-20">
              {/* Terminal header */}
              <div className="px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-300 ml-2">spring-terminal</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    ~/portfolio-api
                  </div>
                </div>
              </div>
              
              {/* Terminal content */}
              <div className="p-4 font-mono text-xs bg-gray-900">
                <div className="space-y-1">
                  {/* Command to start */}
                  <div className="text-blue-400">
                    <span className="text-green-400">$</span> ./mvnw spring-boot:run
                  </div>
                  
                  {/* Maven build */}
                  <div className="text-gray-400">
                    [INFO] Scanning for projects...
                  </div>
                  <div className="text-gray-400">
                    [INFO] Building portfolio-api 0.0.1-SNAPSHOT
                  </div>
                  <div className="text-green-500 font-medium">
                    [INFO] BUILD SUCCESS
                  </div>
                  
                  {/* Spring Boot Banner */}
                  <div className="text-green-400 pt-1">
                    <div className="whitespace-pre">
{`  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\
 \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.1.5)
`}
                    </div>
                  </div>
                  
                  {/* Startup sequence */}
                  <div className="text-gray-300">
                    14:30:25.456 INFO  - Starting PortfolioApiApplication v0.0.1-SNAPSHOT
                  </div>
                  <div className="text-gray-300">
                    14:30:25.458 INFO  - Running with Java 17.0.9 on MacOS
                  </div>
                  <div className="text-gray-300">
                    14:30:25.460 INFO  - No active profile set, using 'default'
                  </div>
                  
                  {/* Component initialization */}
                  <div className="text-gray-400 ml-4">
                    🔄 Initializing embedded Tomcat
                  </div>
                  <div className="text-gray-300">
                    14:30:26.123 INFO  - Tomcat initialized with port(s): 8080 (http)
                  </div>
                  
                  <div className="text-gray-400 ml-4">
                    🔄 Configuring DataSource 'dataSource'
                  </div>
                  <div className="text-gray-300">
                    14:30:26.456 INFO  - HikariPool-1 - Starting...
                  </div>
                  <div className="text-gray-300">
                    14:30:26.678 INFO  - HikariPool-1 - Start completed.
                  </div>
                  
                  {/* Application ready */}
                  <div className="text-green-500 font-medium pt-1">
                    14:30:27.456 INFO  - Started PortfolioApiApplication in 2.456 seconds
                  </div>
                  
                  {/* Final status */}
                  <div className="text-green-400 font-medium">
                    ✅ Server running on <span className="text-cyan-400">http://localhost:8080</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Press Ctrl+C to stop the application
                  </div>
                  
                  {/* Cursor */}
                  <div className="flex items-center pt-1">
                    <span className="text-green-400">$</span>
                    <div className="ml-2 w-2 h-4 bg-green-500 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              {/* Terminal footer */}
              <div className="px-4 py-2 bg-gray-800 border-t border-gray-700">
                <div className="text-xs text-gray-500 text-center">
                  Spring Boot • PostgreSQL • REST APIs • Production Ready
                </div>
              </div>
            </div>
            
            {/* Decorative blob behind terminal */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full border-2 border-gray-200 dark:border-gray-800 rounded-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors p-2"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}



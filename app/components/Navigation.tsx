'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()

  // FEATURE 1: Scroll Progress Logic
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Scroll tracking logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() 
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')
    setActiveSection(targetId)
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80 
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg z-50 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
      
      {/* FEATURE 1: The Progress Bar (Absolute position at bottom) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          
          {/* LEFT SIDE: Brand Identity */}
          <motion.a 
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => handleNavigation(e, '#hero')}
          >
            <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
              <Terminal size={20} className="text-primary-600 dark:text-primary-400" />
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white font-mono">
              Praveen<span className="text-gray-400 dark:text-gray-600">.dev</span>
              {/* FEATURE 2: Blinking Cursor */}
              <span className="text-primary-500 animate-pulse">_</span>
            </span>
          </motion.a>

          {/* RIGHT SIDE: Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-colors ${
                isOpen 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
                  : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Floating Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-4 w-64 p-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl z-50"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '')
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeDot"
                          className="w-1.5 h-1.5 rounded-full bg-primary-500"
                        />
                      )}
                    </a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
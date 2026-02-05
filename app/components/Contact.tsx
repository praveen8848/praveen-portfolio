'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Copy, Check, MapPin, Send, Linkedin, CheckCircle, AlertCircle, ChevronRight, ExternalLink, Github, Cpu, Code } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    time: '',
    message: '',
    email: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('1R6SoxJPHMT6ZXT5P')
      
      // Prepare form data for EmailJS
      const currentTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium'
      })
      
      const templateParams = {
        title: formData.title,
        name: formData.name,
        time: formData.time || currentTime, // Use provided time or current time
        message: formData.message,
        email: formData.email,
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_3eyh1gd', // Your service ID
        'template_c9yekmx', // Your template ID
        templateParams,
        '1R6SoxJPHMT6ZXT5P' // Your public key
      )

      if (result.status === 200 || result.status === 200) {
        setSubmitStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you within 24 hours.')
        setFormData({ 
          title: '', 
          name: '', 
          time: '', 
          message: '', 
          email: '' 
        })
        
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        throw new Error(`Failed to send message: ${result.text}`)
      }
      
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setStatusMessage('Failed to send message. Please try again or you can email me directly.')
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('praveen.work.dev@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const collaborationLinks = [
    {
      icon: Github,
      title: 'GitHub',
      description: 'Projects & Contributions',
      href: 'https://github.com/praveen8848',
      color: 'text-gray-900 dark:text-white',
      bgColor: 'bg-gray-50 dark:bg-gray-900'
    },
    {
      icon: Cpu,
      title: 'LeetCode',
      description: 'Algorithm Challenges',
      href: 'https://leetcode.com/u/knowpraveeno/',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-gray-50 dark:bg-gray-900'
    },
    {
      icon: Code,
      title: 'Codeforces',
      description: 'Competitive Programming',
      href: 'https://codeforces.com/profile/praveenverma',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-gray-50 dark:bg-gray-900'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'praveen.work.dev@gmail.com',
      action: copyEmail,
      showCopy: true,
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Praveen Verma',
      href: 'https://www.linkedin.com/in/praveen-verma-9649a4292/',
      action: null,
      showCopy: false,
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Haridwar, Uttarakhand, India',
      href: '#',
      action: null,
      showCopy: false,
    },
  ]

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 relative">
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
              Contact & Collaboration
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Build Together
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Open to discussing innovative projects, technical challenges, and opportunities 
            for collaboration in backend engineering, AI systems, and scalable architecture.
          </p>
        </motion.div>

        {/* TWO COLUMNS LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* LEFT COLUMN - CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4">
  {contactInfo.map((info, index) => (
    <div
      key={info.title}
      className={`group flex items-start gap-8 border-l-2 pl-8 py-6 transition-colors ${
        info.href 
          ? 'border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer' 
          : 'border-gray-100 dark:border-gray-800'
      }`}
      onClick={info.href ? () => window.open(info.href, '_blank') : undefined}
    >
      <div className="shrink-0 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
        <info.icon size={28} />
      </div>
      
      <div className="flex-1 space-y-2">
        <div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {info.title}
          </div>
          <div className="text-xl font-medium text-gray-900 dark:text-white">
            {info.value}
          </div>
        </div>
        
        {/* FIXED: Only show button if action exists */}
        {info.showCopy && info.action && (
          <div className="pt-2">
            <button
              onClick={info.action}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Email
                </>
              )}
            </button>
          </div>
        )}
        
        {info.href && !info.showCopy && (
          <div className="pt-2">
            <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              <span>Visit Profile</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        )}
      </div>
    </div>
  ))}
</div>
          </motion.div>

          {/* RIGHT COLUMN - COLLABORATIONS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Collaborations
            </h3>
            
            <div className="space-y-4">
              {collaborationLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-8 border-l-2 pl-8 py-6 border-gray-100 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                  >
                    <div className={`shrink-0 p-3 rounded-xl ${link.bgColor}`}>
                      <Icon className={`w-6 h-6 ${link.color}`} />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <div className="text-xl font-medium text-gray-900 dark:text-white">
                          {link.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {link.description}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          <span>Visit Profile</span>
                          <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* CONTACT FORM SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4">
                <Send size={14} />
                <span>Get In Touch</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Send a Message
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                For project inquiries, technical discussions, or collaboration opportunities.
              </p>
            </div>

            <div className="md:w-2/3">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-300 font-medium">
                      {statusMessage}
                    </span>
                  </div>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    <span className="text-red-800 dark:text-red-300 font-medium">
                      {statusMessage}
                    </span>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Contact Time
                    </label>
                    <input
                      type="text"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Weekdays 2-5 PM"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and technical requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  * Required fields • Typically respond within 24 hours
                </p>
              </form>
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
              Available for freelance projects, open source contributions, and full-time opportunities
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
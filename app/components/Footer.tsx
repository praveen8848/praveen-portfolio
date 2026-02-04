'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    // Changed 'py-8' to 'py-12' to increase height
    <footer className="py-12 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Increased vertical spacing to 'space-y-6' for better balance */}
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          
          {/* Brand & Role */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Praveen Verma
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Computer Science Engineer & Problem Solver
            </p>
          </div>
          
          {/* Copyright & Tech Stack */}
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Engineered with Next.js & Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
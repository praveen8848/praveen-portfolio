import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import ThemeProvider from '@/app/components/ThemeProvider'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import BackToTop from '@/app/components/BackToTop'

// Inside your layout component, add:


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Praveen Verma | Backend Developer',
  description: 'Engineering scalable, event-driven systems and solving complex problems through clean code and modern architecture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-dark-text transition-colors`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
            <BackToTop />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
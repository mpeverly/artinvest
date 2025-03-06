import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ArtInvest',
  description: 'A marketplace for fractional ownership of public art',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
} 
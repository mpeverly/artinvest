'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Town Dashboard', href: '/dashboard/town' },
  { name: 'Artist Dashboard', href: '/dashboard/artist' },
  { name: 'Resident Dashboard', href: '/dashboard/resident' },
  { name: 'Visitor Dashboard', href: '/dashboard/visitor' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link 
              href="/" 
              className="flex flex-shrink-0 items-center"
            >
              <span className="text-2xl font-bold text-indigo-600">ArtInvest</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    pathname === item.href
                      ? 'border-b-2 border-indigo-500 text-gray-900'
                      : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
} 
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">MyApp</span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-zinc-700 dark:text-zinc-200 hover:underline">About</Link>
            <Link href="/studentlist" className="text-zinc-700 dark:text-zinc-200 hover:underline">studentList Dynamic Routing</Link>
            <Link href="/allocation" className="text-zinc-700 dark:text-zinc-200 hover:underline">Allocation</Link>
            <Link href="/product" className="text-zinc-700 dark:text-zinc-200 hover:underline">Product SSR</Link>
            <button className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded">Login</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-zinc-700 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* hamburger / close icons */}
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 pb-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col space-y-2 px-2">
              <Link href="/about" className="px-3 py-2 rounded text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">About</Link>
              <Link href="/studentlist" className="px-3 py-2 rounded text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">Student List Dynamic Route</Link>
              <Link href="/allocation" className="px-3 py-2 rounded text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">Allocation</Link>
              <Link href="/settings" className="px-3 py-2 rounded text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800">Settings</Link>
              <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded">Login</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

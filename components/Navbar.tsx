'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-[10000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold" style={{'color':'#4f46e5'}}>TEQIVO</span>
              {/* #7e22ce */}
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/about" className="nav-link">About</Link>
              {/* <Link href="/portfolio" className="nav-link">Portfolio</Link>
              <Link href="/blog" className="nav-link">Blog</Link> */}
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/services" className="mobile-nav-link">Services</Link>
            <Link href="/about" className="mobile-nav-link">About</Link>
            <Link href="/portfolio" className="mobile-nav-link">Portfolio</Link>
            <Link href="/blog" className="mobile-nav-link">Blog</Link>
            <Link href="/contact" className="mobile-nav-link">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
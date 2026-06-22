'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Produk', href: '#produk' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#footer' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'bg-white/80 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logos/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-[15px] text-gray-900 tracking-tight">
                EASY
              </span>
              <span className="text-[15px] text-red-600 tracking-tight -mt-0.5">
                WAREHOUSE
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[13.5px] font-medium text-gray-600 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-0.5 bg-red-500 rounded-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#demo"
              className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-[13.5px] px-5 py-2 rounded-md shadow-md hover:shadow-red-200 transition-all duration-200"
            >
              Jadwalkan Demo
            </a>
          </div>

          {/* Mobile */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 pb-5 pt-2 bg-white/98 backdrop-blur-md border-t border-gray-100 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#demo"
              className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-[13.5px] px-5 py-2 rounded-xl shadow-md hover:shadow-red-200 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Jadwalkan Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

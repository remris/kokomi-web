'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#community', label: 'Community' },
  { href: '#screenshots', label: 'Screenshots' },
  { href: '#how-it-works', label: 'So funktioniert\'s' },
  { href: '#pricing', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-md">
            <Image src="/foody_icon2.png" alt="Kokomu Logo" width={36} height={36} />
          </div>
          <span className="text-gray-800 font-black text-xl tracking-tight">Kokomu</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-gray-500 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-all">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#download"
            className="gradient-brand text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-md hover:scale-105">
            Jetzt herunterladen
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-500 hover:text-gray-800 p-2">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pb-6 pt-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-gray-600 hover:text-gray-900 py-3 text-base font-medium border-b border-gray-100 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#download" onClick={() => setOpen(false)}
            className="mt-4 block text-center gradient-brand text-white font-bold py-3 rounded-xl">
            Jetzt herunterladen
          </a>
        </div>
      )}
    </nav>
  )
}

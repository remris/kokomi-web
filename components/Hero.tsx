'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Sparkles, ShoppingCart, ChefHat } from 'lucide-react'

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = badgeRef.current
    if (!el) return
    el.style.opacity = '1'
    el.style.transform = 'translateY(0)'
  }, [])

  return (
    <section className="relative min-h-screen gradient-hero flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-8 transition-all duration-700"
          style={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          <Sparkles size={14} />
          KI-gestützte Küchen-App — kostenlos starten
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Deine Küche.{' '}
          <span className="text-gradient">Smarter.</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Vorrat verwalten, KI-Rezepte aus deinen Zutaten generieren,
          Einkaufslisten mit dem Haushalt teilen — alles in einer App.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#download"
            className="group flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
          >
            <span>📱</span>
            Kostenlos herunterladen
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 text-gray-300 hover:text-white font-medium px-6 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all"
          >
            Features entdecken
            <ArrowDown size={16} />
          </a>
        </div>

        {/* Floating feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { icon: '🧠', text: 'KI-Rezepte' },
            { icon: '📦', text: 'Vorrat tracken' },
            { icon: '🛒', text: 'Einkaufslisten' },
            { icon: '👥', text: 'Haushalt teilen' },
            { icon: '📊', text: 'Nährwerte' },
            { icon: '🏷️', text: 'Barcode-Scanner' },
          ].map(item => (
            <span
              key={item.text}
              className="flex items-center gap-1.5 glass text-gray-300 text-sm px-3 py-1.5 rounded-full"
            >
              {item.icon} {item.text}
            </span>
          ))}
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-64 md:w-72 animate-float">
          <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-black/60 border border-white/10">
            <div className="bg-gray-950 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
              {/* Status bar */}
              <div className="bg-green-800 px-6 pt-4 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white text-xs font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 bg-white rounded-sm" />
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-sm" />
                  </div>
                </div>
                <p className="text-green-100 text-xs">Guten Morgen! 👋</p>
                <p className="text-white font-bold text-base mt-1">Was kochst du heute?</p>
              </div>
              {/* Content */}
              <div className="bg-gray-950 p-4 space-y-3">
                <div className="bg-gray-900 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-900 rounded-xl flex items-center justify-center text-lg">🥗</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Thai Curry</p>
                    <p className="text-gray-500 text-xs">25 Min · 480 kcal</p>
                  </div>
                  <div className="ml-auto bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">KI</div>
                </div>
                <div className="bg-gray-900 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-900 rounded-xl flex items-center justify-center text-lg">🍝</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Pasta Primavera</p>
                    <p className="text-gray-500 text-xs">20 Min · 420 kcal</p>
                  </div>
                  <div className="ml-auto bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">KI</div>
                </div>
                <div className="bg-gray-900 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-lg">🥘</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Griechischer Auflauf</p>
                    <p className="text-gray-500 text-xs">35 Min · 550 kcal</p>
                  </div>
                  <div className="ml-auto bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">KI</div>
                </div>
                {/* Bottom nav hint */}
                <div className="flex justify-around pt-2 border-t border-gray-800">
                  <span className="text-green-400 text-lg">🏠</span>
                  <span className="text-gray-600 text-lg">📦</span>
                  <span className="text-gray-600 text-lg">📷</span>
                  <span className="text-gray-600 text-lg">🍳</span>
                  <span className="text-gray-600 text-lg">🛒</span>
                </div>
              </div>
            </div>
          </div>
          {/* Glow under phone */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-8 bg-green-500/30 rounded-full blur-xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}


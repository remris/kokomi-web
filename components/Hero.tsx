'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Sparkles, Star } from 'lucide-react'

function PhoneMockup({ label, screen }: { label: string; screen: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-56 md:w-64">
      <div className="bg-gray-900 rounded-[2.8rem] p-2.5 phone-shadow">
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-950 rounded-full z-10" />
        <div className="bg-gray-950 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] relative">
          {screen}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <span className="text-[9px] text-white/30 bg-black/40 px-2 py-0.5 rounded-full">{label}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function HeroAppScreen() {
  const items = [
    { e: '🥛', n: 'Milch', d: '2 Tage', c: 'text-yellow-400' },
    { e: '🥚', n: 'Eier (6)', d: '12 Tage', c: 'text-green-400' },
    { e: '🧀', n: 'Parmesan', d: '30 Tage', c: 'text-green-400' },
    { e: '🍅', n: 'Tomaten', d: '1 Tag', c: 'text-red-400' },
    { e: '🥩', n: 'Hähnchen', d: '3 Tage', c: 'text-yellow-400' },
  ]
  return (
    <div className="w-full h-full flex flex-col bg-[#08101a]">
      <div className="px-4 pt-8 pb-3 bg-gradient-to-b from-[#0d1d30] to-[#08101a]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-blue-400/70">Guten Morgen 👋</p>
            <p className="text-[11px] font-bold text-white">Mein Vorrat</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="text-[8px]">👤</span>
          </div>
        </div>
      </div>
      <div className="px-3 grid grid-cols-3 gap-1.5 mb-3 mt-2">
        {[['32', 'Artikel'], ['3', 'Ablauf bald'], ['5', 'KI-Rezepte']].map(([n, l]) => (
          <div key={l} className="bg-[#0d1d30] rounded-xl p-2 text-center">
            <p className="text-[12px] font-black text-white">{n}</p>
            <p className="text-[7px] text-gray-500">{l}</p>
          </div>
        ))}
      </div>
      <div className="px-3 flex-1 space-y-1.5 overflow-hidden">
        {items.map(item => (
          <div key={item.n} className="flex items-center gap-2 bg-[#0d1d30]/60 rounded-xl px-2.5 py-1.5">
            <span className="text-[14px]">{item.e}</span>
            <p className="flex-1 text-[9px] font-semibold text-white">{item.n}</p>
            <span className={`text-[7px] font-medium ${item.c}`}>{item.d}</span>
          </div>
        ))}
      </div>
      <div className="px-3 pb-4 pt-2">
        <div className="h-8 rounded-full gradient-brand flex items-center justify-center">
          <span className="text-[9px] font-bold text-white">+ Artikel hinzufügen</span>
        </div>
      </div>
    </div>
  )
}

const featurePills = [
  '🧠 KI-Rezepte', '📦 Vorrat tracken', '🛒 Einkaufslisten',
  '👥 Haushalt teilen', '📊 Nährwerte', '🌱 Lebensmittel retten',
]

export default function Hero() {
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headRef.current) {
      headRef.current.style.opacity = '1'
      headRef.current.style.transform = 'translateY(0)'
    }
  }, [])

  return (
    <section className="relative min-h-screen gradient-hero flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left – Text */}
          <div ref={headRef} className="text-center lg:text-left transition-all duration-700"
            style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <div className="inline-flex items-center gap-2 glass-brand text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Sparkles size={12} />
              KI-gestützte Küchen-App · Kostenlos starten
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-5">
              Deine Küche.{' '}
              <span className="text-gradient">Smarter.</span>
              <br />
              <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-400">
                Lebensmittel retten.
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Vorrat tracken, KI-Rezepte aus deinen Zutaten generieren,
              Einkaufslisten mit dem Haushalt teilen — und nie wieder Lebensmittel verschwenden.
            </p>

            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
              <div className="flex -space-x-2">
                {['🧑‍🍳', '👩‍🍳', '🧑‍🍳', '👨‍🍳', '👩'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full glass-brand border border-blue-500/20 flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500">Beliebt bei Haushalten in DE</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a href="#download"
                className="flex items-center justify-center gap-3 gradient-brand text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all">
                <span>📱</span>
                Kostenlos herunterladen
              </a>
              <a href="#features"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-white font-medium px-6 py-4 rounded-2xl glass hover:bg-white/10 transition-all">
                Features entdecken <ArrowDown size={16} />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {featurePills.map(item => (
                <span key={item} className="glass text-gray-300 text-xs px-3 py-1.5 rounded-full">{item}</span>
              ))}
            </div>
          </div>

          {/* Right – Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-75 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="relative animate-float">
                <PhoneMockup label="→ Screenshot hier einfügen" screen={<HeroAppScreen />} />
              </div>
              <div className="absolute -left-12 top-1/4 glass-brand rounded-2xl p-3 animate-float-slow hidden lg:block">
                <p className="text-[11px] font-bold text-white mb-0.5">🧠 KI-Rezept</p>
                <p className="text-[10px] text-gray-400">Aus deinen Vorräten</p>
                <p className="text-[10px] text-blue-400 font-medium mt-1">Pasta Carbonara ✨</p>
              </div>
              <div className="absolute -right-10 bottom-1/3 glass rounded-2xl p-3 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
                <p className="text-[11px] font-bold text-white mb-0.5">♻️ Gerettet!</p>
                <p className="text-[10px] text-teal-400">3 Artikel vor Ablauf</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 hidden md:block">
          <a href="#features" className="inline-flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors">
            <span className="text-xs">Scroll für mehr</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

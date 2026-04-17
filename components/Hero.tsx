'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'
import Image from 'next/image'

function PhoneMockup({ label, screen, src }: { label: string; screen?: React.ReactNode; src?: string }) {
  return (
    <div className="relative mx-auto w-56 md:w-64">
      <div className="bg-gray-800 rounded-[2.8rem] p-2.5 phone-shadow">
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-full z-10" />
        <div className="bg-gray-900 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] relative">
          {src ? (
            <Image src={src} alt={label} fill className="object-contain" quality={100} priority />
          ) : (
            screen
          )}
          {!src && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <span className="text-[9px] text-white/30 bg-black/40 px-2 py-0.5 rounded-full">{label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const heroFloatCardBase =
  'absolute z-20 max-w-[148px] glass-brand rounded-2xl p-3 border border-blue-200/50 shadow-sm hidden lg:block'

function HeroFloatCard({
  title,
  subtitle,
  highlight,
  className,
  animation = 'float',
  delaySec = 0,
}: {
  title: string
  subtitle: string
  highlight?: string
  className: string
  animation?: 'float' | 'float-slow'
  delaySec?: number
}) {
  return (
    <div
      className={`${heroFloatCardBase} ${animation === 'float-slow' ? 'animate-float-slow' : 'animate-float'} ${className}`}
      style={{ animationDelay: `${delaySec}s` }}
    >
      <p className="text-[11px] font-bold text-gray-800 mb-0.5 leading-tight">{title}</p>
      <p className="text-[10px] text-gray-500 leading-snug">{subtitle}</p>
      {highlight ? (
        <p className="text-[10px] text-[#3D6B8F] font-medium mt-1 leading-snug">{highlight}</p>
      ) : null}
    </div>
  )
}

function HeroAppScreen() {
  const items = [
    { e: '🥛', n: 'Milch', d: '2 Tage', c: 'text-yellow-500' },
    { e: '🥚', n: 'Eier (6)', d: '12 Tage', c: 'text-green-500' },
    { e: '🧀', n: 'Parmesan', d: '30 Tage', c: 'text-green-500' },
    { e: '🍅', n: 'Tomaten', d: '1 Tag', c: 'text-red-400' },
    { e: '🍗', n: 'Hähnchen', d: '3 Tage', c: 'text-yellow-500' },
  ]
  return (
    <div className="w-full h-full flex flex-col bg-[#f8fafc]">
      <div className="px-4 pt-8 pb-3 bg-gradient-to-b from-[#3D6B8F] to-[#2A5470]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] text-blue-100/80">Guten Morgen 👋</p>
            <p className="text-[11px] font-bold text-white">Mein Vorrat</p>
          </div>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-[8px]">👤</span>
          </div>
        </div>
      </div>
      <div className="px-3 grid grid-cols-3 gap-1.5 mb-3 mt-2">
        {[['32', 'Artikel'], ['3', 'Ablauf bald'], ['5', 'KI-Rezepte']].map(([n, l]) => (
          <div key={l} className="bg-white rounded-xl p-2 text-center shadow-sm border border-gray-100">
            <p className="text-[12px] font-black text-gray-800">{n}</p>
            <p className="text-[7px] text-gray-400">{l}</p>
          </div>
        ))}
      </div>
      <div className="px-3 flex-1 space-y-1.5 overflow-hidden">
        {items.map(item => (
          <div key={item.n} className="flex items-center gap-2 bg-white rounded-xl px-2.5 py-1.5 shadow-sm border border-gray-100">
            <span className="text-[14px]">{item.e}</span>
            <p className="flex-1 text-[9px] font-semibold text-gray-700">{item.n}</p>
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
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(61,107,143,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(61,107,143,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left – Text */}
          <div ref={headRef} className="text-center lg:text-left transition-all duration-700"
            style={{ opacity: 0, transform: 'translateY(24px)' }}>
            <div className="inline-flex items-center gap-2 glass-brand text-[#3D6B8F] text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <Sparkles size={12} />
              KI-gestützte Küchen-App · Kostenlos starten
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] mb-5">
              Deine Küche.{' '}
              <span className="text-gradient">Smarter.</span>
              <br />
              <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-500">
                Lebensmittel retten.
              </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Vorrat tracken, KI-Rezepte aus deinen Zutaten generieren,
              Einkaufslisten mit dem Haushalt teilen – und nie wieder Lebensmittel verschwenden.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <a href="#download"
                className="flex items-center justify-center gap-3 gradient-brand text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <span>📱</span>
                Kostenlos herunterladen
              </a>
              <a href="#features"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium px-6 py-4 rounded-2xl glass hover:bg-white/90 transition-all border border-gray-200">
                Features entdecken <ArrowDown size={16} />
              </a>
            </div>
          </div>

          {/* Right – Phone mockup (nach links gerückt, Karten folgen im gleichen Wrapper) */}
          <div className="flex w-full min-w-0 justify-center">
            <div className="relative lg:-translate-x-[0.21rem] xl:-translate-x-[0.43rem] 2xl:-translate-x-[0.64rem]">
              <div className="absolute inset-0 scale-75 bg-blue-300/20 rounded-full blur-3xl" />
              <div className="relative animate-float">
                <PhoneMockup label="Home Screen" src="/screenshots/home_screen.jpg" screen={<HeroAppScreen />} />
              </div>
              {/* Funktions-Hinweise um das Phone – gleicher glass-brand-Stil, an den Rändern verteilt */}
              <HeroFloatCard
                className="-left-[7.25rem] top-[4%] sm:-left-[7.5rem]"
                animation="float-slow"
                delaySec={0}
                title="📅 Wochenplan"
                subtitle="Mahlzeiten für die Woche planen – aus Vorrat & Ernährung"
                highlight="7 Tage im Überblick · flexibel anpassen"
              />
              <HeroFloatCard
                className="-left-[7rem] top-[calc(30%_+_50px)]"
                animation="float-slow"
                delaySec={0.35}
                title="✨ KI-Rezepte"
                subtitle="Keine Idee? Oder kochen mit dem, was du zuhause hast"
                highlight="Inspiration & Vorrat kombiniert · schnell 🍝"
              />
              <HeroFloatCard
                className="-right-[7.25rem] top-[8%] sm:-right-[7.5rem]"
                animation="float"
                delaySec={0.5}
                title="🏠 Haushalt"
                subtitle="Eine gemeinsame App – Listen & Einkauf für alle sichtbar"
                highlight="Änderungen sofort für alle · nichts doppelt"
              />
              <HeroFloatCard
                className="-right-[6.75rem] top-[44%]"
                animation="float"
                delaySec={0.85}
                title="✅ Gerettet!"
                subtitle="Noch nutzbar – bevor MHD abläuft"
                highlight="3 Artikel gesichert"
              />
              <HeroFloatCard
                className="-left-[6.5rem] bottom-[14%]"
                animation="float-slow"
                delaySec={1.1}
                title="🛒 Einkaufsliste"
                subtitle="Abhaken im Laden · Haushalt sieht mit"
                highlight="Milch · Eier · Kräuter"
              />
              <HeroFloatCard
                className="-right-[7rem] bottom-[6%]"
                animation="float"
                delaySec={1.45}
                title="📍 Lokal"
                subtitle="Reste teilen, tauschen & Nachbarn entdecken – bei dir in der Nähe"
                highlight="Kurze Wege · weniger wegwerfen · vernetzt"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-16 hidden md:block">
          <a href="#features" className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
            <span className="text-xs">Scroll für mehr</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

const steps = [
  {
    number: '01',
    emoji: '📦',
    title: 'Vorrat scannen',
    desc: 'Scanne deine Lebensmittel per Barcode oder füge sie manuell hinzu. Foody merkt sich alles – inklusive Ablaufdatum.',
    color: 'bg-green-500',
  },
  {
    number: '02',
    emoji: '🧠',
    title: 'KI fragt: Was hast du?',
    desc: 'Tippe auf „KI-Rezepte" – die KI schaut was du hast und schlägt 3 komplett verschiedene Gerichte vor. Jedes Mal neu.',
    color: 'bg-blue-500',
  },
  {
    number: '03',
    emoji: '👨‍🍳',
    title: 'Kochen mit Anleitung',
    desc: 'Schritt-für-Schritt Kochmodus, Portionen anpassen, Timer direkt in der App. Dein Handy bleibt dabei aktiv.',
    color: 'bg-purple-500',
  },
  {
    number: '04',
    emoji: '🛒',
    title: 'Einkaufen & Teilen',
    desc: 'Fehlende Zutaten landen mit einem Tap auf der Einkaufsliste. Teile sie mit dem Haushalt – alle haken live ab.',
    color: 'bg-orange-500',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">So funktioniert's</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            In 4 Schritten zum smarten Haushalt
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Keine Einrichtung, keine Anleitung nötig. Einfach loslegen.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-green-500/50 via-blue-500/50 to-orange-500/50" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex gap-5 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:flex-row-reverse md:text-right'}`}
              >
                {/* Number badge */}
                <div className={`flex-shrink-0 w-14 h-14 ${step.color} rounded-2xl flex flex-col items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{step.emoji}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-600 text-xs font-mono font-bold">{step.number}</span>
                    <h3 className="text-white font-bold text-xl">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


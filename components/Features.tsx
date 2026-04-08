'use client'

import { useRef } from 'react'

const features = [
  {
    emoji: '🧠',
    title: 'KI-Rezepte aus deinem Vorrat',
    desc: 'Sag der KI was du hast – sie generiert 3 kreative, abwechslungsreiche Rezepte. Keine Ideen mehr was du kochen sollst.',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
  },
  {
    emoji: '📦',
    title: 'Vorrat immer im Blick',
    desc: 'Barcode scannen, MHD erfassen, Ablaufwarnungen erhalten. Dein digitaler Kühlschrank — nie wieder Lebensmittel wegwerfen.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
  },
  {
    emoji: '🛒',
    title: 'Smarte Einkaufslisten',
    desc: 'Erstelle Listen, teile sie mit dem Haushalt, hake gemeinsam ab. Einkauf via Kassenbon-Scanner direkt in den Vorrat übernehmen.',
    color: 'from-green-500/20 to-green-600/5',
    border: 'border-green-500/20',
  },
  {
    emoji: '👥',
    title: 'Haushalt teilen',
    desc: 'Lade Mitbewohner oder Familie ein. Geteilter Vorrat, geteilte Einkaufslisten, gemeinsamer Haushaltschat — in Echtzeit.',
    color: 'from-orange-500/20 to-orange-600/5',
    border: 'border-orange-500/20',
  },
  {
    emoji: '📊',
    title: 'Nährwerte & Kalorien',
    desc: 'Verfolge Kalorien, Protein, Kohlenhydrate und Fett. Erstelle dein Ernährungsprofil und behalte deine Ziele im Blick.',
    color: 'from-red-500/20 to-red-600/5',
    border: 'border-red-500/20',
  },
  {
    emoji: '📅',
    title: 'Wochenplaner',
    desc: 'Plane 7 Tage im Voraus. Frühstück, Mittag, Abend — alle Zutaten direkt auf die Einkaufsliste. Mit Community teilen.',
    color: 'from-cyan-500/20 to-cyan-600/5',
    border: 'border-cyan-500/20',
  },
  {
    emoji: '🏷️',
    title: 'Barcode & Kassenbon Scanner',
    desc: 'Produkte blitzschnell per Barcode erfassen. Kassenbon fotografieren → KI erkennt alle Produkte automatisch.',
    color: 'from-yellow-500/20 to-yellow-600/5',
    border: 'border-yellow-500/20',
  },
  {
    emoji: '🌍',
    title: 'Community Rezepte',
    desc: 'Entdecke Rezepte von anderen Usern, teile deine Lieblingsgerichte, like und kommentiere. Kochbuch trifft Social Media.',
    color: 'from-pink-500/20 to-pink-600/5',
    border: 'border-pink-500/20',
  },
  {
    emoji: '🔥',
    title: 'Koch-Streak & Gamification',
    desc: 'Bleib motiviert mit täglichen Streaks, Wassertracker und persönlichen Zielen. Kochen macht mehr Spaß mit Foody.',
    color: 'from-rose-500/20 to-rose-600/5',
    border: 'border-rose-500/20',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-950 py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Alles was deine Küche braucht
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Foody kombiniert smarte Technologie mit einfacher Bedienung — für jeden Haushalt.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`relative rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} p-6 card-hover group`}
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


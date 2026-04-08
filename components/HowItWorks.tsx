'use client'

const steps = [
  { num: '01', emoji: '📲', title: 'App herunterladen', desc: 'Kostenlos im Google Play Store. Konto in 30 Sekunden erstellt — E-Mail reicht.' },
  { num: '02', emoji: '📦', title: 'Vorrat erfassen', desc: 'Barcode scannen, Kassenbon fotografieren oder manuell eingeben. Dein Vorrat ist sofort digital.' },
  { num: '03', emoji: '🧠', title: 'KI fragt deine Ideen', desc: 'Sag was du kochen magst oder lass die KI entscheiden. Rezepte aus deinen vorhandenen Zutaten — in Sekunden.' },
  { num: '04', emoji: '🛒', title: 'Einkauf & Haushalt', desc: 'Fehlende Zutaten landen direkt auf der Einkaufsliste. Haushaltsmitglieder sehen alles in Echtzeit.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-950 py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">So funktioniert&apos;s</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            In 4 Schritten startklar
          </h2>
          <p className="text-gray-400 text-lg">Keine lange Einrichtung. Einfach loslegen.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-blue-500/30 to-transparent z-0" />
              )}
              <div className="relative glass rounded-2xl p-6 card-hover z-10">
                <div className="text-3xl mb-4">{s.emoji}</div>
                <span className="text-xs font-black text-blue-500/50 tracking-widest">{s.num}</span>
                <h3 className="text-white font-bold text-base mt-1 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

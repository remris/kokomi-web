'use client'

const features = [
  { emoji: '🧠', title: 'KI-Rezepte aus deinem Vorrat', desc: 'Sag der KI was du hast – sie generiert kreative, abwechslungsreiche Rezepte. Keine Ideen mehr was du kochen sollst.', color: 'from-violet-500/15 to-violet-600/5', border: 'border-violet-500/20', tag: 'Beliebt' },
  { emoji: '📦', title: 'Vorrat immer im Blick', desc: 'Barcode scannen, MHD erfassen, Ablaufwarnungen erhalten. Dein digitaler Kühlschrank — nie wieder Lebensmittel wegwerfen.', color: 'from-blue-500/15 to-blue-600/5', border: 'border-blue-500/20' },
  { emoji: '🛒', title: 'Smarte Einkaufslisten', desc: 'Erstelle Listen, teile sie mit dem Haushalt, hake gemeinsam ab. Kassenbon-Scanner übernimmt alles direkt in den Vorrat.', color: 'from-teal-500/15 to-teal-600/5', border: 'border-teal-500/20' },
  { emoji: '👥', title: 'Haushalt teilen', desc: 'Lade Mitbewohner oder Familie ein. Geteilter Vorrat, geteilte Listen, gemeinsamer Haushaltschat — alles in Echtzeit.', color: 'from-orange-500/15 to-orange-600/5', border: 'border-orange-500/20' },
  { emoji: '🌱', title: 'Lebensmittel retten', desc: 'Ablaufwarnungen, Resteverwertungs-Rezepte und smarte Vorschläge helfen dir, weniger wegzuwerfen und nachhaltiger zu leben.', color: 'from-green-500/15 to-green-600/5', border: 'border-green-500/20', tag: 'Nachhaltigkeit' },
  { emoji: '📅', title: 'Wochenplaner', desc: 'Plane 7 Tage im Voraus. Alle Zutaten direkt auf die Einkaufsliste. Mit der Community teilen oder privat behalten.', color: 'from-cyan-500/15 to-cyan-600/5', border: 'border-cyan-500/20' },
  { emoji: '🏷️', title: 'Barcode & Kassenbon Scanner', desc: 'Produkte blitzschnell per Barcode erfassen. Kassenbon fotografieren → KI erkennt alle Produkte automatisch.', color: 'from-yellow-500/15 to-yellow-600/5', border: 'border-yellow-500/20' },
  { emoji: '🌍', title: 'Community & Social Feed', desc: 'Entdecke Rezepte und Wochenpläne von anderen. Teile deine Lieblingsgerichte, kommentiere und vernetze dich.', color: 'from-pink-500/15 to-pink-600/5', border: 'border-pink-500/20' },
  { emoji: '📊', title: 'Nährwerte & Kalorien', desc: 'Verfolge Kalorien, Protein, Kohlenhydrate und Fett. Erstelle dein Ernährungsprofil und behalte deine Ziele im Blick.', color: 'from-red-500/15 to-red-600/5', border: 'border-red-500/20' },
]

export default function Features() {
  return (
    <section id="features" className="bg-gray-950 py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Alles was deine Küche braucht
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Kokomi kombiniert KI-Technologie mit einfacher Bedienung — für jeden Haushalt.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className={`relative rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} p-6 card-hover group`}>
              {f.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full">
                  {f.tag}
                </span>
              )}
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

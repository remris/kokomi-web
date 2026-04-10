'use client'

const features = [
  { emoji: '✨', title: 'KI-Rezepte aus deinem Vorrat', desc: 'Sag der KI was du hast – sie generiert kreative, abwechslungsreiche Rezepte. Keine Ideen mehr was du kochen sollst.', color: 'from-violet-50 to-violet-100/50', border: 'border-violet-200', tag: 'Beliebt' },
  { emoji: '📦', title: 'Vorrat immer im Blick', desc: 'Barcode scannen, MHD erfassen, Ablaufwarnungen erhalten. Dein digitaler Kühlschrank – nie wieder Lebensmittel wegwerfen.', color: 'from-blue-50 to-blue-100/50', border: 'border-blue-200' },
  { emoji: '🛒', title: 'Smarte Einkaufslisten', desc: 'Erstelle Listen, teile sie mit dem Haushalt, hake gemeinsam ab. Kassenbon-Scanner übernimmt alles direkt in den Vorrat.', color: 'from-teal-50 to-teal-100/50', border: 'border-teal-200' },
  { emoji: '🏠', title: 'Haushalt teilen', desc: 'Lade Mitbewohner oder Familie ein. Geteilter Vorrat, geteilte Listen, gemeinsamer Haushaltschat – alles in Echtzeit.', color: 'from-orange-50 to-orange-100/50', border: 'border-orange-200' },
  { emoji: '🌱', title: 'Lebensmittel retten', desc: 'Ablaufwarnungen, Resteverwertungs-Rezepte und smarte Vorschläge helfen dir, weniger wegzuwerfen und nachhaltiger zu leben.', color: 'from-green-50 to-green-100/50', border: 'border-green-200', tag: 'Nachhaltigkeit' },
  { emoji: '📅', title: 'Wochenplaner', desc: 'Plane 7 Tage im Voraus. Alle Zutaten direkt auf die Einkaufsliste. Mit der Community teilen oder privat behalten.', color: 'from-cyan-50 to-cyan-100/50', border: 'border-cyan-200' },
  { emoji: '📷', title: 'Barcode & Kassenbon Scanner', desc: 'Produkte blitzschnell per Barcode erfassen. Kassenbon fotografieren – KI erkennt alle Produkte automatisch.', color: 'from-yellow-50 to-yellow-100/50', border: 'border-yellow-200' },
  { emoji: '🌍', title: 'Community & Social Feed', desc: 'Entdecke Rezepte und Wochenpläne von anderen. Teile deine Lieblingsgerichte, kommentiere und vernetze dich.', color: 'from-pink-50 to-pink-100/50', border: 'border-pink-200' },
  { emoji: '📊', title: 'Nährwerte & Kalorien', desc: 'Verfolge Kalorien, Protein, Kohlenhydrate und Fett. Erstelle dein Ernährungsprofil und behalte deine Ziele im Blick.', color: 'from-red-50 to-red-100/50', border: 'border-red-200' },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-28 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#3D6B8F] text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
            Alles was deine Küche braucht
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Kokomu kombiniert KI-Technologie mit einfacher Bedienung – für jeden Haushalt.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className={`relative rounded-2xl bg-gradient-to-br ${f.color} border ${f.border} p-6 card-hover group`}>
              {f.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-[#3D6B8F]/10 text-[#3D6B8F] border border-[#3D6B8F]/20 px-2 py-0.5 rounded-full">
                  {f.tag}
                </span>
              )}
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

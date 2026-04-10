'use client'

const features = [
  { emoji: '✨', title: 'KI-Rezepte aus deinem Vorrat', desc: 'Sag der KI was du hast – sie generiert 5 kreative Rezepte gleichzeitig. Airfryer, OnePot, MealPrep & mehr. Nie wieder "Was koche ich heute?"', color: 'from-violet-50 to-violet-100/50', border: 'border-violet-200', tag: 'Beliebt' },
  { emoji: '📦', title: 'Vorrat immer im Blick', desc: 'Barcode scannen, MHD erfassen, Ablaufwarnungen erhalten. Geöffnete Artikel tracken, Mindestbestände setzen – dein digitaler Kühlschrank.', color: 'from-blue-50 to-blue-100/50', border: 'border-blue-200' },
  { emoji: '🛒', title: 'Smarter Einkaufsmodus', desc: 'Einkaufslisten mit dem Haushalt teilen, per Kategorie sortieren, im Einkaufsmodus abhaken. Alles landet direkt im Vorrat – automatisch.', color: 'from-teal-50 to-teal-100/50', border: 'border-teal-200' },
  { emoji: '🏠', title: 'Haushalt & Echtzeit-Chat', desc: 'Lade Familie oder Mitbewohner ein. Geteilter Vorrat, gemeinsame Listen, eingebauter Haushaltschat mit Schnellnachrichten – alles live synchron.', color: 'from-orange-50 to-orange-100/50', border: 'border-orange-200' },
  { emoji: '🌱', title: 'Lebensmittel retten', desc: 'Ablaufwarnungen, smarte Resteverwertungs-Rezepte und Verbrauchs-Tracking. Weniger wegwerfen, nachhaltiger leben – die App zeigt dir wie.', color: 'from-green-50 to-green-100/50', border: 'border-green-200', tag: 'Nachhaltigkeit' },
  { emoji: '📅', title: 'Wochenplaner', desc: 'Plane 7 Tage im Voraus. Alle Zutaten mit einem Klick auf die Einkaufsliste. Mit der Community teilen oder als private Vorlage speichern.', color: 'from-cyan-50 to-cyan-100/50', border: 'border-cyan-200' },
  { emoji: '🤝', title: 'Lokale Communities', desc: 'Tritt Communities in deiner PLZ-Region bei oder gründe eine eigene. Teile Lebensmittelreste, biete Vorräte an und vernetze dich nachbarschaftlich.', color: 'from-rose-50 to-rose-100/50', border: 'border-rose-200', tag: 'Neu' },
  { emoji: '💬', title: 'Social Feed & Posts', desc: 'Teile Rezepte und Wochenpläne als Post – mit Text, Bild und verknüpftem Gericht. Kommentiere, like und entdecke was andere kochen.', color: 'from-pink-50 to-pink-100/50', border: 'border-pink-200' },
  { emoji: '📷', title: 'Barcode & Kassenbon Scanner', desc: 'Produkte blitzschnell per Barcode erfassen. Kassenbon fotografieren – KI erkennt alle Produkte automatisch und trägt sie in den Vorrat ein.', color: 'from-yellow-50 to-yellow-100/50', border: 'border-yellow-200' },
  { emoji: '🌍', title: 'Community Rezepte & Pläne entdecken', desc: 'Durchstöbere tausende Rezepte und Wochenpläne. Nach Username suchen, Favoriten speichern, bewerten und eigene Kreationen veröffentlichen.', color: 'from-indigo-50 to-indigo-100/50', border: 'border-indigo-200' },
  { emoji: '📊', title: 'Nährwerte & Kalorien', desc: 'Verfolge Kalorien, Protein, Kohlenhydrate und Fett. Erstelle dein Ernährungsprofil und behalte deine persönlichen Ziele im Blick.', color: 'from-red-50 to-red-100/50', border: 'border-red-200' },
  { emoji: '🔒', title: 'Datenschutz & DSGVO', desc: 'Alle Daten auf EU-Servern (Frankfurt). DSGVO-konform, kein Tracking an Dritte. Profanity-Filter im Chat. Deine Daten gehören dir.', color: 'from-gray-50 to-gray-100/50', border: 'border-gray-200' },
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

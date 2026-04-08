'use client'

const testimonials = [
  { name: 'Sarah M.', role: 'Mutter von 2 Kindern', avatar: '👩', text: 'Seit ich Kokomi nutze werfen wir kaum noch Lebensmittel weg. Die KI schlägt immer was Leckeres mit dem vor was noch da ist. Absolute Empfehlung!', stars: 5 },
  { name: 'Tom K.', role: 'Student, WG mit 3 Personen', avatar: '👨', text: 'Unsere WG teilt jetzt alles über Kokomi. Einkaufslisten in Echtzeit, geteilter Vorrat – nie wieder doppelt kaufen oder streiten wer was einkauft.', stars: 5 },
  { name: 'Lisa B.', role: 'Berufstätige, viel unterwegs', avatar: '👩‍💼', text: 'Der Wochenplaner spart mir jeden Sonntag 30 Minuten Planung. Und die KI-Rezepte sind wirklich gut – kein 08/15 sondern wirklich kreativ.', stars: 5 },
  { name: 'Michael R.', role: 'Koch & Foodie', avatar: '👨‍🍳', text: 'Als jemand der viel kocht ist der Community-Feed Gold wert. Ich teile meine Rezepte und entdecke täglich neue Ideen von anderen.', stars: 5 },
  { name: 'Jana W.', role: 'Nachhaltigkeitsfan', avatar: '🌱', text: 'Endlich eine App die mir wirklich hilft Lebensmittelverschwendung zu reduzieren. Die Ablaufwarnungen und Resteverwertungs-Rezepte sind perfekt.', stars: 5 },
  { name: 'David P.', role: 'Fitness & Ernährung', avatar: '💪', text: 'Das Nährwert-Tracking in Kombination mit dem KI-Wochenplaner ist unschlagbar. Meine Makros passen jetzt endlich zur Trainingsplanung.', stars: 5 },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold uppercase tracking-widest">Bewertungen</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
            Was unsere Nutzer sagen
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <span className="text-gray-900 font-bold text-lg">5.0</span>
            <span className="text-gray-400 text-sm">· Early Adopters</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#3D6B8F]/10 border border-[#3D6B8F]/20 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

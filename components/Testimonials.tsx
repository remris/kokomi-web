'use client'

const reviews = [
  {
    name: 'Sarah M.',
    role: 'Mutter von 3 Kindern',
    avatar: '👩‍👧‍👦',
    rating: 5,
    text: 'Endlich keine Lebensmittelverschwendung mehr! Foody sagt mir genau was ich mit dem kochen kann was noch im Kühlschrank ist. Die KI-Rezepte sind jeden Tag anders – wirklich beeindruckend.',
  },
  {
    name: 'Tobias K.',
    role: 'Student, WG mit 4 Leuten',
    avatar: '👨‍🎓',
    rating: 5,
    text: 'Die geteilte Einkaufsliste ist Gold wert! Wir haken alle gemeinsam ab und wissen immer was noch fehlt. Spart uns so viel Zeit und Geld.',
  },
  {
    name: 'Lena B.',
    role: 'Fitness-Enthusiastin',
    avatar: '🏋️‍♀️',
    rating: 5,
    text: 'Das Nährwert-Tracking ist super simpel. Ich sehe auf einen Blick ob ich mein Protein-Ziel erreiche. Und die KI generiert direkt High-Protein-Rezepte aus meinem Vorrat!',
  },
  {
    name: 'Marco F.',
    role: 'Berufstätiger',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Ich koche viel mehr als früher, weil ich nie mehr überlegen muss was ich mache. Foody schlägt mir in 2 Sekunden was vor. Der Wochenplaner spart mir jeden Sonntag 30 Minuten.',
  },
  {
    name: 'Klara H.',
    role: 'Vegetarierin',
    avatar: '🥗',
    rating: 5,
    text: 'Endlich eine App die meine Vorlieben versteht. Die KI macht nie Fleischrezepte wenn ich vegetarisch auswähle. Und die Community hat so tolle pflanzliche Rezepte!',
  },
  {
    name: 'Felix W.',
    role: 'Koch-Anfänger',
    avatar: '👨‍🍳',
    rating: 5,
    text: 'Der Schritt-für-Schritt Kochmodus ist perfekt für mich. Ich werde kein Schritt vergessen und das Display bleibt an. Ich koche jetzt Sachen die ich nie für möglich gehalten hätte.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-black py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">Bewertungen</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Was unsere User sagen
          </h2>
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            {'★★★★★'.split('').map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
            <span className="text-gray-400 text-sm ml-2">4.9 / 5 aus 2.400+ Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map(r => (
            <div
              key={r.name}
              className="bg-gray-900 border border-white/10 rounded-2xl p-6 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{r.avatar}</div>
                <div>
                  <p className="text-white font-semibold">{r.name}</p>
                  <p className="text-gray-500 text-sm">{r.role}</p>
                </div>
                <div className="ml-auto text-yellow-400 text-sm">{'★'.repeat(r.rating)}</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


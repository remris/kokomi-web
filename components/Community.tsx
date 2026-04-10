'use client'

const communityFeatures = [
  {
    icon: '🏘️',
    title: 'Lokale Nachbarschafts-Communities',
    desc: 'Tritt Communities in deiner PLZ-Region bei oder gründe eine eigene. Bis zu 50 Mitglieder, Admin-Kontrolle, Einladungscode.',
  },
  {
    icon: '🎁',
    title: 'Reste & Vorräte teilen',
    desc: 'Biete übrige Lebensmittel in deiner Community an. Wenn jemand sie abholt, verschwinden sie automatisch aus der Liste.',
  },
  {
    icon: '🆘',
    title: 'Hilfe anfordern & anbieten',
    desc: '"Wer hat eine Tasse Zucker?" – stell schnell Anfragen oder biete Hilfe an. Direkte Nachricht über den integrierten Community-Chat.',
  },
  {
    icon: '📣',
    title: 'Community-Feed',
    desc: 'Poste Neuigkeiten, teile Rezepttipps oder informiere über Lebensmittel die bald verfügbar sind. Kommentieren & Liken inklusive.',
  },
]

const socialFeatures = [
  {
    icon: '💬',
    title: 'Posts mit Rezept-Verknüpfung',
    desc: 'Erstelle Beiträge und verknüpfe eigene Rezepte oder Wochenpläne direkt. Andere sehen die Karte im Post und können speichern.',
  },
  {
    icon: '👥',
    title: 'Folgen & entdecken',
    desc: 'Folge anderen Nutzern, sieh deren Rezepte, Pläne und Posts im Feed. Suche nach @Username um Profile zu finden.',
  },
  {
    icon: '⭐',
    title: 'Bewerten & speichern',
    desc: 'Bewerte Community-Rezepte, speichere Favoriten und Wochenpläne in deiner persönlichen Sammlung.',
  },
  {
    icon: '🔍',
    title: 'Entdecken & filtern',
    desc: 'Entdecke Rezepte nach Kategorie, Kochzeit, Tags (Vegan, Airfryer, OnePot, MealPrep) oder lass dich von KI-Picks inspirieren.',
  },
]

export default function Community() {
  return (
    <section id="community" className="bg-white py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#56B4A0] text-sm font-semibold uppercase tracking-widest">Community</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
            Kochen ist besser zusammen
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Vernetze dich lokal, teile Lebensmittel statt sie wegzuwerfen, entdecke was andere kochen – Kokomu verbindet Küchen.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">

          {/* Local Communities */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center text-xl">🤝</div>
              <div>
                <h3 className="text-xl font-black text-gray-900">Lokale Communities</h3>
                <p className="text-sm text-gray-400">Nach PLZ-Bereich organisiert</p>
              </div>
            </div>
            <div className="space-y-4">
              {communityFeatures.map(f => (
                <div key={f.title} className="flex gap-4 p-4 rounded-2xl bg-teal-50/50 border border-teal-100">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{f.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Feed */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center text-xl">📱</div>
              <div>
                <h3 className="text-xl font-black text-gray-900">Social Feed</h3>
                <p className="text-sm text-gray-400">Rezepte & Pläne mit der Welt teilen</p>
              </div>
            </div>
            <div className="space-y-4">
              {socialFeatures.map(f => (
                <div key={f.title} className="flex gap-4 p-4 rounded-2xl bg-violet-50/50 border border-violet-100">
                  <div className="text-2xl flex-shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm mb-1">{f.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3D6B8F] to-[#56B4A0] p-10 md:p-14 text-center text-white">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative z-10">
            <p className="text-4xl mb-4">🌱</p>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Weniger wegwerfen. Mehr verbinden.
            </h3>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Jeder gerettete Apfel, jedes geteilte Rezept, jede helfende Hand in der Nachbarschaft –
              das ist Kokomu Community.
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-white text-[#3D6B8F] font-bold px-8 py-4 rounded-2xl text-lg hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
            >
              <span>📱</span>
              Jetzt kostenlos starten
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}


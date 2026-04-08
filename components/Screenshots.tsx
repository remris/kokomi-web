'use client'

// Screenshot placeholder component – replace src with real screenshots later
function ScreenshotFrame({ title, description, screen, reverse = false }: {
  title: string
  description: string
  screen: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
      {/* Text */}
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      </div>

      {/* Phone frame */}
      <div className="flex-shrink-0">
        <div className="relative w-52 md:w-60 mx-auto">
          <div className="bg-gray-900 rounded-[2.8rem] p-2.5 phone-shadow">
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-950 rounded-full z-10" />
            <div className="bg-gray-950 rounded-[2.3rem] overflow-hidden aspect-[9/19.5] relative">
              {screen}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-4 py-3 text-center border border-white/10">
                  <p className="text-white/50 text-[10px] font-medium">📸 Screenshot</p>
                  <p className="text-white/30 text-[9px]">hier einfügen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Simulated screens
function VorratScreen() {
  return (
    <div className="w-full h-full bg-[#08101a] flex flex-col">
      <div className="px-3 pt-8 pb-2 bg-gradient-to-b from-[#0d1d30] to-[#08101a]">
        <p className="text-[10px] font-black text-white">Mein Vorrat</p>
        <p className="text-[8px] text-gray-500">32 Artikel · 3 laufen bald ab</p>
      </div>
      <div className="px-2 py-2 flex-1 space-y-1 overflow-hidden">
        {[
          { e: '🥛', n: 'Milch 1L', d: 'MHD: 2 Tage', w: true },
          { e: '🍞', n: 'Vollkornbrot', d: 'MHD: 1 Tag', w: true },
          { e: '🧀', n: 'Gouda', d: 'MHD: 14 Tage', w: false },
          { e: '🥦', n: 'Brokkoli', d: 'MHD: 4 Tage', w: false },
          { e: '🍗', n: 'Hähnchen', d: 'MHD: 2 Tage', w: true },
          { e: '🥚', n: 'Eier (6)', d: 'MHD: 10 Tage', w: false },
          { e: '🍋', n: 'Zitronen', d: 'MHD: 8 Tage', w: false },
        ].map(item => (
          <div key={item.n} className={`flex items-center gap-1.5 rounded-lg px-2 py-1 ${item.w ? 'bg-red-500/10 border border-red-500/20' : 'bg-[#0d1d30]/60'}`}>
            <span className="text-[12px]">{item.e}</span>
            <div className="flex-1">
              <p className="text-[8px] font-semibold text-white">{item.n}</p>
              <p className={`text-[6px] ${item.w ? 'text-red-400' : 'text-gray-500'}`}>{item.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RecipeScreen() {
  return (
    <div className="w-full h-full bg-[#08101a] flex flex-col">
      <div className="px-3 pt-8 pb-2 bg-gradient-to-b from-[#0d1d30] to-[#08101a]">
        <p className="text-[10px] font-black text-white">KI-Rezepte</p>
        <p className="text-[8px] text-gray-500">Aus deinem Vorrat generiert</p>
      </div>
      <div className="px-2 py-2 flex-1 space-y-1.5 overflow-hidden">
        {[
          { n: 'Pasta Carbonara', t: '20 Min', k: '520 kcal', tag: '⭐' },
          { n: 'Gemüse-Curry', t: '30 Min', k: '380 kcal', tag: '🌱' },
          { n: 'Hähnchen-Wrap', t: '15 Min', k: '450 kcal', tag: '🔥' },
        ].map(r => (
          <div key={r.n} className="bg-[#0d1d30]/80 rounded-xl p-2.5">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[9px] font-bold text-white flex-1">{r.n}</p>
              <span className="text-[10px]">{r.tag}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[7px] text-blue-400">⏱ {r.t}</span>
              <span className="text-[7px] text-orange-400">🔥 {r.k}</span>
            </div>
          </div>
        ))}
        <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/20 rounded-xl p-2.5">
          <p className="text-[8px] font-bold text-blue-300">🧠 Neu generieren</p>
          <p className="text-[7px] text-gray-500">Mit aktuellen Vorräten</p>
        </div>
      </div>
    </div>
  )
}

function FeedScreen() {
  return (
    <div className="w-full h-full bg-[#08101a] flex flex-col">
      <div className="px-3 pt-8 pb-2 bg-gradient-to-b from-[#0d1d30] to-[#08101a]">
        <p className="text-[10px] font-black text-white">Community Feed</p>
      </div>
      <div className="px-2 py-2 flex-1 space-y-1.5 overflow-hidden">
        {[
          { u: '👩‍🍳', n: 'Anna K.', t: 'Mein Sommer-Wochenplan ist online! 🌞', r: '🍋 Zitronenpasta', l: 12 },
          { u: '👨‍🍳', n: 'Marco', t: 'Heute Reste gerettet – daraus wurde...', r: '🥗 Buddha Bowl', l: 8 },
        ].map(p => (
          <div key={p.n} className="bg-[#0d1d30]/80 rounded-xl p-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[12px]">{p.u}</span>
              <p className="text-[8px] font-bold text-white">{p.n}</p>
            </div>
            <p className="text-[7px] text-gray-300 mb-1.5">{p.t}</p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-2 py-1">
              <p className="text-[7px] text-blue-300">{p.r}</p>
            </div>
            <p className="text-[6px] text-gray-500 mt-1">❤️ {p.l} Likes</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const screens = [
  {
    title: 'Vorrat & Ablaufwarnungen',
    description: 'Behalte den Überblick über deinen gesamten Vorrat. Ablaufende Artikel werden farblich hervorgehoben – so rettest du Lebensmittel bevor sie im Müll landen.',
    screen: <VorratScreen />,
  },
  {
    title: 'KI-Rezepte in Sekunden',
    description: 'Kein Plan was kochen? Drück einen Knopf – die KI analysiert deinen Vorrat und schlägt passende Rezepte vor. Zutaten direkt auf die Einkaufsliste.',
    screen: <RecipeScreen />,
    reverse: true,
  },
  {
    title: 'Community & Social Feed',
    description: 'Teile deine Lieblingsrezepte und Wochenpläne. Entdecke was andere kochen, vernetze dich und hol dir Inspiration von der Kokomi-Community.',
    screen: <FeedScreen />,
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-28 px-4" style={{ background: 'linear-gradient(180deg, #08101a 0%, #0a0f18 100%)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">App Screenshots</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Sieh Kokomi in Aktion
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Designed für maximale Übersichtlichkeit — intuitiv von Tag 1.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-4 py-2 rounded-full">
            📸 Screenshots werden nach App-Launch eingefügt
          </div>
        </div>

        <div className="space-y-24">
          {screens.map((s, i) => (
            <ScreenshotFrame key={i} title={s.title} description={s.description} screen={s.screen} reverse={s.reverse} />
          ))}
        </div>
      </div>
    </section>
  )
}


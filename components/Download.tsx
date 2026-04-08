'use client'

export default function Download() {
  return (
    <section id="download" className="py-28 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1d30 0%, #08101a 50%, #0a1520 100%)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 glass-brand text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
          🚀 Jetzt verfügbar für Android
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          Starte kostenlos.<br />
          <span className="text-gradient">Heute noch.</span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Kein Abo nötig. Kein Kreditkarte. Einfach herunterladen und loslegen.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Google Play */}
          <a href="#" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl px-6 py-4 transition-all hover:scale-105">
            <div className="text-3xl">▶</div>
            <div className="text-left">
              <p className="text-gray-400 text-xs">Jetzt bei</p>
              <p className="text-white font-bold text-lg leading-tight">Google Play</p>
            </div>
          </a>

          {/* App Store – coming soon */}
          <div className="relative flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 opacity-50 cursor-not-allowed">
            <div className="text-3xl">🍎</div>
            <div className="text-left">
              <p className="text-gray-500 text-xs">Demnächst bei</p>
              <p className="text-white font-bold text-lg leading-tight">App Store</p>
            </div>
            <span className="absolute -top-2.5 -right-2.5 bg-gray-700 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
              Bald
            </span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-xs">
          {['🔒 DSGVO-konform', '🇩🇪 Server in der EU', '♻️ Lebensmittel retten', '💯 Kostenlos starten'].map(b => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

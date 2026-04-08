'use client'

export default function Download() {
  return (
    <section id="download" className="bg-black py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="gradient-brand p-12 md:p-16 text-center relative">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <span className="text-6xl mb-6 block">🍽️</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Bereit für eine smarte Küche?
              </h2>
              <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
                Kostenlos herunterladen. Keine Kreditkarte. Sofort loslegen.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Google Play */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl min-w-[200px]"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.18 23.76c.37.21.8.22 1.2.03l12.15-6.84-2.67-2.67-10.68 9.48zM.67 2.04C.25 2.42 0 3.03 0 3.83v16.34c0 .8.25 1.41.67 1.79l.09.08 9.15-9.15v-.21L.76 3.96l-.09.08zM19.98 10.17l-2.55-1.44-2.98 2.98 2.98 2.98 2.56-1.44c.73-.41.73-1.67-.01-2.08zM4.38.21L16.53 7.05l-2.67 2.67L3.18.24C3.58.05 4.01.06 4.38.21z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Jetzt bei</div>
                    <div className="font-bold text-sm">Google Play</div>
                  </div>
                </a>

                {/* App Store (coming soon) */}
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl min-w-[200px] opacity-60 cursor-not-allowed"
                  title="Kommt bald"
                >
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Bald im</div>
                    <div className="font-bold text-sm">App Store</div>
                  </div>
                </a>
              </div>

              <p className="text-green-200/60 text-sm mt-6">
                iOS-Version in Entwicklung · Android ab sofort verfügbar
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
                {[
                  { value: '4.9★', label: 'Bewertung' },
                  { value: '10K+', label: 'Downloads' },
                  { value: '100%', label: 'Kostenlos' },
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-green-200/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


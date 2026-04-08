'use client'

export default function Footer() {
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#screenshots', label: 'Screenshots' },
    { href: '#pricing', label: 'Preise' },
    { href: '#download', label: 'Download' },
    { href: '#faq', label: 'FAQ' },
  ]
  const legalLinks = [
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/impressum', label: 'Impressum' },
    { href: '/agb', label: 'AGB' },
  ]

  return (
    <footer className="bg-gray-950 border-t border-white/5 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl gradient-brand flex items-center justify-center">
                <span className="text-white font-black text-sm">K</span>
              </div>
              <span className="text-white font-black text-xl">Kokomi</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Die smarte Küchen-App die dir hilft Lebensmittel zu retten,
              besser zu kochen und deinen Alltag zu vereinfachen.
            </p>
            <a href="mailto:support@kokomi.app"
              className="inline-flex items-center gap-2 mt-4 text-gray-500 hover:text-gray-300 text-sm transition-colors">
              ✉️ support@kokomi.app
            </a>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-4">App</p>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-4">Rechtliches</p>
            <ul className="space-y-2.5">
              {legalLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Kokomi App · Made with ❤️ in Deutschland
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-xs">🇩🇪 Server in der EU</span>
            <span className="text-gray-700 text-xs">🔒 DSGVO-konform</span>
            <span className="text-gray-700 text-xs">♻️ Food Rescue</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

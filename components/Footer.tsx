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
    <footer className="bg-white border-t border-gray-200 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl gradient-brand flex items-center justify-center">
                <span className="text-white font-black text-sm">K</span>
              </div>
              <span className="text-gray-900 font-black text-xl">Kokomu</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Die smarte Küchen-App die dir hilft Lebensmittel zu retten,
              besser zu kochen und deinen Alltag zu vereinfachen.
            </p>
            <a href="mailto:support@Kokomu.app"
              className="inline-flex items-center gap-2 mt-4 text-gray-400 hover:text-[#3D6B8F] text-sm transition-colors">
              ✉ support@Kokomu.app
            </a>
          </div>

          <div>
            <p className="text-gray-800 font-semibold text-sm mb-4">App</p>
            <ul className="space-y-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-gray-700 text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gray-800 font-semibold text-sm mb-4">Rechtliches</p>
            <ul className="space-y-2.5">
              {legalLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-gray-700 text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Kokomu App · Made with ❤️ in Deutschland
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-xs">🇩🇪 Server in der EU</span>
            <span className="text-gray-300 text-xs">🔒 DSGVO-konform</span>
            <span className="text-gray-300 text-xs">✅ Food Rescue</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

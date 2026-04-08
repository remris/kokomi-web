export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍽️</span>
              <span className="text-white font-bold text-xl">foody</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Deine smarte Küchen-App für einen besseren Haushalt.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">App</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Preise</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="/impressum" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="/agb" className="hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="mailto:hello@foody-app.de" className="hover:text-white transition-colors">hello@foody-app.de</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Foody. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-600 text-sm">
            Made with ❤️ in Deutschland
          </p>
        </div>
      </div>
    </footer>
  )
}


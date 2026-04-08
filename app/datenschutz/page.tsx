import Link from 'next/link'

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-8 block">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-8">Stand: März 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Verantwortlicher</h2>
            <p>[Dein Name, Adresse, E-Mail]</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Welche Daten wir erheben</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>E-Mail-Adresse (für Konto-Registrierung)</li>
              <li>Von dir eingegebene Vorratsdaten und Rezepte</li>
              <li>Anonyme Nutzungsstatistiken (App-Analyse)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Zweck der Verarbeitung</h2>
            <p className="text-gray-400">
              Deine Daten werden ausschließlich zur Bereitstellung der App-Funktionen verwendet.
              Wir verkaufen keine Daten an Dritte.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Datenspeicherung</h2>
            <p className="text-gray-400">
              Daten werden auf Servern von Supabase (EU, Frankfurt) gespeichert.
              Die Übertragung erfolgt verschlüsselt via HTTPS/TLS.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Deine Rechte</h2>
            <p className="text-gray-400">
              Du hast das Recht auf Auskunft, Berichtigung, Löschung und Widerspruch.
              Zur Löschung deines Kontos kontaktiere uns unter hello@foody-app.de.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Cookies</h2>
            <p className="text-gray-400">
              Diese Website verwendet keine Tracking-Cookies. Technisch notwendige
              Session-Cookies können gesetzt werden.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


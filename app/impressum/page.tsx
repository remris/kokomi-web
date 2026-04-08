import Link from 'next/link'

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-8 block">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-black text-white mb-8">Impressum</h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-lg mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              [Dein Name]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">Kontakt</h2>
            <p>
              E-Mail: hello@foody-app.de
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">Verantwortlich für den Inhalt</h2>
            <p>[Dein Name], [Adresse]</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-2">Haftungsausschluss</h2>
            <p className="text-gray-500">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}


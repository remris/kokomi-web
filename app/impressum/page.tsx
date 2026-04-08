import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – Kokomi',
  description: 'Impressum der Kokomi App gemäß § 5 TMG.',
}

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-8 block">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Impressum</h1>
        <p className="text-gray-500 text-sm mb-10">Angaben gemäß § 5 TMG</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-bold text-xl mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-400">
              <strong className="text-white">Kokomi App</strong><br />
              Christian Remmele<br />
              Eichenmühleweg 23<br />
              88048 Friedrichshafen<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">Kontakt</h2>
            <p className="text-gray-400">
              E-Mail: <a href="mailto:support@kokomi.app" className="text-blue-400 hover:underline">support@kokomi.app</a>
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="text-gray-400">
              Christian Remmele<br />
              Eichenmühleweg 23, 88048 Friedrichshafen
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">Streitschlichtung</h2>
            <p className="text-gray-400">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">Haftung für Inhalte</h2>
            <p className="text-gray-400">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2 className="text-white font-bold text-xl mb-3">Urheberrecht</h2>
            <p className="text-gray-400">
              Die durch die App-Betreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb des Urheberrechtes bedürfen der schriftlichen Zustimmung.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

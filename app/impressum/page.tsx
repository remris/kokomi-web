import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum – Kokomu',
  description: 'Impressum der Kokomu App gemäß § 5 TMG.',
}

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-700 pt-28 pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-[#3D6B8F] hover:text-[#2A5470] text-sm mb-8 font-medium transition-colors">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Impressum</h1>
          <p className="text-gray-400 text-sm mb-10 pb-10 border-b border-gray-100">Angaben gemäß § 5 TMG</p>

          <div className="space-y-10 text-sm leading-relaxed">
            <section>
              <h2 className="text-gray-900 font-bold text-lg mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-600">
                <strong className="text-gray-800">Kokomu App</strong><br />
                Christian Remmele<br />
                Eichenmühleweg 23<br />
                88048 Friedrichshafen<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-gray-900 font-bold text-lg mb-3">Kontakt</h2>
              <p className="text-gray-600">
                E-Mail: <a href="mailto:support@kokomu.app" className="text-[#3D6B8F] hover:underline">support@kokomu.app</a>
              </p>
            </section>

            <section>
              <h2 className="text-gray-900 font-bold text-lg mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p className="text-gray-600">
                Christian Remmele<br />
                Eichenmühleweg 23, 88048 Friedrichshafen
              </p>
            </section>

            <section>
              <h2 className="text-gray-900 font-bold text-lg mb-3">Streitschlichtung</h2>
              <p className="text-gray-600">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#3D6B8F] hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-gray-900 font-bold text-lg mb-3">Haftung für Inhalte</h2>
              <p className="text-gray-600">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
              </p>
            </section>

            <section>
              <h2 className="text-gray-900 font-bold text-lg mb-3">Urheberrecht</h2>
              <p className="text-gray-600">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

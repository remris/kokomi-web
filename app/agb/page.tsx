import Link from 'next/link'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen – Kokomu',
  description: 'Allgemeine Geschäftsbedingungen der Kokomu App.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-gray-900 font-bold text-lg mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

export default function AGB() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-700 pt-28 pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1 text-[#3D6B8F] hover:text-[#2A5470] text-sm mb-8 font-medium transition-colors">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Nutzungsbedingungen</h1>
          <p className="text-gray-400 text-sm mb-10 pb-10 border-b border-gray-100">Stand: April 2026 · Kokomu App</p>

          <div className="space-y-2 text-sm">
            <Section title="1. Geltungsbereich">
              <p>Diese Nutzungsbedingungen gelten für die Nutzung der mobilen App <strong className="text-gray-800">Kokomu</strong>, betrieben von Christian Remmele (nachfolgend &bdquo;Anbieter&ldquo;). Mit der Nutzung stimmst du diesen Bedingungen zu.</p>
            </Section>

            <Section title="2. Leistungsbeschreibung">
              <p>Kokomu ist eine Smart-Kitchen-App mit folgenden Funktionen:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vorratsverwaltung und Lebensmittelscanner</li>
                <li>KI-gestützte Rezeptgenerierung</li>
                <li>Wochen-Mahlzeitenplanung</li>
                <li>Einkaufslisten-Verwaltung</li>
                <li>Community-Feed (Rezepte, Pläne, Beiträge teilen)</li>
                <li>Haushalts-Sharing-Funktionen</li>
                <li>Lokale Nachbarschafts-Communities</li>
              </ul>
            </Section>

            <Section title="3. Registrierung und Konto">
              <ul className="list-disc pl-5 space-y-1">
                <li>Registrierung mit gültiger E-Mail-Adresse erforderlich</li>
                <li>Du bist für die Sicherheit deines Passworts verantwortlich</li>
                <li>Dein Konto ist nicht übertragbar</li>
                <li>Mindestalter: 13 Jahre</li>
                <li>Pro Person ist nur ein Konto erlaubt</li>
              </ul>
            </Section>

            <Section title="4. Kokomu Pro – Abonnement">
              <div className="bg-[#3D6B8F]/5 border border-[#3D6B8F]/20 rounded-xl p-4 mb-3">
                <p><strong className="text-gray-800">Monatlich:</strong> 2,99 € / Monat</p>
                <p><strong className="text-gray-800">Jährlich:</strong> 19,99 € / Jahr (44% Ersparnis)</p>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Zahlung über Google Play Store</li>
                <li>Automatische Verlängerung – kündbar 24h vor Verlängerung</li>
                <li>Pro-Zugang bleibt bis Ende des bezahlten Zeitraums aktiv</li>
                <li>Rückerstattungen gemäß Google Play Richtlinien</li>
              </ul>
            </Section>

            <Section title="5. Nutzerpflichten und verbotene Inhalte">
              <p>Du verpflichtest dich, keine Inhalte zu veröffentlichen die:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>illegal, beleidigend oder diskriminierend sind</li>
                <li>Urheberrechte Dritter verletzen</li>
                <li>Spam oder irreführende Informationen darstellen</li>
                <li>andere Nutzer belästigen oder bedrohen</li>
              </ul>
            </Section>

            <Section title="6. KI-generierte Inhalte">
              <ul className="list-disc pl-5 space-y-1">
                <li>KI-Rezepte sind Vorschläge – keine professionelle Ernährungsberatung</li>
                <li>Prüfe Allergene und Unverträglichkeiten immer selbst</li>
                <li>Keine Haftung für gesundheitliche Folgen von KI-Rezepten</li>
              </ul>
            </Section>

            <Section title="7. Nutzererzeugte Inhalte">
              <ul className="list-disc pl-5 space-y-1">
                <li>Du behältst das Urheberrecht an deinen Inhalten</li>
                <li>Mit Veröffentlichung räumst du dem Anbieter das Recht ein, diese innerhalb der App anzuzeigen</li>
                <li>Der Anbieter kann Inhalte ohne Angabe von Gründen entfernen</li>
              </ul>
            </Section>

            <Section title="8. Haftung">
              <ul className="list-disc pl-5 space-y-1">
                <li>Keine Garantie auf ununterbrochene Verfügbarkeit</li>
                <li>Haftung nur bei grober Fahrlässigkeit</li>
                <li>Haftungsbegrenzung auf die in den letzten 12 Monaten gezahlten Beträge</li>
              </ul>
            </Section>

            <Section title="9. Anwendbares Recht">
              <p>Es gilt deutsches Recht. Für Verbraucher gelten die zwingenden Vorschriften des jeweiligen Aufenthaltslandes.</p>
            </Section>

            <Section title="10. Kontakt">
              <p>Bei Fragen: <a href="mailto:support@kokomu.app" className="text-[#3D6B8F] hover:underline">support@kokomu.app</a></p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

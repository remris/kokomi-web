import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Kokomi',
  description: 'Datenschutzerklärung der Kokomi App gemäß DSGVO.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-white font-bold text-xl mb-3">{title}</h2>
      <div className="text-gray-400 leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-300 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-8 block">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-10">Stand: April 2026 · Kokomi App</p>

        <div className="space-y-2 text-sm">
          <Section title="1. Verantwortlicher">
            <p><strong className="text-white">Kokomi App</strong><br />
            Christian Remmele<br />
            Eichenmühleweg 23, 88048 Friedrichshafen<br />
            E-Mail: <a href="mailto:support@kokomi.app" className="text-blue-400 hover:underline">support@kokomi.app</a></p>
          </Section>

          <Section title="2. Welche Daten wir erheben">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-gray-300">E-Mail-Adresse</strong> – für Registrierung & Anmeldung</li>
              <li><strong className="text-gray-300">Anzeigename / Profilbild</strong> – für dein Community-Profil</li>
              <li><strong className="text-gray-300">Vorratsdaten</strong> – Lebensmittel die du eingibst oder scannst</li>
              <li><strong className="text-gray-300">Rezepte & Wochenpläne</strong> – die du erstellst oder speicherst</li>
              <li><strong className="text-gray-300">Social-Beiträge</strong> – Posts, Kommentare und Likes</li>
              <li><strong className="text-gray-300">Abo-Status</strong> – via RevenueCat (keine Zahlungsdaten)</li>
              <li><strong className="text-gray-300">Geräteinformationen</strong> – anonym via Sentry bei Fehlern</li>
            </ul>
          </Section>

          <Section title="3. Wie wir deine Daten verwenden">
            <ul className="list-disc pl-5 space-y-1">
              <li>Bereitstellung aller App-Funktionen</li>
              <li>KI-basierte Rezeptgenerierung (nur deine Anfrage-Texte, keine Kontodaten an OpenAI)</li>
              <li>Verarbeitung deines Abo-Status (Kokomi Pro via RevenueCat)</li>
              <li>Anonyme Fehlerberichte zur App-Verbesserung (Sentry)</li>
            </ul>
          </Section>

          <Section title="4. Datenspeicherung">
            <p>Alle Daten werden auf <strong className="text-gray-300">Supabase</strong>-Servern im EU-Rechenzentrum Frankfurt gespeichert. Supabase ist DSGVO-konform und ISO 27001 zertifiziert.</p>
          </Section>

          <Section title="5. Weitergabe an Dritte">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-gray-300">Supabase</strong> – Datenbank & Auth (EU)</li>
              <li><strong className="text-gray-300">OpenAI / Groq</strong> – KI-Rezepte (nur Anfragetexte)</li>
              <li><strong className="text-gray-300">RevenueCat</strong> – Abo-Verwaltung (anonymisierte ID)</li>
              <li><strong className="text-gray-300">Sentry</strong> – Fehlerreporting (keine personenbezogenen Daten)</li>
              <li><strong className="text-gray-300">Firebase</strong> – Push-Benachrichtigungen (nur Geräte-Token)</li>
            </ul>
            <p className="mt-2">Wir geben deine Daten <strong className="text-gray-300">nicht</strong> zu Werbezwecken weiter.</p>
          </Section>

          <Section title="6. Rechtsgrundlage (DSGVO)">
            <ul className="list-disc pl-5 space-y-1">
              <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse (Fehlerbehebung)</li>
              <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (Push-Benachrichtigungen)</li>
            </ul>
          </Section>

          <Section title="7. Deine Rechte">
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO) – jederzeit in der App unter Einstellungen</li>
              <li>Datenportabilität (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">Kontakt: <a href="mailto:support@kokomi.app" className="text-blue-400 hover:underline">support@kokomi.app</a></p>
          </Section>

          <Section title="8. Kontodaten löschen">
            <p>In der App unter <em>Einstellungen → Konto dauerhaft löschen</em>. Alle Daten werden innerhalb von 30 Tagen vollständig entfernt.</p>
          </Section>

          <Section title="9. Cookies / Tracking">
            <p>Wir verwenden keine Tracking-Cookies, kein verhaltensbasiertes Advertising und keine Werbenetzwerke.</p>
          </Section>

          <Section title="10. Beschwerderecht">
            <p>Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, z.B. beim{' '}
              <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Bundesbeauftragten für Datenschutz (BfDI)
              </a>.
            </p>
          </Section>
        </div>
      </div>
    </main>
  )
}

'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Ist Foody wirklich kostenlos?',
    a: 'Ja! Foody ist dauerhaft kostenlos nutzbar mit allen Kernfunktionen – Vorrat, Scanner, Einkaufslisten und sogar 5 KI-Rezepte pro Woche. Das Pro-Abo (2,99 €/Monat) schaltet unlimitierte KI-Rezepte, Nährwert-Tracking, Wochenplaner und mehr frei.',
  },
  {
    q: 'Wie funktionieren die KI-Rezepte?',
    a: 'Du gibst an was du im Vorrat hast oder wählst Zutaten aus. Unsere KI (basierend auf modernen Sprachmodellen) generiert dann 3 komplett verschiedene Rezepte aus 20+ Küchen der Welt – jedes Mal kreativ und abwechslungsreich. Die KI vermeidet Wiederholungen und berücksichtigt deine Präferenzen.',
  },
  {
    q: 'Kann ich die App mit meiner Familie teilen?',
    a: 'Absolut! Im Free-Plan kannst du einen Haushalt mit bis zu 2 Personen teilen. Mit Pro bis zu 6 Personen. Ihr seht den gleichen Vorrat, die gleichen Einkaufslisten und könnt gemeinsam planen. Änderungen werden in Echtzeit synchronisiert.',
  },
  {
    q: 'Funktioniert die App auch offline?',
    a: 'Ja! Foody speichert deinen Vorrat und deine Einkaufslisten lokal auf dem Gerät. Du kannst also auch ohne Internet einkaufen gehen und Listen abhaken. Änderungen werden automatisch synchronisiert sobald du wieder online bist.',
  },
  {
    q: 'Für welche Geräte ist Foody verfügbar?',
    a: 'Foody ist aktuell für Android verfügbar. Die iOS-Version (iPhone/iPad) ist in Entwicklung und kommt bald. Melde dich für den iOS Early Access an.',
  },
  {
    q: 'Wie sicher sind meine Daten?',
    a: 'Deine Daten werden verschlüsselt übertragen und sicher in der EU (Deutschland) gespeichert. Wir verkaufen keine Daten an Dritte. Du kannst dein Konto und alle Daten jederzeit vollständig löschen.',
  },
  {
    q: 'Kann ich Foody kündigen?',
    a: 'Ja, jederzeit und ohne Kündigungsfrist. Wenn du das Pro-Abo kündigst, behältst du Pro bis zum Ende des bezahlten Zeitraums und wechselst dann automatisch auf Free.',
  },
  {
    q: 'Was ist der Unterschied zu anderen Küchen-Apps?',
    a: 'Foody kombiniert als erste App: KI-Rezeptgenerierung aus deinem echten Vorrat, geteilten Haushalt, Kassenbon-Scanner, Nährwert-Tracking und Community – alles in einer App, ohne Abo-Zwang. Die KI kennt deinen Vorrat und denkt mit.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-gray-950 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Häufige Fragen
          </h2>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all ${
                open === i ? 'border-green-500/40 bg-green-950/20' : 'border-white/10 bg-gray-900'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 flex-shrink-0 transition-transform ${open === i ? 'rotate-180 text-green-400' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


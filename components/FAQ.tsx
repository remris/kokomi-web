'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
	{
		q: 'Ist Kokomu wirklich kostenlos?',
		a: 'Ja! Der Free-Plan ist dauerhaft kostenlos und enthält alle Kernfunktionen: Vorrat, Scanner, Einkaufslisten, KI-Rezepte (5/Woche) und den Community-Feed. Kokomu Pro gibt es für 2,99 €/Monat mit unlimitierten KI-Rezepten und weiteren Premium-Features.',
	},
	{
		q: 'Welche KI steckt hinter den Rezepten?',
		a: 'Kokomu nutzt modernste Large Language Models (GPT-4 / Groq) um kontextbezogene Rezepte zu generieren. Die KI kennt deinen aktuellen Vorrat, deine Allergene und Präferenzen und erstellt darauf basierend wirklich passende Vorschläge.',
	},
	{
		q: 'Wie sicher sind meine Daten?',
		a: 'Alle Daten werden DSGVO-konform auf EU-Servern (Supabase, Frankfurt) gespeichert. Wir geben deine Daten nicht an Dritte weiter und du kannst dein Konto und alle Daten jederzeit löschen.',
	},
	{
		q: 'Kann ich Kokomu mit meiner Familie oder WG nutzen?',
		a: 'Ja! Erstelle einen gemeinsamen Haushalt und lade Mitglieder per Einladungscode ein. Vorrat und Einkaufslisten werden in Echtzeit geteilt. Im Free-Plan bis 2 Personen, mit Pro bis zu 6 Personen.',
	},
	{
		q: 'Funktioniert der Barcode-Scanner offline?',
		a: 'Das Scannen an sich funktioniert offline. Für die Produktdaten-Abfrage bei OpenFoodFacts ist kurz eine Internetverbindung nötig. Vorrat und Einkaufslisten werden lokal gecacht und synchronisieren sobald du wieder online bist.',
	},
	{
		q: 'Auf welchen Geräten läuft Kokomu?',
		a: 'Aktuell ist Kokomu für Android verfügbar (Google Play Store). Die iOS-Version (App Store) folgt in Kürze. Eine Web-Version ist in Planung.',
	},
	{
		q: 'Wie kann ich Kokomu Pro kündigen?',
		a: 'Ganz einfach: In den Google Play Store Einstellungen unter „Abonnements" jederzeit kündbar. Das Pro-Abo läuft dann bis zum Ende des bezahlten Zeitraums weiter — kein Geld geht verloren.',
	},
	{
		q: 'Gibt es eine Datenschutzerklärung?',
		a: 'Ja. Die vollständige DSGVO-konforme Datenschutzerklärung findest du in der App unter Einstellungen → Datenschutz oder hier auf der Website unter /datenschutz.',
	},
]

function FaqItem({ q, a }: { q: string; a: string }) {
	const [open, setOpen] = useState(false)
	return (
		<div className="border-b border-gray-100 last:border-0">
			<button
				onClick={() => setOpen(!open)}
				className="w-full flex items-center justify-between py-5 text-left group"
			>
				<span className="text-gray-800 font-semibold text-base group-hover:text-[#3D6B8F] transition-colors pr-4">
					{q}
				</span>
				<ChevronDown
					size={18}
					className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
						open ? 'rotate-180' : ''
					}`}
				/>
			</button>
			{open && (
				<div className="pb-5 text-gray-500 text-sm leading-relaxed">{a}</div>
			)}
		</div>
	)
}

export default function FAQ() {
	return (
		<section id="faq" className="bg-gray-50 py-28 px-4">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-14">
					<span className="text-[#3D6B8F] text-sm font-semibold uppercase tracking-widest">
						FAQ
					</span>
					<h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-4">
						Häufige Fragen
					</h2>
					<p className="text-gray-500">
						Alles was du wissen musst – auf einen Blick.
					</p>
				</div>
				<div className="bg-white border border-gray-200 rounded-2xl px-6 shadow-sm">
					{faqs.map(f => (
						<FaqItem key={f.q} q={f.q} a={f.a} />
					))}
				</div>
				<p className="text-center text-gray-400 text-sm mt-8">
					Weitere Fragen?{' '}
					<a
						href="mailto:support@Kokomu.app"
						className="text-[#3D6B8F] hover:underline"
					>
						support@Kokomu.app
					</a>
				</p>
			</div>
		</section>
	)
}

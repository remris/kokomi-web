'use client'

import { Check, Zap } from 'lucide-react'

const plans = [
	{
		name: 'Free',
		price: '0',
		period: 'für immer',
		desc: 'Alles Wichtige — kostenlos. Für immer.',
		cta: 'Kostenlos starten',
		highlight: false,
		ctaStyle: 'border border-white/20 text-white hover:bg-white/10',
		features: [
			'Vorrat (unlimitiert)',
			'Barcode-Scanner',
			'Einkaufslisten (bis 3)',
			'Online-Rezepte',
			'KI-Rezepte (5/Woche)',
			'Haushalt teilen (2 Personen)',
			'Kassenbon-Scanner (3/Tag)',
			'Community-Feed lesen',
		],
		missing: [
			'Nährwert-Tracking & Makros',
			'Mahlzeiten-Wochenplaner',
			'Allergen-Filter',
			'PDF-Export',
			'KI-Rezepte unlimitiert',
		],
	},
	{
		name: 'Pro',
		price: '2,99',
		period: 'pro Monat',
		yearPrice: '19,99 €/Jahr',
		yearSave: '44% sparen',
		desc: 'Für alle die das Maximum wollen.',
		cta: 'Pro werden',
		highlight: true,
		ctaStyle:
			'gradient-brand text-white shadow-lg shadow-blue-500/30 hover:opacity-90',
		features: [
			'Alles aus Free',
			'KI-Rezepte unlimitiert 🚀',
			'Einkaufslisten unlimitiert',
			'Haushalt bis 6 Personen',
			'Kassenbon-Scanner unlimitiert',
			'Nährwert-Tracking & Makros',
			'Mahlzeiten-Wochenplaner',
			'Allergen-Filter',
			'PDF-Export',
			'Wochenplan Community-Sharing',
			'Prioritäts-Support',
		],
		missing: [],
	},
]

export default function Pricing() {
	return (
		<section
			id="pricing"
			className="py-28 px-4"
			style={{
				background:
					'linear-gradient(180deg, #0a0f18 0%, #08101a 100%)',
			}}
		>
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16">
					<span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
						Preise
					</span>
					<h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
						Einfach. Transparent.
					</h2>
					<p className="text-gray-400 text-lg">
						Starte kostenlos — upgrade wenn du mehr willst.
					</p>
				</div>

				{/* Cards */}
				<div className="grid md:grid-cols-2 gap-6 items-start">
					{plans.map(plan => (
						<div
							key={plan.name}
							className={`relative rounded-3xl p-8 border ${
								plan.highlight
									? 'bg-gradient-to-br from-blue-950/60 to-gray-950 border-blue-500/40'
									: 'bg-gray-900/60 border-white/10'
							}`}
						>
							{plan.highlight && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2">
									<span className="flex items-center gap-1.5 gradient-brand text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
										<Zap size={12} /> Beliebteste Wahl
									</span>
								</div>
							)}

							<div className="mb-6">
								<h3 className="text-white font-bold text-xl mb-1">
									{plan.name}
								</h3>
								<p className="text-gray-500 text-sm">
									{plan.desc}
								</p>
								<div className="mt-4 flex items-end gap-2">
									<span className="text-5xl font-black text-white">
										{plan.price}€
									</span>
									<span className="text-gray-500 mb-2">
										/{plan.period}
									</span>
								</div>
								{plan.yearPrice && (
									<div className="mt-2 flex items-center gap-2">
										<span className="text-gray-400 text-sm">
											oder {plan.yearPrice}
										</span>
										<span className="bg-teal-500/20 text-teal-300 text-xs font-bold px-2 py-0.5 rounded-full">
											{plan.yearSave}
										</span>
									</div>
								)}
							</div>

							<a
								href="#download"
								className={`block text-center font-bold py-3 px-6 rounded-xl mb-6 transition-all ${plan.ctaStyle}`}
							>
								{plan.cta}
							</a>

							<ul className="space-y-2.5">
								{plan.features.map(f => (
									<li
										key={f}
										className="flex items-start gap-2.5 text-sm text-gray-300"
									>
										<Check
											size={15}
											className="text-teal-400 mt-0.5 flex-shrink-0"
										/>
										{f}
									</li>
								))}
								{plan.missing.map(f => (
									<li
										key={f}
										className="flex items-start gap-2.5 text-sm text-gray-600 line-through"
									>
										<span className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-700">
											✕
										</span>
										{f}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<p className="text-center text-gray-600 text-sm mt-8">
					Keine Kreditkarte für den Free-Plan erforderlich · Jederzeit kündbar ·
					DSGVO-konform
				</p>
			</div>
		</section>
	)
}

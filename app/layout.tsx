import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kokomu – Deine smarte Küchen-App',
  description: 'Vorrat verwalten, KI-Rezepte aus deinen Zutaten generieren, Einkaufslisten mit dem Haushalt teilen und Lebensmittel retten. Kokomu macht deinen Alltag smarter.',
  keywords: [
    'Küchen App', 'Rezepte App', 'Vorrat verwalten', 'KI Rezepte', 'Einkaufsliste App',
    'Lebensmittel retten', 'Haushalt App', 'Mahlzeitenplanung', 'Barcode Scanner App',
    'Kokomu App', 'Smart Kitchen', 'Food Tracker', 'Meal Planner', 'Pantry App',
  ],
  authors: [{ name: 'Kokomu App', url: 'https://Kokomu.app' }],
  creator: 'Kokomu App',
  metadataBase: new URL('https://Kokomu.app'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kokomu – Deine smarte Küchen-App',
    description: 'Vorrat verwalten, KI-Rezepte generieren, Lebensmittel retten. Jetzt kostenlos herunterladen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://Kokomu.app',
    siteName: 'Kokomu',
    images: [{ url: '/foody_icon2.png', width: 800, height: 800, alt: 'Kokomu Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kokomu – Deine smarte Küchen-App',
    description: 'KI-Rezepte, Vorrat tracken, Lebensmittel retten.',
    images: ['/foody_icon2.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/foody_icon2.png', apple: '/foody_icon2.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Kokomu',
              operatingSystem: 'Android',
              applicationCategory: 'LifestyleApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR',
              },
              description: 'Vorrat verwalten, KI-Rezepte generieren, Lebensmittel retten.',
              url: 'https://Kokomu.app',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

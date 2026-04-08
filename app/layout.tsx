import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kokomi – Deine smarte Küchen-App',
  description: 'Vorrat verwalten, KI-Rezepte aus deinen Zutaten generieren, Einkaufslisten mit dem Haushalt teilen und Lebensmittel retten. Kokomi macht deinen Alltag smarter.',
  keywords: [
    'Küchen App', 'Rezepte App', 'Vorrat verwalten', 'KI Rezepte', 'Einkaufsliste App',
    'Lebensmittel retten', 'Haushalt App', 'Mahlzeitenplanung', 'Barcode Scanner App',
    'Kokomi App', 'Smart Kitchen', 'Food Tracker', 'Meal Planner', 'Pantry App',
  ],
  authors: [{ name: 'Kokomi App', url: 'https://kokomi.app' }],
  creator: 'Kokomi App',
  metadataBase: new URL('https://kokomi.app'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kokomi – Deine smarte Küchen-App',
    description: 'Vorrat verwalten, KI-Rezepte generieren, Lebensmittel retten. Jetzt kostenlos herunterladen.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://kokomi.app',
    siteName: 'Kokomi',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Kokomi App Preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kokomi – Deine smarte Küchen-App',
    description: 'KI-Rezepte, Vorrat tracken, Lebensmittel retten.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
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
              name: 'Kokomi',
              operatingSystem: 'Android',
              applicationCategory: 'LifestyleApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR',
              },
              description: 'Vorrat verwalten, KI-Rezepte generieren, Lebensmittel retten.',
              url: 'https://kokomi.app',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

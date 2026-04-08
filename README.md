# Foody – Landing Page

Next.js Marketing-Website für die Foody App.

## Stack
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**

## Entwicklung

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & Deploy

```bash
npm run build
npm start
```

## Deployment (Vercel – empfohlen)

1. GitHub Repo erstellen und Code pushen
2. [vercel.com](https://vercel.com) → "Import Project"
3. Foody-Website Repo auswählen → Deploy
4. Kostenlos auf `foody-app.vercel.app` oder eigener Domain

## Struktur

```
app/
  page.tsx          ← Landing Page (alle Sektionen)
  layout.tsx        ← Root Layout (Metadata, Fonts)
  globals.css       ← Tailwind + Custom Styles
  impressum/        ← Impressum-Seite
  datenschutz/      ← Datenschutz-Seite

components/
  Navbar.tsx        ← Navigation (sticky, mobile-ready)
  Hero.tsx          ← Hero-Sektion mit Phone-Mockup
  Features.tsx      ← Feature-Grid (9 Features)
  HowItWorks.tsx    ← 4-Schritt Erklärung
  Pricing.tsx       ← Free vs. Pro Karten
  Testimonials.tsx  ← 6 Nutzerbewertungen
  FAQ.tsx           ← 8 FAQ-Einträge (Accordion)
  Download.tsx      ← Download CTA (Google Play / App Store)
  Footer.tsx        ← Footer mit Links
```

## Anpassen

- **Farben:** `tailwind.config.js` → `brand` Farben
- **Texte:** Direkt in den Komponenten
- **Download-Links:** `components/Download.tsx` → `href="#"` ersetzen
- **Impressum/Datenschutz:** `[Dein Name]` Platzhalter ersetzen
- **Domain:** In `app/layout.tsx` → `openGraph.url` setzen


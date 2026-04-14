/** Parallele Inhalte zu kokomu-site `LandingPage` (Community, Ernährung, FAQ, Beispiele). */

export const communityRows = [
  {
    icon: "🔍",
    title: "Entdecken",
    text: "Stöbere durch Rezepte und Wochenpläne anderer Nutzer. Speichere deine Favoriten und nutze sie direkt – inklusive aller Zutaten auf der Einkaufsliste.",
    slides: [
      { icon: "🍴", label: "Rezepte entdecken" },
      { icon: "📅", label: "Wochenpläne entdecken" },
    ],
    carouselFirstOnLg: false,
  },
  {
    icon: "🏘️",
    title: "Community",
    text: "Erstelle oder tritt einer lokalen Community bei. Biete übrige Zutaten und Essensreste an oder stelle Anfragen – z. B. wenn du Eier brauchst. Alles per PLZ in deiner Nachbarschaft.",
    slides: [
      { icon: "📰", label: "Community-Feed" },
      { icon: "❤️", label: "Reste anbieten" },
      { icon: "🔎", label: "Anfrage stellen" },
    ],
    carouselFirstOnLg: true,
  },
  {
    icon: "👯",
    title: "Haushalt",
    text: "Lege einen Haushalt an und lade Mitglieder ein: geteilter Vorrat, gemeinsame Einkaufslisten, Wochenplan und integrierter Haushaltschat – alles synchron.",
    slides: [
      { icon: "📦", label: "Geteilter Vorrat" },
      { icon: "🛒", label: "Geteilte Einkaufsliste" },
      { icon: "💬", label: "Haushaltschat" },
    ],
    carouselFirstOnLg: false,
  },
] as const;

export const nutritionBullets = [
  "Automatische Nährwertberechnung pro Rezept",
  "Tages- & Wochenübersicht (Kalorien, Protein, Carbs, Fett, Ballaststoffe, Zucker)",
  "Gewichtsverlauf mit Liniendiagramm",
  "Wassertracker",
  "BMI-Rechner & individuelle Zielberechnung",
] as const;

export const faqRows = [
  {
    q: "Ist Kokomu kostenlos?",
    a: "Ja! Die Grundfunktionen sind komplett kostenlos. Pro-Features gibt es ab 2,99 €/Monat.",
  },
  {
    q: "Brauche ich ein Konto?",
    a: "Ja, eine kurze Registrierung mit E-Mail und Passwort ist nötig.",
  },
  {
    q: "Gibt es Kokomu für iOS?",
    a: "Aktuell nur für Android. iOS ist in Planung.",
  },
  {
    q: "Welche KI wird genutzt?",
    a: "Wir nutzen moderne Sprachmodelle, um personalisierte Rezepte aus deinen Zutaten zu generieren.",
  },
  {
    q: "Werden meine Daten geteilt?",
    a: "Nein. Deine Vorrats- und Ernährungsdaten gehören dir. Wir verkaufen keine Daten. Datenschutz nach DSGVO.",
  },
  {
    q: "Kann ich die App mit meinem Haushalt teilen?",
    a: "Ja! Erstelle einen Haushalt und lade Mitglieder per Code ein. Teilt Einkaufslisten, Vorrat und Wochenpläne.",
  },
] as const;

export const exampleVoices = [
  {
    t: "Endlich eine App, die versteht was in meinem Kühlschrank ist!",
    n: "Lisa, 28",
  },
  {
    t: "Die KI-Rezepte sind unglaublich kreativ. Ich koche jetzt jeden Tag.",
    n: "Marco, 34",
  },
  {
    t: "Meine WG nutzt Kokomu seit 3 Wochen – wir werfen kaum noch etwas weg.",
    n: "Sophie, 23",
  },
] as const;

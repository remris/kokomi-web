/** Gleiche Story-Blöcke wie kokomu-site (`featuresContent.ts`) – zentral pflegbar. */
export const featureBlocks = [
  {
    icon: "📦",
    title: "Dein Vorrat – immer im Blick",
    text: "Scanne Barcodes, verwalte deinen Kühlschrank, Tiefkühlfach und Vorratskammer. Kokomu erinnert dich an ablaufende Lebensmittel und erstellt intelligente Einkaufslisten.",
    bullets: [
      "Barcode-Scanner mit automatischer Erkennung",
      "Einkaufslisten mit Haushalt teilen",
      "Einkaufsmodus mit Fortschrittsbalken",
      "Automatisch ins Inventar übernehmen",
      "Mindestbestand-Warnungen",
    ],
    slides: [
      { icon: "📦", label: "Vorrats-Ansicht", image: "/screenshots/vorrat_liste.jpg" },
      { icon: "🗂️", label: "Kategorien", image: "/screenshots/vorrat_kategorien.svg" },
      { icon: "🛒", label: "Einkaufsliste", image: "/screenshots/einkaufsliste.jpg" },
      { icon: "✅", label: "Einkaufsmodus", image: "/screenshots/einkaufsmodus.jpg" },
    ],
  },
  {
    icon: "🤖",
    title: "Lass dir Rezepte generieren – aus deinem Vorrat",
    text: "Sag Kokomu, worauf du Lust hast, oder lass die KI aus deinen vorhandenen Zutaten kreative Rezepte zaubern. Von Airfryer bis OnePot, von vegan bis High Protein.",
    bullets: [
      "KI-generierte Rezepte in Sekunden",
      "Filtere nach Stil: Vegan, Low Carb, Airfryer, MealPrep, OnePot",
      "Nährwerte automatisch berechnet (Kalorien, Protein, Ballaststoffe, Zucker)",
      "Eigene Rezepte erstellen & verwalten",
      "Koch-Modus mit Timer & Schritt-für-Schritt-Anleitung",
    ],
    slides: [
      { icon: "🤖", label: "Rezept-Generator", image: "/screenshots/ki_rezepte.svg" },
      { icon: "📖", label: "Rezept-Detail", image: "/screenshots/rezept_detail.svg" },
    ],
  },
  {
    icon: "📅",
    title: "Plane deine Woche – mit oder ohne KI",
    text: "Erstelle deinen Wochenplan manuell oder lass die KI einen Ernährungsplan generieren – abgestimmt auf dein Kalorienziel, deine Vorlieben und deinen Vorrat.",
    bullets: [
      "7-Tage-Ansicht: Frühstück, Mittag, Abend, Snack",
      "KI-generierte Pläne mit Kaloriendefizit & High Protein",
      "Alle Zutaten mit einem Klick auf die Einkaufsliste",
      "Vorlagen speichern & laden",
      "Pläne in der Community teilen",
    ],
    slides: [
      { icon: "📅", label: "Wochenplan", image: "/screenshots/wochenplan.svg" },
    ],
  },
] as const;

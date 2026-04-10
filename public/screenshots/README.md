# Screenshots für Kokomu.app

Lege deine App-Screenshots hier ab. Die Website liest sie automatisch aus diesem Ordner.

## Dateinamen & Reihenfolge

| Dateiname | Beschreibung | Sektion |
|-----------|-------------|---------|
| `01-home.png` | Home-Screen (Dashboard) | Hero-Mockup |
| `02-vorrat.png` | Vorrat / Kühlschrank-Übersicht | Screenshots-Sektion 1 |
| `03-rezepte.png` | KI-Rezepte Screen | Screenshots-Sektion 2 |
| `04-feed.png` | Community Feed | Screenshots-Sektion 3 |
| `05-wochenplan.png` | Wochenplaner | Optional |
| `06-einkauf.png` | Einkaufsliste | Optional |

## Technische Anforderungen

- **Format:** PNG oder WEBP (PNG bevorzugt)
- **Auflösung:** mind. **1080 × 2340 px** (Full-HD Android, 9:19.5)
- **Seitenverhältnis:** 9:19.5 (standard Android-Screenshot)
- **Hintergrund:** echter Geräte-Screenshot ohne Gerätrahmen — der Rahmen wird von der Website drumgelegt
- **Größe:** max. 500 KB pro Bild (mit TinyPNG.com komprimieren)

## Wie du Screenshots machst

1. App auf Android starten
2. Zum gewünschten Screen navigieren
3. Seitentaste + Lautstärke runter gleichzeitig
4. Screenshot aus der Galerie hier speichern

## Website einbinden

Sobald du eine Datei hier ablegst, musst du in `components/Screenshots.tsx`
den `src`-Pfad im jeweiligen `PhoneScreen`-Placeholder durch ein `<Image>` ersetzen:

```tsx
// Vorher (Placeholder):
screen={<VorratScreen />}

// Nachher (echter Screenshot):
screen={
  <img
    src="/screenshots/02-vorrat.png"
    alt="Kokomu Vorrat"
    className="w-full h-full object-cover object-top"
  />
}
```


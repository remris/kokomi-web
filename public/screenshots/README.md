# 📸 Kokomu – Screenshot Platzhalter

Lege deine echten App-Screenshots als **PNG** in diesen Ordner.  
Dateiname exakt wie unten angegeben (Groß-/Kleinschreibung beachten).

## So aktivierst du echte Screenshots in der Website

In `components/Screenshots.tsx` findest du pro Phone-Eintrag:
```ts
src={undefined /* src={p.src} einkommentieren sobald echte PNGs da sind */}
```
Ersetze `src={undefined}` durch `src={p.src}` – fertig.

---

## Dateiliste (13 Screenshots, alle 1080×1920 px empfohlen)

| Datei | Tab | Beschreibung |
|-------|-----|--------------|
| `home_screen.png` | 🏠 Home | Übersicht, Ablaufwarnungen, Schnellzugriff |
| `vorrat_liste.png` | 📦 Vorrat | Vorrat-Liste mit MHD-Farbkodierung |
| `vorrat_kategorien.png` | 📦 Vorrat | Kategorien-Ansicht (Kühlschrank, Tiefkühl…) |
| `einkauf_liste.png` | 🛒 Einkauf | Einkaufsliste mit Checkboxen und Mengen |
| `einkauf_modus.png` | 🛒 Einkauf | Einkaufsmodus mit Fortschrittsbalken |
| `ki_rezepte.png` | 🍳 Küche & KI | 5 KI-generierte Rezepte aus Vorrat |
| `rezept_detail.png` | 🍳 Küche & KI | Rezept-Detailansicht mit Zutaten & Zubereitung |
| `wochenplan.png` | 🍳 Küche & KI | 7-Tage-Wochenplan |
| `haushalt_chat.png` | 👨‍👩‍👧 Haushalt | Haushaltsmitglieder & Chat |
| `haushalt_einladen.png` | 👨‍👩‍👧 Haushalt | Einladungscode teilen |
| `community_feed.png` | 🤝 Community | Social Feed mit verknüpften Rezepten |
| `community_lokal.png` | 🤝 Community | Lokale Community mit Teilen-Angeboten |
| `community_teilen.png` | 🤝 Community | Lebensmittel anbieten & Reste teilen |

---

## Tipps für gute Screenshots

- **Gerät:** Pixel 7 / Samsung S23 – sauberes Android ohne Hersteller-UI
- **Auflösung:** 1080 × 1920 px (9:19.5 Seitenverhältnis)
- **Format:** PNG (kein JPEG – zu viel Kompressionsartefakte)
- **Statusbar:** Zeige 9:41 Uhr, vollen Akku, kein Netz-Carrier-Name
- **Testdaten:** Schöne Beispieldaten verwenden (keine leeren Listen!)
- **Werkzeug:** Android Studio Emulator → Screenshot-Button, oder direkt am Gerät

## SVG-Platzhalter

Die `.svg`-Dateien in diesem Ordner sind nur visuelle Platzhalter.  
Sie werden **nicht** in der Website angezeigt – nur die `.png`-Dateien zählen.

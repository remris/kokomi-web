"use client";

const cardClass =
  "h-full rounded-2xl border border-gray-200/80 bg-white p-6 text-left shadow-sm";

/** Wie kokomu – „Weniger wegwerfen“ + zwei Info-Karten. */
export default function SustainabilityHighlightSection() {
  return (
    <section className="border-y border-gray-200 bg-gradient-to-b from-white to-[#FAFCFA] px-4 py-16 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 sm:gap-12">
        <div className="flex max-w-3xl flex-col items-center gap-5 text-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f5f2] text-3xl shadow-sm ring-1 ring-[#56B4A0]/20"
            aria-hidden
          >
            🌱
          </span>
          <h2 className="text-3xl font-bold text-[#2A4F6E] sm:text-4xl">
            Weniger wegwerfen, mehr genießen 🌱
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Kokomu erinnert dich an ablaufende Lebensmittel, schlägt Rezepte aus Resten vor und
            verbindet dich mit Nachbarn, die Überschüsse teilen möchten.
          </p>
          <a
            href="#community"
            className="text-base font-semibold text-[#56B4A0] underline-offset-4 transition hover:underline"
          >
            ♡ Gemeinsam gegen Lebensmittelverschwendung
          </a>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 md:gap-8">
          <div className={cardClass}>
            <span className="text-2xl" aria-hidden>
              📦
            </span>
            <h3 className="mt-3 text-lg font-bold text-[#2A4F6E]">Vorrat im Blick</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Sieh auf einen Blick, was in Kühlschrank, Tiefkühltruhe und Vorratskammer liegt –
              inklusive Mindestbestand, MHD und „offen seit“, damit du weißt, was zuerst dran ist.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800/90">
              <li className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                Listen nach Lagerort sortiert
              </li>
              <li className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                Ablauf & offene Packungen erkennbar
              </li>
              <li className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                Erinnerungen, bevor etwas schlecht wird
              </li>
            </ul>
          </div>

          <div className={cardClass}>
            <span className="text-2xl" aria-hidden>
              🏘️
            </span>
            <h3 className="mt-3 text-lg font-bold text-[#2A4F6E]">Mein Community</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Profil, Haushalt und lokale Gruppen an einem Ort: Rezepte und Wochenpläne teilen,
              anderen folgen, dich inspirieren lassen – und in der Nähe Reste oder Überschüsse
              anbieten oder finden.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-800/90">
              <li className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                Feed, Entdecken & eigene Posts
              </li>
              <li className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                Haushalt & geteilte Listen
              </li>
              <li className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                Lokale Nachbarschaft & Reste teilen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

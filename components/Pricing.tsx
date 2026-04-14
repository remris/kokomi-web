"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { PLAY_STORE_URL } from "@/lib/site";

const freeRows: { ok: boolean; text: string }[] = [
  { ok: true, text: "Vorratsverwaltung & Barcode-Scanner" },
  { ok: true, text: "Einkaufslisten (unbegrenzt)" },
  { ok: true, text: "5 KI-Rezepte pro Woche" },
  { ok: true, text: "Eigene Rezepte & Community entdecken" },
  { ok: true, text: "Haushalt & lokale Communities" },
  { ok: false, text: "Wochenplaner & KI-Pläne" },
  { ok: false, text: "Ernährungstracking & Makros" },
  { ok: false, text: "Cloud-Sync & Veröffentlichen" },
];

const proFeatures = [
  "Alles aus Free",
  "KI-Rezepte unlimitiert",
  "Wochenplaner mit KI-Generierung",
  "Ernährungstracking & Makros",
  "Gewichtsverlauf & Wassertracker",
  "Cloud-Sync geräteübergreifend",
  "In der Community veröffentlichen",
  "Prioritäts-Support",
];

/** Wie kokomu `#preise`. */
export default function Pricing() {
  return (
    <section id="preise" className="scroll-mt-20 bg-[#FAFAFA] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Preise"
        title="Einfach. Transparent."
        subtitle="Starte kostenlos – upgrade wenn du mehr willst."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start">
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">
          <h3 className="text-xl font-bold text-[#2A4F6E]">Free</h3>
          <p className="mt-2 text-sm text-gray-600">Alles Wichtige – kostenlos. Für immer.</p>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            0 €
            <span className="ml-2 text-base font-normal text-gray-600">/ für immer</span>
          </p>
          <ul className="mt-6 flex-1 space-y-2.5 text-sm">
            {freeRows.map(({ ok, text }) => (
              <li
                key={text}
                className={["flex gap-2", ok ? "text-gray-800/90" : "text-gray-500/75"].join(" ")}
              >
                <span
                  className={ok ? "text-[#56B4A0]" : "text-gray-400"}
                  aria-hidden
                >
                  {ok ? "✓" : "✕"}
                </span>
                <span className={ok ? "" : "line-through decoration-gray-400/50"}>{text}</span>
              </li>
            ))}
          </ul>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full border-2 border-gray-200 bg-white py-3 text-center font-semibold text-[#2A4F6E] transition hover:bg-[#f0f7f5]"
          >
            Kostenlos starten
          </a>
        </div>

        <div className="relative">
          <div className="flex h-full flex-col rounded-2xl border-2 border-[#56B4A0]/60 bg-white p-6 shadow-[0_16px_48px_-24px_rgba(61,158,148,0.45)] sm:p-8">
            <p className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#3D6B8F] to-[#56B4A0] px-3 py-1 text-xs font-semibold text-white shadow-md">
              Beliebteste Wahl
            </p>
            <h3 className="mt-2 text-xl font-bold text-[#2A4F6E]">Pro</h3>
            <p className="mt-2 text-sm text-gray-600">Für alle, die das Maximum wollen.</p>
            <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              2,99 €
              <span className="ml-2 text-base font-normal text-gray-600">/ pro Monat</span>
            </p>
            <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <span>oder 19,99 €/Jahr</span>
              <span className="rounded-full bg-[#56B4A0]/15 px-2 py-0.5 text-xs font-semibold text-[#2A4F6E]">
                44% sparen
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {proFeatures.map((text) => (
                <li key={text} className="flex gap-2">
                  <span className="text-[#56B4A0]" aria-hidden>
                    ✓
                  </span>
                  <span className="text-gray-800/90">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-brand mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-center font-semibold text-white shadow-[0_12px_32px_-12px_rgba(61,158,148,0.5)] transition hover:brightness-[1.03]"
            >
              Pro werden
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-gray-600 sm:text-sm">
        Keine Kreditkarte für den Free-Plan erforderlich · Jederzeit kündbar · DSGVO-konform
      </p>
    </section>
  );
}

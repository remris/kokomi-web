"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { exampleVoices } from "@/data/kokomuSectionsContent";

const quoteCardClass =
  "relative h-full rounded-2xl border border-dashed border-gray-200/80 bg-white p-6 shadow-sm";

/** Wie kokomu – „Beispiele“ / fiktive Stimmen (ersetzt frühere Sterne-Bewertungen). */
export default function Testimonials() {
  return (
    <section
      className="border-t border-gray-200 bg-white px-4 py-20 sm:px-6"
      aria-labelledby="example-voices-heading"
    >
      <SectionHeading
        id="example-voices-heading"
        eyebrow="Beispiele"
        title="So könnte sich Kokomu anfühlen"
        subtitle="Kokomu ist neu – echte Nutzerbewertungen gibt es noch nicht. Die folgenden Zitate sind frei erfunden und zeigen nur stilistisch, welche Rückmeldungen wir uns wünschen. Sobald echtes Feedback vorliegt, ersetzen wir sie."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-3">
        {exampleVoices.map((x) => (
          <div key={x.n} className={quoteCardClass}>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Beispielzitat
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-800/90">„{x.t}”</p>
            <p className="mt-4 text-sm font-semibold text-[#2A4F6E]">{x.n}</p>
            <p className="mt-1 text-xs text-gray-500">Fiktive Person</p>
          </div>
        ))}
      </div>
    </section>
  );
}

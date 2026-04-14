"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { faqRows } from "@/data/kokomuSectionsContent";

/** Wie kokomu – statische FAQ-Liste (ohne Akkordeon). */
export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-[#FAFAFA] px-4 py-20 sm:px-6">
      <SectionHeading title="Häufige Fragen" />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
        {faqRows.map((row) => (
          <div key={row.q} className="px-6 py-5">
            <h3 className="font-semibold text-gray-900">{row.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{row.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

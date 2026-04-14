"use client";

import { IconHighlightPhone } from "@/components/IconHighlightPhone";
import { SectionHeading } from "@/components/SectionHeading";
import { nutritionBullets } from "@/data/kokomuSectionsContent";

/** Wie kokomu `#ernaehrung`. */
export default function NutritionSection() {
  return (
    <section
      id="ernaehrung"
      className="scroll-mt-20 bg-[#FAFAFA] px-4 py-20 sm:px-6"
      aria-labelledby="ernaehrung-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            id="ernaehrung-heading"
            align="left"
            eyebrow="Ernährung"
            title="Kalorien, Makros & Gewicht – alles im Blick"
            subtitle="Tracke automatisch, was du kochst. Behalte dein Kalorienziel im Auge, logge dein Gewicht und trinke genug Wasser."
          />
          <ul className="mx-auto mt-8 max-w-xl space-y-2 text-sm text-gray-800/90 lg:mx-0">
            {nutritionBullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-[#56B4A0]">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full min-w-0 justify-center lg:justify-end lg:pt-1">
          <IconHighlightPhone icon="📊" label="Ernährungs-Tracking" />
        </div>
      </div>
    </section>
  );
}

"use client";

import FeatureStoryCarousel from "@/components/FeatureStoryCarousel";
import { featureBlocks } from "@/data/featuresContent";

/**
 * Entspricht kokomu-site `FeaturesSection.tsx` (ohne FadeIn).
 * Daten: `data/featuresContent.ts` ↔ kokomu `featuresContent.ts`
 */
export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 bg-[#FAFAFA] px-4 py-20 sm:px-6"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#56B4A0]">
          Funktionen
        </p>
        <h2
          id="features-heading"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Was Kokomu kann
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Von Vorrat und Einkauf bis KI-Rezepte, Haushalt und Wochenplan – das Wichtigste für eine
          entspannte Küche, gebündelt in einer App für Android. Weniger Chaos im Alltag – und oft
          bleibt nebenbei mehr im Kühlschrank statt in der Tonne.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-24">
        {featureBlocks.map((f, i) => (
          <div key={f.title}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-3xl" aria-hidden>
                  {f.icon}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-[#2A4F6E]">{f.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{f.text}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-800/90">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <span
                        className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#56B4A0]"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={
                  i % 2 === 1
                    ? "min-w-0 lg:order-1 lg:justify-self-start"
                    : "min-w-0 lg:justify-self-end"
                }
              >
                <FeatureStoryCarousel
                  slides={[...f.slides]}
                  ariaLabel={`Überblick: ${f.title}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

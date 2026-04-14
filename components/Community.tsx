"use client";

import FeatureStoryCarousel from "@/components/FeatureStoryCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { communityRows } from "@/data/kokomuSectionsContent";

/** Wie kokomu `LandingPage` – Community mit Story-Karussell pro Zeile. */
export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-20 border-y border-gray-200 bg-gradient-to-b from-white via-[#FAFCFA] to-[#F3F7F5] px-4 py-20 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:gap-14">
        <SectionHeading
          eyebrow="Community"
          title="Eine Community, die verbindet"
          subtitle="Entdecke Rezepte und Wochenpläne anderer Nutzer, teile übrige Lebensmittel in deiner Nachbarschaft und verwalte deinen Haushalt gemeinsam."
          className="max-w-4xl"
        />

        <div className="flex flex-col gap-20 sm:gap-24">
          {communityRows.map((row) => (
            <div key={row.title}>
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={row.carouselFirstOnLg ? "lg:order-2" : ""}>
                  <span className="text-3xl" aria-hidden>
                    {row.icon}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-[#2A4F6E]">{row.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{row.text}</p>
                </div>
                <div className={`min-w-0 ${row.carouselFirstOnLg ? "lg:order-1" : ""}`}>
                  <FeatureStoryCarousel
                    slides={[...row.slides]}
                    ariaLabel={`${row.title} in der App`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

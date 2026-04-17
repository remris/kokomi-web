"use client";

/**
 * 1:1 mit kokomu-site/src/components/landing/FeatureStoryCarousel.tsx –
 * nur Tailwind: koko-* → Brand-Farben (#3D6B8F / #56B4A0 / Grau), kein @theme.
 */

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type StorySlide = { icon: string; label: string; image?: string };

type FeatureStoryCarouselProps = {
  slides: StorySlide[];
  /** Kurzbeschreibung für Screenreader (Region). */
  ariaLabel: string;
};

function PeekCardFace({ slide }: { slide: StorySlide }) {
  if (slide.image) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={slide.image}
          alt={slide.label}
          fill
          className="object-cover object-top"
          sizes="144px"
        />
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5 p-3 text-center sm:gap-2 sm:p-3.5">
      <span className="text-2xl leading-none sm:text-3xl" aria-hidden>
        {slide.icon}
      </span>
      <p className="text-[10px] font-semibold leading-tight text-[#3D6B8F] sm:text-xs">
        {slide.label}
      </p>
    </div>
  );
}

/** Sichtbarer Platzhalter gleicher Größe (Layout prüfen, kein leerer Streifen). */
function EdgeSlot({ side }: { side: "left" | "right" }) {
  return (
    <div
      className="flex aspect-[9/16] w-[4.5rem] shrink-0 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gradient-to-b from-[#F4F6F8] to-[#ECEEF2] px-2 text-center sm:w-[5.5rem]"
      aria-hidden
    >
      <span className="text-xl text-gray-400">⋯</span>
      <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-wide text-gray-500 sm:text-[10px]">
        {side === "left" ? "Anfang" : "Ende"}
      </span>
    </div>
  );
}

/** Klick = zu dieser Karte springen (Vorschau links = vorherige, rechts = nächste). */
function ClickablePeek({
  slide,
  targetIndex,
  directionLabel,
  onPick,
}: {
  slide: StorySlide;
  targetIndex: number;
  directionLabel: string;
  onPick: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPick(targetIndex)}
      className="shrink-0 cursor-pointer rounded-2xl border-0 bg-transparent p-0 text-left transition duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#56B4A0] focus-visible:ring-offset-2 active:scale-[0.99]"
      aria-label={`${directionLabel}: ${slide.label} anzeigen`}
    >
      <div className="relative aspect-[9/16] w-[4.5rem] overflow-hidden rounded-2xl border border-[#E8E8EE] bg-white shadow-md transition-all duration-300 ease-out motion-reduce:transition-none sm:w-[5.5rem]">
        <PeekCardFace slide={slide} />
      </div>
    </button>
  );
}

function FocusCard({ slide }: { slide: StorySlide }) {
  return (
    <div className="relative aspect-[9/16] w-[min(52vw,16rem)] shrink-0 overflow-hidden rounded-[2rem] border-4 border-gray-900 bg-white shadow-[0_32px_64px_-20px_rgba(45,100,92,0.4)] transition-all duration-300 ease-out motion-reduce:transition-none">
      {/* Handy-Notch */}
      <div className="absolute left-1/2 top-2 z-20 h-[10px] w-[60px] -translate-x-1/2 rounded-full bg-gray-900" />
      {slide.image ? (
        <>
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 52vw, 256px"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8">
            <p className="text-center text-[11px] font-semibold leading-tight text-white sm:text-xs">
              {slide.label}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center sm:gap-3 sm:p-5">
          <span className="text-4xl leading-none sm:text-[2.75rem]" aria-hidden>
            {slide.icon}
          </span>
          <p className="text-xs font-semibold leading-tight text-[#3D6B8F] sm:text-sm">
            {slide.label}
          </p>
        </div>
      )}
    </div>
  );
}

export function FeatureStoryCarousel({
  slides,
  ariaLabel,
}: FeatureStoryCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive((i) => Math.min(i, Math.max(0, slides.length - 1)));
  }, [slides.length]);

  const step = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => Math.max(0, Math.min(slides.length - 1, i + dir)));
    },
    [slides.length],
  );

  const goTo = useCallback((index: number) => {
    setActive(Math.max(0, Math.min(slides.length - 1, index)));
  }, [slides.length]);

  if (slides.length === 0) return null;

  const prevSlide = active > 0 ? slides[active - 1] : null;
  const nextSlide = active < slides.length - 1 ? slides[active + 1] : null;
  const current = slides[active];

  return (
    <div
      className="w-full min-w-0"
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="Karussell"
    >
      <p className="sr-only" aria-live="polite">
        {current.label}, {active + 1} von {slides.length}
      </p>

      <div className="flex flex-col gap-2">
        {/* Nur Karten – ohne Pfeile an den Seiten */}
        <div className="flex w-full justify-center">
          <div className="flex max-w-[min(100%,36rem)] flex-1 items-center justify-center gap-3 sm:gap-6">
            <div className="flex min-h-[260px] flex-1 items-center justify-end sm:min-h-[300px]">
              {prevSlide ? (
                <ClickablePeek
                  slide={prevSlide}
                  targetIndex={active - 1}
                  directionLabel="Zurück zu"
                  onPick={goTo}
                />
              ) : (
                <EdgeSlot side="left" />
              )}
            </div>

            <div className="relative z-10 shrink-0 scale-[1.04] sm:scale-105">
              <FocusCard slide={current} />
            </div>

            <div className="flex min-h-[260px] flex-1 items-center justify-start sm:min-h-[300px]">
              {nextSlide ? (
                <ClickablePeek
                  slide={nextSlide}
                  targetIndex={active + 1}
                  directionLabel="Weiter zu"
                  onPick={goTo}
                />
              ) : (
                <EdgeSlot side="right" />
              )}
            </div>
          </div>
        </div>

        {/* Pfeile + Punkte in einer Zeile (früheres Layout) */}
        {slides.length > 1 ? (
          <div className="flex items-center justify-center gap-4 pt-2 sm:gap-6 sm:pt-3">
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#3D6B8F] shadow-sm transition hover:border-[#3D6B8F]/35 hover:bg-[#FAFCFA] disabled:pointer-events-none disabled:opacity-35"
              aria-label="Vorherige Karte"
              disabled={active <= 0}
              onClick={() => step(-1)}
            >
              <span className="text-xl font-light leading-none" aria-hidden>
                ‹
              </span>
            </button>

            <div
              className="flex items-center gap-1.5 px-1"
              role="tablist"
              aria-label="Karten auswählen"
            >
              {slides.map((s, i) => (
                <button
                  key={`${s.label}-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`${s.label}, Karte ${i + 1} von ${slides.length}`}
                  className={[
                    "h-2 w-2 rounded-full transition",
                    i === active
                      ? "bg-[#56B4A0]"
                      : "bg-gray-300 hover:bg-gray-400",
                  ].join(" ")}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#3D6B8F] shadow-sm transition hover:border-[#3D6B8F]/35 hover:bg-[#FAFCFA] disabled:pointer-events-none disabled:opacity-35"
              aria-label="Nächste Karte"
              disabled={active >= slides.length - 1}
              onClick={() => step(1)}
            >
              <span className="text-xl font-light leading-none" aria-hidden>
                ›
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FeatureStoryCarousel;

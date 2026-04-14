/** Wie kokomu-site `src/lib/site.ts` – für CTAs in Pricing / Footer. */
export const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
  "https://play.google.com/store/apps/details?id=app.kokomu";

export const SITE = {
  name: "Kokomu",
  tagline: "Deine smarte Küche – Vorrat, Rezepte & Community in einer App.",
} as const;

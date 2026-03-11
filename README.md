# Jarnkirurgen

Modern hemsida for Jarnkirurgen byggd med Next.js (App Router), TypeScript och Tailwind CSS.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React (ikoner)

## Projektstruktur

- `src/app/page.tsx` - startsida
- `src/app/vara-tjanster/page.tsx` - vara tjanster
- `src/app/om-oss/page.tsx` - om oss
- `src/app/licenser/page.tsx` - licenser
- `src/app/kontakt/page.tsx` - kontakt
- `src/app/layout.tsx` - global layout, desktop/mobilnavigation, footer
- `src/components/AnimatedSection.tsx` - scrollbaserade in/ut-animationer
- `src/components/NavLinks.tsx` - navlankar + active state (desktop/mobil)
- `public/assets/` - logotyper, ikoner, bilder, monster

## Kom igang

Installera dependencies:

```bash
npm install
```

Starta utvecklingsserver:

```bash
npm run dev
```

Oppna [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - startar lokal dev-server
- `npm run build` - bygger produktionsversion
- `npm run start` - startar produktionsserver
- `npm run lint` - kor ESLint

## Designnoteringar

- Mork premiumlayout med glas/frosted-kansla i navigation.
- Responsiv mobilbottenmeny med ikoner och active state.
- Scroll-animationer pa sektioner (fade + scale in/out beroende pa viewport).
- Bild- och brandingassets ligger under `public/assets/images` och `public/assets/logo`.

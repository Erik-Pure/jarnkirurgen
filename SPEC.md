# Jarnkirurgen - Webbplats spec v0.1

## 1. Mal och syfte

Bygga en modern, snabb och tydlig hemsida i Next.js for svetsfirman Jarnkirurgen.
Sidan ska kommunicera kvalitet, kompetens och forenkla kontakt med nya kunder.

## 2. Primar malgrupp

- Foretag med behov av svetsmekaniska arbeten.
- Privatpersoner med behov av reparation eller specialarbete.
- Besokare som snabbt vill hitta kontaktuppgifter.

## 3. Informationsarkitektur (forsta version)

- Startsida (`/`)
- Vara tjanster (`/vara-tjanster`)
- Om oss (`/om-oss`)
- Kontakt (`/kontakt`)

## 4. Innehall och budskap (utkast)

### Startsida

- Hero-rubrik: "Svetsmekaniska arbeten med hog kvalitet och finish."
- Kort introduktion om plats (Vilhelmina), kompetens och typer av uppdrag.
- Primar CTA: "Kontakta oss".
- Sekundar CTA: "Vara tjanster".
- 3 USP-kort:
  - Kompetens i metallurgi
  - Reparation och nytillverkning
  - Personlig service

### Vara tjanster

- Oversikt av metodik:
  - TIG
  - MIG/MAG
  - MMA
- Tjanstetyper:
  - Reparation
  - Underhall
  - Specialanpassade uppdrag

### Om oss

- Kort foretagsbeskrivning.
- Fokus pa kvalitet, finish och tillforlitlighet.
- Positionering: partner for kravstallande jobb.

### Kontakt

- Telefon
- E-post
- Ort
- Tydlig uppmaning att ta kontakt

## 5. Designriktning

- Mork, robust och industriell kansla med ren modern layout.
- Tydlig typografi och mycket luft mellan sektioner.
- Logotyp ska vara central i header/hero nar filen lagts in.
- Enkel navigering med tydlig CTA-knapp.

## 6. Tekniskt (MVP)

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Semantisk HTML och grundlaggande tillganglighet
- Forberett for framtida Sanity CMS-integration (separat steg)

## 7. SEO och metadata (MVP)

- Unik title + description per sida
- Svenskt sprak (`lang="sv"`)
- Basstruktur for Open Graph (kan byggas ut senare)

## 8. Nasta steg

1. Bekrafta denna spec.
2. Lagg in logotyp i `public/`.
3. Bygg forsta visuella designversion for startsidan.
4. Forfina texter (copy pass) med utgangspunkt i gamla hemsidan.
5. Planera struktur for framtida Sanity-modeller.

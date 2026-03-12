import Image from "next/image";
import Link from "next/link";
import { Activity, Flame, ScanSearch, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollFadeCornerImage from "@/components/ScrollFadeCornerImage";

export default function Home() {
  return (
    <main className="bg-tech-gradient">
      <ScrollFadeCornerImage
        src="/assets/images/jkherobg.png"
        className="pointer-events-none absolute right-0 -top-28 hidden h-[92vh] w-full md:block max-[1080px]:top-8 max-[1080px]:h-[76vh] max-[1080px]:w-[82%]"
        fadeDistance={760}
      />
      <AnimatedSection
        className="relative mx-auto w-full max-w-6xl overflow-hidden px-4 pt-16 pb-20 md:min-h-[58vh] md:px-6 md:pt-20"
      >
        <div className="relative z-10 max-w-3xl text-center md:text-left">
          <p className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-[#8e8d91] md:mx-0">
            AVANCERAD SVETSTEKNIK
          </p>
          <h1 className="heading-font mx-auto mt-7 text-4xl leading-[1.04] text-white sm:text-5xl md:mx-0 md:text-7xl">
            Svetsmekaniska arbeten med hög{" "}
            <span className="hero-highlight-word">kvalitet</span> och{" "}
            <span className="hero-highlight-word">finish</span>.
          </h1>
          <p className="body-muted mx-auto mt-6 max-w-2xl text-lg md:mx-0">
            Järnkirurgen hjälper företag och privatpersoner med kvalificerad
            svetsning, reparation och utveckling av nya lösningar i Vilhelmina.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/kontakt"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5e9ff]"
            >
              Kontakta oss
            </Link>
            <Link
              href="/vara-tjanster"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Våra tjänster
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6" delayMs={80}>
        <div className="soft-grid grid overflow-hidden md:grid-cols-3">
          <article className="border-b border-white/10 p-8 md:border-r md:border-b-0">
            <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
              <ScanSearch className="h-4 w-4 text-[#dbe4ff]" />
            </span>
            <h2 className="mt-4 text-xl font-medium leading-tight text-white">
              Kompetens i metallurgi
            </h2>
            <p className="body-muted mt-3 max-w-sm">
              Gedigen erfarenhet av svårsvetsade material och avancerade
              svetsmetoder.
            </p>
          </article>

          <article className="border-b border-white/10 p-8 md:border-r md:border-b-0">
            <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
              <Wrench className="h-4 w-4 text-[#dbe4ff]" />
            </span>
            <h2 className="mt-4 text-xl font-medium leading-tight text-white">
              Reparation och utveckling
            </h2>
            <p className="body-muted mt-3 max-w-sm">
              Från båtpropeller till större industriprojekt - vi levererar
              tillförlitliga lösningar med hög finish.
            </p>
          </article>

          <article className="p-8">
            <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
              <Flame className="h-4 w-4 text-[#dbe4ff]" />
            </span>
            <h2 className="mt-4 text-xl font-medium leading-tight text-white">
              Trygg partner
            </h2>
            <p className="body-muted mt-3 max-w-sm">
              Oavsett om behovet gäller korrekt reparation eller utveckling av en
              ny produkt får du en kompetent partner hela vägen.
            </p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6" delayMs={120}>
        <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#8e8d91]">
          UTVALDA TJÄNSTER
        </p>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1.1fr]">
          <article className="soft-grid relative flex min-h-[28rem] flex-col overflow-hidden p-8 md:min-h-[37rem]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/images/metalbg.png')" }}
            />
            <div className="absolute inset-0 bg-black/20" />
            <h2 className="heading-font relative max-w-sm text-4xl leading-tight text-white">
              Prestanda som håller i längden
            </h2>
            <p className="body-muted relative mt-4 max-w-md text-lg">
              Snabb återkoppling, stabil kvalitet och hög precision i varje
              moment - från första bedömning till levererad lösning.
            </p>
            <Link
              href="/vara-tjanster"
              className="relative mt-auto inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5e9ff]"
            >
              Se alla tjänster
            </Link>
          </article>

          <div className="soft-grid grid overflow-hidden md:grid-cols-2">
            {[
              {
                title: "Sprickindikering",
                text: "Noggrann kontroll och säkrare beslutsunderlag inför reparation.",
                Icon: ScanSearch,
              },
              {
                title: "Rörsvetsning",
                text: "Stabil passform och tillförlitlig svetskvalitet för krävande miljöer.",
                Icon: Wrench,
              },
              {
                title: "Påläggssvetsning",
                text: "Ökad livslängd på utsatta ytor med kontrollerat tillsatsmaterial.",
                Icon: Activity,
              },
              {
                title: "Reparationssvetsning",
                text: "Korrekt återställning av detaljer där kvaliteten inte får kompromissas.",
                Icon: Flame,
              },
            ].map(({ title, text, Icon }) => (
              <article
                key={title}
                className="border-b border-white/10 px-8 pt-8 pb-8 md:pb-32 md:odd:border-r md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0"
              >
                <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
                  <Icon className="h-4 w-4 text-[#dbe4ff]" />
                </span>
                <h3 className="mt-4 text-xl font-medium leading-tight text-white">
                  {title}
                </h3>
                <p className="body-muted mt-3">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-14 md:px-6" delayMs={140}>
        <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#8e8d91]">
          LICENSER
        </p>
        <div className="panel p-8">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div className="lg:pr-8 lg:border-r lg:border-white/10">
              <h2 className="heading-font text-3xl text-white">
                När kvalitet inte är förhandlingsbar
              </h2>
              <p className="body-muted mt-4 max-w-3xl leading-relaxed">
                Många kunder söker en pålitlig samarbetspartner vid utveckling
                av nya produkter. Andra vill försäkra sig om att en kritisk
                reparation blir korrekt utförd från början. Järnkirurgen
                kombinerar praktisk erfarenhet, dokumenterad kompetens och ett
                kompromisslöst fokus på kvalitet.
              </p>
              <Link
                href="/licenser"
                className="mt-6 inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Se licenser
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
              {[
                "TIG",
                "MIG/MAG",
                "MMA",
                "Heta arbeten",
              ].map((cert) => (
                <div key={cert} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/5 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    {cert === "Heta arbeten" ? (
                      <Image
                        src="/assets/images/hetaarbeten-icon.png"
                        alt="Heta arbeten"
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain"
                      />
                    ) : (
                      cert
                    )}
                  </div>
                  <p className="mt-2 text-xs text-[#8e8d91]">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-6xl px-4 pb-24 md:px-6" delayMs={160}>
        <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#8e8d91]">
          OM FÖRETAGET
        </p>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1.1fr]">
          <article className="soft-grid relative flex min-h-[40rem] flex-col overflow-hidden p-8">
            <div
              className="absolute inset-0 bg-cover bg-[position:62%_center] md:bg-right"
              style={{ backgroundImage: "url('/assets/images/konrad.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
            <div className="relative mt-auto">
              <h2 className="heading-font max-w-sm text-4xl leading-tight text-white">
                Erfarenhet från verkstadsgolvet
              </h2>
              <p className="mt-4 max-w-md text-lg text-[#d6d6d8]">
                Bred praktisk bakgrund inom svets, mekanik och industriservice med
                kvalitet som ledstjärna sedan 2008.
              </p>
            </div>
            <Link
              href="/om-oss"
              className="relative mt-6 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e5e9ff]"
            >
              Om företaget
            </Link>
          </article>

          <div className="soft-grid grid overflow-hidden md:grid-cols-2">
            <article className="border-b border-white/10 p-8 md:border-r">
              <h3 className="mt-1 text-xl font-medium leading-tight text-white">
                Utbildning och certifiering
              </h3>
              <p className="body-muted mt-3">
                Utbildningsbakgrund inom maskinlära, hydraulik, pneumatik och
                elektronik, följt av flera svetsutbildningar och certifikat för
                Heta Arbeten.
              </p>
            </article>

            <article className="border-b border-white/10 p-8">
              <h3 className="mt-1 text-xl font-medium leading-tight text-white">
                Industriell erfarenhet
              </h3>
              <p className="body-muted mt-3">
                Erfarenhet från legotillverkning, kraftstationer, gruvindustri
                och avancerade licensjobb inom både svetsning och mekaniskt
                underhåll.
              </p>
            </article>

            <article className="p-8 md:col-span-2">
              <h3 className="text-xl font-medium text-white">Fördjupa dig</h3>
              <p className="body-muted mt-3 max-w-2xl">
                Läs mer om bakgrund, uppdrag och hur du kommer i kontakt för att
                diskutera ditt projekt.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/kontakt"
                  className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Kontakt
                </Link>
              </div>
            </article>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}

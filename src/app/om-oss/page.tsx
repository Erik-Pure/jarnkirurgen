import Link from "next/link";
import { BadgeCheck, BriefcaseBusiness } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollFadeCornerImage from "@/components/ScrollFadeCornerImage";

export default function AboutPage() {
  return (
    <main className="relative bg-tech-gradient">
      <ScrollFadeCornerImage
        src="/assets/images/konradbg.png"
        className="pointer-events-none absolute right-0 -top-28 hidden h-[92vh] w-full md:block"
        fadeDistance={760}
        maxOpacity={0.62}
      />
      <AnimatedSection className="mx-auto min-h-[calc(100vh-134px)] w-full max-w-6xl px-4 py-14 md:px-6">
        <p className="mb-4 text-center text-xs font-semibold tracking-[0.3em] text-[#8e8d91] md:text-left">
          OM FÖRETAGET
        </p>
        <h1 className="heading-font mx-auto max-w-3xl text-center text-4xl leading-tight text-white sm:text-5xl md:mx-0 md:text-left md:text-7xl">
          Erfarenhet, utbildning och hantverk i varje detalj
        </h1>
        <p className="body-muted mx-auto mt-5 max-w-4xl text-center text-lg leading-relaxed md:mx-0 md:text-left">
          Jag heter Konrad Edman och driver Järnkirurgen i Vilhelmina. Företaget
          startade våren 2008 med målet att erbjuda svetsmekaniska arbeten med
          hög kvalitet, teknisk noggrannhet och professionellt utförande.
        </p>

        <div className="mt-20 grid gap-4 lg:grid-cols-2">
          <AnimatedSection className="soft-grid p-8" delayMs={70}>
            <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
              <BadgeCheck className="h-4 w-4 text-[#dbe4ff]" />
            </span>
            <h2 className="mt-4 text-2xl font-medium leading-tight text-white">
              Utbildning och certifiering
            </h2>
            <ul className="body-muted mt-4 space-y-2 leading-relaxed">
              <li>
                Bakgrund inom maskinförarutbildning med maskinlära, hydraulik,
                pneumatik och elektronik.
              </li>
              <li>Flera steg av svetsutbildningar på AMU.</li>
              <li>Tidigare licenser inom flera svetsmetoder.</li>
              <li>Gällande certifikat för Heta Arbeten.</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection className="soft-grid p-8" delayMs={110}>
            <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
              <BriefcaseBusiness className="h-4 w-4 text-[#dbe4ff]" />
            </span>
            <h2 className="mt-4 text-2xl font-medium leading-tight text-white">
              Erfarenhet från industrin
            </h2>
            <ul className="body-muted mt-4 space-y-2 leading-relaxed">
              <li>
                Svetsansvarig i legotillverkning för bland annat Encon,
                BrackeForest, Mählers och ÅLÖ.
              </li>
              <li>Svetsmekaniker vid totalrevision av Bålforsens kraftstation.</li>
              <li>Mekaniker vid kvarnreparationer i Bolidengruvan.</li>
              <li>Svetslärare på AMU samt licenssvetsare i flera verksamheter.</li>
              <li>
                Tio år som licenssvetsare på Saab Aerotech AB i Östersund med
                breda arbetsuppgifter inom svetsning, bearbetning och mekanik.
              </li>
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16" delayMs={140}>
          <Link
            href="/kontakt"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Kontakta oss
          </Link>
        </AnimatedSection>
      </AnimatedSection>
    </main>
  );
}

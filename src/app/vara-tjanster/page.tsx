import Link from "next/link";
import { Activity, BadgeCheck, Flame, ScanSearch, Waves, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
  const coreServices = [
    { title: "Sprickindikering", icon: ScanSearch },
    { title: "Rörsvetsning", icon: Wrench },
    { title: "Påläggssvetsning", icon: Activity },
    { title: "Hårdsvetsning", icon: Flame },
    { title: "Reparationssvetsning", icon: BadgeCheck },
    { title: "Hård- och mjuklödning", icon: Waves },
  ];

  const materials = [
    "Titan",
    "Rostfritt",
    "Duplex",
    "Aluminium och legeringar",
    "Gjutjärn",
    "Gjutstål",
    "TIG-brushing ingår i materialarbetet ovan",
  ];

  const addOnServices = [
    "Röntgen",
    "Ultraljud",
    "Bockprov",
    "Laser- och vattenskärning",
    "Elpolering",
    "Gulkromatering",
    "Förzinkning",
    "Bearbetning",
  ];

  return (
    <main className="bg-tech-gradient">
      <AnimatedSection className="mx-auto min-h-[calc(100vh-134px)] w-full max-w-6xl px-4 py-14 md:px-6">
        <p className="mb-4 text-center text-xs font-semibold tracking-[0.3em] text-[#8e8d91] md:text-left">
          VÅRA TJÄNSTER
        </p>
        <h1 className="heading-font mx-auto max-w-3xl text-center text-4xl leading-tight text-white sm:text-5xl md:mx-0 md:text-left md:text-7xl">
          Svetsmekaniska tjänster för krävande uppdrag
        </h1>
        <p className="body-muted mx-auto mt-5 max-w-3xl text-center text-lg md:mx-0 md:text-left">
          Vi utför svetsmekaniska arbeten för både nya konstruktioner och
          kvalificerade reparationer där kvalitet, precision och hållbarhet är
          avgörande.
        </p>

        <AnimatedSection
          className="mt-20 soft-grid grid overflow-hidden md:grid-cols-2 lg:grid-cols-3"
          delayMs={60}
        >
          {coreServices.map(({ title, icon: Icon }, index) => (
            <article
              key={title}
              className={`p-8 ${
                index % 3 !== 2 ? "lg:border-r lg:border-white/10" : ""
              } ${index < 3 ? "border-b border-white/10" : ""} ${
                index % 2 === 0 ? "md:border-r md:border-white/10 lg:border-r" : ""
              }`}
            >
              <span className="inline-flex rounded-full border border-white/35 bg-white/6 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_24px_rgba(255,255,255,0.07)]">
                <Icon className="h-4 w-4 text-[#dbe4ff]" />
              </span>
              <h2 className="mt-4 text-xl font-medium leading-tight text-white">
                {title}
              </h2>
            </article>
          ))}
        </AnimatedSection>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <AnimatedSection className="soft-grid p-8" delayMs={90}>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#8e8d91]">
              MATERIAL OCH METODER
            </p>
            <h2 className="heading-font text-3xl text-white">
              Vi arbetar i flera material
            </h2>
            <ul className="mt-5 space-y-2">
              {materials.map((item) => (
                <li key={item} className="body-muted">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="soft-grid p-8" delayMs={120}>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#8e8d91]">
              KOMPLETTERANDE TJÄNSTER
            </p>
            <h2 className="heading-font text-3xl text-white">
              På beställning ordnas även
            </h2>
            <ul className="mt-5 space-y-2">
              {addOnServices.map((item) => (
                <li key={item} className="body-muted">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-10" delayMs={140}>
          <Link
            href="/kontakt"
            className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Kontakta oss för offert
          </Link>
        </AnimatedSection>
      </AnimatedSection>
    </main>
  );
}

import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <main className="bg-tech-gradient">
      <AnimatedSection className="mx-auto min-h-[calc(100vh-134px)] w-full max-w-6xl px-6 py-16">
        <h1 className="heading-font text-center text-4xl text-white sm:text-5xl md:text-left md:text-7xl">
          Kontakt
        </h1>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <AnimatedSection className="glass-card rounded-xl p-6" delayMs={70}>
            <h2 className="heading-font text-2xl text-white">Kontaktuppgifter</h2>
            <div className="mt-4 space-y-2 text-lg text-[#8e8d91]">
              <p>Telefon: 070-652 77 70</p>
              <p>E-post: konrad@jarnkirurgen.se</p>
            </div>
            <p className="body-muted mt-4">
              För snabbast första kontakt rekommenderas mobiltelefon.
            </p>
          </AnimatedSection>

          <AnimatedSection className="glass-card rounded-xl p-6" delayMs={110}>
            <h2 className="heading-font text-2xl text-white">Adress</h2>
            <div className="body-muted mt-4 space-y-3">
              <p>
                <strong className="text-white">Verkstad:</strong> Terminalgatan 8,
                Vilhelmina
              </p>
              <p>
                <strong className="text-white">Postadress:</strong> Järnkirurgen,
                Nästansjö 610, 912 92 Vilhelmina
              </p>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { DesktopNavLinks, MobileBottomNav } from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Järnkirurgen",
  description:
    "Avancerad svetsteknik i Vilhelmina med fokus på kvalitet, finish och tillförlitlighet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} pb-24 antialiased md:pb-0`}>
        <header className="sticky top-0 z-50 px-0 pt-0 md:px-6 md:pt-4">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-center rounded-b-[22px] border border-white/15 border-t-0 bg-[#06080f99] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:justify-between md:rounded-[22px] md:border-t">
            <Link href="/" className="flex items-center gap-3 md:mx-0">
              <Image
                src="/assets/logo/logo-horisontal.svg"
                alt="Järnkirurgen"
                width={180}
                height={40}
                className="h-[27px] w-auto"
                priority
              />
            </Link>
            <DesktopNavLinks />
          </nav>
        </header>
        {children}
        <MobileBottomNav />
        <footer
          className="mt-10 border-t border-white/10"
          style={{
            backgroundColor: "#04050b",
            backgroundImage:
              "linear-gradient(rgba(4,5,11,0.76), rgba(4,5,11,0.76)), url('/assets/images/jk-pattern.svg')",
            backgroundRepeat: "repeat, repeat",
            backgroundSize: "auto, 80px",
          }}
        >
          <div className="mx-auto max-w-6xl px-6 pt-14 pb-8 text-sm text-[#8e8d91]">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              <div>
                <p className="mb-3 font-medium text-white">Tjänster</p>
                <ul className="space-y-2">
                  <li>
                    <Link className="transition hover:text-white" href="/vara-tjanster">
                      Sprickindikering
                    </Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-white" href="/vara-tjanster">
                      Rörsvetsning
                    </Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-white" href="/vara-tjanster">
                      Reparationssvetsning
                    </Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-white" href="/vara-tjanster">
                      Hård- och mjuklödning
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-3 font-medium text-white">Företaget</p>
                <ul className="space-y-2">
                  <li>
                    <Link className="transition hover:text-white" href="/om-oss">
                      Om oss
                    </Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-white" href="/licenser">
                      Licenser
                    </Link>
                  </li>
                  <li>
                    <Link className="transition hover:text-white" href="/kontakt">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="mb-3 font-medium text-white">Kontakt</p>
                <ul className="space-y-2">
                  <li>070-652 77 70</li>
                  <li>konrad@jarnkirurgen.se</li>
                  <li>Terminalgatan 8, Vilhelmina</li>
                </ul>
              </div>

              <div>
                <p className="mb-3 font-medium text-white">Adress</p>
                <ul className="space-y-2">
                  <li>Järnkirurgen</li>
                  <li>Nästansjö 610</li>
                  <li>912 92 Vilhelmina</li>
                </ul>
              </div>

              <div>
                <p className="mb-3 font-medium text-white">Juridik</p>
                <ul className="space-y-2">
                  <li>Org. nr: 700212-8614</li>
                  <li>F-skattsedel: Ja</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
              <div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/logo/icon.svg"
                    alt="Järnkirurgen logotyp"
                    width={80}
                    height={80}
                    className="h-20 w-20"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["TIG", "MIG/MAG", "MMA", "Heta Arbeten"].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#8e8d91]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

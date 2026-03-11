import AnimatedSection from "@/components/AnimatedSection";

const licenses = [
  ["EN287-1", "111", "P", "BW", "W01/1.1", "6", "-", "PF"],
  ["EN287-1", "135", "P", "BW", "W01/1.1", "1,5", "-", "PA"],
  ["EN287-1", "135", "P", "BW", "W01/1.1", "6", "-", "PE"],
  ["SS ISO 9606-2", "131", "P", "BW", "W21", "3", "-", "PA"],
  ["EN287-1", "111", "P", "BW", "11/8", "6", "-", "PA"],
  ["SS ISO 9606-2", "141", "T", "BW", "W21", "3", "75", "H-L 045"],
  ["SS ISO 9606-2", "131", "P", "FW", "W21", "6", "-", "PA"],
  ["EN287-1", "136", "P", "BW", "W01/1.1", "12,1", "-", "PA"],
  ["EN287-1", "141", "T", "BW", "11/8", "2", "54", "H-L 045"],
  ["SS-EN 13133", "Hårdlödning", "Rör", "Spalt", "Cu/Fe", "3,5", "60,3", "R2U"],
  ["SS-EN 13133", "Hårdlödning", "Rör", "Spalt", "Cu/Cu", "1,5", "54", "R2U"],
];

const columns = [
  "STD",
  "Svetsmetod",
  "Plåt/rör",
  "Typ",
  "Material",
  "Tjocklek",
  "Diameter",
  "Läge",
];

export default function LicensesPage() {
  return (
    <main className="bg-tech-gradient">
      <AnimatedSection className="mx-auto min-h-[calc(100vh-134px)] w-full max-w-6xl px-6 py-16">
        <h1 className="heading-font text-center text-4xl text-white sm:text-5xl md:text-left md:text-7xl">
          Licenser
        </h1>
        <p className="body-muted mx-auto mt-6 max-w-3xl text-center text-lg md:mx-0 md:text-left">
          Urval av tidigare licenser. Underlag och uppdaterad giltighet visas
          vid förfrågan.
        </p>

        <AnimatedSection className="mt-8 space-y-4 md:hidden" delayMs={80}>
          {licenses.map((row) => (
            <article key={row.join("-")} className="soft-grid p-5">
              <p className="text-sm font-semibold text-white">
                {row[0]} · {row[1]}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <p className="text-[#8e8d91]">Material: <span className="text-white">{row[4]}</span></p>
                <p className="text-[#8e8d91]">Typ: <span className="text-white">{row[3]}</span></p>
                <p className="text-[#8e8d91]">Plåt/rör: <span className="text-white">{row[2]}</span></p>
                <p className="text-[#8e8d91]">Läge: <span className="text-white">{row[7]}</span></p>
              </div>
              <details className="mt-3">
                <summary className="cursor-pointer text-sm text-[#8e8d91]">
                  Visa alla fält
                </summary>
                <div className="mt-2 space-y-1 text-sm text-[#8e8d91]">
                  <p>STD: <span className="text-white">{row[0]}</span></p>
                  <p>Svetsmetod: <span className="text-white">{row[1]}</span></p>
                  <p>Plåt/rör: <span className="text-white">{row[2]}</span></p>
                  <p>Typ: <span className="text-white">{row[3]}</span></p>
                  <p>Material: <span className="text-white">{row[4]}</span></p>
                  <p>Tjocklek: <span className="text-white">{row[5]}</span></p>
                  <p>Diameter: <span className="text-white">{row[6]}</span></p>
                  <p>Läge: <span className="text-white">{row[7]}</span></p>
                </div>
              </details>
            </article>
          ))}
        </AnimatedSection>

        <AnimatedSection
          className="glass-card mt-8 hidden overflow-x-auto rounded-xl md:block"
          delayMs={80}
        >
          <table className="min-w-full text-sm">
            <thead className="border-b border-white/15 bg-transparent text-left text-white">
              <tr>
                {columns.map((col) => (
                  <th key={col} className="px-4 py-3 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {licenses.map((row) => (
                <tr key={row.join("-")} className="border-b border-white/10 text-[#8e8d91]">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 align-top">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </AnimatedSection>
      </AnimatedSection>
    </main>
  );
}

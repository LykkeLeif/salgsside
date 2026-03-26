const DescriptionSection = () => {
  return (
    <section id="om" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gray text-center mb-3">
            Om ejendommen
          </p>
          <h2 className="text-display text-foreground text-center mb-4">
            En historie i mursten & natur
          </h2>
          <div className="divider-ornament mb-12 md:mb-16" />

          <div className="space-y-6 text-body-lg text-foreground/85">
            <p>
              Drømmer du om livet på landet med plads, natur og gode muligheder? Denne skønne landbrugsejendom byder på en attraktiv kombination af bolig, erhverv og naturoplevelser.
            </p>

            <p>
              Ejendommen rummer to boliger på samme matrikel, hvilket gør den ideel til flere generationer eller som en oplagt investering med udlejning:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Stuehus på 170 m² samt udnyttet loft med to gode værelser på ca. 15 m² hver</li>
              <li>Bolig nr. 2 på ca. 85 m², er i dag udlejet på en tidsbegrænset lejekontrakt, der udløber i 2027. Såfremt man ikke selv ønsker at benytte bolig 2, vil nuværende rolige og stabile lejer gerne fortsætte lejemålet, hvilket giver en god lejeindtægt.</li>
            </ul>

            <p>
              Udenfor mødes du af en stor, solrig gårdsplads samt en dejlig lukket have, hvor der er rig mulighed for at nyde udelivet i rolige omgivelser.
            </p>

            <p>
              Til ejendommen hører flere udbygninger, herunder faciliteter til dyrehold med 5 gode hestebokse.
            </p>

            <p>
              Det samlede jordtilliggende udgør 21,7 hektar, fordelt på:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>ca. 17 hektar god agerjord</li>
              <li>øvrige arealer med skov og græs</li>
              <li>samt fantastiske jagtmuligheder</li>
            </ul>

            <p>
              Jorden er pt. udlejet, og lejeaftalen kan enten videreføres eller ophøre – alt efter købers ønsker.
            </p>

            <p>
              Ejendommen kan købes med eller uden jord, alt efter behov.
            </p>

            <p>
              Beliggenheden er helt særlig – jorden grænser direkte op til Trustrup Høje, som er et fredet og yderst naturskønt område med enestående landskab og rigt dyreliv. Her får du naturen helt tæt på døren.
            </p>

            <p>
              Samtidig er der kort afstand til hverdagens fornødenheder:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>4,5 km til Sondrup Strand</li>
              <li>2 km til indkøb</li>
              <li>2 km til skole og institution</li>
              <li>14 km til Odder</li>
              <li>14 km til Horsens</li>
              <li>33 km til Aarhus</li>
            </ul>

            <p>
              Pris efter aftale – afhænger af om ejendommen ønskes med eller uden jord.
            </p>

            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To boliger + 1,6 ha jord: 3.250.000 kr.</li>
              <li>Hele ejendommen (inkl. 21,7 ha): 7.350.000 kr.</li>
              <li>Eventuel anden kombination af bolig og jordtilliggende</li>
            </ul>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Boligareal (stuehus)", value: "170 m²" },
              { label: "Boligareal (bolig nr. 2)", value: "85 m²" },
              { label: "Værelser", value: "6" },
              { label: "Byggeår (stuehus)", value: "1860" },
              { label: "Byggeår (bolig nr. 2)", value: "1955" },
              { label: "Renoveret (stuehus)", value: "1990" },
              { label: "Grundareal", value: "21,7 ha" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-2xl md:text-3xl font-medium text-foreground">
                  {item.value}
                </p>
                <p className="font-body text-sm text-warm-gray mt-1 tracking-wide uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;

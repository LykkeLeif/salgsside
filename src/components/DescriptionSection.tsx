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
              Drømmer du om livet på landet med plads, natur og gode muligheder? 
              Denne skønne landbrugsejendom byder på en attraktiv kombination af bolig, erhverv og naturoplevelser.
            </p>
            <p>
              Ejendommen rummer to boliger på samme matrikel, hvilket gør den ideel til flere generationer eller som en oplagt investering med udlejning:
            <br></br>
              •	Stuehus på 170 m² samt udnyttet loft med to gode værelser på ca. 15 m² hver 
              •	Bolig nr. 2 på ca. 85 m², som i dag er udlejet på en tidsbegrænset lejeaftale. Lejer ønsker fortsat at blive boende, hvilket giver en stabil og attraktiv lejeindtægt 
              Udenfor mødes du af en stor, solrig gårdsplads samt en dejlig lukket have, hvor der er rig mulighed for at nyde udelivet i rolige omgivelser.

              Til ejendommen hører flere udbygninger, herunder faciliteter til dyrehold med 5 gode hestebokse.
              Det samlede jordtilliggende udgør 21,7 hektar, fordelt på:
              •	ca. 17 hektar agerjord 
              •	øvrige arealer med skov og græs 
              •	samt fantastiske jagtmuligheder 

              Jorden er pt. udlejet, og lejeaftalen kan enten videreføres eller ophøre – alt efter købers ønsker.
              Ejendommen kan købes med eller uden jord, alt efter behov.
              Beliggenheden er helt særlig - jorden grænser direkte op til Trustrup Høje, som er et fredet og yderst naturskønt område med enestående landskab og rigt dyreliv. Her får du naturen helt tæt på døren.
              Samtidig er der kort afstand til hverdagens fornødenheder:
              •	4,5 km til Sondrup Strand 
              •	2 km til indkøb 
              •	2 km til skole og institution 
              •	14 km til Odder 
              •	14 km til Horsens 
              •	33 km til Aarhus 

            </p>
            <p>
              Pris efter aftale - afhænger af om ejendommen ønskes med eller uden jord.
              •	To boliger + 1,8 ha jord: 3.250.000 kr.
              •	Hele ejendommen (inkl. 21,7 ha): 7.350.000 kr.
              •	Eventuel anden kombination af bolig og jordtilliggende 

            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Boligareal (stuehus)", value: "170 m²" },
              { label: "Boligareal (bolig nr. 2)", value: "85 m²" },
              { label: "Grundareal", value: "21,7 ha" },
              { label: "Værelser", value: "6" },
              { label: "Byggeår", value: "1860" },
              { label: "Renoveret", value: "1990" },
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

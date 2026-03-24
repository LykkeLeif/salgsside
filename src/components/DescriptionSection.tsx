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
              Skovgården er en enestående landejendom beliggende midt i det
              sønderjyske landskab, omgivet af skov, marker og åbne horisonter.
              Ejendommen er opført i traditionelle røde mursten med stråtag og
              rummer al den charm og karakter, man kun finder i ældre danske
              landejendomme.
            </p>
            <p>
              Hovedhuset byder på lyse, rummelige stuer med synlige
              egetræsbjælker, en moderne indrettet pejs og et køkken der
              forener rustik hygge med nutidens komfort. Store vinduer sørger
              for et naturligt lysindfald, der giver hvert rum en varm og
              indbydende atmosfære.
            </p>
            <p>
              Med et samlet grundareal på ca. 12.000 m² og flere tilhørende
              udbygninger rummer ejendommen utallige muligheder — fra
              hestehold og hobby-landbrug til atelier og gæstehus. Haven er
              anlagt med gamle egetræer, frugttræer og staudebede, der
              blomstrer fra det tidlige forår til sent efterår.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Boligareal", value: "285 m²" },
              { label: "Grundareal", value: "12.000 m²" },
              { label: "Værelser", value: "7" },
              { label: "Byggeår", value: "1892" },
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

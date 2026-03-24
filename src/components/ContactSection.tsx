const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-3">
            Kontakt
          </p>
          <h2 className="text-display text-primary-foreground mb-4">
            Interesseret?
          </h2>
          <div className="w-16 h-px mx-auto bg-terracotta mb-10" />

          <p className="text-body-lg text-primary-foreground/80 mb-12">
            Tag endelig kontakt for en uforpligtende fremvisning af ejendommen.
            Vi glæder os til at høre fra dig.
          </p>

          <div className="space-y-8">
            <div>
              <p className="font-display text-xl md:text-2xl font-medium mb-1">
                Hans Jensen
              </p>
              <p className="font-body text-primary-foreground/60 text-sm tracking-wide uppercase">
                Ejer
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <a
                href="tel:+4512345678"
                className="font-body text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                +45 12 34 56 78
              </a>
              <span className="hidden md:inline text-primary-foreground/30">|</span>
              <a
                href="mailto:hans@skovgaarden.dk"
                className="font-body text-lg text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                hans@skovgaarden.dk
              </a>
            </div>

            <div className="pt-4">
              <p className="font-body text-sm text-primary-foreground/50">
                Skovgårdsvej 42, 6340 Kruså
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

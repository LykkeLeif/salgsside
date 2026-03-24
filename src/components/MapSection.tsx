const MapSection = () => {
  return (
    <section id="kort" className="section-padding bg-secondary">
      <div className="container-narrow">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">
          Beliggenhed
        </p>
        <div className="w-16 h-px mx-auto bg-terracotta mb-10" />

        <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
          <iframe
            src="https://www.google.com/maps?q=Trustrupvej%2021%2C%208350%20Hundslund%2C%20Denmark&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kort over Trustrupvej 21, 8350 Hundslund"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;

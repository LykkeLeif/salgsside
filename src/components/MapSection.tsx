const MapSection = () => {
  return (
    <section id="kort" className="section-padding bg-secondary">
      <div className="container-narrow">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">
          Beliggenhed
        </p>
        <h2 className="text-display text-foreground mb-4 text-center">
          Trustrupvej 21, 8350 Hundslund
        </h2>
        <div className="w-16 h-px mx-auto bg-terracotta mb-10" />

        <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.0!2d10.0!3d55.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c8e0f0f0f0f0f%3A0x0!2sTrustrupvej+21%2C+8350+Hundslund!5e0!3m2!1sen!2sdk!4v1"
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

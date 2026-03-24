import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Charmerende landbrugsejendom i naturskønne omgivelser - mulighed for flere generationer eller udlejning"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 md:pb-24 text-center px-6">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Til salg — Landejendom
        </p>
        <h1 className="text-display text-primary-foreground mb-4">
          Trustrupvej 21, 8350 Hundslund
        </h1>
        <p className="text-subtitle text-primary-foreground/90 mb-8">
          Charmerende landbrugsejendom i naturskønne omgivelser
        </p>
        <div className="divider-ornament mb-8" />
        <a
          href="#galleri"
          className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
        >
          Udforsk ejendommen ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import aerialImage from "@/assets/aerial.jpg";

const GallerySection = () => {
  return (
    <section id="galleri" className="section-padding bg-background">
      <div className="container-narrow">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-warm-gray text-center mb-3">
          Galleri
        </p>
        <h2 className="text-display text-foreground text-center mb-4">
          Rum & omgivelser
        </h2>
        <div className="divider-ornament mb-12 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="md:col-span-2 overflow-hidden rounded-lg">
            <img
              src={aerialImage}
              alt="Luftfoto af ejendommen og de omkringliggende marker"
              className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={interior1}
              alt="Hyggelig stue med synlige bjælker og pejs"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1280}
              height={960}
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={interior2}
              alt="Rustikt køkken med træbordplade og kobbertøj"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1280}
              height={960}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

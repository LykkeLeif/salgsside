import aerialImage from "@/assets/aerial.jpg";
import outdoorHouse from "@/assets/outdoor-house.jpg";
import outdoorGardenSun from "@/assets/outdoor-garden-sun.jpg";
import outdoorFlowersClose from "@/assets/outdoor-flowers-close.jpg";
import outdoorFlowersWide from "@/assets/outdoor-flowers-wide.jpg";
import outdoorMatrikelkort from "@/assets/outdoor-matrikelkort.jpg";
import indoorHorseStalls from "@/assets/indoor-horse-stalls.jpg";

const galleryImages = [
  { src: aerialImage, alt: "Luftfoto af ejendommen og de omkringliggende marker" },
  { src: outdoorHouse, alt: "Stuehuset set fra gårdspladsen" },
  { src: outdoorGardenSun, alt: "Solskin gennem træerne i haven med stendige" },
  { src: outdoorFlowersClose, alt: "Farverige rhododendron i fuldt flor" },
  { src: outdoorFlowersWide, alt: "Gårdsplads med blomstrende rhododendron og terrasse" },
  { src: outdoorMatrikelkort, alt: "Matrikelkort over ejendommens jordtilliggende" },
  { src: indoorHorseStalls, alt: "Hestebokse i stalden" },
];

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
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg ${index === 0 ? "md:col-span-2" : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${
                  index === 0 ? "h-64 md:h-96" : "h-56 md:h-72"
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

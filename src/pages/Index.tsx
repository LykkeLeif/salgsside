import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import DescriptionSection from "@/components/DescriptionSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <VideoSection />
      <DescriptionSection />
      <MapSection />
      <ContactSection />
      <footer className="py-6 text-center font-body text-xs text-muted-foreground tracking-wider">
        Trustrupvej 21
      </footer>
    </div>
  );
};

export default Index;

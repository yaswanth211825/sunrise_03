import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { EducationalSection } from "@/components/sections/EducationalSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MaterialIntelligenceSection } from "@/components/sections/MaterialIntelligenceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <FeaturedProjectsSection />
        <EducationalSection />
        <ServicesSection />
        <MaterialIntelligenceSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Turnkey construction, interior design, renovation, architecture, modular interiors, and commercial spaces by ${SITE.name} in ${SITE.city}.`,
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: `Services | ${SITE.name}`,
    description: "Six distinct services, each with its own engineering methodology.",
    url: `${SITE.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-4 container-site">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-3">
          What We Build
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-brand-cream leading-[1.05]">
          Our <em className="text-gradient-gold not-italic">Services</em>
        </h1>
        <p className="mt-4 font-body text-brand-muted max-w-xl">
          Each service has its own engineering discipline. Turnkey construction and
          interior design require fundamentally different planning — we treat them that way.
        </p>
      </div>
      <ServicesSection />
      <FinalCTASection />
    </>
  );
}

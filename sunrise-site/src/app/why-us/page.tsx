import type { Metadata } from "next";
import { EducationalSection } from "@/components/sections/EducationalSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Why Us — Construction Intelligence",
  description: `Engineering principles that separate good construction from exceptional. ${SITE.stats.years} of on-site knowledge on ventilation, waterproofing, lighting, materials, and structural planning.`,
  alternates: { canonical: `${SITE.url}/why-us` },
  openGraph: {
    title: `Why Us | ${SITE.name}`,
    description: "Engineering principles that separate good construction from exceptional.",
    url: `${SITE.url}/why-us`,
  },
};

export default function WhyUsPage() {
  return (
    <>
      <div className="pt-24 pb-4 container-site">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-3">
          Construction Intelligence
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-brand-cream leading-[1.05]">
          Why <em className="text-gradient-gold not-italic">Sunrise</em>
        </h1>
        <p className="mt-4 font-body text-brand-muted max-w-xl">
          We distinguish ourselves by educating clients. These are engineering principles
          from {SITE.stats.years} of on-site practice — not marketing claims.
        </p>
      </div>
      <EducationalSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}

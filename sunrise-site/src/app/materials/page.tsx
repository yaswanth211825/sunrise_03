import type { Metadata } from "next";
import { MaterialIntelligenceSection } from "@/components/sections/MaterialIntelligenceSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Material Intelligence",
  description: `Complete guide to construction materials — plywood grades, tile specifications, waterproofing systems, and paint finishes. Specifications used by ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/materials` },
  openGraph: {
    title: `Materials | ${SITE.name}`,
    description: "Know exactly what goes into your home — grades, durability ratings, and maintenance requirements.",
    url: `${SITE.url}/materials`,
  },
};

export default function MaterialsPage() {
  return (
    <>
      <div className="pt-24 pb-4 container-site">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-3">
          Material Science
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-brand-cream leading-[1.05]">
          Material <em className="text-gradient-gold not-italic">Intelligence</em>
        </h1>
        <p className="mt-4 font-body text-brand-muted max-w-xl">
          Material selection determines how a space ages. These are the specifications
          we use, why we use them, and what to avoid.
        </p>
      </div>
      <MaterialIntelligenceSection />
      <FinalCTASection />
    </>
  );
}

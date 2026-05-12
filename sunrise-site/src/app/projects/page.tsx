import type { Metadata } from "next";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${SITE.stats.projects} construction and interior design projects by ${SITE.name} in ${SITE.city}. Each project documented with engineering decisions and material specifications.`,
  alternates: { canonical: `${SITE.url}/projects` },
  openGraph: {
    title: `Projects | ${SITE.name}`,
    description: "Construction and interior design projects — documented with engineering decisions, not just photographs.",
    url: `${SITE.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-24 pb-4 container-site">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-3">
          Our Work
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-brand-cream leading-[1.05]">
          All <em className="text-gradient-gold not-italic">Projects</em>
        </h1>
        <p className="mt-4 font-body text-brand-muted max-w-xl">
          {SITE.stats.projects} projects delivered. Each one documented with the material
          specifications and engineering decisions that made it work.
        </p>
      </div>
      <FeaturedProjectsSection />
      <FinalCTASection />
    </>
  );
}

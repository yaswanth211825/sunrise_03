import type { Metadata } from "next";
import Image from "next/image";
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
      {/* On-site proof strip */}
      <section className="py-12 bg-brand-dark" aria-label="Our work in progress">
        <div className="container-site mb-8">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold">
            On Site — How We Work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 md:px-8 lg:px-16">
          {/* Team on site — spans full width on mobile, left half on desktop */}
          <div className="relative rounded-2xl overflow-hidden aspect-video md:row-span-2">
            <Image
              src="/images/process/site-team-review.png"
              alt="Sunrise site manager reviewing construction progress with the client and team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold/80 mb-1">Team On Site</p>
              <p className="font-body text-sm text-brand-cream max-w-xs">
                Every project has a dedicated site manager reviewing progress daily with the client.
              </p>
            </div>
          </div>

          {/* Waterproofing */}
          <div className="relative rounded-2xl overflow-hidden aspect-video">
            <Image
              src="/images/process/waterproofing-membrane.png"
              alt="Waterproofing membrane being applied to bathroom floor before tiling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold/80 mb-0.5">Waterproofing First</p>
              <p className="font-body text-xs text-brand-muted">Black membrane applied before any tiling begins</p>
            </div>
          </div>

          {/* False ceiling + Modular kitchen side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/process/false-ceiling-installation.png"
                alt="False ceiling GI grid framework being installed and leveled with laser"
                fill
                className="object-cover object-center"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-brand-gold/80 mb-0.5">Ceiling Grid</p>
                <p className="font-body text-[10px] text-brand-muted leading-snug">Laser-leveled GI framework</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/process/modular-kitchen-installation.png"
                alt="Modular kitchen unit being installed and measured on site"
                fill
                className="object-cover"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-brand-gold/80 mb-0.5">Modular Install</p>
                <p className="font-body text-[10px] text-brand-muted leading-snug">Factory units, site precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EducationalSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}

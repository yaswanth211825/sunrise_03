import type { Metadata } from "next";
import Image from "next/image";
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

      {/* Material flatlay hero */}
      <div className="container-site py-8">
        <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-[21/7]">
          <Image
            src="/images/materials/material-samples-flatlay.png"
            alt="Material samples: Calacatta marble, tropical veneer, Alu profile, soft-close hinge, Luxe Terrazzo, birch plywood"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-12 max-w-sm">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-3">
                What Goes In
              </p>
              <p className="font-display text-2xl md:text-3xl text-brand-cream leading-snug">
                Every material is specified,<br />not guessed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Material close-up gallery */}
      <section className="py-10 bg-brand-dark" aria-label="Material texture gallery">
        <div className="container-site mb-6">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold">
            What We Specify — Up Close
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-5 md:px-8 lg:px-16">
          {/* Marble — large */}
          <div className="relative col-span-2 md:col-span-1 rounded-2xl overflow-hidden aspect-video md:aspect-square">
            <Image
              src="/images/materials/marble-veining-closeup.png"
              alt="Premium Italian marble — natural veining close-up, wet polished surface"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold mb-0.5">Italian Marble</p>
              <p className="font-body text-xs text-brand-muted">Natural veining, polished finish</p>
            </div>
          </div>

          {/* Wood veneer */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/images/materials/wood-veneer-grain.jpg"
              alt="Natural wood veneer — close-up of flowing grain patterns"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold mb-0.5">Wood Veneer</p>
              <p className="font-body text-xs text-brand-muted">Natural grain texture</p>
            </div>
          </div>

          {/* German hardware — aluminium profile */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/images/projects/ongole-house/aluminium-profile-i-handle-reeded-glass-cabinet.webp"
              alt="Aluminium profile I-handle on reeded glass cabinet — German-standard hardware detail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold mb-0.5">German Hardware</p>
              <p className="font-body text-xs text-brand-muted">Aluminium profile, I-handle</p>
            </div>
          </div>

          {/* Stone cladding */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/images/materials/stone-cladding-texture.jpg"
              alt="Natural sandstone cladding — layered earthy texture for exterior facades"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold mb-0.5">Stone Cladding</p>
              <p className="font-body text-xs text-brand-muted">Natural sandstone, warm tones</p>
            </div>
          </div>

          {/* Reeded glass */}
          <div className="relative rounded-2xl overflow-hidden aspect-square">
            <Image
              src="/images/materials/reeded-glass-backlit.jpg"
              alt="Reeded glass panel backlit — vertical ribbed texture used in cabinet doors"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold mb-0.5">Reeded Glass</p>
              <p className="font-body text-xs text-brand-muted">Backlit cabinet panels</p>
            </div>
          </div>

          {/* Plywood — large */}
          <div className="relative col-span-2 md:col-span-1 rounded-2xl overflow-hidden aspect-video md:aspect-square">
            <Image
              src="/images/materials/bwp-plywood-layers.jpg"
              alt="BWP plywood — curved cross-section showing dense layered veneer construction"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-body text-xs tracking-[0.15em] uppercase text-brand-gold mb-0.5">BWP Plywood</p>
              <p className="font-body text-xs text-brand-muted">Multiple dense veneer layers</p>
            </div>
          </div>
        </div>
      </section>

      <MaterialIntelligenceSection />
      <FinalCTASection />
    </>
  );
}

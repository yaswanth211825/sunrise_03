import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, MapPin, Ruler, Clock, Calendar } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { SITE } from "@/config/site";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${SITE.url}/projects/${project.id}` },
    openGraph: {
      title: `${project.title} | ${SITE.name}`,
      description: project.description,
      images: [{ url: `${SITE.url}${project.image}` }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = featuredProjects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] md:h-[70vh] min-h-[400px] bg-brand-dark">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-site pb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-body text-xs text-brand-muted mb-6"
          >
            <ArrowLeft size={13} aria-hidden="true" /> All Projects
          </Link>
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-2">
            {project.category}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-brand-cream leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Meta strip */}
      <div className="bg-brand-card border-b border-brand-border">
        <div className="container-site py-5 flex flex-wrap gap-x-8 gap-y-3">
          <span className="flex items-center gap-2 font-body text-sm text-brand-muted">
            <MapPin size={13} className="text-brand-gold" aria-hidden="true" />
            {project.location}
          </span>
          <span className="flex items-center gap-2 font-body text-sm text-brand-muted">
            <Ruler size={13} className="text-brand-gold" aria-hidden="true" />
            {project.area}
          </span>
          <span className="flex items-center gap-2 font-body text-sm text-brand-muted">
            <Clock size={13} className="text-brand-gold" aria-hidden="true" />
            {project.duration}
          </span>
          <span className="flex items-center gap-2 font-body text-sm text-brand-muted">
            <Calendar size={13} className="text-brand-gold" aria-hidden="true" />
            {project.year}
          </span>
        </div>
      </div>

      {/* Description + Insight */}
      <section className="section-padding bg-brand-dark" aria-label="Project overview">
        <div className="container-site max-w-3xl">
          <p className="font-body text-brand-muted leading-relaxed text-base mb-8">
            {project.description}
          </p>
          <div className="border-l-2 border-brand-gold/40 pl-5 py-1 mb-8">
            <p className="font-body text-xs tracking-[0.12em] uppercase text-brand-gold/50 mb-1">
              Site Insight
            </p>
            <p className="font-body text-sm text-brand-gold/80 italic leading-relaxed">
              &ldquo;{project.insight}&rdquo;
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[11px] bg-brand-surface text-brand-muted rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 bg-brand-dark" aria-label="Project gallery">
        <div className="container-site">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-8">
            Project Gallery — {project.gallery.length} Photos
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-xl bg-brand-surface ${
                  i === 0
                    ? "col-span-2 md:col-span-2 aspect-video"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`${project.title} — photo ${i + 1} of ${project.gallery.length}`}
                  fill
                  className="object-cover"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                  loading={i < 4 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTASection />
    </>
  );
}

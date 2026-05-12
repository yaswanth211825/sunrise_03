"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Ruler } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FeaturedProjectsSection() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="section-padding bg-brand-dark"
      aria-labelledby="projects-heading"
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Our Work"
            title="Featured <em>Projects</em>"
            subtitle="Each project is documented with material specifications and engineering decisions — not just photographs."
            titleClassName="max-w-md"
          />
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-brand-gold font-body text-sm hover:gap-3 transition-all duration-300"
          >
            View all projects <ArrowRight size={15} />
          </motion.a>
        </div>
      </div>

      {/* Swipeable card scroll */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-5 md:px-8 lg:px-16 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
        role="list"
        aria-label="Featured construction projects"
      >
        {featuredProjects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="shrink-0 w-[85vw] sm:w-[420px] md:w-[400px] glass-card rounded-[1.25rem] overflow-hidden cursor-pointer gold-border-hover"
            style={{ scrollSnapAlign: "start" }}
            role="listitem"
            onClick={() => setActive(i)}
          >
            {/* Image */}
            <div className="relative h-[260px] md:h-[280px] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.category} in ${project.location}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 85vw, 420px"
                loading={i < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card/90 via-transparent to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase bg-brand-gold/20 border border-brand-gold/40 text-brand-gold rounded-full px-3 py-1 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Year */}
              <div className="absolute top-4 right-4">
                <span className="font-body text-[10px] text-brand-muted">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-xl font-medium text-brand-cream leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 font-body text-xs text-brand-muted">
                  <MapPin size={11} className="text-brand-gold" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1.5 font-body text-xs text-brand-muted">
                  <Ruler size={11} className="text-brand-gold" />
                  {project.area}
                </span>
              </div>

              <p className="font-body text-sm text-brand-muted leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Engineer insight */}
              <div className="border-l-2 border-brand-gold/40 pl-3 py-0.5">
                <p className="font-body text-xs text-brand-gold/80 italic leading-relaxed">
                  &ldquo;{project.insight}&rdquo;
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] bg-brand-surface text-brand-muted rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Dot indicators (mobile) */}
      <div className="flex justify-center gap-2 mt-6 md:hidden" aria-hidden="true">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActive(i);
              const card = scrollRef.current?.children[i] as HTMLElement;
              card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "bg-brand-gold w-5" : "bg-brand-surface"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

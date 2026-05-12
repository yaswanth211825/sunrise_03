"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/config/site";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollToCard(i: number) {
    setActiveIndex(i);
    const card = scrollRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  return (
    <section
      id="testimonials"
      className="section-padding bg-brand-dark overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeader
            id="testimonials-heading"
            eyebrow="Client Experiences"
            title="What Clients Say"
            highlight="After Move-In"
            subtitle="The real test of construction quality isn't at handover — it's 2 years later."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="shrink-0 text-right"
          >
            <span className="font-display text-4xl font-light text-brand-cream block">
              {SITE.stats.rating.replace("★", "")}
            </span>
            <div className="flex gap-0.5 justify-end mb-0.5" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-brand-gold text-brand-gold" aria-hidden="true" />
              ))}
            </div>
            <span className="font-body text-xs text-brand-muted">{SITE.stats.reviews} reviews</span>
          </motion.div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollSnapType: "x mandatory" }}
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="shrink-0 w-[85vw] sm:w-[400px] glass-card rounded-[1.2rem] p-7"
              style={{ scrollSnapAlign: "start" }}
              role="listitem"
              cite={t.project}
            >
              <div className="flex items-start justify-between mb-5">
                <Quote size={22} className="text-brand-gold/40" aria-hidden="true" />
                <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-brand-gold text-brand-gold" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <p className="font-display text-lg font-light text-brand-cream italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 pt-5 border-t border-brand-border">
                <div
                  className="w-9 h-9 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center font-display text-sm font-medium text-brand-gold"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <span className="font-body text-sm font-medium text-brand-cream block">{t.name}</span>
                  <span className="font-body text-xs text-brand-muted">
                    {t.role} · {t.location}
                  </span>
                </div>
                <span className="ml-auto font-body text-[10px] text-brand-gold/70 tracking-wide">
                  {t.project}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6 md:hidden" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-brand-gold w-5" : "bg-brand-surface w-1.5"
              }`}
              aria-label={`View testimonial ${i + 1}`}
              aria-pressed={activeIndex === i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

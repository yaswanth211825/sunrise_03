"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { SITE } from "@/config/site";

const ctaSteps = [
  { step: "01", title: "Book a free call", desc: "30-minute discovery call with a senior architect." },
  { step: "02", title: "Site assessment", desc: "We visit, measure, and document your space." },
  { step: "03", title: "Scope & pricing", desc: "Detailed scope with transparent item-by-item pricing." },
  { step: "04", title: "Begin construction", desc: "Project kicks off with milestone-based billing." },
];

const trustSignals = [
  "Free initial consultation",
  "No commitment required",
  "Transparent pricing",
  "Licensed & insured",
];

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative section-padding overflow-hidden bg-brand-dark"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark" />
      </div>

      <div className="relative z-10 container-site">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.25em] uppercase text-brand-gold mb-4"
          >
            Start Your Project
          </motion.p>
          <motion.h2
            id="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-cream leading-[1.05] mb-5"
          >
            Ready to Build{" "}
            <em className="text-gradient-gold not-italic">Something Exceptional?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-brand-muted leading-relaxed"
          >
            Construction starts with a conversation. Tell us about your project
            and we&rsquo;ll respond with a detailed, honest assessment — no sales pressure.
          </motion.p>
        </div>

        <motion.ol
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
          aria-label="How we work"
        >
          {ctaSteps.map((step) => (
            <li key={step.step} className="glass-card rounded-xl p-5 relative overflow-hidden">
              <span
                className="absolute top-3 right-3 font-display text-4xl font-light text-brand-surface select-none"
                aria-hidden="true"
              >
                {step.step}
              </span>
              <h3 className="font-body text-sm font-medium text-brand-cream mb-1.5 pr-8">
                {step.title}
              </h3>
              <p className="font-body text-xs text-brand-muted leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${SITE.phone.wa}?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] rounded-full px-7 py-4 text-sm font-body font-medium"
          >
            <MessageCircle size={17} aria-hidden="true" />
            WhatsApp Us
          </a>
          <a
            href={`tel:${SITE.phone.tel}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 glass-card border-brand-gold/30 text-brand-cream rounded-full px-7 py-4 text-sm font-body font-medium"
          >
            <Phone size={17} aria-hidden="true" />
            {SITE.phone.display}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark rounded-full px-7 py-4 text-sm font-body font-medium"
          >
            <Calendar size={17} aria-hidden="true" />
            Book Consultation
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          {trustSignals.map((item) => (
            <li key={item} className="font-body text-xs text-brand-muted flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-gold" aria-hidden="true" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

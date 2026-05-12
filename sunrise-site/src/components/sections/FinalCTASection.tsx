"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, ArrowRight } from "lucide-react";

const ctaSteps = [
  { step: "01", title: "Book a free call", desc: "30-minute discovery call with a senior architect." },
  { step: "02", title: "Site assessment", desc: "We visit, measure, and document your space." },
  { step: "03", title: "Scope & pricing", desc: "Detailed scope with transparent item-by-item pricing." },
  { step: "04", title: "Begin construction", desc: "Project kicks off with milestone-based billing." },
];

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative section-padding overflow-hidden bg-brand-dark"
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80"
          alt="Luxury interior designed by Sunrise Constructions"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark" />
      </div>

      <div className="relative z-10 container-site">
        {/* Heading */}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            id="cta-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-cream leading-[1.05] mb-5"
          >
            Ready to Build{" "}
            <em className="text-gradient-gold not-italic">Something</em>
            <br />
            <em className="text-gradient-gold not-italic">Exceptional?</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-brand-muted leading-relaxed"
          >
            Construction starts with a conversation. Tell us about your project
            and we&rsquo;ll respond with a detailed, honest assessment — no
            sales pressure.
          </motion.p>
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {ctaSteps.map((step, i) => (
            <div
              key={step.step}
              className="glass-card rounded-xl p-5 relative overflow-hidden"
            >
              <span className="absolute top-3 right-3 font-display text-4xl font-light text-brand-surface select-none">
                {step.step}
              </span>
              <h3 className="font-body text-sm font-medium text-brand-cream mb-1.5 pr-8">
                {step.title}
              </h3>
              <p className="font-body text-xs text-brand-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20construction%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] rounded-full px-7 py-4 text-sm font-body font-medium hover:bg-[#25D366]/25 transition-all duration-300 active:scale-98"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
          <a
            href="tel:+919876543210"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 glass-card border-brand-gold/30 text-brand-cream rounded-full px-7 py-4 text-sm font-body font-medium hover:border-brand-gold/60 transition-all duration-300"
          >
            <Phone size={17} />
            Call Now
          </a>
          <a
            href="mailto:hello@sunriseconstructions.in"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-gold text-brand-dark rounded-full px-7 py-4 text-sm font-body font-medium hover:bg-brand-gold-light transition-all duration-300 active:scale-98"
          >
            <Calendar size={17} />
            Book Consultation
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          {[
            "Free initial consultation",
            "No commitment required",
            "Transparent pricing",
            "Licensed & insured",
          ].map((item) => (
            <span
              key={item}
              className="font-body text-xs text-brand-muted flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-brand-gold" aria-hidden="true" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/ui/GoldButton";
import { SITE } from "@/config/site";

const stats = [
  { value: SITE.stats.projects, label: "Projects Delivered" },
  { value: SITE.stats.years, label: "Years of Practice" },
  { value: SITE.stats.rating, label: "Client Rating" },
  { value: "0", label: "Hidden Costs" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85"
          alt="Premium luxury residence built by Sunrise Constructions, Hyderabad"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-brand-dark/20" />
      </motion.div>

      <motion.div
        className="relative z-10 container-site pb-20 md:pb-28 pt-32"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-xs tracking-[0.25em] uppercase text-brand-gold mb-6"
          >
            {SITE.city} · Established {SITE.established}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-brand-cream leading-[1.02] mb-6"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}
          >
            Spaces Built With{" "}
            <em className="text-gradient-gold not-italic">Engineering</em>{" "}
            <br className="hidden sm:block" />
            Precision &amp; Interior{" "}
            <em className="text-gradient-gold not-italic">Intelligence</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-brand-muted text-base md:text-lg font-light leading-relaxed mb-10 max-w-lg"
          >
            From structural foundations to final finishes — every decision is
            driven by material science, climate logic, and how people actually
            live in spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <GoldButton
              variant="solid"
              size="lg"
              href="/projects"
              icon={<ArrowRight size={16} />}
            >
              Explore Projects
            </GoldButton>
            <GoldButton variant="outline" size="lg" href="/contact">
              Book Consultation
            </GoldButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-14 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 max-w-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-light text-brand-cream leading-none">
                {stat.value}
              </span>
              <span className="font-body text-xs text-brand-muted mt-1.5 tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 md:right-10 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-brand-muted rotate-90 origin-center mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

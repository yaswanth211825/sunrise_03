"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wind, Droplets, Lightbulb, Layers, Grid3x3,
  Zap, Maximize2, Building,
} from "lucide-react";
import { educationCards } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Wind, Droplets, Lightbulb, Layers, Grid3x3, Zap, Maximize2, Building,
};

const categoryColors: Record<string, string> = {
  Structural: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Protection: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  Interior: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Materials: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Finishes: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  Systems: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Design: "text-rose-400 bg-rose-400/10 border-rose-400/20",
};

export function EducationalSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      id="education"
      className="section-padding bg-brand-card"
      aria-labelledby="education-heading"
    >
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <SectionHeader
            id="education-heading"
            eyebrow="Construction Intelligence"
            title="What Most Contractors"
            highlight="Don't Tell You"
            subtitle="We believe informed clients make better decisions. Here's the engineering knowledge that separates good construction from exceptional construction."
            titleClassName="max-w-xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:max-w-xs"
          >
            <div className="glass-card-light rounded-2xl p-5 border border-brand-border">
              <p className="font-body text-xs text-brand-muted leading-relaxed">
                These insights come from 12 years of on-site experience. They&apos;re
                engineering principles, not opinions — and they apply to every
                project we take on.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {educationCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const isOpen = expanded === card.id;
            const colorClass =
              categoryColors[card.category] ??
              "text-brand-gold bg-brand-gold/10 border-brand-gold/20";

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                {/*
                  Disclosure pattern: a <button> that toggles the detail panel.
                  The surrounding div is the card frame, not an interactive element.
                */}
                <div className="glass-card rounded-[1.2rem] p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorClass}`}
                      aria-hidden="true"
                    >
                      {Icon && <Icon size={18} />}
                    </div>
                    <span
                      className={`font-body text-[10px] tracking-[0.15em] uppercase border rounded-full px-2 py-0.5 ${colorClass}`}
                    >
                      {card.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-medium text-brand-cream mb-2 leading-tight">
                    {card.topic}
                  </h3>
                  <p className="font-body text-sm text-brand-gold/90 italic leading-relaxed mb-3">
                    &ldquo;{card.insight}&rdquo;
                  </p>

                  {card.stat && (
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-display text-2xl font-light text-brand-cream">
                        {card.stat}
                      </span>
                      <span className="font-body text-xs text-brand-muted leading-tight max-w-[120px]">
                        {card.statLabel}
                      </span>
                    </div>
                  )}

                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        id={`detail-${card.id}`}
                        className="font-body text-sm text-brand-muted leading-relaxed overflow-hidden border-t border-brand-border pt-3 mt-1"
                      >
                        {card.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpanded(isOpen ? null : card.id)}
                    aria-expanded={isOpen}
                    aria-controls={`detail-${card.id}`}
                    className="mt-3 font-body text-[10px] text-brand-gold/60 cursor-pointer bg-transparent border-none p-0"
                  >
                    {isOpen ? "Show less" : "Learn more"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

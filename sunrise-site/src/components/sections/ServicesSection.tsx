"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, Paintbrush2, Wrench, Compass, LayoutGrid, Store, Check, ChevronDown,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Building2, Paintbrush2, Wrench, Compass, LayoutGrid, Store,
};

export function ServicesSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-padding bg-brand-dark"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            id="services-heading"
            eyebrow="What We Build"
            title="Services Built on"
            highlight="Engineering Discipline"
            subtitle="Each service has a distinct technical methodology. We don't apply one-size solutions to different project types."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isOpen = active === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div
                  className={`glass-card rounded-[1.25rem] p-7 ${
                    isOpen ? "border-brand-gold/40" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {Icon && <Icon size={20} className="text-brand-gold" />}
                    </div>
                    <button
                      onClick={() => setActive(isOpen ? null : service.id)}
                      aria-expanded={isOpen}
                      aria-controls={`features-${service.id}`}
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${service.title} details`}
                      className="p-1 text-brand-muted bg-transparent border-none cursor-pointer"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  <h3 className="font-display text-xl font-medium text-brand-cream mb-1 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs text-brand-gold tracking-wide mb-3">
                    {service.subtitle}
                  </p>
                  <p className="font-body text-sm text-brand-muted leading-relaxed">
                    {service.description}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        id={`features-${service.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 space-y-2.5 overflow-hidden border-t border-brand-border pt-5"
                      >
                        {service.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5">
                            <Check
                              size={13}
                              className="text-brand-gold mt-0.5 shrink-0"
                              aria-hidden="true"
                            />
                            <span className="font-body text-sm text-brand-muted">{feat}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

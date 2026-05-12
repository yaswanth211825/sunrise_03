"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Grid3x3, Paintbrush2, Droplets } from "lucide-react";
import { materialCategories, type MaterialItem } from "@/data/materials";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers, Grid3x3, Paintbrush2, Droplets,
};

const gradeConfig = {
  Best: { color: "text-emerald-400", label: "Recommended" },
  Good: { color: "text-amber-400", label: "Suitable" },
  Caution: { color: "text-red-400", label: "Use with care" },
};

function DurabilityBar({ value }: { value: number }) {
  const barColor =
    value >= 85 ? "bg-emerald-400" : value >= 70 ? "bg-amber-400" : "bg-red-400";

  return (
    <div className="flex items-center gap-2" role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={`Durability ${value}%`}>
      <div className="flex-1 h-1 bg-brand-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${barColor}`}
        />
      </div>
      <span className="font-body text-xs text-brand-muted w-8 text-right" aria-hidden="true">
        {value}%
      </span>
    </div>
  );
}

function MaterialCard({ item }: { item: MaterialItem }) {
  const cfg = gradeConfig[item.grade];
  return (
    <div className="glass-card-light rounded-xl p-4 border border-brand-border">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-body text-sm font-medium text-brand-cream leading-tight">
          {item.name}
        </h4>
        <span className={`font-body text-[10px] font-medium ${cfg.color} border border-current/30 rounded-full px-2 py-0.5`}>
          {cfg.label}
        </span>
      </div>
      <div className="mb-3">
        <span className="font-body text-[10px] text-brand-muted uppercase tracking-widest block mb-1">
          Durability
        </span>
        <DurabilityBar value={item.durability} />
      </div>
      <div className="space-y-1.5 mt-3">
        <div>
          <span className="font-body text-[10px] text-brand-gold uppercase tracking-widest">Best for</span>
          <p className="font-body text-xs text-brand-muted mt-0.5">{item.bestFor}</p>
        </div>
        {item.avoid && (
          <div>
            <span className="font-body text-[10px] text-red-400/80 uppercase tracking-widest">Avoid</span>
            <p className="font-body text-xs text-red-400/70 mt-0.5">{item.avoid}</p>
          </div>
        )}
        <div>
          <span className="font-body text-[10px] text-brand-muted uppercase tracking-widest">Maintenance</span>
          <p className="font-body text-xs text-brand-muted mt-0.5">{item.maintenance}</p>
        </div>
      </div>
    </div>
  );
}

export function MaterialIntelligenceSection() {
  const [activeTab, setActiveTab] = useState(materialCategories[0].id);
  const activeCategory = materialCategories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="materials"
      className="section-padding bg-brand-card"
      aria-labelledby="materials-heading"
    >
      <div className="container-site">
        <div className="mb-12">
          <SectionHeader
            id="materials-heading"
            eyebrow="Material Science"
            title="Know What Goes"
            highlight="Into Your Home"
            subtitle="Material selection determines durability, maintenance cost, and how your space ages. These specifications are what we use — and why."
          />
        </div>

        <div
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-8"
          role="tablist"
          aria-label="Material categories"
        >
          {materialCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-brand-gold text-brand-dark"
                    : "bg-brand-surface text-brand-muted border border-brand-border"
                }`}
              >
                {Icon && <Icon size={14} aria-hidden="true" />}
                {cat.title}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {activeCategory.items.map((item) => (
            <MaterialCard key={item.name} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <div>
            <h3 className="font-display text-xl font-medium text-brand-cream mb-1">
              Need a material recommendation for your project?
            </h3>
            <p className="font-body text-sm text-brand-muted">
              We assess site conditions, budget, and usage pattern before specifying any material.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-gold text-brand-dark rounded-full px-6 py-3 text-sm font-body font-medium"
          >
            Get a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

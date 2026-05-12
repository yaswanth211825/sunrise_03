"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  /** Plain text title */
  title: string;
  /** Optional word or phrase inside the title rendered in gold italic */
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  /** The heading level to render — defaults to h2 */
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
  className,
  titleClassName,
  as: Tag = "h2",
  id,
}: SectionHeaderProps) {
  const titleContent = highlight ? (
    <>
      {title}{" "}
      <em className="text-gradient-gold not-italic">{highlight}</em>
    </>
  ) : (
    title
  );

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-brand-gold text-xs font-medium tracking-[0.2em] uppercase mb-4 font-body"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Tag
          id={id}
          className={cn(
            "font-display text-4xl md:text-5xl lg:text-6xl font-light text-brand-cream leading-[1.05]",
            titleClassName
          )}
        >
          {titleContent}
        </Tag>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-brand-muted text-base md:text-lg font-body font-light leading-relaxed max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

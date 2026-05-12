"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: ReactNode;
}

const sizeClasses = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-9 py-4 text-base",
};

const variantClasses = {
  solid: "bg-brand-gold text-brand-dark",
  outline: "border border-brand-gold text-brand-gold",
  ghost: "text-brand-gold",
};

export function GoldButton({
  children,
  variant = "solid",
  size = "md",
  className,
  onClick,
  href,
  type = "button",
  disabled,
  icon,
}: GoldButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center gap-2.5 font-body font-medium tracking-wide rounded-full cursor-pointer select-none",
    sizeClasses[size],
    variantClasses[variant],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const content = (
    <>
      {children}
      {icon && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a href={href} className={baseClass} whileTap={{ scale: 0.97 }}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}

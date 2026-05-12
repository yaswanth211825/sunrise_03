"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#education" },
  { label: "Materials", href: "#materials" },
  { label: "Contact", href: "#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 glass-card border-b border-brand-border"
            : "py-5 bg-transparent"
        )}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">
          <a
            href="/"
            aria-label="Sunrise Constructions — Home"
            className="flex flex-col leading-none group"
          >
            <span className="font-display text-xl font-medium text-brand-cream tracking-wide group-hover:text-brand-gold transition-colors duration-300">
              Sunrise
            </span>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-brand-gold mt-0.5">
              Constructions & Interiors
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-brand-muted hover:text-brand-cream transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+919876543210"
              aria-label="Call us"
              className="hidden md:flex items-center gap-2 text-brand-gold border border-brand-gold/30 rounded-full px-4 py-2 text-xs font-body hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
            >
              <Phone size={13} />
              <span>+91 98765 43210</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-brand-cream hover:text-brand-gold transition-colors"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[80vw] max-w-sm glass-card flex flex-col p-8 pt-20"
              aria-label="Mobile navigation"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 p-2 text-brand-cream hover:text-brand-gold transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col gap-6 mt-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-light text-brand-cream hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-brand-border">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-brand-gold font-body text-sm"
                >
                  <Phone size={16} />
                  +91 98765 43210
                </a>
                <p className="mt-2 text-brand-muted text-xs font-body">
                  Mon–Sat, 9AM–7PM
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

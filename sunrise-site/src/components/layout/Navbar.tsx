"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SITE, NAV_LINKS } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

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
            aria-label={`${SITE.name} — Home`}
            className="flex flex-col leading-none"
          >
            <span className="font-display text-xl font-medium text-brand-cream tracking-wide">
              {SITE.shortName}
            </span>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-brand-gold mt-0.5">
              {SITE.tagline}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={cn(
                  "font-body text-sm tracking-wide transition-colors duration-200",
                  pathname === link.href
                    ? "text-brand-gold"
                    : "text-brand-muted"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone.tel}`}
              aria-label="Call us"
              className="hidden md:flex items-center gap-2 text-brand-gold border border-brand-gold/30 rounded-full px-4 py-2 text-xs font-body"
            >
              <Phone size={13} aria-hidden="true" />
              <span>{SITE.phone.display}</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 text-brand-cream"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
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
              id="mobile-nav"
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
                className="absolute top-5 right-5 p-2 text-brand-cream"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col gap-6 mt-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={cn(
                      "font-display text-2xl font-light",
                      pathname === link.href ? "text-brand-gold" : "text-brand-cream"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-brand-border">
                <a
                  href={`tel:${SITE.phone.tel}`}
                  className="flex items-center gap-3 text-brand-gold font-body text-sm"
                >
                  <Phone size={16} aria-hidden="true" />
                  {SITE.phone.display}
                </a>
                <p className="mt-2 text-brand-muted text-xs font-body">{SITE.hours}</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

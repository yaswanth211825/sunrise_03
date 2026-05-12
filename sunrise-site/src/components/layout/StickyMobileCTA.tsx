"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 24, stiffness: 280 }}
          className="fixed bottom-5 left-4 right-4 z-40 md:hidden"
          role="complementary"
          aria-label="Contact options"
        >
          <div className="glass-card rounded-2xl p-3 flex gap-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20your%20construction%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] rounded-xl py-3 text-sm font-body font-medium transition-all active:scale-95"
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919876543210"
              aria-label="Call us"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-gold text-brand-dark rounded-xl py-3 text-sm font-body font-medium transition-all active:scale-95"
            >
              <Phone size={17} />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

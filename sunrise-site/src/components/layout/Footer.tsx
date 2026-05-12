import { MapPin, Phone, Mail, Share2, Link2 } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-brand-card border-t border-brand-border pt-16 pb-8"
      role="contentinfo"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span className="font-display text-2xl font-medium text-brand-cream block">
                Sunrise
              </span>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-brand-gold">
                Constructions & Interiors
              </span>
            </div>
            <p className="font-body text-sm text-brand-muted leading-relaxed max-w-sm">
              Precision-led construction and interior design. Every project is
              built on engineering clarity, material intelligence, and an honest
              understanding of how spaces are lived in.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/sunriseconstructions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
              >
                <Share2 size={15} />
              </a>
              <a
                href="https://facebook.com/sunriseconstructions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
              >
                <Link2 size={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Turnkey Construction",
                "Interior Design",
                "Renovation",
                "Architecture",
                "Modular Interiors",
                "Commercial Spaces",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-body text-sm text-brand-muted hover:text-brand-cream transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-start gap-3 text-brand-muted hover:text-brand-cream transition-colors duration-200 group"
                >
                  <Phone
                    size={14}
                    className="mt-0.5 shrink-0 group-hover:text-brand-gold transition-colors"
                  />
                  <span className="font-body text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sunriseconstructions.in"
                  className="flex items-start gap-3 text-brand-muted hover:text-brand-cream transition-colors duration-200 group"
                >
                  <Mail
                    size={14}
                    className="mt-0.5 shrink-0 group-hover:text-brand-gold transition-colors"
                  />
                  <span className="font-body text-sm">
                    hello@sunriseconstructions.in
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-brand-muted">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span className="font-body text-sm leading-relaxed">
                    42, Jubilee Hills Road No. 10,
                    <br />
                    Hyderabad, Telangana 500033
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-brand-muted">
            © {new Date().getFullYear()} Sunrise Constructions & Interiors. All rights reserved.
          </p>
          <p className="font-body text-xs text-brand-muted">
            Hyderabad · Secunderabad · Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}

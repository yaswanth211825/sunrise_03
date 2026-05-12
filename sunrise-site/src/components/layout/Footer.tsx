import { MapPin, Phone, Mail, Share2, Link2 } from "lucide-react";
import { SITE, NAV_LINKS } from "@/config/site";

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
                {SITE.shortName}
              </span>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-brand-gold">
                {SITE.tagline}
              </span>
            </div>
            <p className="font-body text-sm text-brand-muted leading-relaxed max-w-sm">
              Precision-led construction and interior design. Every project is
              built on engineering clarity, material intelligence, and an honest
              understanding of how spaces are lived in.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted"
              >
                <Share2 size={15} aria-hidden="true" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-muted"
              >
                <Link2 size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-brand-gold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-brand-muted"
                  >
                    {link.label}
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
                  href={`tel:${SITE.phone.tel}`}
                  className="flex items-start gap-3 text-brand-muted"
                >
                  <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm">{SITE.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-brand-muted"
                >
                  <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm">{SITE.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-brand-muted">
                  <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm leading-relaxed">
                    {SITE.address.street},<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.pin}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-brand-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-brand-muted">
            {SITE.city} · Secunderabad · Bangalore
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact — Book a Consultation",
  description: `Start your construction or interior design project with ${SITE.name}. Free initial consultation. Call ${SITE.phone.display} or WhatsApp us.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description: "Book a free consultation. No commitment required.",
    url: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return <FinalCTASection />;
}

import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://sunriseconstructions.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sunrise Constructions & Interiors | Premium Construction & Interior Design, Hyderabad",
    template: "%s | Sunrise Constructions",
  },
  description:
    "Hyderabad's precision-led construction and interior design studio. Turnkey homes, commercial spaces, and modular interiors — engineered with material intelligence and architectural clarity.",
  keywords: [
    "construction company Hyderabad",
    "interior design Hyderabad",
    "turnkey construction",
    "modular kitchen Hyderabad",
    "luxury interiors Hyderabad",
    "home renovation Hyderabad",
    "commercial interior design",
    "architectural design Hyderabad",
  ],
  authors: [{ name: "Sunrise Constructions & Interiors" }],
  creator: "Sunrise Constructions & Interiors",
  publisher: "Sunrise Constructions & Interiors",
  category: "Construction & Interior Design",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sunrise Constructions & Interiors",
    title: "Sunrise Constructions & Interiors | Precision-Led Construction",
    description:
      "Premium turnkey construction and interior design in Hyderabad. Engineered spaces, material intelligence, and architectural clarity.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunrise Constructions — Premium Construction & Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Constructions & Interiors",
    description: "Premium turnkey construction and interior design in Hyderabad.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1115",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="bg-brand-dark text-brand-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

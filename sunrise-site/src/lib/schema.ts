export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: "Sunrise Constructions & Interiors",
  alternateName: "Sunrise Constructions",
  description:
    "Premium construction and interior design company specializing in turnkey residential and commercial projects with engineering-precision planning.",
  url: "https://sunriseconstructions.in",
  telephone: "+91-98765-43210",
  email: "hello@sunriseconstructions.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, Jubilee Hills Road No. 10",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4239,
    longitude: 78.4738,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Secunderabad" },
    { "@type": "City", name: "Bangalore" },
  ],
  serviceType: [
    "Turnkey Construction",
    "Interior Design",
    "Renovation",
    "Architecture",
    "Modular Interiors",
    "Commercial Spaces",
  ],
  priceRange: "₹₹₹",
  image: "https://sunriseconstructions.in/og-image.jpg",
  logo: "https://sunriseconstructions.in/logo.png",
  sameAs: [
    "https://www.instagram.com/sunriseconstructions",
    "https://www.facebook.com/sunriseconstructions",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sunrise Constructions & Interiors",
  url: "https://sunriseconstructions.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sunriseconstructions.in/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

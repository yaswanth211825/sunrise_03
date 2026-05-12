export const SITE = {
  name: "Sunrise Constructions & Interiors",
  shortName: "Sunrise",
  tagline: "Constructions & Interiors",
  url: "https://sunriseconstructions.in",
  established: "2012",
  city: "Hyderabad",
  phone: {
    display: "+91 98765 43210",
    tel: "+919876543210",
    wa: "919876543210",
  },
  email: "hello@sunriseconstructions.in",
  address: {
    street: "42, Jubilee Hills Road No. 10",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500033",
    country: "India",
    countryCode: "IN",
  },
  hours: "Mon–Sat, 9AM–7PM",
  social: {
    instagram: "https://instagram.com/sunriseconstructions",
    facebook: "https://facebook.com/sunriseconstructions",
  },
  geo: { lat: 17.4239, lng: 78.4738 },
  stats: {
    projects: "200+",
    years: "12+",
    rating: "4.9★",
    reviews: "127",
  },
} as const;

export const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Why Us", href: "/why-us" },
  { label: "Materials", href: "/materials" },
  { label: "Contact", href: "/contact" },
] as const;

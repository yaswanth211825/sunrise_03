export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  year: number;
  description: string;
  insight: string;
  image: string;
  tags: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "verdant-villa",
    title: "Verdant Villa",
    category: "Turnkey Residence",
    location: "Jubilee Hills, Hyderabad",
    area: "3,800 sq ft",
    duration: "14 months",
    year: 2024,
    description:
      "A 3-floor residence where structural load paths were calculated to allow open-plan living on all floors without compromise.",
    insight:
      "Ceiling channels were pre-cut before plastering to route concealed LED strips, eliminating the need for false ceilings.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    tags: ["Concrete", "Glass Facade", "Smart Home", "Vastu-Compliant"],
  },
  {
    id: "calcite-penthouse",
    title: "Calcite Penthouse",
    category: "Interior Design",
    location: "Banjara Hills, Hyderabad",
    area: "5,200 sq ft",
    duration: "8 months",
    year: 2024,
    description:
      "A duplex penthouse designed around a central light well that draws natural illumination 9 meters into the floor plan.",
    insight:
      "Italian Calacatta marble was sealed with nano-coating to resist heat and staining, extending surface life by 12+ years.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    tags: ["Marble", "Luxury", "Natural Light", "Minimal"],
  },
  {
    id: "timber-ridge",
    title: "Timber Ridge Office",
    category: "Commercial Spaces",
    location: "HITEC City, Hyderabad",
    area: "12,000 sq ft",
    duration: "6 months",
    year: 2023,
    description:
      "A tech workspace designed on acoustic zoning principles — collaborative areas calibrated separately from focus zones.",
    insight:
      "Exposed concrete ceilings were treated with anti-dust sealant instead of false ceiling to preserve 11-ft ceiling height.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    tags: ["Biophilic", "Acoustic Design", "Exposed Concrete", "Sustainable"],
  },
  {
    id: "terracotta-homes",
    title: "Terracotta Courtyard Homes",
    category: "Architecture",
    location: "Gandipet, Hyderabad",
    area: "2,400 sq ft each",
    duration: "18 months",
    year: 2023,
    description:
      "A cluster of 4 courtyard homes where cross-ventilation was engineered to maintain 3–5°C lower indoor temperature without AC.",
    insight:
      "Terracotta jali screens on the west facade block direct evening sun while maintaining 65% air permeability.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    tags: ["Climate-Responsive", "Terracotta", "Courtyard", "Passive Cooling"],
  },
  {
    id: "arc-modular",
    title: "Arc Modular Kitchen",
    category: "Modular Interiors",
    location: "Gachibowli, Hyderabad",
    area: "340 sq ft",
    duration: "3 weeks",
    year: 2024,
    description:
      "A modular kitchen with marine-grade BWP plywood cabinets, designed to withstand 95% humidity without warping.",
    insight:
      "The L-shaped work triangle was measured and refined 3 times before finalizing dimensions to minimize chef fatigue.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["BWP Plywood", "Hettich Hardware", "Marine Grade", "Modular"],
  },
  {
    id: "onyx-spa",
    title: "Onyx Wellness Spa",
    category: "Commercial Spaces",
    location: "Jubilee Hills, Hyderabad",
    area: "6,800 sq ft",
    duration: "10 months",
    year: 2023,
    description:
      "A luxury wellness space where waterproofing membranes were applied in 3 layers under all wet areas before tile laying.",
    insight:
      "Lighting was tuned to 2700K warm white across therapy rooms to promote melatonin production and deep relaxation.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    tags: ["Wet Area Proofing", "Lighting Design", "Stone Cladding", "Luxury"],
  },
];

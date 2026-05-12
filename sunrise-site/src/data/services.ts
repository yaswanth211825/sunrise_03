import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
}

export const services: Service[] = [
  {
    id: "turnkey",
    title: "Turnkey Construction",
    subtitle: "End-to-end delivery",
    description:
      "From foundation soil testing to final handover, we manage every trade and timeline. One point of contact, zero coordination gaps.",
    features: [
      "Structural design & engineering",
      "Licensed contractor network",
      "Material procurement at cost",
      "Quality milestone inspections",
      "Transparent project billing",
    ],
    icon: "Building2",
    gradient: "from-amber-900/20 to-brand-card",
  },
  {
    id: "interior",
    title: "Interior Design",
    subtitle: "Space as a lived experience",
    description:
      "We design environments with the understanding that lighting, acoustics, material texture and spatial proportion affect how people feel in a space.",
    features: [
      "3D visualization before execution",
      "Lighting layout planning",
      "Furniture specification",
      "Material & finish selection",
      "Site supervision until handover",
    ],
    icon: "Paintbrush2",
    gradient: "from-stone-800/20 to-brand-card",
  },
  {
    id: "renovation",
    title: "Renovation",
    subtitle: "Precision without disruption",
    description:
      "Renovations fail when the existing structure isn't assessed first. We audit load-bearing walls, plumbing routes, and electrical layouts before any demolition.",
    features: [
      "Pre-work structural audit",
      "Demolition with material salvage",
      "Waterproofing before tiling",
      "MEP coordination",
      "Snag-free final inspection",
    ],
    icon: "Wrench",
    gradient: "from-zinc-800/20 to-brand-card",
  },
  {
    id: "architecture",
    title: "Architecture",
    subtitle: "Form follows function",
    description:
      "Every design decision is anchored in climate, site orientation, and how the residents will actually use the space over years — not just how it photographs.",
    features: [
      "Site analysis & sun path study",
      "Vastu & climate-responsive design",
      "Structural & MEP integration",
      "Municipal approval drawings",
      "Construction documentation",
    ],
    icon: "Compass",
    gradient: "from-neutral-800/20 to-brand-card",
  },
  {
    id: "modular",
    title: "Modular Interiors",
    subtitle: "Factory precision, site assembled",
    description:
      "Kitchen, wardrobe, and storage units manufactured under controlled factory conditions deliver tolerances of ±0.5mm — impossible on-site.",
    features: [
      "BWP marine-grade plywood",
      "German or Italian hardware",
      "Custom dimensions to the mm",
      "Soft-close mechanisms standard",
      "10-year structural warranty",
    ],
    icon: "LayoutGrid",
    gradient: "from-yellow-900/20 to-brand-card",
  },
  {
    id: "commercial",
    title: "Commercial Spaces",
    subtitle: "Built for performance",
    description:
      "Commercial projects require a different engineering discipline — higher foot traffic loads, fire egress planning, HVAC zoning, and acoustic partitioning.",
    features: [
      "Fire egress & compliance",
      "HVAC zone planning",
      "Acoustic partitioning",
      "High-traffic material specification",
      "Brand environment design",
    ],
    icon: "Store",
    gradient: "from-red-900/20 to-brand-card",
  },
];

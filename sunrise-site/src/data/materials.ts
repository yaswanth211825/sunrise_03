export interface MaterialCategory {
  id: string;
  title: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  items: MaterialItem[];
}

export interface MaterialItem {
  name: string;
  grade: "Best" | "Good" | "Caution";
  durability: number;
  maintenance: string;
  bestFor: string;
  avoid?: string;
}

export const materialCategories: MaterialCategory[] = [
  {
    id: "plywood",
    title: "Plywood & Boards",
    icon: "Layers",
    image: "/images/materials/bwp-plywood-layers.jpg",
    imageAlt: "BWP plywood cross-section showing the dense layered veneer construction",
    items: [
      {
        name: "BWP (Boiling Waterproof)",
        grade: "Best",
        durability: 95,
        maintenance: "Wipe clean, seal edges annually",
        bestFor: "Kitchen cabinets, bathrooms, wet areas",
        avoid: "Don't use for external structural purposes",
      },
      {
        name: "MR Grade Plywood",
        grade: "Good",
        durability: 70,
        maintenance: "Keep away from moisture",
        bestFor: "Bedroom wardrobes, living room units",
        avoid: "Never in kitchen or bathroom",
      },
      {
        name: "HDF / MDF Boards",
        grade: "Caution",
        durability: 50,
        maintenance: "Avoid all moisture contact",
        bestFor: "Decorative panels, TV units in dry areas",
        avoid: "Absolutely not in humid or wet areas",
      },
    ],
  },
  {
    id: "tiles",
    title: "Floor & Wall Tiles",
    icon: "Grid3x3",
    image: "/images/materials/marble-veining-closeup.png",
    imageAlt: "Premium Italian marble slab with dramatic natural veining — wet polished surface",
    items: [
      {
        name: "Vitrified Tiles (GVT/PGVT)",
        grade: "Best",
        durability: 90,
        maintenance: "Mop with pH-neutral cleaner",
        bestFor: "Living areas, bedrooms, corridors",
      },
      {
        name: "Anti-Skid Ceramic",
        grade: "Best",
        durability: 85,
        maintenance: "Regular mop, grout sealing annually",
        bestFor: "Bathrooms, kitchen floors, outdoor areas",
      },
      {
        name: "Marble (Natural Stone)",
        grade: "Good",
        durability: 80,
        maintenance: "Seal every 2 years, avoid acidic cleaners",
        bestFor: "Premium living areas, main flooring",
        avoid: "Kitchen floors — stain-prone",
      },
      {
        name: "High-Gloss Porcelain",
        grade: "Caution",
        durability: 85,
        maintenance: "Anti-slip mat required in wet areas",
        bestFor: "Accent walls, feature areas",
        avoid: "Bathroom floors — low CoF",
      },
    ],
  },
  {
    id: "paints",
    title: "Paints & Finishes",
    icon: "Paintbrush2",
    image: "/images/materials/stone-cladding-texture.jpg",
    imageAlt: "Layered natural sandstone texture with warm earthy tones — exterior surface quality",
    items: [
      {
        name: "Exterior Acrylic Emulsion",
        grade: "Best",
        durability: 90,
        maintenance: "Repaint every 5–7 years",
        bestFor: "All exterior surfaces",
      },
      {
        name: "Interior Acrylic (Premium)",
        grade: "Best",
        durability: 85,
        maintenance: "Wipe clean, repaint every 4–6 years",
        bestFor: "Bedrooms, living rooms",
      },
      {
        name: "Washable Matte Finish",
        grade: "Good",
        durability: 80,
        maintenance: "Damp wipe to clean",
        bestFor: "Kids rooms, high-touch areas",
      },
    ],
  },
  {
    id: "waterproofing",
    title: "Waterproofing Systems",
    icon: "Droplets",
    image: "/images/process/waterproofing-membrane.png",
    imageAlt: "Black waterproofing membrane being applied to bathroom floor before tiling",
    items: [
      {
        name: "Crystalline Waterproofing",
        grade: "Best",
        durability: 98,
        maintenance: "Self-healing, minimal intervention needed",
        bestFor: "Terraces, underground slabs, water tanks",
      },
      {
        name: "Polyurethane Membrane",
        grade: "Best",
        durability: 92,
        maintenance: "Inspect seams every 3 years",
        bestFor: "Terraces, bathrooms, wet areas",
      },
      {
        name: "Bituminous Coating",
        grade: "Good",
        durability: 75,
        maintenance: "Recoat every 3–5 years",
        bestFor: "Foundation walls, exterior plinths",
        avoid: "Not suitable for terrace exposed to UV",
      },
    ],
  },
];

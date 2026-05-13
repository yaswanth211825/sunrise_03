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
  gallery: string[];
  tags: string[];
}

export const featuredProjects: Project[] = [
  {
    id: "arun-sanga-villa",
    title: "Arun Sanga Villa",
    category: "Luxury Villa Interior",
    location: "Andhra Pradesh",
    area: "8,500 sq ft",
    duration: "14 months",
    year: 2024,
    description:
      "A luxury villa where a cylindrical glass elevator becomes the architectural centrepiece — visible from the foyer, dining, and staircase simultaneously, connecting all three floors without interrupting the open plan.",
    insight:
      "The gold geometric partition was fabricated off-site in sections and assembled in 3 days to avoid disrupting the flooring finish sequence.",
    image: "/images/projects/arun-sanga-villa/luxury-villa-exterior-night-facade-stone-cladding-landscape-lighting.webp",
    gallery: [
      "/images/projects/arun-sanga-villa/luxury-villa-exterior-night-facade-stone-cladding-landscape-lighting.webp",
      "/images/projects/arun-sanga-villa/luxury-foyer-string-curtain-partition-crystal-chandelier-glass-elevator.webp",
      "/images/projects/arun-sanga-villa/luxury-living-room-grey-gold-marble-tv-wall-floating-console-leather-sofa.webp",
      "/images/projects/arun-sanga-villa/luxury-living-room-gold-geometric-partition-glass-elevator-marble-floor.webp",
      "/images/projects/arun-sanga-villa/luxury-home-cylindrical-glass-elevator-open-plan-dining-marble-floor.webp",
      "/images/projects/arun-sanga-villa/luxury-home-theater-projection-screen-fluted-columns-gold-chandelier.webp",
      "/images/projects/arun-sanga-villa/home-theater-recliner-seating-fluted-columns-chandelier-interior.webp",
      "/images/projects/arun-sanga-villa/luxury-3d-floral-sculpture-feature-wall-interior-design.webp",
      "/images/projects/arun-sanga-villa/luxury-villa-staircase-gold-geometric-partition-glass-railing-interior.webp",
      "/images/projects/arun-sanga-villa/luxury-villa-balcony-crystal-chandelier-egg-chair-outdoor-living.webp",
      "/images/projects/arun-sanga-villa/luxury-home-prayer-room-stone-alcove-wooden-doors-warm-lighting-interior.webp",
      "/images/projects/arun-sanga-villa/luxury-home-glass-elevator-corridor-interior-dark-wood-flooring.webp",
      "/images/projects/arun-sanga-villa/modular-kitchen-black-glass-backsplash-white-cabinets-wood-finish.webp",
      "/images/projects/arun-sanga-villa/modern-dining-room-white-furniture-curtain-interior-design.webp",
      "/images/projects/arun-sanga-villa/bedroom-floor-to-ceiling-wooden-wardrobe-interior-design.webp",
      "/images/projects/arun-sanga-villa/modern-bedroom-bicolour-wardrobe-integrated-tv-unit-false-ceiling.webp",
      "/images/projects/arun-sanga-villa/modern-bedroom-glass-sliding-wardrobe-sage-green-recessed-lighting.webp",
      "/images/projects/arun-sanga-villa/modern-bedroom-tv-unit-glass-wardrobe-false-ceiling-interior.webp",
    ],
    tags: ["Glass Elevator", "Crystal Chandeliers", "Home Theater", "Marble Flooring", "Gold Partitions"],
  },
  {
    id: "cumbum-house",
    title: "Cumbum Residence",
    category: "Full Home Interior",
    location: "Cumbum, Andhra Pradesh",
    area: "3,200 sq ft",
    duration: "10 months",
    year: 2024,
    description:
      "A residence that balances contemporary architecture with deeply rooted traditional elements — a carved wooden main door, a living room centred around a teak jhula, and dedicated backlit spaces for pooja.",
    insight:
      "The island kitchen counter was positioned to maintain a clear sightline from the cooking area to the living room, allowing the homeowner to supervise the space while cooking.",
    image: "/images/projects/cumbum-house/modern-house-elevation-yellow-stone.webp",
    gallery: [
      "/images/projects/cumbum-house/modern-house-elevation-yellow-stone.webp",
      "/images/projects/cumbum-house/carved-wooden-main-door-design.webp",
      "/images/projects/cumbum-house/living-room-with-wooden-swing-jhula.webp",
      "/images/projects/cumbum-house/modular-kitchen-with-island-design.webp",
      "/images/projects/cumbum-house/modern-tv-unit-green-fluted-panel-sunrise-interiors.webp",
      "/images/projects/cumbum-house/rooftop-lounge-wooden-false-ceiling-design.webp",
      "/images/projects/cumbum-house/marble-bathroom-interior-with-bathtub.webp",
      "/images/projects/cumbum-house/modern-bedroom-wardrobe-sliding-door.webp",
      "/images/projects/cumbum-house/modern-pooja-room-ganesha-backlight.webp",
      "/images/projects/cumbum-house/backlit-wall-art-radha-krishna.webp",
    ],
    tags: ["Yellow Stone Elevation", "Island Kitchen", "Wooden Jhula", "Marble Bathroom", "Rooftop Lounge"],
  },
  {
    id: "giddalur-house",
    title: "Giddalur Full Home",
    category: "Turnkey Interior",
    location: "Giddalur, Andhra Pradesh",
    area: "4,100 sq ft",
    duration: "12 months",
    year: 2023,
    description:
      "A two-floor complete interior where every room — from the ground-floor modular kitchen to the first-floor living room and two independent pooja spaces — was designed and executed as a single coordinated project.",
    insight:
      "Two separate modular kitchens across floors were specified with identical carcass dimensions so hardware replacements remain interchangeable across the entire home.",
    image: "/images/projects/giddalur-house/modern-house-exterior-elevation-giddalur.webp",
    gallery: [
      "/images/projects/giddalur-house/modern-house-exterior-elevation-giddalur.webp",
      "/images/projects/giddalur-house/entry-foyer-interior-design-giddalur.webp",
      "/images/projects/giddalur-house/full-home-interior-giddalur-living-room-ground-floor.webp",
      "/images/projects/giddalur-house/modular-kitchen-interior-giddalur-ground-floor.webp",
      "/images/projects/giddalur-house/modular-kitchen-interior-ground-floor.webp",
      "/images/projects/giddalur-house/first-floor-kitchen-interior-design.webp",
      "/images/projects/giddalur-house/dining-room-interior-design-giddalur.webp",
      "/images/projects/giddalur-house/first-floor-living-room-interior.webp",
      "/images/projects/giddalur-house/main-entrance-door-design-giddalur.webp",
      "/images/projects/giddalur-house/master-bedroom-interior-ground-floor.webp",
      "/images/projects/giddalur-house/bedroom-interior-design-giddalur-ground-floor.webp",
      "/images/projects/giddalur-house/bedroom-interior-wardrobe-design.webp",
      "/images/projects/giddalur-house/first-floor-bedroom-interior-design.webp",
      "/images/projects/giddalur-house/second-bedroom-wardrobe-design-giddalur.webp",
      "/images/projects/giddalur-house/pooja-room-interior-ground-floor.webp",
      "/images/projects/giddalur-house/pooja-room-interior-first-floor.webp",
      "/images/projects/giddalur-house/traditional-pooja-room-design-giddalur.webp",
      "/images/projects/giddalur-house/bathroom-interior-design-giddalur.webp",
      "/images/projects/giddalur-house/bathroom-interior-ground-floor.webp",
      "/images/projects/giddalur-house/bathroom-interior-first-floor.webp",
    ],
    tags: ["2-Floor Complete Interior", "Dual Modular Kitchens", "Traditional Pooja Rooms", "Wardrobe Design"],
  },
  {
    id: "ongole-house",
    title: "Ongole 2BHK Renovation",
    category: "Renovation + Interiors",
    location: "Ongole, Andhra Pradesh",
    area: "1,100 sq ft",
    duration: "6 weeks",
    year: 2024,
    description:
      "A 2BHK renovation that proves compact spaces don't need to compromise on finish quality — CNC jali on the exterior facade, luxury blue wardrobes with gold-profile handles, and reeded glass cabinetry throughout.",
    insight:
      "Vox Infratop wooden finish ceiling panels were chosen over conventional POP because they install in one day, require no wet work, and can be individually replaced without disturbing adjacent panels.",
    image: "/images/projects/ongole-house/2-bhk-home-renovation-cnc-jali-exterior-design.webp",
    gallery: [
      "/images/projects/ongole-house/2-bhk-home-renovation-cnc-jali-exterior-design.webp",
      "/images/projects/ongole-house/wooden-slat-partition-living-room-interior.webp",
      "/images/projects/ongole-house/modern-parallel-modular-kitchen-mint-green.webp",
      "/images/projects/ongole-house/modular-kitchen-cabinetry-with-reeded-glass.webp",
      "/images/projects/ongole-house/aluminium-profile-i-handle-reeded-glass-cabinet.webp",
      "/images/projects/ongole-house/luxury-blue-sliding-wardrobe-with-gold-accents.webp",
      "/images/projects/ongole-house/crayon-laminate-sliding-wardrobe-bedroom-design.webp",
      "/images/projects/ongole-house/high-gloss-blue-modular-storage-cabinets.webp",
      "/images/projects/ongole-house/magnetic-recessed-track-lighting-ceiling-fan.webp",
      "/images/projects/ongole-house/vox-infratop-wooden-finish-ceiling-design.webp",
      "/images/projects/ongole-house/modern-teak-veneer-main-door-design.webp",
    ],
    tags: ["CNC Jali Facade", "Reeded Glass Cabinets", "Vox Ceiling", "Blue Gold Wardrobe", "Mint Kitchen"],
  },
];

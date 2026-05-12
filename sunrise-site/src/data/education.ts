export interface EducationCard {
  id: string;
  topic: string;
  category: string;
  insight: string;
  detail: string;
  stat?: string;
  statLabel?: string;
  icon: string;
}

export const educationCards: EducationCard[] = [
  {
    id: "ventilation",
    topic: "Ventilation Planning",
    category: "Structural",
    insight: "Cross-ventilation is engineered, not accidental.",
    detail:
      "Window and door positions are calculated against the site's prevailing wind direction to create a pressure differential that moves air through the space without mechanical assistance.",
    stat: "3–5°C",
    statLabel: "natural temperature drop achievable",
    icon: "Wind",
  },
  {
    id: "waterproofing",
    topic: "Waterproofing Layers",
    category: "Protection",
    insight: "80% of seepage complaints come from skipped layers.",
    detail:
      "Proper waterproofing requires a primer coat, crystalline membrane, and screed layer applied in sequence with mandatory curing time between each. Shortcuts here cause damage that shows up years later.",
    stat: "3",
    statLabel: "mandatory membrane layers",
    icon: "Droplets",
  },
  {
    id: "lighting",
    topic: "Lighting Psychology",
    category: "Interior",
    insight: "Ceiling light alone creates a flat, institutional feel.",
    detail:
      "Layered lighting — ambient (ceiling), task (work surfaces), accent (walls/art) — is designed before ceiling execution. Running conduits after ceiling plaster is 3x the cost and creates unnecessary damage.",
    stat: "2700K",
    statLabel: "warm white for living spaces",
    icon: "Lightbulb",
  },
  {
    id: "plywood",
    topic: "Plywood Grades",
    category: "Materials",
    insight: "Not all 18mm plywood is equal — grade decides longevity.",
    detail:
      "BWP (Boiling Waterproof) plywood is the minimum standard for kitchens and bathrooms. MR (Moisture Resistant) is suitable only for dry interior areas. Using MR in wet zones causes delamination within 3–5 years.",
    stat: "BWP",
    statLabel: "minimum for kitchens",
    icon: "Layers",
  },
  {
    id: "tiles",
    topic: "Tile Selection Science",
    category: "Finishes",
    insight: "Coefficient of Friction (CoF) determines slip safety.",
    detail:
      "Floor tiles should have a CoF above 0.6 for dry areas and above 0.8 for wet areas. High-gloss tiles that photograph beautifully often have CoF under 0.4, creating liability in bathrooms and entrance areas.",
    stat: ">0.6",
    statLabel: "CoF minimum for safety",
    icon: "Grid3x3",
  },
  {
    id: "electrical",
    topic: "Electrical Foresight",
    category: "Systems",
    insight: "Conduit routing is decided at slab stage, not later.",
    detail:
      "Planning switch and socket positions before wall plastering allows conduit to be chased cleanly. Retrofitting conduits post-plastering weakens walls and creates hairline cracks that attract moisture.",
    stat: "40%",
    statLabel: "cost savings vs. retrofitting",
    icon: "Zap",
  },
  {
    id: "space",
    topic: "Space Optimization",
    category: "Design",
    insight: "Furniture layouts are drawn before walls are finalized.",
    detail:
      "Room dimensions should be planned around the actual furniture that will occupy them. A bedroom that can't fit a king bed + bedside table without blocking the door opening represents a design failure, not a furniture problem.",
    stat: "450mm",
    statLabel: "minimum circulation passage width",
    icon: "Maximize2",
  },
  {
    id: "structural",
    topic: "Structural Planning",
    category: "Structural",
    insight: "Column grid determines what the future holds.",
    detail:
      "An intelligently placed column grid allows future renovation flexibility. Columns placed at 4.5–5m spans in residential projects allow walls to be removed or relocated later without affecting structural integrity.",
    stat: "4.5m",
    statLabel: "optimal column span for flexibility",
    icon: "Building",
  },
];

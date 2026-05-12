export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  project: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Reddy",
    role: "Homeowner",
    location: "Jubilee Hills",
    quote:
      "They explained why they were doing each thing before they did it. That level of transparency changed how I think about construction entirely.",
    project: "Verdant Villa",
    rating: 5,
  },
  {
    id: "t2",
    name: "Kiran & Deepa Sharma",
    role: "Homeowners",
    location: "Banjara Hills",
    quote:
      "The waterproofing they specified was overkill, they said. Two years later, the terrace has zero seepage while our neighbor's is already leaking.",
    project: "Calcite Penthouse",
    rating: 5,
  },
  {
    id: "t3",
    name: "Vikram Nair",
    role: "Founder, TechStart",
    location: "HITEC City",
    quote:
      "Our office acoustic zoning was designed before a single wall went up. Every team says the space helps them focus. That's not furniture — that's engineering.",
    project: "Timber Ridge Office",
    rating: 5,
  },
  {
    id: "t4",
    name: "Ananya Krishnan",
    role: "Interior Design Client",
    location: "Gachibowli",
    quote:
      "Three years in, the kitchen cabinets don't have a single swell or warp. I've seen others' kitchens with cheaper plywood — no comparison.",
    project: "Arc Modular Kitchen",
    rating: 5,
  },
  {
    id: "t5",
    name: "Rajan Mehta",
    role: "Property Investor",
    location: "Hyderabad",
    quote:
      "Every project I've handed to Sunrise has retained its value better than the market average. Good construction is an investment, not an expense.",
    project: "Multiple Projects",
    rating: 5,
  },
];

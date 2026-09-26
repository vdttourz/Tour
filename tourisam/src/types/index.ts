export type Tour = {
  slug: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  image: string;
  summary: string;
  description: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestFor: string[];
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
  gallery: string[];
  includes: string[];
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

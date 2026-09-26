export const siteConfig = {
  name: "Tourm",
  tagline: "Explore World",
  description:
    "Crafted tour experiences blending heritage, nature, wildlife, culture, and beachside relaxation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: "+94 77 123 4567",
  email: "hello@tourm.com",
  whatsapp: "https://wa.me/94771234567",
  github: "https://github.com/yourusername",
};

export const navItems = [
  { href: "/", label: "Home", children: [{ href: "/", label: "Home One" }] },
  { href: "/about", label: "About Us" },
  {
    href: "/destinations",
    label: "Destination",
    children: [
      { href: "/destinations", label: "All Destinations" },
      { href: "/destinations/sigiriya", label: "Sigiriya" },
      { href: "/destinations/ella", label: "Ella" },
    ],
  },
  { href: "/services", label: "Service" },
  { href: "/tours", label: "Activities" },
  {
    href: "/tours",
    label: "Pages",
    children: [
      { href: "/tours", label: "Tours" },
      { href: "/gallery", label: "Gallery" },
      { href: "/about", label: "About" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export const primaryNav = [
  { name: "Platform", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" }
];

export const ctaButtons = [
  { label: "Venue Signup", href: "/signup?type=venue" },
  { label: "Vendor Signup", href: "/signup?type=vendor" },
  { label: "Login", href: "/api/auth/signin?callbackUrl=/dashboard", variant: "secondary" as const }
];

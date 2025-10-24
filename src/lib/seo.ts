export const defaultMeta = {
  title: "BarStar — Gamified Nightlife Intelligence",
  description:
    "BarStar unites venue operators and brand partners with real-time analytics, loyalty gamification, and secure subscription management.",
  ogImage: "/images/barstar-og.svg",
  url: "https://barstar.ca"
};

export const buildMeta = (overrides?: Partial<typeof defaultMeta>) => {
  return { ...defaultMeta, ...overrides };
};

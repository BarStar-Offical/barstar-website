export const generalFaq = [
  {
    question: "What is BarStar?",
    answer:
      "BarStar is a gamified nightlife platform that connects venues, vendors, and guests. Venues attract and retain guests with badges and XP, vendors run measurable campaigns, and our dashboards report on every interaction."
  },
  {
    question: "Do guests need a separate app?",
    answer:
      "Guests use the BarStar consumer app to check in, earn rewards, and discover promotions. Venues manage the experience from the BarStar Information Website using their private dashboards."
  },
  {
    question: "Is BarStar available outside of Canada?",
    answer:
      "We currently operate across Canada with early access programs for select US cities. Contact our team to discuss program availability."
  },
  {
    question: "How does pricing work for venues?",
    answer:
      "Venue subscriptions start at $299/month for the Starter plan and scale based on analytics depth, staff seats, and dedicated support. Custom enterprise plans are available for multi-venue groups."
  }
];

export const securityFaq = [
  {
    question: "How does BarStar keep my data secure?",
    answer:
      "All requests are served over HTTPS with HSTS enabled. API calls are signed with short-lived JWTs and we never store sensitive venue data in the browser. Payment forms are powered by Stripe and PCI compliant."
  },
  {
    question: "Can we integrate with existing POS systems?",
    answer:
      "Yes. The BarStar API offers read/write endpoints for member data, check-ins, and redemptions. Enterprise plans include bespoke integration support to connect to your POS or CRM."
  },
  {
    question: "How does authentication work?",
    answer:
      "We use NextAuth.js with Google and Apple OAuth 2.0 providers. After authentication, venues receive scoped JWTs to access analytics. Role-based access ensures staff only view the data they need."
  }
];

export const metricCards = [
  {
    id: "checkIns" as const,
    label: "Weekly check-ins",
    value: "4,682",
    subtext: "Guests checked in across all venues during the last 7 days."
  },
  {
    id: "repeatGuests" as const,
    label: "Repeat guests",
    value: "1,286",
    subtext: "Members who visited 2+ times this week."
  },
  {
    id: "avgSpend" as const,
    label: "Average check size",
    value: "$47.80",
    subtext: "Average spend per guest across tonight's service."
  },
  {
    id: "occupancy" as const,
    label: "Capacity reached",
    value: "82%",
    subtext: "Peak floor occupancy recorded this evening."
  },
  {
    id: "promotions" as const,
    label: "Active promotions",
    value: "7",
    subtext: "Campaigns running across venues and channels."
  },
  {
    id: "xpIssued" as const,
    label: "XP issued",
    value: "198,450",
    subtext: "Loyalty XP awarded in the last 30 days."
  },
  {
    id: "vipBookings" as const,
    label: "VIP bookings",
    value: "32",
    subtext: "Reserved tables confirmed for the upcoming weekend."
  },
  {
    id: "loyaltySignups" as const,
    label: "New loyalty sign-ups",
    value: "418",
    subtext: "Guests who joined BarStar Rewards this week."
  }
];

export const checkInTrends = [
  { label: "Mon", value: 142 },
  { label: "Tue", value: 198 },
  { label: "Wed", value: 274 },
  { label: "Thu", value: 356 },
  { label: "Fri", value: 612 },
  { label: "Sat", value: 794 },
  { label: "Sun", value: 306 }
];

export const engagementBadges = [
  { name: "Night Owl", progress: 86 },
  { name: "Socialite", progress: 64 },
  { name: "VIP Host", progress: 41 },
  { name: "Mixology Master", progress: 24 }
];

export const campaignPerformance = [
  {
    name: "Weekend Whisky Tour",
    impressions: "218k",
    conversions: "1,420",
    status: "Live"
  },
  {
    name: "Brunch & Beats",
    impressions: "102k",
    conversions: "984",
    status: "Live"
  },
  {
    name: "Ladies' Night",
    impressions: "128k",
    conversions: "1,112",
    status: "Paused"
  },
  {
    name: "Silent Disco Sundays",
    impressions: "76k",
    conversions: "642",
    status: "Completed"
  }
];

export const invoices = [
  { id: "INV-2050", amount: "$749.00", date: "Jun 1, 2024", status: "Paid" },
  { id: "INV-2049", amount: "$749.00", date: "May 1, 2024", status: "Paid" },
  { id: "INV-2048", amount: "$499.00", date: "Apr 1, 2024", status: "Paid" },
  { id: "INV-2047", amount: "$499.00", date: "Mar 1, 2024", status: "Paid" }
];

export const venueSnapshot = {
  timeframe: "Tonight - 9:00 PM service window",
  occupancy: 82,
  avgDwellMinutes: 74,
  avgSpend: 47.8,
  floorSpend: 18240,
  reservations: 62,
  staffOnDuty: 26,
  vipGuests: 18,
  loyaltyRedemptions: 94
};

export const locationBreakdown = [
  {
    name: "Main Hall",
    tonightCheckIns: 182,
    occupancy: 88,
    avgTab: 52.4,
    loyaltyRedemptions: 38
  },
  {
    name: "Rooftop Lounge",
    tonightCheckIns: 126,
    occupancy: 74,
    avgTab: 61.7,
    loyaltyRedemptions: 44
  },
  {
    name: "Speakeasy",
    tonightCheckIns: 94,
    occupancy: 68,
    avgTab: 71.2,
    loyaltyRedemptions: 29
  }
];

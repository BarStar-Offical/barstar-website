import { useEffect, useState } from "react";
import {
  campaignPerformance,
  checkInTrends,
  engagementBadges,
  invoices,
  locationBreakdown as locationBreakdownData,
  metricCards as metricCardsData,
  venueSnapshot as venueSnapshotData
} from "@/data/dashboard";

export type DashboardMetricCardId =
  | "checkIns"
  | "repeatGuests"
  | "avgSpend"
  | "occupancy"
  | "promotions"
  | "xpIssued"
  | "vipBookings"
  | "loyaltySignups";

export type DashboardMetricCard = {
  id: DashboardMetricCardId;
  label: string;
  value: string;
  subtext: string;
};

export type VenueSnapshot = {
  timeframe: string;
  occupancy: number;
  avgDwellMinutes: number;
  avgSpend: number;
  floorSpend: number;
  reservations: number;
  staffOnDuty: number;
  vipGuests: number;
  loyaltyRedemptions: number;
};

export type LocationPerformance = {
  name: string;
  tonightCheckIns: number;
  occupancy: number;
  avgTab: number;
  loyaltyRedemptions: number;
};

const emptySnapshot: VenueSnapshot = {
  timeframe: "",
  occupancy: 0,
  avgDwellMinutes: 0,
  avgSpend: 0,
  floorSpend: 0,
  reservations: 0,
  staffOnDuty: 0,
  vipGuests: 0,
  loyaltyRedemptions: 0
};

export const useDashboardMetrics = () => {
  const [metricCards, setMetricCards] = useState<DashboardMetricCard[]>([]);
  const [venueSnapshot, setVenueSnapshot] = useState<VenueSnapshot>(emptySnapshot);
  const [locationBreakdown, setLocationBreakdown] = useState<LocationPerformance[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMetricCards(metricCardsData);
      setVenueSnapshot(venueSnapshotData);
      setLocationBreakdown(locationBreakdownData);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return {
    metricCards,
    venueSnapshot,
    locationBreakdown,
    isLoading,
    checkInTrends,
    engagementBadges,
    campaignPerformance,
    invoices
  };
};

import { useEffect, useState } from "react";
import {
  campaignPerformance,
  checkInTrends,
  engagementBadges,
  invoices
} from "@/data/dashboard";

export type DashboardMetric = {
  checkIns: number;
  activePromotions: number;
  repeatGuests: number;
  xpIssued: number;
};

const baseMetrics: DashboardMetric = {
  checkIns: 3224,
  activePromotions: 6,
  repeatGuests: 872,
  xpIssued: 128400
};

export const useDashboardMetrics = () => {
  const [metrics, setMetrics] = useState(baseMetrics);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics(baseMetrics);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return {
    metrics,
    isLoading,
    checkInTrends,
    engagementBadges,
    campaignPerformance,
    invoices
  };
};

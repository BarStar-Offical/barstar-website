import type { JSX } from "react";
import {
  BanknotesIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  GiftTopIcon,
  MegaphoneIcon,
  StarIcon,
  UserPlusIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import MetricCard from "@/modules/dashboard/components/MetricCard";
import ProgressList from "@/modules/dashboard/components/ProgressList";
import TrendSparkline from "@/modules/dashboard/components/TrendSparkline";
import CampaignTable from "@/modules/dashboard/components/CampaignTable";
import InvoiceList from "@/modules/dashboard/components/InvoiceList";
import LocationBreakdown from "@/modules/dashboard/components/LocationBreakdown";
import VenueSnapshot from "@/modules/dashboard/components/VenueSnapshot";
import type { DashboardMetricCard } from "@/hooks/useDashboardMetrics";
import { useDashboardMetrics } from "@/hooks/useDashboardMetrics";

const OverviewSection = () => {
  const {
    metricCards,
    venueSnapshot,
    locationBreakdown,
    isLoading,
    checkInTrends,
    engagementBadges,
    campaignPerformance,
    invoices
  } = useDashboardMetrics();

  if (isLoading) {
    return (
      <div className="grid place-items-center rounded-3xl border border-white/5 bg-slate-900/40 p-12 text-sm text-slate-300">
        Loading dashboard metrics…
      </div>
    );
  }

  const iconLookup: Record<DashboardMetricCard["id"], JSX.Element> = {
    checkIns: <ChartBarIcon className="h-6 w-6" />,
    repeatGuests: <UsersIcon className="h-6 w-6" />,
    avgSpend: <BanknotesIcon className="h-6 w-6" />,
    occupancy: <BuildingOffice2Icon className="h-6 w-6" />,
    promotions: <MegaphoneIcon className="h-6 w-6" />,
    xpIssued: <GiftTopIcon className="h-6 w-6" />,
    vipBookings: <StarIcon className="h-6 w-6" />,
    loyaltySignups: <UserPlusIcon className="h-6 w-6" />
  };

  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metricCards.map((metric) => (
          <MetricCard
            key={metric.id}
            icon={iconLookup[metric.id]}
            label={metric.label}
            value={metric.value}
            subtext={metric.subtext}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <TrendSparkline points={checkInTrends} />
        <VenueSnapshot snapshot={venueSnapshot} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <CampaignTable campaigns={campaignPerformance} />
        <ProgressList items={engagementBadges} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <LocationBreakdown locations={locationBreakdown} />
        <InvoiceList invoices={invoices} />
      </div>
    </div>
  );
};

export default OverviewSection;

import { ChartBarIcon, CursorArrowRaysIcon, GiftTopIcon, UsersIcon } from "@heroicons/react/24/outline";
import MetricCard from "@/modules/dashboard/components/MetricCard";
import ProgressList from "@/modules/dashboard/components/ProgressList";
import TrendSparkline from "@/modules/dashboard/components/TrendSparkline";
import CampaignTable from "@/modules/dashboard/components/CampaignTable";
import InvoiceList from "@/modules/dashboard/components/InvoiceList";
import { useDashboardMetrics } from "@/hooks/useDashboardMetrics";

const OverviewSection = () => {
  const { metrics, isLoading, checkInTrends, engagementBadges, campaignPerformance, invoices } =
    useDashboardMetrics();

  if (isLoading) {
    return (
      <div className="grid place-items-center rounded-3xl border border-white/5 bg-slate-900/40 p-12 text-sm text-slate-300">
        Loading dashboard metrics…
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          icon={<ChartBarIcon className="h-6 w-6" />}
          label="Check-ins"
          value={metrics.checkIns.toLocaleString()}
          subtext="Guests who checked in across all locations this week."
        />
        <MetricCard
          icon={<UsersIcon className="h-6 w-6" />}
          label="Repeat guests"
          value={metrics.repeatGuests.toLocaleString()}
          subtext="Returns tracked through BarStar loyalty programs."
        />
        <MetricCard
          icon={<GiftTopIcon className="h-6 w-6" />}
          label="Active promotions"
          value={metrics.activePromotions.toString()}
          subtext="Live gamified incentives running in venue."
        />
        <MetricCard
          icon={<CursorArrowRaysIcon className="h-6 w-6" />}
          label="XP issued"
          value={metrics.xpIssued.toLocaleString()}
          subtext="Loyalty points awarded to guests during the last cycle."
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <TrendSparkline points={checkInTrends} />
        <ProgressList items={engagementBadges} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <CampaignTable campaigns={campaignPerformance} />
        <InvoiceList invoices={invoices} />
      </div>
    </div>
  );
};

export default OverviewSection;

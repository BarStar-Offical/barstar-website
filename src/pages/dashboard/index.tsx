import DashboardLayout from "@/layouts/DashboardLayout";
import OverviewSection from "@/modules/dashboard/sections/OverviewSection";
import PageMeta from "@/components/PageMeta";

const DashboardHome = () => (
  <DashboardLayout
    title="Venue overview"
    description="Real-time insight into check-ins, loyalty progression, and vendor campaign performance."
  >
    <PageMeta title="BarStar Dashboard — Venue Overview" />
    <OverviewSection />
  </DashboardLayout>
);

export default DashboardHome;

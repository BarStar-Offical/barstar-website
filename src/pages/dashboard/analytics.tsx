import DashboardLayout from "@/layouts/DashboardLayout";
import AnalyticsSection from "@/modules/dashboard/sections/AnalyticsSection";
import PageMeta from "@/components/PageMeta";

const AnalyticsPage = () => (
  <DashboardLayout
    title="Advanced analytics"
    description="Understand guest lifetime value, retention cohorts, and XP velocity across segments."
  >
    <PageMeta title="BarStar Dashboard — Analytics" />
    <AnalyticsSection />
  </DashboardLayout>
);

export default AnalyticsPage;

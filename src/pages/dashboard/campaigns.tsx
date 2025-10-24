import DashboardLayout from "@/layouts/DashboardLayout";
import CampaignsSection from "@/modules/dashboard/sections/CampaignsSection";
import PageMeta from "@/components/PageMeta";

const CampaignsPage = () => (
  <DashboardLayout
    title="Campaign performance"
    description="Coordinate vendor partnerships, track impressions, and measure conversions for every activation."
  >
    <PageMeta title="BarStar Dashboard — Campaigns" />
    <CampaignsSection />
  </DashboardLayout>
);

export default CampaignsPage;

import DashboardLayout from "@/layouts/DashboardLayout";
import BillingSection from "@/modules/dashboard/sections/BillingSection";
import PageMeta from "@/components/PageMeta";
import { requireUserSession } from "@/lib/auth";

const BillingPage = () => (
  <DashboardLayout
    title="Billing & invoices"
    description="Manage your BarStar subscription, download invoices, and update payment methods."
  >
    <PageMeta title="BarStar Dashboard — Billing" />
    <BillingSection />
  </DashboardLayout>
);

export default BillingPage;
export const getServerSideProps = requireUserSession;

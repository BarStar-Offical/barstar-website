import MarketingLayout from "@/layouts/MarketingLayout";
import PageMeta from "@/components/PageMeta";

const TermsPage = () => (
  <MarketingLayout>
    <PageMeta
      title="BarStar Terms of Service"
      description="Review the BarStar terms outlining acceptable use, service commitments, and billing responsibilities."
    />
    <section className="bg-slate-950 pb-20 pt-24">
      <div className="mx-auto max-w-4xl space-y-6 px-4 text-sm text-slate-300 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
        <p>
          BarStar provides a secure business portal for venues and vendors. By accessing the service,
          you agree to use the platform in compliance with local regulations and BarStar policies.
          Unauthorized scraping, data sharing, or reverse engineering of the platform is prohibited.
        </p>
        <p>
          Subscriptions renew automatically according to the plan selected during onboarding. You may
          cancel or adjust your plan at any time within the dashboard. Vendor campaign spend is billed
          via Stripe and subject to campaign-specific agreements.
        </p>
        <p>
          For billing, security, or compliance questions, contact legal@barstar.ca.
        </p>
      </div>
    </section>
  </MarketingLayout>
);

export default TermsPage;

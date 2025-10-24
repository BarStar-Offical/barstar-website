import MarketingLayout from "@/layouts/MarketingLayout";
import PageMeta from "@/components/PageMeta";
import PricingSection from "@/components/PricingSection";
import Callout from "@/components/Callout";

const PricingPage = () => (
  <MarketingLayout>
    <PageMeta
      title="BarStar Pricing — Venue Subscriptions & Vendor Campaigns"
      description="Flexible Stripe-powered plans for venues and vendor partners. Manage subscriptions, invoices, and campaigns in one secure portal."
    />
    <section className="bg-slate-950 pb-10 pt-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white">Transparent pricing for nightlife teams</h1>
        <p className="text-base text-slate-300">
          Every plan includes secure authentication, analytics dashboards, and Stripe-powered
          billing. Scale up with advanced vendor integrations and success support.
        </p>
      </div>
    </section>
    <PricingSection />
    <section className="bg-slate-950 pb-20">
      <Callout
        title="Need an enterprise rollout?"
        description="Multi-venue operators, hospitality groups, and beverage conglomerates launch with white-glove onboarding. Let’s tailor a plan."
        primaryCta={{ label: "Speak with sales", href: "/contact" }}
        secondaryCta={{ label: "View enterprise options", href: "/signup?type=venue" }}
      />
    </section>
  </MarketingLayout>
);

export default PricingPage;

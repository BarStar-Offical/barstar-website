import MarketingLayout from "@/layouts/MarketingLayout";
import Hero from "@/components/Hero";
import IntegrationStrip from "@/components/IntegrationStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials from "@/components/Testimonials";
import Callout from "@/components/Callout";
import OnboardingTimeline from "@/components/OnboardingTimeline";
import PageMeta from "@/components/PageMeta";

const HomePage = () => (
  <MarketingLayout>
    <PageMeta />
    <Hero />
    <IntegrationStrip />
    <FeaturesGrid />
    <Testimonials />
    <section className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <OnboardingTimeline />
        <div className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/40 p-8">
          <h3 className="text-xl font-semibold text-white">Insights your team can trust</h3>
          <p className="text-sm text-slate-300">
            BarStar aggregates cohort engagement, vendor attribution, and loyalty redemptions. All
            analytics are delivered through OAuth-secured dashboards with JWT-authenticated API
            calls.
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
              Daily, weekly, and monthly check-in trendlines
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
              Vendor campaign impressions and conversion reporting
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
              Subscription management and invoice history powered by Stripe
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="bg-slate-950 pb-20">
      <Callout
        title="Ready to experience the BarStar effect?"
        description="Join Canada’s fastest-growing nightlife platform. Secure onboarding, Stripe billing, and API integrations are ready for your team."
        primaryCta={{ label: "Book a strategy session", href: "/signup?type=venue" }}
        secondaryCta={{ label: "Explore the dashboard", href: "/dashboard" }}
      />
    </section>
  </MarketingLayout>
);

export default HomePage;

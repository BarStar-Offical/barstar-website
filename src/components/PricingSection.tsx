import PricingCard from "@/components/PricingCard";
import SectionHeader from "@/components/SectionHeader";
import { venuePlans, vendorPlans } from "@/data/pricing";

const PricingSection = () => (
  <section className="bg-slate-950 py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Subscriptions & Campaigns"
        title="Choose the plan that best aligns with your nightlife strategy"
        description="Flexible billing powered by Stripe. Upgrade or adjust at any time inside the dashboard."
        centered
      />
      <div className="grid gap-6 md:grid-cols-3">
        {venuePlans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            cadence={plan.cadence}
            description={plan.description}
            features={plan.features}
            highlighted={plan.highlighted}
          />
        ))}
      </div>
      <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-10">
        <h3 className="text-xl font-semibold text-white">Vendor campaign packages</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Partner with venues for product launches, experiential activations, and always-on
          placements. Every package includes campaign analytics and performance reporting.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {vendorPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              cadence={plan.cadence}
              description={plan.description}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;

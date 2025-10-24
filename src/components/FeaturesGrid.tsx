import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import { featureHighlights } from "@/data/features";

const FeaturesGrid = () => (
  <section className="relative border-y border-white/5 bg-slate-950/70 py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Built for venues & vendors"
        title="A single collaboration hub for the nightlife economy"
        description="Marketing, loyalty, analytics, and billing unified in a secure portal that scales with your business."
        centered
      />
      <div className="grid gap-6 md:grid-cols-2">
        {featureHighlights.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon as never}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;

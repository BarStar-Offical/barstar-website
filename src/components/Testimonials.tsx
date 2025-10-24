import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import { successStories } from "@/data/features";

const Testimonials = () => (
  <section className="bg-slate-950 py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Proven results"
        title="Venues grow loyalty. Vendors gain visibility."
        description="Hospitality teams rely on BarStar to keep guests engaged and campaigns accountable."
        centered
      />
      <div className="grid gap-6 md:grid-cols-2">
        {successStories.map((story) => (
          <TestimonialCard
            key={story.customer}
            quote={story.quote}
            customer={story.customer}
            role={story.role}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

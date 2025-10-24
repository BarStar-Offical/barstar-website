import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import SectionHeader from "@/components/SectionHeader";

const ContactSection = () => (
  <section className="bg-slate-950 py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Connect"
        title="We help venues and vendors launch with confidence"
        description="Share your goals and we’ll align Stripe billing, BarStar API access, and tailored onboarding."
        centered
      />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  </section>
);

export default ContactSection;

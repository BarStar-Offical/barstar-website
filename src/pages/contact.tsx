import MarketingLayout from "@/layouts/MarketingLayout";
import PageMeta from "@/components/PageMeta";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => (
  <MarketingLayout>
    <PageMeta
      title="Contact BarStar — Venue & Vendor Support"
      description="Get in touch with the BarStar team for onboarding, support, or enterprise partnership discussions."
    />
    <section className="bg-slate-950 pb-10 pt-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white">We’re here to help</h1>
        <p className="mt-4 text-base text-slate-300">
          BarStar specialists are available to plan your launch, answer security reviews, and share
          vendor campaign insights.
        </p>
      </div>
    </section>
    <ContactSection />
  </MarketingLayout>
);

export default ContactPage;

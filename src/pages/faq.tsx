import MarketingLayout from "@/layouts/MarketingLayout";
import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";
import Callout from "@/components/Callout";

const FAQPage = () => (
  <MarketingLayout>
    <PageMeta
      title="BarStar FAQ — Venue & Vendor Questions"
      description="Find answers about BarStar’s gamified loyalty, analytics dashboards, and secure billing. Learn how venues and vendors launch with us."
    />
    <section className="bg-slate-950 pb-10 pt-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-white">Frequently asked questions</h1>
        <p className="mt-4 text-base text-slate-300">
          We’ve compiled the top questions from venues and vendors joining BarStar. Still have a
          question? Our support team is just a message away.
        </p>
      </div>
    </section>
    <FAQSection />
    <section className="bg-slate-950 pb-20">
      <Callout
        title="Didn’t find your answer?"
        description="Let’s have a quick call to walk through integrations, security reviews, or campaign planning."
        primaryCta={{ label: "Contact BarStar", href: "/contact" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
      />
    </section>
  </MarketingLayout>
);

export default FAQPage;

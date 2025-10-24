import MarketingLayout from "@/layouts/MarketingLayout";
import PageMeta from "@/components/PageMeta";

const PrivacyPage = () => (
  <MarketingLayout>
    <PageMeta
      title="BarStar Privacy Policy"
      description="Learn how BarStar protects venue and vendor data with secure authentication, encrypted storage, and privacy-first practices."
    />
    <section className="bg-slate-950 pb-20 pt-24">
      <div className="mx-auto max-w-4xl space-y-6 px-4 text-sm text-slate-300 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p>
          BarStar prioritizes the privacy of venues, vendors, and guests. We collect the minimum
          amount of data required to deliver loyalty programs, campaign analytics, and secure
          billing. Sensitive data is transmitted over HTTPS, encrypted at rest, and never shared with
          unauthorized parties.
        </p>
        <p>
          Authentication is powered by OAuth 2.0 providers and short-lived JWTs. We comply with
          GDPR, PIPEDA, and maintain strict access controls to protect user data. Payment information
          is handled directly by Stripe and never stored on BarStar servers.
        </p>
        <p>
          For questions about our privacy program or to request data deletion, contact
          privacy@barstar.ca.
        </p>
      </div>
    </section>
  </MarketingLayout>
);

export default PrivacyPage;

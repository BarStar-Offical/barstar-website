import { useRouter } from "next/router";
import MarketingLayout from "@/layouts/MarketingLayout";
import PageMeta from "@/components/PageMeta";
import SignupForm from "@/components/SignupForm";
import SectionHeader from "@/components/SectionHeader";

const SignupPage = () => {
  const { query } = useRouter();
  const accountType =
    typeof query.type === "string" && (query.type === "venue" || query.type === "vendor")
      ? query.type
      : "venue";

  return (
    <MarketingLayout>
      <PageMeta
        title="BarStar Signup — Venue & Vendor Onboarding"
        description="Create your BarStar business account to access venue dashboards, vendor analytics, and Stripe subscription management."
      />
      <section className="bg-slate-950 pb-16 pt-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Join BarStar"
            title="Let’s launch your nightlife program"
            description="Tell us about your venue or vendor program and we’ll align the perfect onboarding path."
          />
          <SignupForm defaultAccountType={accountType} />
        </div>
      </section>
    </MarketingLayout>
  );
};

export default SignupPage;

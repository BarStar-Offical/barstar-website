import Button from "@/components/Button";
import StatHighlight from "@/components/StatHighlight";
import { performanceTeasers } from "@/data/features";

const Hero = () => (
  <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#1a2aa8_0%,_#060910_65%)] pb-20 pt-24">
    <div className="absolute inset-0 -z-10 opacity-40">
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-400 blur-3xl" />
    </div>
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div>
        <span className="inline-flex rounded-full border border-brand-400/40 bg-brand-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
          Venues · Vendors · Nightlife
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Run every night like your best night.
        </h1>
        <p className="mt-6 text-base text-slate-300 sm:text-lg">
          BarStar gives hospitality teams a secure portal for loyalty, analytics, and campaign
          management. Convert guests into superfans, prove vendor ROI, and automate billing in one
          dashboard.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/signup?type=venue" size="lg">
            Schedule a live demo
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            See pricing plans
          </Button>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.4em] text-slate-400">
          Powered by Stripe &amp; OAuth 2.0 security
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {performanceTeasers.map((teaser) => (
          <StatHighlight
            key={teaser.label}
            metric={teaser.metric}
            label={teaser.label}
            detail={teaser.detail}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

const steps = [
  {
    title: "Discovery & Access",
    description:
      "We align on your goals, provision portal accounts, and configure OAuth providers for staff."
  },
  {
    title: "Stripe Billing Setup",
    description:
      "Connect your bank accounts, choose BarStar plans, and enable vendor payouts via Stripe."
  },
  {
    title: "Data & Integrations",
    description:
      "Sync historical check-ins, import guest lists, and connect to BarStar’s API for automation."
  },
  {
    title: "Launch & Optimize",
    description:
      "Activate gamified rewards, monitor dashboards, and collaborate with vendors in real time."
  }
];

const OnboardingTimeline = () => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-8">
    <h3 className="text-xl font-semibold text-white">Onboarding timeline</h3>
    <p className="mt-2 text-sm text-slate-300">
      Most venue programs go live in 14 days or less. Enterprise activations include a dedicated
      BarStar success manager.
    </p>
    <ol className="mt-6 space-y-6">
      {steps.map((step, idx) => (
        <li key={step.title} className="flex gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/20 font-semibold text-brand-200">
            {idx + 1}
          </span>
          <div>
            <h4 className="text-lg font-semibold text-white">{step.title}</h4>
            <p className="text-sm text-slate-300">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default OnboardingTimeline;

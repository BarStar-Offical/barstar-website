const integrations = [
  "Stripe Billing",
  "Google OAuth",
  "Apple Sign In",
  "Postgres",
  "Snowflake",
  "Segment",
  "Amplitude",
  "Slack Alerts"
];

const IntegrationStrip = () => (
  <section className="border-y border-white/5 bg-slate-950/50 py-10">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 text-xs uppercase tracking-[0.4em] text-slate-500 sm:px-6 lg:px-8">
      {integrations.map((integration) => (
        <span
          key={integration}
          className="rounded-full border border-white/5 px-4 py-2 text-slate-300"
        >
          {integration}
        </span>
      ))}
    </div>
  </section>
);

export default IntegrationStrip;

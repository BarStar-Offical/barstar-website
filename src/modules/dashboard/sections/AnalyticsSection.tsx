import { checkInTrends } from "@/data/dashboard";

const AnalyticsSection = () => (
  <div className="space-y-8">
    <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
      <h2 className="text-xl font-semibold text-white">Deep dive analytics</h2>
      <p className="mt-2 text-sm text-slate-300">
        Explore cohort retention, guest XP velocity, and campaign attribution. These charts are
        powered by the BarStar API and ready for custom integration.
      </p>
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      {checkInTrends.map((point) => (
        <div
          key={point.label}
          className="rounded-3xl border border-white/5 bg-gradient-to-br from-brand-600/30 via-slate-950 to-slate-950 p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200">{point.label}</p>
          <p className="mt-4 text-4xl font-semibold text-white">{point.value}</p>
          <p className="mt-2 text-sm text-slate-200">Check-ins compared to last week</p>
          <div className="mt-6 h-2 rounded-full bg-slate-900">
            <div
              className="h-2 rounded-full bg-brand-400"
              style={{ width: `${Math.min(100, (point.value / 700) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AnalyticsSection;

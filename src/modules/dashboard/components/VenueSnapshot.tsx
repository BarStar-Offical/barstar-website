import type { VenueSnapshot as VenueSnapshotData } from "@/hooks/useDashboardMetrics";

const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0
});

const currencyWithCentsFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

type VenueSnapshotProps = {
  snapshot: VenueSnapshotData;
};

const VenueSnapshot = ({ snapshot }: VenueSnapshotProps) => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
      Tonight&apos;s snapshot
    </h3>
    <p className="mt-2 text-xs text-slate-400">
      {snapshot.timeframe || "Live service window data pulled from BarStar OS."}
    </p>

    <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-200">
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">Floor occupancy</p>
        <p className="mt-1 text-2xl font-semibold text-white">{snapshot.occupancy}%</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">Average check</p>
        <p className="mt-1 text-2xl font-semibold text-white">
          {currencyWithCentsFormatter.format(snapshot.avgSpend)}
        </p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">Floor spend tonight</p>
        <p className="mt-1 text-2xl font-semibold text-white">
          {currencyFormatter.format(snapshot.floorSpend)}
        </p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-slate-400">Average dwell time</p>
        <p className="mt-1 text-2xl font-semibold text-white">{snapshot.avgDwellMinutes} min</p>
      </div>
    </div>

    <div className="mt-6 rounded-2xl border border-white/5 bg-white/5 p-4">
      <ul className="space-y-3 text-sm text-slate-200">
        <li className="flex items-center justify-between">
          <span>Reserved tables</span>
          <span className="font-semibold text-white">{snapshot.reservations}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>VIP guests on-site</span>
          <span className="font-semibold text-white">{snapshot.vipGuests}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Loyalty redemptions</span>
          <span className="font-semibold text-white">{snapshot.loyaltyRedemptions}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Staff on duty</span>
          <span className="font-semibold text-white">{snapshot.staffOnDuty}</span>
        </li>
      </ul>
    </div>
  </div>
);

export default VenueSnapshot;

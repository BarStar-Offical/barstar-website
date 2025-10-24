import type { LocationPerformance } from "@/hooks/useDashboardMetrics";

const avgTabFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

type LocationBreakdownProps = {
  locations: LocationPerformance[];
};

const LocationBreakdown = ({ locations }: LocationBreakdownProps) => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
      Location performance
    </h3>
    {locations.length === 0 ? (
      <p className="mt-6 text-sm text-slate-400">Live venue data will appear here shortly.</p>
    ) : (
      <div className="mt-6 space-y-4">
        {locations.map((location) => (
          <div
            key={location.name}
            className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-200"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-white">{location.name}</p>
                <p className="text-xs text-slate-400">
                  {location.tonightCheckIns} check-ins tonight
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-slate-400">Avg tab</p>
                <p className="text-lg font-semibold text-white">
                  {avgTabFormatter.format(location.avgTab)}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Occupancy {location.occupancy}%</span>
              <span>Loyalty redemptions {location.loyaltyRedemptions}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-brand-500"
                style={{ width: `${location.occupancy}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default LocationBreakdown;

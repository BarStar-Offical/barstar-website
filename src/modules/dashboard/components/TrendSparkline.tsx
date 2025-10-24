type TrendPoint = {
  label: string;
  value: number;
};

type TrendSparklineProps = {
  points: TrendPoint[];
};

const TrendSparkline = ({ points }: TrendSparklineProps) => {
  const max = Math.max(...points.map((point) => point.value));

  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
      <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
        Weekly check-ins
      </h3>
      <div className="mt-6 grid grid-cols-7 gap-4">
        {points.map((point) => (
          <div key={point.label} className="flex flex-col items-center gap-2 text-xs text-slate-400">
            <div className="flex h-32 w-full items-end rounded-full bg-slate-800">
              <div
                className="w-full rounded-full bg-gradient-to-t from-brand-500 via-brand-400 to-brand-300"
                style={{ height: `${(point.value / max) * 100}%` }}
              />
            </div>
            <span className="font-semibold text-slate-200">{point.value}</span>
            <span>{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendSparkline;

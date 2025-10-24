import { ReactNode } from "react";

type MetricCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  subtext: string;
};

const MetricCard = ({ icon, label, value, subtext }: MetricCardProps) => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/50 p-6 shadow-lg shadow-slate-950/20">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
        {label}
      </span>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-200">
        {icon}
      </div>
    </div>
    <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
    <p className="mt-2 text-xs text-slate-400">{subtext}</p>
  </div>
);

export default MetricCard;

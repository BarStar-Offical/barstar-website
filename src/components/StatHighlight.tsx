type StatHighlightProps = {
  metric: string;
  label: string;
  detail: string;
};

const StatHighlight = ({ metric, label, detail }: StatHighlightProps) => (
  <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6">
    <span className="text-3xl font-semibold text-white sm:text-4xl">{metric}</span>
    <p className="mt-2 text-sm font-medium text-brand-200">{label}</p>
    <p className="text-xs text-slate-400">{detail}</p>
  </div>
);

export default StatHighlight;

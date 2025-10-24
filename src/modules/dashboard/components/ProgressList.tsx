type ProgressListItem = {
  name: string;
  progress: number;
};

type ProgressListProps = {
  items: ProgressListItem[];
};

const ProgressList = ({ items }: ProgressListProps) => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
      Engagement badges
    </h3>
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.name}>
          <div className="flex items-center justify-between text-sm text-slate-300">
            <span>{item.name}</span>
            <span>{item.progress}%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <div
              className="h-2 rounded-full bg-brand-500"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ProgressList;

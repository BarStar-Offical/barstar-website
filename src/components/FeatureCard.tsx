import { iconDictionary, type IconDictionary } from "@/types/icons";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: keyof IconDictionary;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const Icon = iconDictionary[icon];

  return (
    <div className="group rounded-2xl border border-white/5 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-lg hover:shadow-brand-500/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-200">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </div>
  );
};

export default FeatureCard;

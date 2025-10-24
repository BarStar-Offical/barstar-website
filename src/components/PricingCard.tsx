import clsx from "clsx";
import Button from "@/components/Button";

type PricingCardProps = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const PricingCard = ({
  name,
  price,
  cadence,
  description,
  features,
  highlighted
}: PricingCardProps) => (
  <div
    className={clsx(
      "flex flex-col rounded-3xl border border-white/5 bg-slate-900/40 p-8 shadow-lg shadow-slate-950/20",
      highlighted && "border-brand-400/70 bg-slate-900/60"
    )}
  >
    <h3 className="text-xl font-semibold text-white">{name}</h3>
    <p className="mt-2 text-sm text-slate-300">{description}</p>
    <div className="mt-6 flex items-baseline gap-2">
      <span className="text-3xl font-bold text-white">{price}</span>
      <span className="text-sm text-slate-400">{cadence}</span>
    </div>
    <Button className="mt-6 w-full" href="/signup">
      Choose plan
    </Button>
    <ul className="mt-6 space-y-3 text-sm text-slate-300">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default PricingCard;

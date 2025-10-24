import Button from "@/components/Button";

type CalloutProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

const Callout = ({ title, description, primaryCta, secondaryCta }: CalloutProps) => (
  <section className="mx-auto max-w-5xl rounded-3xl border border-brand-400/50 bg-gradient-to-br from-brand-600/60 via-slate-950 to-slate-950 p-10 text-center shadow-glow">
    <h2 className="text-3xl font-semibold text-white">{title}</h2>
    <p className="mx-auto mt-3 max-w-2xl text-base text-slate-200">{description}</p>
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <Button href={primaryCta.href} size="lg">
        {primaryCta.label}
      </Button>
      {secondaryCta ? (
        <Button href={secondaryCta.href} variant="secondary" size="lg">
          {secondaryCta.label}
        </Button>
      ) : null}
    </div>
  </section>
);

export default Callout;

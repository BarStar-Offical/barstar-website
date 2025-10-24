type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

const SectionHeader = ({ eyebrow, title, description, centered }: SectionHeaderProps) => (
  <div className={centered ? "text-center" : "text-left"}>
    {eyebrow ? (
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-300">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">{title}</h2>
    {description ? (
      <p className="mt-3 text-base text-slate-300 sm:text-lg">{description}</p>
    ) : null}
  </div>
);

export default SectionHeader;

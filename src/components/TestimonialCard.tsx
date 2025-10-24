type TestimonialCardProps = {
  quote: string;
  customer: string;
  role: string;
};

const TestimonialCard = ({ quote, customer, role }: TestimonialCardProps) => (
  <figure className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/50 p-6 shadow-lg shadow-brand-900/30">
    <blockquote className="text-base text-slate-200 sm:text-lg">&ldquo;{quote}&rdquo;</blockquote>
    <figcaption className="mt-4 text-sm text-brand-200">
      <span className="font-semibold text-white">{customer}</span> &mdash; {role}
    </figcaption>
  </figure>
);

export default TestimonialCard;

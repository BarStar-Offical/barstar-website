import { forwardRef, SelectHTMLAttributes } from "react";
import clsx from "clsx";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <select
    ref={ref}
    className={clsx(
      "rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40",
      className
    )}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";

export default Select;

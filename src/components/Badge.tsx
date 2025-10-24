import clsx from "clsx";
import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
};

const variantClasses = {
  default: "bg-white/10 text-slate-200 border border-white/10",
  success: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-300 border border-amber-500/20"
};

const Badge = ({ children, variant = "default" }: BadgeProps) => (
  <span
    className={clsx(
      "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
      variantClasses[variant]
    )}
  >
    {children}
  </span>
);

export default Badge;

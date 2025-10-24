import { forwardRef, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={clsx(
      "min-h-[140px] rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export default Textarea;

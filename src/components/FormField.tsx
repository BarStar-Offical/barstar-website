import { ReactNode } from "react";
import clsx from "clsx";

type FormFieldProps = {
  label: string;
  name: string;
  children: ReactNode;
  hint?: string;
  required?: boolean;
  className?: string;
};

const FormField = ({ label, name, children, hint, required, className }: FormFieldProps) => (
  <label className={clsx("flex flex-col gap-2 text-sm text-slate-200", className)} htmlFor={name}>
    <span className="font-semibold text-white">
      {label}
      {required ? <span className="ml-1 text-brand-200">*</span> : null}
    </span>
    {children}
    {hint ? <span className="text-xs text-slate-400">{hint}</span> : null}
  </label>
);

export default FormField;

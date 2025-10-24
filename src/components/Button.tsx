import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
};

type ButtonProps = BaseProps &
  (
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base"
};

const variantStyles = {
  primary:
    "bg-brand-500 hover:bg-brand-400 text-white shadow-glow shadow-brand-600/40 transition-all",
  secondary:
    "bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors",
  ghost: "text-brand-200 hover:text-white border border-transparent hover:border-white/20"
};

const Button = ({ variant = "primary", size = "md", className, href, ...props }: ButtonProps) => {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-tight",
    "transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return <Link href={href} className={classes} {...props} />;
  }

  return <button className={classes} {...props} />;
};

export default Button;

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Button from "@/components/Button";
import { ctaButtons, primaryNav } from "@/data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold text-white">
          BarStar<span className="ml-1 text-xs font-normal text-brand-300">/Venues & Vendors</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {ctaButtons.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant ?? "primary"}
              size="sm"
            >
              {action.label}
            </Button>
          ))}
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-slate-200 hover:border-white/20 hover:text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      <div
        className={clsx(
          "border-t border-white/5 bg-slate-950/95 px-4 py-6 transition-all duration-200 lg:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        )}
      >
        <nav className="flex flex-col gap-4">
          {primaryNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-slate-200 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-6 flex flex-col gap-3">
          {ctaButtons.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              variant={action.variant ?? "primary"}
              size="md"
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

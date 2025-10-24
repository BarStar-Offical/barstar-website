import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p>
        &copy; {new Date().getFullYear()} BarStar Technologies Inc. All rights reserved.
      </p>
      <nav className="flex flex-wrap items-center gap-6">
        <Link href="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-white">
          Terms
        </Link>
        <Link href="/contact" className="hover:text-white">
          Support
        </Link>
        <Link
          href="mailto:partners@barstar.ca"
          className="font-medium text-brand-200 hover:text-brand-100"
        >
          partners@barstar.ca
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;

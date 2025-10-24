import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useMockSession } from "@/lib/auth";

type DashboardLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

const dashboardNav = [
  { name: "Overview", href: "/dashboard" },
  { name: "Campaigns", href: "/dashboard/campaigns" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Billing", href: "/dashboard/billing" }
];

const DashboardLayout = ({ children, title, description }: DashboardLayoutProps) => {
  const { user } = useMockSession();

  return (
    <div className="grid min-h-screen grid-cols-1 bg-slate-950 text-slate-100 lg:grid-cols-[240px_1fr]">
      <aside className="flex flex-col border-r border-white/5 bg-slate-950/80 px-6 py-8">
        <Link href="/" className="text-lg font-bold text-white">
          BarStar<span className="ml-1 text-xs font-normal text-brand-300">/Dashboard</span>
        </Link>
        <nav className="mt-10 flex flex-col gap-2">
          {dashboardNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl border border-white/5 bg-white/5 p-4 text-sm">
          <p className="font-semibold text-white">{user?.name ?? "Loading..."}</p>
          <p className="text-xs uppercase tracking-widest text-brand-200">
            {user?.role.replace("-", " ").toUpperCase() ?? ""}
          </p>
          <Link
            className="mt-4 inline-flex items-center gap-2 text-xs text-slate-300 hover:text-brand-200"
            href="/api/auth/signout"
          >
            <ArrowRightOnRectangleIcon className="h-4 w-4" />
            Sign out
          </Link>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="border-b border-white/5 bg-slate-950/60 px-6 py-6">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {description ? <p className="mt-2 text-sm text-slate-300">{description}</p> : null}
        </header>
        <main className="flex-1 bg-slate-950 px-6 py-10">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

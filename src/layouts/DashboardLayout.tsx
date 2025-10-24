import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import DashboardUserMenu from "@/modules/dashboard/components/DashboardUserMenu";

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
  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === "loading") {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-950 text-slate-100">
        <p className="rounded-2xl border border-white/5 bg-slate-900/40 px-6 py-4 text-sm text-slate-300">
          Loading your dashboard…
        </p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="grid min-h-screen place-items-center bg-slate-950 text-slate-100">
        <div className="rounded-2xl border border-white/5 bg-slate-900/40 px-6 py-4 text-center text-sm text-slate-300">
          <p>You need to sign in to view this dashboard.</p>
          <Link
            href="/api/auth/signin?callbackUrl=/dashboard"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Sign in with your account
          </Link>
        </div>
      </div>
    );
  }

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
          <p className="font-semibold text-white">{user?.name ?? "Guest User"}</p>
          <p className="text-xs uppercase tracking-widest text-brand-200">
            {user?.role ? user.role.replace("-", " ").toUpperCase() : "CUSTOMER"}
          </p>
          <button
            className="mt-4 inline-flex items-center gap-2 text-xs text-slate-300 transition hover:text-brand-200"
            type="button"
            onClick={() => void signOut({ callbackUrl: "/" })}
          >
            <ArrowRightOnRectangleIcon className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>
      <div className="flex flex-col">
        <header className="border-b border-white/5 bg-slate-950/60 px-6 py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">{title}</h1>
              {description ? <p className="mt-2 text-sm text-slate-300">{description}</p> : null}
            </div>
            <DashboardUserMenu
              name={user?.name}
              email={user?.email}
              image={user?.image}
              role={user?.role}
            />
          </div>
        </header>
        <main className="flex-1 bg-slate-950 px-6 py-10">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

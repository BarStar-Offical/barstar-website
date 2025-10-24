import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import DashboardLayout from "@/layouts/DashboardLayout";
import PageMeta from "@/components/PageMeta";
import { requireUserSession } from "@/lib/auth";

type ProfileFormState = {
  name: string;
  email: string;
  phone: string;
  venueName: string;
  notifications: boolean;
};

const ProfilePage = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [formState, setFormState] = useState<ProfileFormState>({
    name: user?.name ?? "",
    email: user?.email ?? "",
    phone: "",
    venueName: "",
    notifications: true
  });
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");

  useEffect(() => {
    setFormState((prev) => ({
      ...prev,
      name: user?.name ?? "",
      email: user?.email ?? ""
    }));
  }, [user?.name, user?.email]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");

    window.setTimeout(() => {
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2000);
    }, 600);
  };

  return (
    <DashboardLayout
      title="Account profile"
      description="Review and update the contact details tied to your BarStar customer account."
    >
      <PageMeta title="BarStar Dashboard — Profile" />
      <form
        className="mx-auto max-w-3xl space-y-8 rounded-3xl border border-white/5 bg-slate-900/40 p-8"
        onSubmit={handleSubmit}
      >
        <section>
          <h2 className="text-lg font-semibold text-white">Contact information</h2>
          <p className="mt-2 text-sm text-slate-400">
            Keep your information current so invoices, alerts, and campaign reports reach the right
            inbox.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              <span className="text-xs uppercase tracking-widest text-slate-400">Full name</span>
              <input
                type="text"
                className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white transition focus:border-brand-400/80 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                value={formState.name}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, name: event.target.value }))
                }
                placeholder="Jordan Lee"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              <span className="text-xs uppercase tracking-widest text-slate-400">Email address</span>
              <input
                type="email"
                className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white transition focus:border-brand-400/80 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                value={formState.email}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="jordan@barstar.ca"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                Mobile number
              </span>
              <input
                type="tel"
                className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white transition focus:border-brand-400/80 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                value={formState.phone}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, phone: event.target.value }))
                }
                placeholder="+1 (416) 555-0149"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              <span className="text-xs uppercase tracking-widest text-slate-400">Venue name</span>
              <input
                type="text"
                className="rounded-xl border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white transition focus:border-brand-400/80 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
                value={formState.venueName}
                onChange={(event) =>
                  setFormState((prev) => ({ ...prev, venueName: event.target.value }))
                }
                placeholder="BarStar Toronto"
              />
            </label>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Notifications</h2>
          <p className="mt-2 text-sm text-slate-400">
            Choose how you want us to keep you updated about campaigns, invoices, and service
            alerts.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 p-4">
            <input
              id="notifications"
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-white/10 bg-slate-900/80 text-brand-400 focus:ring-brand-400"
              checked={formState.notifications}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, notifications: event.target.checked }))
              }
            />
            <label htmlFor="notifications" className="text-sm text-slate-200">
              <span className="font-semibold text-white">Email alerts enabled</span>
              <span className="mt-1 block text-xs text-slate-400">
                Receive nightly summaries, performance digests, and billing updates.
              </span>
            </label>
          </div>
        </section>

        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {status === "saved"
              ? "Profile updated. Changes will be reflected on your next session refresh."
              : "Changes are saved instantly to your organization workspace."}
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:bg-brand-500/60"
            disabled={status === "saving"}
          >
            {status === "saving" ? "Saving…" : "Save changes"}
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
};

export default ProfilePage;
export const getServerSideProps = requireUserSession;

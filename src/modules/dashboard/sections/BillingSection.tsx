import Button from "@/components/Button";
import { invoices } from "@/data/dashboard";

const BillingSection = () => (
  <div className="space-y-8">
    <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Subscription &amp; billing</h2>
          <p className="text-sm text-slate-300">
            Manage your Stripe-powered subscription, update payment methods, and review invoices.
          </p>
        </div>
        <Button href="/dashboard/billing/update" size="sm">
          Update payment method
        </Button>
      </div>
    </div>
    <div className="grid gap-4">
      {invoices.map((invoice) => (
        <div
          key={invoice.id}
          className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-slate-900/30 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-lg font-semibold text-white">{invoice.id}</p>
            <p className="text-sm text-slate-400">{invoice.date}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-white">{invoice.amount}</span>
            <Button href="#" variant="secondary" size="sm">
              View invoice
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BillingSection;

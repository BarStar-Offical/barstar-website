type Invoice = {
  id: string;
  amount: string;
  date: string;
  status: string;
};

type InvoiceListProps = {
  invoices: Invoice[];
};

const statusBadge = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-emerald-500/10 text-emerald-200 border border-emerald-500/20";
    case "Due":
      return "bg-amber-500/10 text-amber-200 border border-amber-500/20";
    default:
      return "bg-slate-500/10 text-slate-200 border border-slate-500/20";
  }
};

const InvoiceList = ({ invoices }: InvoiceListProps) => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
      Recent invoices
    </h3>
    <ul className="mt-6 space-y-4 text-sm text-slate-200">
      {invoices.map((invoice) => (
        <li
          key={invoice.id}
          className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
        >
          <div>
            <p className="font-medium text-white">{invoice.id}</p>
            <p className="text-xs text-slate-400">{invoice.date}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-white">{invoice.amount}</p>
            <span
              className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusBadge(
                invoice.status
              )}`}
            >
              {invoice.status}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default InvoiceList;

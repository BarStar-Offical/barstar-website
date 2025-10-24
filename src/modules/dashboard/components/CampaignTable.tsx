type Campaign = {
  name: string;
  impressions: string;
  conversions: string;
  status: string;
};

type CampaignTableProps = {
  campaigns: Campaign[];
};

const statusClassMap: Record<string, string> = {
  Live: "bg-emerald-500/10 text-emerald-200 border border-emerald-500/20",
  Paused: "bg-amber-500/10 text-amber-200 border border-amber-500/20",
  Completed: "bg-slate-500/10 text-slate-200 border border-slate-500/20"
};

const CampaignTable = ({ campaigns }: CampaignTableProps) => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">
      Campaign metrics
    </h3>
    <div className="mt-6 overflow-hidden rounded-2xl border border-white/5">
      <table className="min-w-full divide-y divide-white/5 text-sm">
        <thead className="bg-white/5 text-left text-xs uppercase tracking-widest text-slate-400">
          <tr>
            <th className="px-6 py-3 font-semibold text-white">Campaign</th>
            <th className="px-6 py-3 font-semibold text-white">Impressions</th>
            <th className="px-6 py-3 font-semibold text-white">Conversions</th>
            <th className="px-6 py-3 font-semibold text-white">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {campaigns.map((campaign) => (
            <tr key={campaign.name} className="bg-slate-950/30">
              <td className="px-6 py-4 text-white">{campaign.name}</td>
              <td className="px-6 py-4 text-slate-300">{campaign.impressions}</td>
              <td className="px-6 py-4 text-slate-300">{campaign.conversions}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClassMap[campaign.status]}`}
                >
                  {campaign.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CampaignTable;

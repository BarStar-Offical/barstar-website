import Button from "@/components/Button";
import { campaignPerformance } from "@/data/dashboard";

const CampaignsSection = () => (
  <div className="space-y-6">
    <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Manage campaigns</h2>
          <p className="text-sm text-slate-300">
            Coordinate vendor activations, schedule sponsored nights, and monitor conversions.
          </p>
        </div>
        <Button href="/dashboard/campaigns/new">Launch new campaign</Button>
      </div>
    </div>
    <div className="grid gap-4">
      {campaignPerformance.map((campaign) => (
        <div
          key={campaign.name}
          className="rounded-3xl border border-white/5 bg-slate-900/30 p-6 text-sm text-slate-200"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{campaign.name}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-200">{campaign.status}</p>
            </div>
            <div className="flex gap-6">
              <div>
                <p className="text-xs text-slate-400">Impressions</p>
                <p className="text-base font-semibold text-white">{campaign.impressions}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Conversions</p>
                <p className="text-base font-semibold text-white">{campaign.conversions}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <Button href="#" variant="secondary" size="sm">
              View analytics
            </Button>
            <Button href="#" variant="ghost" size="sm">
              Adjust budget
            </Button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CampaignsSection;

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const ContactCard = () => (
  <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-8 shadow-lg shadow-slate-950/30">
    <h3 className="text-xl font-semibold text-white">Talk with our team</h3>
    <p className="mt-2 text-sm text-slate-300">
      Need a tailored onboarding plan? We&apos;ll walk through analytics, integrations, and launch
      timelines with you.
    </p>
    <div className="mt-6 space-y-4 text-sm text-slate-200">
      <a
        href="mailto:partners@barstar.ca"
        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 hover:border-brand-400/70 hover:text-brand-100"
      >
        <EnvelopeIcon className="h-5 w-5 text-brand-200" />
        partners@barstar.ca
      </a>
      <a
        href="tel:+18335551234"
        className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 hover:border-brand-400/70 hover:text-brand-100"
      >
        <PhoneIcon className="h-5 w-5 text-brand-200" />
        +1 (833) 555-1234
      </a>
    </div>
  </div>
);

export default ContactCard;

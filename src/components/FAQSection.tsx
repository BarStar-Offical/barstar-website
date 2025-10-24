import SectionHeader from "@/components/SectionHeader";
import FAQGroup from "@/components/FAQGroup";
import { generalFaq, securityFaq } from "@/data/faqs";

const FAQSection = () => (
  <section className="bg-slate-950 py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Questions"
        title="Everything venues and vendors ask before launching"
        description="If you need more detail about integrations or enterprise programs, our team is ready to help."
        centered
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <FAQGroup items={generalFaq} />
        <FAQGroup items={securityFaq} />
      </div>
    </div>
  </section>
);

export default FAQSection;

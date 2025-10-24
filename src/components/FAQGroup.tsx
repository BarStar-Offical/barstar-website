import AccordionItem from "@/components/AccordionItem";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQGroupProps = {
  items: FAQItem[];
};

const FAQGroup = ({ items }: FAQGroupProps) => (
  <div className="space-y-4">
    {items.map((item, index) => (
      <AccordionItem
        key={item.question}
        question={item.question}
        answer={item.answer}
        defaultOpen={index === 0}
      />
    ))}
  </div>
);

export default FAQGroup;

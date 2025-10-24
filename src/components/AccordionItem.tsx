import { useState } from "react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

type AccordionItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

const AccordionItem = ({ question, answer, defaultOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-white/5 bg-slate-900/40">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-medium text-white"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{question}</span>
        {isOpen ? (
          <MinusSmallIcon className="h-5 w-5 text-brand-300" />
        ) : (
          <PlusSmallIcon className="h-5 w-5 text-brand-300" />
        )}
      </button>
      {isOpen ? <p className="px-6 pb-6 text-sm text-slate-300">{answer}</p> : null}
    </div>
  );
};

export default AccordionItem;

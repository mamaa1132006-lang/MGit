import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface FAQProps {
  items: ReadonlyArray<{ q: string; a: string }>;
}

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-start hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
          >
            <span className="font-bold text-slate-900 dark:text-white text-base md:text-lg">
              {item.q}
            </span>
            <ChevronDownIcon
              className={`w-5 h-5 shrink-0 text-brand transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

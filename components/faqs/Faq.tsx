import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
}

export default function Faq({ items }: FaqProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={index}
          className="group border border-border rounded-xl bg-background/30 open:bg-accent/10 transition-all"
        >
          <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-emerald-500 marker:content-none">
            {item.question}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform group-open:rotate-180 text-muted"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-6 pb-6 text-green-500">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
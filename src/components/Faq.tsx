"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl scroll-mt-24 px-4 py-28">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />

      <div className="space-y-4">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 80}>
              <div className={`glass rounded-2xl transition-all duration-300 ${isOpen ? "gradient-border" : ""}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-white">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-cyan-300 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <p className="overflow-hidden px-6 text-[var(--muted)]">
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

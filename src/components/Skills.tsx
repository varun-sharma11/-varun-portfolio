"use client";

import { useState } from "react";
import { skillGroups } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Reveal } from "./ui";

export default function Skills() {
  const [tab, setTab] = useState(0);
  const group = skillGroups[tab];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="Skills"
        title="My tech arsenal"
        subtitle="Tools and technologies I use to bring ideas to life."
      />

      <Reveal>
        <div className="glass mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full p-1.5">
          {skillGroups.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                tab === i
                  ? "bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 text-[#05060f] shadow-[0_0_25px_rgba(167,139,250,0.5)]"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {g.name}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="glass-strong gradient-border grid gap-x-12 gap-y-8 rounded-3xl p-8 md:grid-cols-2 md:p-12">
          {group.skills.map((s, i) => (
            <div key={`${group.name}-${s.name}`}>
              <div className="mb-3 flex justify-between text-sm">
                <span className="font-medium text-white">{s.name}</span>
                <span className="font-mono text-cyan-300">{s.level}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
                <div
                  className="h-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 shadow-[0_0_15px_rgba(167,139,250,0.6)]"
                  style={{
                    width: `${s.level}%`,
                    animation: `grow 1s cubic-bezier(.2,.8,.2,1) ${i * 120}ms both`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <style>{`@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
    </section>
  );
}

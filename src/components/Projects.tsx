"use client";

import { useState } from "react";
import { ExternalLink, Layers } from "lucide-react";
import { projects } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Reveal, SpotlightCard } from "./ui";
import { GithubIcon } from "./BrandIcons";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured projects"
        subtitle="A selection of things I've designed, built and shipped."
      />

      <Reveal>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === c
                  ? "border-cyan-300/60 bg-cyan-400/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
                  : "glass text-[var(--muted)] hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <SpotlightCard className="group flex h-full flex-col overflow-hidden">
              {/* visual header */}
              <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <div className="bg-grid absolute inset-0 opacity-60" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="glass-strong grid h-16 w-16 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Layers className="h-7 w-7" />
                  </div>
                </div>
                <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-xs text-white">
                  {p.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-violet-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 border-t border-white/10 pt-5 text-sm">
                  <a href={p.live} className="inline-flex items-center gap-1.5 font-medium text-cyan-300 hover:text-cyan-200">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a href={p.code} className="ml-auto inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-white">
                    <GithubIcon className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

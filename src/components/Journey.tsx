import { Briefcase, GraduationCap } from "lucide-react";
import { journey } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Reveal, SpotlightCard } from "./ui";

export default function Journey() {
  return (
    <section id="experience" className="relative mx-auto max-w-4xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & education"
        subtitle="The path that shaped me as an engineer."
      />

      <div className="relative">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent md:left-1/2" />

        <div className="space-y-12">
          {journey.map((j, i) => {
            const Icon = j.type === "edu" ? GraduationCap : Briefcase;
            const left = i % 2 === 0;
            return (
              <Reveal key={j.title + j.org} delay={i * 100}>
                <div className={`relative flex md:items-center ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <span className="absolute left-5 z-10 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 text-[#05060f] shadow-[0_0_25px_rgba(167,139,250,0.7)] md:left-1/2">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className={`w-full pl-16 md:w-1/2 md:pl-0 ${left ? "md:pr-14" : "md:pl-14"}`}>
                    <SpotlightCard className="p-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">{j.period}</span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">{j.title}</h3>
                      <p className="text-sm text-violet-200">{j.org}</p>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{j.text}</p>
                    </SpotlightCard>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

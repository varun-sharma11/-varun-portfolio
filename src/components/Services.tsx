import { Code, Server, Cloud, Database, Smartphone, ShieldCheck, type LucideIcon } from "lucide-react";
import { services } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Reveal, SpotlightCard } from "./ui";

const icons: Record<string, LucideIcon> = {
  code: Code,
  server: Server,
  cloud: Cloud,
  database: Database,
  smartphone: Smartphone,
  shield: ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="What I Do"
        title="Services & expertise"
        subtitle="End-to-end engineering — from idea to production."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Code;
          return (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <SpotlightCard className="group h-full p-8">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 text-[#05060f] shadow-[0_10px_30px_-5px_rgba(167,139,250,0.6)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{s.text}</p>
                <span className="mt-6 block h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

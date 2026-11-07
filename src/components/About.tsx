import { GraduationCap, MapPin, Mail, Briefcase } from "lucide-react";
import { profile, stats } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Counter, Reveal, SpotlightCard } from "./ui";

export default function About() {
  const facts = [
    { Icon: Briefcase, label: "Role", value: profile.role },
    { Icon: GraduationCap, label: "Organisation", value: profile.org },
    { Icon: MapPin, label: "Location", value: profile.location },
    { Icon: Mail, label: "Email", value: profile.email },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering with purpose"
        subtitle="A quick look at who I am and what drives my work."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <SpotlightCard className="h-full p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-white">
              Hello! I&apos;m <span className="text-gradient">{profile.firstName}</span> 👋
            </h3>
            {profile.about.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-[var(--muted)]">
                {p}
              </p>
            ))}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {facts.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{label}</p>
                    <p className="truncate text-sm font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 lg:col-span-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <SpotlightCard className="gradient-border flex h-full flex-col justify-center p-6 text-center">
                <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

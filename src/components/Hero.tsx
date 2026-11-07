import { ArrowRight, Download, MapPin, Sparkles, Code, Cpu, Rocket } from "lucide-react";
import { profile, techStrip } from "@/data/profile";
import Typewriter from "./Typewriter";
import { Reveal } from "./ui";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

export default function Hero() {
  const socials = [
    { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
    { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: profile.socials.twitter, label: "X", Icon: XIcon },
  ];

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.2fr_1fr]">
        {/* Left */}
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for collaborations
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <br />
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 font-mono text-xl text-white/90 sm:text-2xl">
              &gt; <Typewriter words={profile.roles} />
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.resumeUrl} className="btn-ghost glass text-white">
                <Download className="h-4 w-4" /> Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-10 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass grid h-11 w-11 place-items-center rounded-full text-white/80 transition hover:-translate-y-1 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                >
                  <Icon />
                </a>
              ))}
              <span className="ml-2 h-px w-16 bg-gradient-to-r from-white/40 to-transparent" />
            </div>
          </Reveal>
        </div>

        {/* Right: holographic profile card */}
        <Reveal delay={300} className="relative mx-auto w-full max-w-sm">
          <div className="animate-float relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/30 via-violet-500/30 to-pink-500/30 blur-3xl" />
            <div className="glass-strong gradient-border relative rounded-[2rem] p-8">
              <div className="flex items-center justify-between font-mono text-xs text-[var(--muted)]">
                <span>ID://ENGINEER</span>
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-pink-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
              </div>

              <div className="relative mx-auto mt-8 h-40 w-40">
                <div className="animate-spin-slow absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#a78bfa,#f472b6,#22d3ee)] p-[3px]">
                  <div className="h-full w-full rounded-full bg-[#0b0d1d]" />
                </div>
                <div className="absolute inset-[10px] grid place-items-center rounded-full bg-gradient-to-br from-[#14173a] to-[#0b0d1d] font-display text-5xl font-bold">
                  <span className="text-gradient">{profile.initials}</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl font-bold text-white">{profile.name}</h3>
                <p className="mt-1 text-cyan-300">{profile.role}</p>
                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--muted)]">
                  <MapPin className="h-4 w-4" /> {profile.org}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { Icon: Code, label: "Code" },
                  { Icon: Cpu, label: "Systems" },
                  { Icon: Rocket, label: "Ship" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="glass rounded-2xl py-3 text-center">
                    <Icon className="mx-auto h-5 w-5 text-violet-300" />
                    <span className="mt-1 block text-xs text-[var(--muted)]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* floating chips */}
            <div className="glass absolute -left-6 top-24 hidden items-center gap-2 rounded-2xl px-3 py-2 text-sm text-white sm:flex">
              <Sparkles className="h-4 w-4 text-amber-300" /> Clean Code
            </div>
            <div className="glass absolute -right-6 bottom-24 hidden items-center gap-2 rounded-2xl px-3 py-2 font-mono text-sm text-white sm:flex">
              <span className="text-emerald-400">●</span> git push
            </div>
          </div>
        </Reveal>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 backdrop-blur-md [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-12">
          {[...techStrip, ...techStrip].map((t, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-lg font-medium text-white/60">
              <span className="text-gradient">✦</span> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

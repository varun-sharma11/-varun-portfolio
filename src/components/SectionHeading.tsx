import { Reveal } from "./ui";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#22d3ee]" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>}
    </Reveal>
  );
}

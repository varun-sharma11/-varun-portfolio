import { Heart } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, XIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-display text-xl font-bold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 text-sm text-[#05060f]">
              {profile.initials}
            </span>
            {profile.name}
          </a>
          <p className="mt-4 max-w-xs text-sm text-[var(--muted)]">
            {profile.role} at {profile.org}. Building the future, one commit at a time.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="text-[var(--muted)] transition hover:text-cyan-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[
              { href: profile.socials.github, Icon: GithubIcon, label: "GitHub" },
              { href: profile.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { href: profile.socials.twitter, Icon: XIcon, label: "X" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="glass grid h-10 w-10 place-items-center rounded-full text-white/80 transition hover:-translate-y-1 hover:text-cyan-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href={`mailto:${profile.email}`} className="mt-4 block text-sm text-[var(--muted)] hover:text-white">
            {profile.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-[var(--muted)]">
        © 2026 {profile.name}. Crafted with <Heart className="inline h-4 w-4 fill-pink-500 text-pink-500" /> using Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}

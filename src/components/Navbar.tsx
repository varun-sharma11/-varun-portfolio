"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setScrolled(h.scrollTop > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 shadow-[0_0_12px_#a78bfa]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 text-sm text-[#05060f] shadow-[0_0_20px_rgba(167,139,250,0.6)]">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">
              {profile.firstName}
              <span className="text-gradient">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === l.id ? "text-white" : "text-[var(--muted)] hover:text-white"
                  }`}
                >
                  {active === l.id && (
                    <span className="absolute inset-0 -z-10 rounded-full border border-white/15 bg-white/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]" />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden !px-5 !py-2 text-sm md:inline-flex">
              Hire Me
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="glass grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div
          className={`glass-strong mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl transition-all duration-500 lg:hidden ${
            open ? "max-h-[500px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <ul className="grid gap-1 p-3">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 font-medium ${
                    active === l.id ? "bg-white/10 text-white" : "text-[var(--muted)]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

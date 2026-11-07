"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import { Reveal, SpotlightCard } from "./ui";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [toast, setToast] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email";
    if (form.message.trim().length < 10) errs.message = "Message should be at least 10 characters";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // No backend: open the visitor's email client with the message pre-filled.
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setToast(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setToast(false), 4000);
  };

  const input =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-300/60 focus:bg-white/[0.07] focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]";

  const info = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great"
        subtitle="Have a project, idea or opportunity? My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="space-y-6 lg:col-span-2">
          {info.map(({ Icon, label, value, href }) => (
            <SpotlightCard key={label} className="flex items-center gap-4 p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 text-[#05060f]">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{label}</p>
                {href ? (
                  <a href={href} className="block truncate font-medium text-white hover:text-cyan-300">
                    {value}
                  </a>
                ) : (
                  <p className="font-medium text-white">{value}</p>
                )}
              </div>
            </SpotlightCard>
          ))}
          <div className="glass relative overflow-hidden rounded-3xl p-6">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/40 blur-2xl" />
            <p className="relative font-display text-lg text-white">
              Currently building at <span className="text-gradient font-semibold">{profile.org}</span>.
            </p>
            <p className="relative mt-2 text-sm text-[var(--muted)]">Response time: usually within 24–48 hours.</p>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="glass-strong gradient-border space-y-5 rounded-3xl p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <input className={input} placeholder="Your name" value={form.name} onChange={set("name")} aria-label="Name" />
                {errors.name && <p className="mt-1.5 text-sm text-pink-400">{errors.name}</p>}
              </div>
              <div>
                <input className={input} type="email" placeholder="Your email" value={form.email} onChange={set("email")} aria-label="Email" />
                {errors.email && <p className="mt-1.5 text-sm text-pink-400">{errors.email}</p>}
              </div>
            </div>
            <input className={input} placeholder="Subject" value={form.subject} onChange={set("subject")} aria-label="Subject" />
            <div>
              <textarea
                className={`${input} min-h-40 resize-y`}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={set("message")}
                aria-label="Message"
              />
              {errors.message && <p className="mt-1.5 text-sm text-pink-400">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>

      {/* toast */}
      <div
        role="status"
        className={`glass-strong fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl px-5 py-4 text-white transition-all duration-500 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
        Opening your email app — thanks for reaching out!
      </div>
    </section>
  );
}

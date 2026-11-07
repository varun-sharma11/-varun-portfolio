/** Fixed futuristic backdrop: gradient orbs, grid and noise vignette. */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1b1446_0%,#05060f_60%)]" />
      <div className="orb left-[-10%] top-[-10%] h-[520px] w-[520px] bg-cyan-500/50" />
      <div className="orb right-[-10%] top-[20%] h-[480px] w-[480px] bg-violet-600/60 [animation-delay:-6s]" />
      <div className="orb bottom-[-15%] left-[25%] h-[520px] w-[520px] bg-fuchsia-600/40 [animation-delay:-12s]" />
      <div className="bg-grid absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#05060f_100%)]" />
    </div>
  );
}

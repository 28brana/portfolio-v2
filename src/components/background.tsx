export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand)/0.18),transparent)] blur-3xl motion-reduce:animate-none" />
      <div className="absolute -top-20 left-[60%] h-[320px] w-[420px] animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-2)/0.12),transparent)] blur-3xl [animation-delay:-9s] motion-reduce:animate-none" />
    </div>
  );
}

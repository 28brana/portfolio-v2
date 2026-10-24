export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Two warm downlights, like the recessed ceiling lamps over the gallery wall. */}
      <div className="absolute -top-48 left-[30%] h-[560px] w-[420px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow)),transparent)] blur-3xl motion-reduce:animate-none" />
      <div className="absolute -top-56 left-[72%] h-[520px] w-[380px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow)),transparent)] blur-3xl [animation-delay:-9s] motion-reduce:animate-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[hsl(var(--frame)/0.06)] to-transparent dark:from-black/30" />
      <div className="bg-grain absolute inset-0" />
    </div>
  );
}

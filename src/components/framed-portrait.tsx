import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

// A matted gallery print: walnut frame, cream mat, 4:5 photo. Starts black &
// white like the prints on the wall, and develops into colour on hover.
export function FramedPortrait({ src, alt, caption, className }: Props) {
  return (
    <figure className={cn("group w-fit", className)}>
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(closest-side,hsl(var(--glow)),transparent)] opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="rotate-[1.5deg] rounded-[3px] bg-frame p-2 shadow-[0_24px_48px_-16px_rgba(20,10,4,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-500 ease-out group-hover:rotate-0 motion-reduce:rotate-0 motion-reduce:transition-none">
          <div className="bg-mat p-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08),inset_0_2px_6px_rgba(0,0,0,0.12)] sm:p-4">
            <div className="relative aspect-[4/5] w-44 overflow-hidden bg-frame sm:w-52">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="(min-width: 640px) 208px, 176px"
                className="object-cover object-center grayscale contrast-[1.1] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:contrast-100"
              />
            </div>
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

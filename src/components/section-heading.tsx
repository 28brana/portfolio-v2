import { cn } from "@/lib/utils";

interface Props {
  index: string;
  label: string;
  title?: string;
  description?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  index,
  label,
  title,
  description,
  className,
}: Props) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="text-brand">{index}</span>
        <span>{label}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-pretty text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

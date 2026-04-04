import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-accent text-foreground font-heading text-[10px] tracking-[1px] uppercase",
        className
      )}
    >
      <span className="size-1 bg-black" />
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "with-dot" | "status";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-[10px] tracking-[1px] uppercase",
        variant === "default" && "bg-accent text-foreground",
        variant === "with-dot" && "bg-[rgba(227,227,222,0.5)] text-[#474747]",
        variant === "status" && "bg-cream-dark text-foreground font-bold",
        className
      )}
    >
      {(variant === "with-dot" || variant === "status") && (
        <span className="size-1 bg-black rounded-none" />
      )}
      {children}
    </span>
  );
}

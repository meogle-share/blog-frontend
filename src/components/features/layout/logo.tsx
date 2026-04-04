import Link from "next/link";

interface LogoProps {
  size?: "sm" | "default";
}

export function Logo({ size = "default" }: LogoProps) {
  const textClass =
    size === "sm"
      ? "text-[16px] tracking-[-0.8px]"
      : "text-[20px] tracking-[-1px]";

  return (
    <Link href="/" className="font-heading font-bold leading-[28px]">
      <span className={`${textClass} text-foreground uppercase`}>CURATOR</span>
    </Link>
  );
}

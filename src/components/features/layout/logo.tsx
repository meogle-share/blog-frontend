import Link from "next/link";

interface LogoProps {
  size?: "sm" | "default";
}

export function Logo({ size = "default" }: LogoProps) {
  if (size === "sm") {
    return (
      <Link href="/" className="inline-flex items-center gap-2">
        {/* 골드 아이콘 박스 */}
        <div
          className="flex items-center justify-center w-7 h-7 flex-shrink-0"
          style={{
            background: "var(--accent)",
            border: "2px solid var(--border)",
            boxShadow: "2px 2px 0 var(--border)",
          }}
        >
          <span
            className="font-pixel text-[11px] text-foreground leading-none select-none"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            ★
          </span>
        </div>
        <span
          className="font-pixel text-[9px] leading-none"
          style={{
            color: "var(--foreground)",
            fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
          }}
        >
          MEOGLE
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      {/* 골드 아이콘 박스 */}
      <div
        className="flex items-center justify-center w-10 h-10 flex-shrink-0"
        style={{
          background: "var(--accent)",
          border: "2px solid rgba(0,0,0,0.5)",
          boxShadow: "2px 2px 0 rgba(0,0,0,0.4)",
        }}
      >
        <span
          className="font-pixel text-[16px] leading-none text-foreground select-none"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          ★
        </span>
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col gap-0.5">
        <span
          className="font-pixel text-[12px] leading-none tracking-wider"
          style={{
            color: "#f2eacc",
            fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
          }}
        >
          MEOGLE
        </span>
        <span
          className="font-pixel text-[8px] leading-none opacity-80"
          style={{
            color: "rgba(242,234,204,0.75)",
            fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
          }}
        >
          에세이 퀘스트
        </span>
      </div>
    </Link>
  );
}

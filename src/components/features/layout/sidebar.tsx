"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mockCategories } from "@/lib/mock-data";

const categoryColors: Record<string, string> = {
  art: "#6a1a80",
  technology: "#1a4080",
  design: "#c4a020",
  culture: "#206020",
  philosophy: "#803020",
};

const categoryEmoji: Record<string, string> = {
  palette: "🎨",
  cpu: "💻",
  "pen-tool": "✏️",
  globe: "🌐",
  "book-open": "📖",
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex fixed left-0 top-[var(--header-height)] bottom-0 w-[var(--sidebar-width)] flex-col z-40"
      style={{
        background: "var(--muted)",
        borderRight: "3px solid var(--border)",
      }}
    >
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* 카테고리 헤더 */}
        <div
          className="px-4 py-3"
          style={{ borderBottom: "2px solid var(--border)", background: "var(--card)" }}
        >
          <p
            className="font-pixel text-[9px] text-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            ▶ 카테고리
          </p>
        </div>

        {/* 카테고리 목록 */}
        <nav className="flex flex-col">
          {mockCategories.map((cat) => {
            const isActive = pathname.includes(`/category/${cat.slug}`);
            const color = categoryColors[cat.slug] ?? "var(--primary)";

            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="flex items-center gap-3 px-4 py-3 relative"
                style={{
                  borderBottom: "1px solid rgba(42,26,0,0.15)",
                  background: isActive ? "var(--card)" : "transparent",
                  transition: "none",
                  borderLeft: isActive ? `4px solid ${color}` : "4px solid transparent",
                }}
              >
                {/* 카테고리 컬러 아이콘 박스 */}
                <div
                  className="flex items-center justify-center w-6 h-6 flex-shrink-0 text-[12px]"
                  style={{
                    background: color,
                    border: "2px solid var(--border)",
                  }}
                >
                  {categoryEmoji[cat.icon || ""] || "📌"}
                </div>

                <span
                  className="font-pixel text-[8px] leading-none"
                  style={{
                    color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                    fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
                  }}
                >
                  {cat.name}
                </span>

                {isActive && (
                  <span
                    className="ml-auto font-pixel text-[8px]"
                    style={{
                      color: color,
                      fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
                    }}
                  >
                    ◀
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* 플레이어 스탯 */}
        <div className="mx-4 mt-6">
          <div
            className="p-4"
            style={{ background: "var(--card)", border: "2px solid var(--border)", boxShadow: "2px 2px 0 var(--border)" }}
          >
            <p
              className="font-pixel text-[8px] text-foreground mb-4"
              style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
            >
              ── 플레이어 스탯
            </p>

            {/* 읽은 포스트 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-pixel text-[7px] text-muted-foreground">읽음</span>
                <span className="font-pixel text-[7px] text-foreground">42</span>
              </div>
              <div style={{ height: "8px", background: "var(--muted)", border: "2px solid var(--border)" }}>
                <div style={{ height: "100%", width: "60%", background: "var(--status-active)" }} />
              </div>
            </div>

            {/* 좋아요 */}
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="font-pixel text-[7px] text-muted-foreground">좋아요</span>
                <span className="font-pixel text-[7px] text-foreground">128</span>
              </div>
              <div style={{ height: "8px", background: "var(--muted)", border: "2px solid var(--border)" }}>
                <div style={{ height: "100%", width: "80%", background: "#c03020" }} />
              </div>
            </div>
          </div>
        </div>

        {/* 구독 버튼 */}
        <div className="px-4 mt-4 mb-6">
          <button
            className="pixel-btn-primary w-full py-3 font-pixel text-[8px] tracking-wider"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            ▶ 인벤토리
          </button>
        </div>
      </div>
    </aside>
  );
}

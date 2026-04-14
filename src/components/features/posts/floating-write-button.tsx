"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

export function FloatingWriteButton() {
  const user = useAuthStore((s) => s.user);
  const isLoading = useAuthStore((s) => s.isLoading);
  const pathname = usePathname();

  if (
    isLoading ||
    !user ||
    pathname.startsWith("/posts/create") ||
    pathname.match(/^\/posts\/[^/]+\/edit$/)
  )
    return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* 인벤토리 버튼 (좌측) */}
      <div className="flex items-center gap-2">
        <Link
          href="/posts"
          className="pixel-btn font-pixel text-[8px] px-4 py-3"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          인벤토리
        </Link>

        {/* 새 퀘스트 버튼 (우측) */}
        <Link
          href="/posts/create"
          className="pixel-btn-primary font-pixel text-[8px] px-4 py-3"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          aria-label="새 글 작성"
        >
          ▶ 새 퀘스트 시작
        </Link>
      </div>
    </div>
  );
}

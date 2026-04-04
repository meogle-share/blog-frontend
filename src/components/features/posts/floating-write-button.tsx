"use client";

import { Pencil } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

export function FloatingWriteButton() {
  const user = useAuthStore((s) => s.user);
  const isLoading = useAuthStore((s) => s.isLoading);
  const pathname = usePathname();

  if (isLoading || !user || pathname.startsWith("/posts/create") || pathname.match(/^\/posts\/[^/]+\/edit$/)) return null;

  return (
    <Link
      href="/posts/create"
      className="fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      aria-label="새 글 작성"
    >
      <Pencil className="h-6 w-6" />
    </Link>
  );
}
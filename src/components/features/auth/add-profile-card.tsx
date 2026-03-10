"use client"

import { Plus } from "lucide-react"

export function AddProfileCard() {
  return (
    <button
      type="button"
      className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-transparent transition-colors hover:border-primary hover:bg-muted/50"
      onClick={() => alert("프로필 추가 기능은 API 연동 후 구현됩니다.")}
    >
      <Plus className="size-12 text-muted-foreground" />
      <span className="mt-2 text-lg font-medium">프로필 추가</span>
    </button>
  )
}

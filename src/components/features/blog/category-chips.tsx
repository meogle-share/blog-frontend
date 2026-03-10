"use client"

import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import type { Category } from "@/types"

interface CategoryChipsProps {
  categories: Category[]
}

export function CategoryChips({ categories }: CategoryChipsProps) {
  const searchParams = useSearchParams()
  const selected = searchParams.get("category") ?? "all"

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = selected === cat.slug
        return (
          <a
            key={cat.id}
            href={`?category=${cat.slug}`}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            )}
          >
            {cat.name} ({cat.count})
          </a>
        )
      })}
    </div>
  )
}

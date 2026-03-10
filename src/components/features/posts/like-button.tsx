"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  initialCount: number
  initialLiked?: boolean
  className?: string
}

export function LikeButton({
  initialCount,
  initialLiked = false,
  className,
}: LikeButtonProps) {
  const [count, setCount] = useState(initialCount)
  const [liked, setLiked] = useState(initialLiked)

  return (
    <button
      type="button"
      onClick={() => {
        setLiked((prev) => !prev)
        setCount((prev) => (liked ? prev - 1 : prev + 1))
      }}
      className={cn(
        "flex items-center gap-2 rounded-lg px-4 py-2 transition-colors hover:bg-muted",
        className
      )}
    >
      <Heart
        className={cn("size-5", liked ? "fill-destructive text-destructive" : "text-muted-foreground")}
      />
      <span className="text-sm font-medium">{count}</span>
    </button>
  )
}

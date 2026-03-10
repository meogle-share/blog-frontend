"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CommentFormProps {
  postId: number
  parentId?: number
}

export function CommentForm({ postId: _postId }: CommentFormProps) {
  const [content, setContent] = useState("")

  return (
    <form
      className="mt-4 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        alert("API 연동 후 댓글 작성이 가능합니다.")
        setContent("")
      }}
    >
      <input
        type="text"
        placeholder="댓글을 입력하세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 rounded-lg border bg-input/50 px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
      />
      <Button type="submit" disabled={!content.trim()}>
        작성
      </Button>
    </form>
  )
}

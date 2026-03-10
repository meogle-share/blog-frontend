import Image from "next/image"
import { Heart } from "lucide-react"
import type { Comment } from "@/types"

interface CommentItemProps {
  comment: Comment
}

export function CommentItem({ comment }: CommentItemProps) {
  return (
    <li>
      <div className="flex gap-3">
        {comment.authorAvatar ? (
          <Image
            src={comment.authorAvatar}
            alt={comment.author}
            width={40}
            height={40}
            className="size-10 shrink-0 rounded-full"
            unoptimized
          />
        ) : (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium">
            {comment.author[0]}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium">{comment.author}</span>
            <span className="text-sm text-muted-foreground">
              {new Date(comment.createdAt).toLocaleDateString("ko-KR")}
            </span>
          </div>
          <p className="mt-1 text-sm">{comment.content}</p>
          <div className="mt-2 flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <Heart className="size-4" />
              {comment.likes}
            </button>
            <button
              type="button"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              답글
            </button>
          </div>
        </div>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <ul className="mt-4 space-y-4 pl-12">
          {comment.replies.map((reply) => (
            <li key={reply.id} className="border-l-2 border-muted pl-4">
              <CommentItem comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

import { MessageCircle } from "lucide-react"
import { CommentItem } from "./comment-item"
import { CommentForm } from "./comment-form"
import { EmptyState } from "../blog/empty-state"
import type { Comment } from "@/types"

interface CommentListProps {
  postId: number
  comments: Comment[]
}

export function CommentList({ postId, comments }: CommentListProps) {
  return (
    <section className="card-base mt-12 p-6">
      <h3 className="text-xl font-bold">
        댓글 {comments.reduce((acc, c) => acc + 1 + (c.replies?.length ?? 0), 0)}
      </h3>

      <CommentForm postId={postId} />

      {comments.length > 0 ? (
        <ul className="mt-6 space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      ) : (
        <EmptyState
          message="첫 번째 댓글을 남겨보세요!"
          icon={MessageCircle}
        />
      )}
    </section>
  )
}

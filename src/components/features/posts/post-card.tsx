import Link from "next/link"
import Image from "next/image"
import { Calendar, Eye, MessageCircle } from "lucide-react"
import { getCategoryColor } from "@/lib/category-colors"
import type { Post } from "@/types"

interface PostCardProps {
  post: Post
  username: string
}

export function PostCard({ post, username }: PostCardProps) {
  const { bg, text } = getCategoryColor(post.category)

  return (
    <Link
      href={`/${username}/posts/${post.slug}`}
      className="card-base overflow-hidden transition-shadow hover:shadow-md"
    >
      {post.thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />
        </div>
      )}
      <div className="flex flex-col gap-3 p-4">
        <span
          className="w-fit rounded-md px-2 py-0.5 text-xs font-medium capitalize"
          style={{ backgroundColor: bg, color: text }}
        >
          {post.category}
        </span>
        <h3 className="line-clamp-2 text-lg font-bold">{post.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="size-3.5" />
            {post.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="size-3.5" />
            {post.views.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="size-3.5" />
            {post.commentCount}
          </span>
        </div>
      </div>
    </Link>
  )
}

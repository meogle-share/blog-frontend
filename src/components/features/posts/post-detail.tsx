import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Eye, MessageCircle, Share2 } from "lucide-react"
import { getCategoryColor } from "@/lib/category-colors"
import { Button } from "@/components/ui/button"
import { LikeButton } from "./like-button"
import { CommentList } from "../comments/comment-list"
import type { Post, Comment } from "@/types"

interface PostDetailProps {
  post: Post
  username: string
  comments?: Comment[]
}

export function PostDetail({ post, username, comments = [] }: PostDetailProps) {
  const { bg, text } = getCategoryColor(post.category)

  return (
    <article>
      <Link
        href={`/${username}`}
        className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        목록으로
      </Link>

      <span
        className="inline-block rounded-md px-2 py-1 text-sm font-medium capitalize"
        style={{ backgroundColor: bg, color: text }}
      >
        {post.category}
      </span>

      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-medium">
            {post.author[0]}
          </div>
          개발자 {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="size-4" />
          {post.publishedAt}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="size-4" />
          {post.views.toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle className="size-4" />
          {post.commentCount}
        </span>
        <LikeButton initialCount={post.likes} className="ml-auto" />
        <Button variant="outline" size="sm">
          <Share2 className="size-4" />
          공유하기
        </Button>
      </div>

      {post.thumbnail && (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      )}

      <div className="prose prose-neutral mt-8 dark:prose-invert">
        <MarkdownContent content={post.content} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground"
          >
            #{tag}
          </span>
        ))}
      </div>

      <CommentList postId={post.id} comments={comments} />
    </article>
  )
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="whitespace-pre-wrap text-base leading-7">
      {content.split("\n").map((line, i) => {
        if (line.startsWith("# ")) {
          return (
            <h2 key={i} className="mt-8 text-2xl font-bold">
              {line.slice(2)}
            </h2>
          )
        }
        if (line.startsWith("## ")) {
          return (
            <h3 key={i} className="mt-6 text-xl font-semibold">
              {line.slice(3)}
            </h3>
          )
        }
        if (line.startsWith("### ")) {
          return (
            <h4 key={i} className="mt-4 text-lg font-semibold">
              {line.slice(4)}
            </h4>
          )
        }
        if (line.startsWith("- ")) {
          return (
            <li key={i} className="ml-6 list-disc">
              {line.slice(2)}
            </li>
          )
        }
        if (line.startsWith("```")) {
          return null
        }
        if (line.match(/^\[.+\]\(.+\)$/)) {
          const match = line.match(/\[(.+)\]\((.+)\)/)
          if (match) {
            return (
              <p key={i} className="mb-4">
                <a
                  href={match[2]}
                  className="text-link underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {match[1]}
                </a>
              </p>
            )
          }
        }
        if (line.trim()) {
          return (
            <p key={i} className="mb-4">
              {line}
            </p>
          )
        }
        return <br key={i} />
      })}
    </div>
  )
}

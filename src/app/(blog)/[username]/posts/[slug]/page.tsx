import { notFound } from "next/navigation"
import { PostDetail } from "@/components/features/posts/post-detail"
import {
  DUMMY_PROFILES,
  DUMMY_POSTS,
  DUMMY_COMMENTS,
} from "@/lib/dummy-data"

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ username: string; slug: string }>
}) {
  const { username, slug } = await params

  const profile = DUMMY_PROFILES.find((p) => p.username === username)
  const post = DUMMY_POSTS.find(
    (p) => p.authorUsername === username && p.slug === slug
  )
  const comments = DUMMY_COMMENTS.filter((c) => post?.id === c.postId)

  if (!profile || !post) {
    notFound()
  }

  return (
    <div className="layout-blog-main">
      <PostDetail post={post} username={username} comments={comments} />
    </div>
  )
}

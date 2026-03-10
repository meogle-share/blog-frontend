import { PostCard } from "@/components/features/posts/post-card"
import { EmptyState } from "@/components/features/blog/empty-state"
import { DUMMY_PROFILES, DUMMY_POSTS } from "@/lib/dummy-data"

export default async function LikedPostsPage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params

  const profile = DUMMY_PROFILES.find((p) => p.username === username)
  if (!profile) return null

  const likedPostIds = [1, 2]
  const likedPosts = DUMMY_POSTS.filter(
    (p) => p.authorUsername === username && likedPostIds.includes(p.id)
  )

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">좋아요한 글</h1>
      {likedPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {likedPosts.map((post) => (
            <PostCard key={post.id} post={post} username={username} />
          ))}
        </div>
      ) : (
        <EmptyState message="아직 좋아요한 글이 없습니다." />
      )}
    </div>
  )
}

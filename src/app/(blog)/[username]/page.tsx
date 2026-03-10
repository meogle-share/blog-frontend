import { Suspense } from "react"
import { IntroSection } from "@/components/features/blog/intro-section"
import { CategoryChips } from "@/components/features/blog/category-chips"
import { PostCard } from "@/components/features/posts/post-card"
import { EmptyState } from "@/components/features/blog/empty-state"
import {
  DUMMY_PROFILES,
  DUMMY_CATEGORIES,
  DUMMY_POSTS,
} from "@/lib/dummy-data"

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ username: string }>
  searchParams: Promise<{ category?: string; tag?: string }>
}) {
  const { username } = await params
  const { category, tag } = await searchParams

  const profile = DUMMY_PROFILES.find((p) => p.username === username)
  if (!profile) return null

  let posts = DUMMY_POSTS.filter((p) => p.authorUsername === username)
  if (category && category !== "all") {
    posts = posts.filter((p) => p.category === category)
  }
  if (tag) {
    posts = posts.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
  }

  const categoriesWithCount = DUMMY_CATEGORIES.map((c) => ({
    ...c,
    count: c.slug === "all" ? DUMMY_POSTS.filter((p) => p.authorUsername === username).length : DUMMY_POSTS.filter((p) => p.authorUsername === username && p.category === c.slug).length,
  }))

  return (
    <div>
      <IntroSection profile={profile} />

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold"># 카테고리</h2>
        <Suspense fallback={<div className="h-10" />}>
          <CategoryChips categories={categoriesWithCount} />
        </Suspense>
      </section>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} username={username} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}

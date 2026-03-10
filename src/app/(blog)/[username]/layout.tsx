import { Header } from "@/components/features/layout/header"
import { Sidebar } from "@/components/features/layout/sidebar"
import {
  DUMMY_PROFILES,
  DUMMY_CATEGORIES,
  DUMMY_POSTS,
  DUMMY_TAGS,
} from "@/lib/dummy-data"

export default async function UsernameLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ username: string }>
}) {
  const { username } = await params

  const profile = DUMMY_PROFILES.find((p) => p.username === username)
  const userPosts = DUMMY_POSTS.filter((p) => p.authorUsername === username)
  const popularPosts = [...userPosts].sort((a, b) => b.likes - a.likes).slice(0, 5)

  const categoriesWithCount = DUMMY_CATEGORIES.map((c) => ({
    ...c,
    count: c.slug === "all" ? userPosts.length : userPosts.filter((p) => p.category === c.slug).length,
  }))

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>프로필을 찾을 수 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header user={profile} currentUsername={username} />
      <div className="container-global layout-blog py-6">
        <main className="layout-blog-main">{children}</main>
        <Sidebar
          profile={profile}
          categories={categoriesWithCount}
          popularPosts={popularPosts}
          tags={DUMMY_TAGS}
        />
      </div>
    </div>
  )
}

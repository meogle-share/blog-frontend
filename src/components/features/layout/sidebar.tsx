import Link from "next/link"
import Image from "next/image"
import type { Profile, Post, Category } from "@/types"

interface SidebarProps {
  profile: Profile
  categories: Category[]
  popularPosts: Post[]
  tags: string[]
}

export function Sidebar({
  profile,
  categories,
  popularPosts,
  tags,
}: SidebarProps) {
  return (
    <aside className="layout-blog-sidebar space-y-6">
      <section className="card-base p-6">
        <div className="flex flex-col items-center text-center">
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={80}
              height={80}
              className="rounded-full"
              unoptimized
            />
          ) : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-2xl font-bold">
              {profile.name[0]}
            </div>
          )}
          <h3 className="mt-3 text-lg font-bold">{profile.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.description}
          </p>
          <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
            <span>{profile.postCount} 글</span>
            <span>{profile.visitCount.toLocaleString()} 방문</span>
          </div>
        </div>
      </section>

      <section className="card-base p-6">
        <h3 className="text-lg font-bold">카테고리</h3>
        <ul className="mt-4 space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`?category=${cat.slug}`}
                className="flex justify-between text-sm hover:text-primary"
              >
                <span>{cat.name}</span>
                <span className="text-muted-foreground">{cat.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="card-base p-6">
        <h3 className="text-lg font-bold">인기글</h3>
        <ol className="mt-4 space-y-3">
          {popularPosts.map((post, i) => (
            <li key={post.id}>
              <Link
                href={`/${profile.username}/posts/${post.slug}`}
                className="flex items-start gap-3"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{post.title}</p>
                  <p className="text-xs text-muted-foreground">
                    조회 {post.views.toLocaleString()}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {tags.length > 0 && (
        <section className="card-base p-6">
          <h3 className="text-lg font-bold">태그</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`?tag=${encodeURIComponent(tag)}`}
                className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>
      )}
    </aside>
  )
}

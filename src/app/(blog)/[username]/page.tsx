import { Sidebar } from "@/components/features/layout/sidebar";
import { ProfileHeader } from "@/components/features/blog/profile-header";
import { PostList } from "@/components/features/posts/post-list";
import { getUserByUsername, getPostsByAuthor } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = getUserByUsername(username);

  if (!user) {
    notFound();
  }

  const posts = getPostsByAuthor(username);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:pl-[var(--sidebar-width)]">
        <ProfileHeader user={user} />
        <div className="px-8 py-20">
          <PostList posts={posts} username={username} />
        </div>
      </div>
    </div>
  );
}

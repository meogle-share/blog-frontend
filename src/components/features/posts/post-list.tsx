import type { Post } from "@/types";
import { PostItem } from "./post-item";

interface PostListProps {
  posts: Post[];
  username: string;
}

export function PostList({ posts, username }: PostListProps) {
  return (
    <section className="w-full max-w-[640px] mx-auto flex flex-col gap-16">
      {/* Section Header */}
      <div className="flex items-baseline justify-between border-b border-[rgba(198,198,198,0.1)] pb-4">
        <h2 className="text-[24px] font-bold tracking-[-0.6px]">
          Recent Essays
        </h2>
        <span className="text-[12px] text-muted-foreground">
          Vol. 04 — 2024
        </span>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-24">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} username={username} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-16">
        <div className="flex flex-col items-center gap-4">
          <button className="text-[10px] text-muted-foreground tracking-[1px] uppercase hover:text-foreground transition-colors">
            Load Archive
          </button>
          <div className="w-px h-12 bg-[rgba(198,198,198,0.3)]" />
        </div>
      </div>
    </section>
  );
}

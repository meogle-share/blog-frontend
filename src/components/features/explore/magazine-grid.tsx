import { mockPosts } from "@/lib/mock-data";
import { FeaturedCard } from "./featured-card";

export function MagazineGrid() {
  const posts = mockPosts;

  return (
    <section className="px-8 pb-20 max-w-[1280px] mx-auto">
      {/* Row 1: Large + Small */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {posts[0] && <FeaturedCard post={posts[0]} size="large" />}
        <div className="flex flex-col gap-8">
          {posts[1] && <FeaturedCard post={posts[1]} size="small" />}
          {posts[2] && <FeaturedCard post={posts[2]} size="small" />}
        </div>
      </div>

      {/* Row 2: Three equal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts.slice(3, 6).map((post) => (
          <FeaturedCard key={post.id} post={post} size="medium" />
        ))}
      </div>
    </section>
  );
}

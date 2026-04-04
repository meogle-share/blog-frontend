import { ArchiveHero } from "@/components/features/explore/archive-hero";
import { AuthorCard } from "@/components/features/explore/author-card";
import { FeaturedPreview } from "@/components/features/explore/featured-preview";
import { mockAuthors, mockPosts } from "@/lib/mock-data";

export default function ArchivePage() {
  const featuredPost = mockPosts[3];

  return (
    <div className="min-h-screen">
      <ArchiveHero />

      {/* Authors Grid */}
      <section className="px-8 pb-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockAuthors.map((author) => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </section>

      {/* Featured Preview */}
      {featuredPost && (
        <section className="px-8 pb-16 max-w-[1280px] mx-auto">
          <div className="border-t border-dashed border-[rgba(198,198,198,0.3)] pt-16">
            <p className="text-[10px] text-muted-foreground tracking-[1px] uppercase mb-6">
              이번 주 가장 많이 읽은 에세이
            </p>
            <FeaturedPreview post={featuredPost} engagementCount={99} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-8 pb-20 max-w-[1280px] mx-auto text-center">
        <button className="border border-foreground text-foreground px-8 py-3 rounded-[2px] text-[12px] tracking-[1px] uppercase hover:bg-foreground hover:text-background transition-colors">
          큐레이터 더 보기
        </button>
      </section>
    </div>
  );
}

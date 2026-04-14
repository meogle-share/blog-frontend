import { mockPosts } from "@/lib/mock-data";
import { FeaturedCard } from "./featured-card";

export function MagazineGrid() {
  const posts = mockPosts;

  return (
    <section className="px-6 pb-20 max-w-[1280px] mx-auto">
      {/* 검색 바 */}
      <div
        className="flex items-center gap-3 px-4 py-3 mb-5"
        style={{
          background: "var(--card)",
          border: "3px solid var(--border)",
          boxShadow: "3px 3px 0 var(--border)",
        }}
      >
        <span
          className="font-pixel text-[10px] text-muted-foreground"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          ⊙
        </span>
        <span
          className="font-content text-[14px] text-muted-foreground"
          style={{ fontFamily: "Pretendard Variable, Pretendard, sans-serif" }}
        >
          제목、작가、카테고리 검색...
        </span>
      </div>

      {/* 필터 뱃지 */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          className="pixel-btn-primary font-pixel text-[8px] px-3 py-2"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          전체 X{posts.length}
        </button>
        {[
          { label: "기술", count: 2, cls: "badge-active" },
          { label: "예술", count: 1, cls: "badge", style: { background: "#6a1a80", color: "#f0e8cc" } },
          { label: "문화", count: 2, cls: "badge-complete" },
          { label: "철학", count: 1, cls: "badge-failed" },
        ].map((f) => (
          <button
            key={f.label}
            className={`badge ${f.cls} cursor-pointer`}
            style={{ padding: "8px 12px", cursor: "pointer", ...f.style }}
          >
            {f.label} X{f.count}
          </button>
        ))}
      </div>

      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="font-pixel text-[9px] text-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            ▶ 퀘스트 목록
          </span>
          <span
            className="font-pixel text-[9px] text-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            《{posts.length}》
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="font-pixel text-[7px] text-muted-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            정렬 ▼ 최신순
          </span>
        </div>
      </div>

      {/* 퀘스트 카드 목록 */}
      <div className="flex flex-col">
        {posts.map((post) => (
          <FeaturedCard key={post.id} post={post} />
        ))}
      </div>

      {/* 더 보기 */}
      <div className="flex justify-center mt-6">
        <button
          className="pixel-btn font-pixel text-[9px] px-8 py-4"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          ▼ 더 많은 퀘스트 보기
        </button>
      </div>
    </section>
  );
}

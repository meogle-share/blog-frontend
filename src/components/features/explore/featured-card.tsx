import Link from "next/link";
import type { Post } from "@/types";

interface FeaturedCardProps {
  post: Post;
  size?: "large" | "medium" | "small";
  username?: string;
}

const categoryBadgeClass: Record<string, string> = {
  technology: "badge-active",
  art: "badge",
  design: "badge-pending",
  culture: "badge-complete",
  philosophy: "badge-failed",
};

const categoryStyle: Record<string, React.CSSProperties> = {
  art: { background: "#6a1a80", color: "#f0e8cc" },
};

// 좋아요 → 하트 표시 (최대 5개)
function HeartDisplay({ count }: { count: number }) {
  const filled = Math.min(count, 5);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="text-[14px] leading-none select-none"
          style={{ color: i < filled ? "#c03020" : "rgba(42,26,0,0.2)" }}
        >
          {i < filled ? "♥" : "♡"}
        </span>
      ))}
    </div>
  );
}

// POST-XXXXX 형식 ID
function formatPostId(id: number | string) {
  return `POST-${String(id).padStart(5, "0")}`;
}

export function FeaturedCard({
  post,
  username = "julian",
}: FeaturedCardProps) {
  const badgeClass = categoryBadgeClass[post.category?.toLowerCase()] ?? "badge";
  const badgeStyle = categoryStyle[post.category?.toLowerCase()] ?? {};

  return (
    <div
      className="quest-card mb-4"
      style={{ padding: "0" }}
    >
      {/* 상단: 체크박스 + 뱃지 + ID */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ borderBottom: "1px solid rgba(42,26,0,0.2)" }}
      >
        {/* 체크박스 */}
        <div className="quest-checkbox">
          <span style={{ fontSize: "10px", opacity: 0.3 }}></span>
        </div>

        {/* 카테고리 뱃지 */}
        <span className={`badge ${badgeClass}`} style={badgeStyle}>
          {post.category?.toUpperCase()}
        </span>

        {/* 주목 뱃지 (조회수 높은 포스트) */}
        {(post.views ?? 0) > 50 && (
          <span className="badge badge-urgent">
            🔥 주목
          </span>
        )}

        {/* 퀘스트 ID */}
        <span
          className="ml-auto font-pixel text-[8px] text-muted-foreground"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          {formatPostId(post.id)}
        </span>
      </div>

      {/* 본문 */}
      <div className="px-4 py-4">
        {/* 작가명 */}
        <p
          className="font-pixel text-[8px] text-muted-foreground mb-2"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          ▶ {post.author?.name ?? "Unknown"}
        </p>

        {/* 제목 */}
        <Link href={`/${username}/posts/${post.slug}`}>
          <h3
            className="font-content text-[18px] font-bold text-foreground leading-[1.4] mb-4 hover:text-primary"
            style={{
              fontFamily: "Pretendard Variable, Pretendard, sans-serif",
              transition: "none",
            }}
          >
            {post.title}
          </h3>
        </Link>

        {/* 하트 + 코인 */}
        <div className="flex items-center justify-between mb-4">
          <HeartDisplay count={post.likes ?? 0} />
          <span
            className="font-pixel text-[8px] text-muted-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            🔗 {post.views ?? 0}R
          </span>
        </div>

        {/* 메타 정보 */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-2">
          <span
            className="font-pixel text-[7px] text-muted-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            담당{" "}
            <span className="text-foreground">
              {post.author?.name ?? "미배정"}
            </span>
          </span>
          <span
            className="font-pixel text-[7px] text-muted-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            접수{" "}
            <span className="text-foreground">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("ko-KR", {
                    month: "2-digit",
                    day: "2-digit",
                  })
                : "—"}
            </span>
          </span>
        </div>

        {/* 읽기 시간 — 마감일처럼 표시 */}
        {post.readTime && (
          <p
            className="font-pixel text-[7px] mb-0"
            style={{
              color: "var(--status-urgent)",
              fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
            }}
          >
            예상 읽기 {post.readTime}분 소요
          </p>
        )}
      </div>

      {/* 구분선 */}
      <div className="pixel-divider mx-4" />

      {/* 하단: 요약 + 버튼 */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex-1 mr-4">
          <p
            className="font-pixel text-[8px] text-muted-foreground mb-1"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            ▶ 요약
          </p>
          {post.excerpt && (
            <p
              className="font-content text-[12px] text-muted-foreground leading-[1.6] line-clamp-1"
              style={{ fontFamily: "Pretendard Variable, Pretendard, sans-serif" }}
            >
              {post.excerpt}
            </p>
          )}
        </div>

        <Link
          href={`/${username}/posts/${post.slug}`}
          className="pixel-btn-primary font-pixel text-[8px] px-4 py-2.5 flex-shrink-0"
          style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
        >
          ▶ 읽기
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/types";

interface PostItemProps {
  post: Post;
  username: string;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
}

export function PostItem({ post, username }: PostItemProps) {
  return (
    <article className="flex flex-col gap-6">
      {/* Meta */}
      <div className="flex items-center gap-4">
        <span className="text-[12px] text-muted-foreground">
          {formatDate(post.publishedAt)}
        </span>
        <span className="size-1 rounded-full bg-[#c6c6c6]" />
        <span className="text-[12px] font-bold text-black uppercase">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[36px] font-bold tracking-[-0.9px] leading-[45px] text-foreground">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[16px] text-[#474747] leading-[26px] max-w-[672px]">
        {post.excerpt}
      </p>

      {/* Read Link */}
      <div className="pt-2">
        <Link
          href={`/${username}/posts/${post.slug}`}
          className="inline-flex items-center gap-2 text-[12px] font-bold text-black tracking-[1.2px] uppercase hover:opacity-70 transition-opacity"
        >
          Read Essay
          <ArrowRight className="size-[7.5px]" />
        </Link>
      </div>
    </article>
  );
}

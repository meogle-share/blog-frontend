import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";

interface FeaturedCardProps {
  post: Post;
  size?: "large" | "medium" | "small";
  username?: string;
}

export function FeaturedCard({
  post,
  size = "medium",
  username = "julian",
}: FeaturedCardProps) {
  const heightClass =
    size === "large"
      ? "h-[400px]"
      : size === "medium"
        ? "h-[280px]"
        : "h-[200px]";

  return (
    <Link
      href={`/${username}/posts/${post.slug}`}
      className="group flex flex-col gap-4"
    >
      {post.coverImage && (
        <div
          className={`${heightClass} relative rounded-[2px] overflow-hidden`}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover grayscale group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold tracking-[1px] uppercase text-muted-foreground">
          {post.category}
        </span>
        <h3
          className={`font-bold tracking-[-0.5px] leading-[1.2] ${size === "large" ? "text-[24px]" : "text-[18px]"}`}
        >
          {post.title}
        </h3>
        {size !== "small" && (
          <p className="text-[14px] text-[#474747] leading-[22px] line-clamp-2">
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

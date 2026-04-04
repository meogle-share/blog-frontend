import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";

interface FeaturedPreviewProps {
  post: Post;
  engagementCount?: number;
}

export function FeaturedPreview({
  post,
  engagementCount = 99,
}: FeaturedPreviewProps) {
  return (
    <Link
      href={`/julian/posts/${post.slug}`}
      className="group relative block rounded-[2px] overflow-hidden"
    >
      {post.coverImage && (
        <div className="h-[300px] relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover grayscale group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-white mix-blend-saturation" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-[10px] text-white/70 tracking-[1px] uppercase">
          {post.category}
        </span>
        <h3 className="text-white text-[20px] font-bold tracking-[-0.5px] leading-[1.2] mt-1">
          {post.title}
        </h3>
      </div>
      {engagementCount > 0 && (
        <div className="absolute top-4 right-4 bg-white rounded-[2px] px-3 py-2">
          <span className="font-heading font-bold text-[18px] text-foreground">
            {engagementCount}+
          </span>
        </div>
      )}
    </Link>
  );
}

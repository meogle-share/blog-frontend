import Image from "next/image";
import { Heart, Bookmark } from "lucide-react";
import type { User } from "@/types";

interface AuthorBarProps {
  author: User;
  readTime?: number;
}

export function AuthorBar({ author, readTime }: AuthorBarProps) {
  return (
    <div className="flex items-center justify-between border-y border-dashed border-[rgba(198,198,198,0.3)] py-6">
      <div className="flex items-center gap-4">
        <div className="size-10 rounded-[12px] overflow-hidden relative shrink-0">
          {author.avatar ? (
            <>
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-white mix-blend-saturation rounded-[12px]" />
            </>
          ) : (
            <div className="size-full bg-accent" />
          )}
        </div>
        <div>
          <p className="font-heading font-bold text-[12px] tracking-[0.3px] uppercase text-foreground">
            {author.name}
          </p>
          <p className="text-[10px] text-text-tertiary tracking-[0.5px] uppercase">
            {author.label || "Author"}
            {readTime && ` • ${readTime} Min Read`}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          className="p-1 text-foreground hover:opacity-70 transition-opacity"
          aria-label="좋아요"
        >
          <Heart className="size-[18px]" />
        </button>
        <button
          className="p-1 text-foreground hover:opacity-70 transition-opacity"
          aria-label="북마크"
        >
          <Bookmark className="size-[14px]" />
        </button>
      </div>
    </div>
  );
}

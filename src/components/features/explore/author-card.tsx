import Image from "next/image";
import Link from "next/link";
import type { User } from "@/types";

interface AuthorCardProps {
  author: User;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Link
      href={`/${author.username}`}
      className="group flex items-center gap-5 p-5 hover:bg-muted/50 transition-colors rounded-[2px]"
    >
      <div className="size-[100px] rounded-[2px] overflow-hidden relative shrink-0">
        {author.avatar ? (
          <>
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-white mix-blend-saturation" />
          </>
        ) : (
          <div className="size-full bg-accent" />
        )}
      </div>
      <div className="min-w-0">
        <p className="font-heading font-bold text-[16px] tracking-[0.3px] uppercase text-foreground truncate">
          {author.name}
        </p>
        <p className="text-[13px] text-text-tertiary tracking-[0.5px] uppercase truncate">
          {author.label}
        </p>
      </div>
    </Link>
  );
}

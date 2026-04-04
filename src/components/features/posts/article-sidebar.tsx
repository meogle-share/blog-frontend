import type { Post } from "@/types";

interface ArticleSidebarProps {
  post: Post;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleSidebar({ post }: ArticleSidebarProps) {
  const metadata = [
    { label: "Published", value: formatDate(post.publishedAt) },
    {
      label: "Reading Time",
      value: post.readTime ? `${post.readTime} Minutes` : undefined,
    },
    { label: "Series", value: post.series, isLink: true },
  ].filter((item) => item.value);

  return (
    <aside className="flex flex-col gap-12 pt-12">
      {metadata.map((item) => (
        <div key={item.label} className="flex flex-col gap-4">
          <p className="font-heading text-[10px] text-text-tertiary tracking-[2px] uppercase">
            {item.label}
          </p>
          {item.isLink ? (
            <p className="text-[12px] font-medium text-foreground underline decoration-[#c6c6c6]">
              {item.value}
            </p>
          ) : (
            <p className="text-[12px] font-medium text-foreground">
              {item.value}
            </p>
          )}
        </div>
      ))}
    </aside>
  );
}

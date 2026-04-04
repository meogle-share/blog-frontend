import { MessageSquare } from "lucide-react";
import { Tag } from "@/components/ui/tag";

interface ArticleFooterProps {
  tags: string[];
  commentCount?: number;
}

export function ArticleFooter({
  tags,
  commentCount = 0,
}: ArticleFooterProps) {
  return (
    <div className="border-t border-dashed border-[rgba(198,198,198,0.3)] pt-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
            <MessageSquare className="size-[15px]" />
            <span className="font-heading text-[12px] tracking-[1.2px] uppercase">
              댓글 {commentCount}개
            </span>
          </button>
          <button className="bg-black text-[#e4e2e1] px-6 py-2 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:bg-[#333] transition-colors">
            저널 구독하기
          </button>
        </div>
      </div>
    </div>
  );
}

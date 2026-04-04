"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function PostEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="max-w-[896px] mx-auto px-6">
      <div className="bg-white rounded-[6px] shadow-[0_32px_64px_-12px_rgba(26,28,25,0.06)] p-8 sm:p-20 flex flex-col gap-8 relative">
        {/* Header Meta */}
        <div className="flex items-center gap-4">
          <Badge variant="status">초안</Badge>
          <span className="text-[10px] text-text-tertiary tracking-[-0.25px]">
            최종 수정: 방금 전
          </span>
        </div>

        {/* Title Input */}
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="당신의 큐레이션을 시작하세요..."
          className="w-full text-[48px] font-bold tracking-[-1.2px] leading-[48px] resize-none border-none outline-none bg-transparent placeholder:text-[rgba(227,227,222,0.7)] min-h-[60px]"
          rows={1}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
          }}
        />

        {/* Feature Image Placeholder */}
        <div className="w-full border border-dashed border-[rgba(198,198,198,0.3)] rounded-[6px] bg-muted flex flex-col items-center justify-center py-20 gap-3 cursor-pointer hover:bg-accent transition-colors">
          <ImageIcon className="size-[27px] text-text-tertiary" />
          <span className="text-[10px] text-text-tertiary tracking-[0.5px] uppercase font-medium">
            커버 이미지 변경
          </span>
        </div>

        {/* Content Editor */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="이곳에 서사를 시작하세요. 여백이 당신의 생각을 담는 틀이 됩니다."
          className="w-full text-[18px] leading-[29.25px] resize-none border-none outline-none bg-transparent placeholder:text-[rgba(198,198,198,0.6)] min-h-[400px]"
        />

        {/* Tags Section */}
        <div className="border-t border-dashed border-[rgba(198,198,198,0.3)] pt-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-text-tertiary tracking-[-0.25px] font-medium">
              태그:
            </span>
            <div className="flex items-center gap-2">
              <span className="bg-muted px-2 py-1 text-[9px] font-medium tracking-[-0.225px] text-foreground">
                Minimalism
              </span>
              <span className="bg-muted px-2 py-1 text-[9px] font-medium tracking-[-0.225px] text-foreground">
                Editorial
              </span>
              <button className="text-[12px] text-text-tertiary hover:text-foreground transition-colors">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

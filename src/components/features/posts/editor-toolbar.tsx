"use client";

import {
  Bold,
  Italic,
  Strikethrough,
  Link,
  ImageIcon,
  Code,
  Quote,
} from "lucide-react";

const tools = [
  { icon: Bold, label: "굵게", group: 1 },
  { icon: Italic, label: "기울임", group: 1 },
  { icon: Strikethrough, label: "취소선", group: 1 },
  { icon: Link, label: "링크", group: 2 },
  { icon: ImageIcon, label: "이미지", group: 2 },
  { icon: Code, label: "코드", group: 3 },
  { icon: Quote, label: "인용", group: 3 },
];

export function EditorToolbar() {
  const groups = [1, 2, 3];

  return (
    <div className="sticky top-[calc(var(--header-height)+24px)] z-30 flex justify-center pb-12">
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-[6px] border border-dashed border-[rgba(198,198,198,0.3)] rounded-[4px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] px-4 py-2">
        {groups.map((group, gi) => (
          <div key={group} className="flex items-center">
            {gi > 0 && (
              <div className="w-px h-4 bg-[rgba(198,198,198,0.3)] mx-1" />
            )}
            {tools
              .filter((t) => t.group === group)
              .map((tool) => (
                <button
                  key={tool.label}
                  className="p-2 rounded-[2px] hover:bg-muted transition-colors"
                  aria-label={tool.label}
                  title={tool.label}
                >
                  <tool.icon className="size-[14px] text-foreground" />
                </button>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

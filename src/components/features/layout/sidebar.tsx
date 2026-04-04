"use client";

import Link from "next/link";
import {
  Palette,
  Cpu,
  PenTool,
  Globe,
  BookOpen,
} from "lucide-react";
import { mockCategories } from "@/lib/mock-data";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette className="size-[11px]" />,
  cpu: <Cpu className="size-[11px]" />,
  "pen-tool": <PenTool className="size-[11px]" />,
  globe: <Globe className="size-[11px]" />,
  "book-open": <BookOpen className="size-[11px]" />,
};

export function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-[var(--header-height)] bottom-0 w-[var(--sidebar-width)] bg-background border-r border-dashed border-[rgba(198,198,198,0.3)] flex-col gap-4 px-6 py-6 z-40">
      <div className="pb-8">
        <p className="text-[10px] font-bold tracking-[1px] uppercase text-foreground">
          Categories
        </p>
        <p className="text-[10px] text-text-secondary opacity-60">
          Browse by theme
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {mockCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="flex items-center gap-3 px-4 py-2 text-text-secondary hover:text-foreground transition-colors"
          >
            <span className="text-text-secondary">
              {iconMap[cat.icon || ""] || <BookOpen className="size-[11px]" />}
            </span>
            <span className="text-[10px] tracking-[1px] uppercase">
              {cat.name}
            </span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto">
        <button className="w-full bg-black text-[#e4e2e1] py-3 rounded-[2px] text-[10px] tracking-[1px] uppercase hover:bg-[#333] transition-colors">
          Subscribe
        </button>
      </div>
    </aside>
  );
}

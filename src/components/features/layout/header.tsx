"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { HeaderAuth } from "@/components/features/auth/header-auth";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "default" | "editor";
  children?: React.ReactNode;
}

const navLinks = [
  { href: "/people", label: "탐험" },
  { href: "/julian", label: "포스트" },
];

// HP hearts display
function HpHearts({ filled = 4, total = 5 }: { filled?: number; total?: number }) {
  return (
    <div
      className="hidden md:flex items-center gap-0.5 px-3 py-1"
      style={{ border: "2px solid rgba(255,255,255,0.35)" }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="font-pixel text-[14px] leading-none select-none"
          style={{
            color: i < filled ? "#e03020" : "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export function Header({ variant = "default", children }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "var(--primary)", borderBottom: "3px solid var(--border)" }}
    >
      <div className="flex items-center justify-between px-5 h-[61px]">
        {/* Left: Logo + Nav */}
        <div className="flex items-start gap-6">
          <Logo />

          {variant === "default" && (
            <nav
              className="hidden md:flex items-end gap-6 pb-1"
              style={{ alignSelf: "flex-end" }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-pixel text-[9px] leading-none tracking-wider",
                      isActive
                        ? "text-[#f2eacc]"
                        : "opacity-70 hover:opacity-100"
                    )}
                    style={{
                      color: isActive ? "#f2eacc" : "rgba(242,234,204,0.7)",
                      fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
                      transition: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}

          {variant === "editor" && (
            <div
              className="hidden md:flex items-end pb-1"
              style={{ alignSelf: "flex-end" }}
            >
              <span
                className="font-pixel text-[8px] opacity-70"
                style={{
                  color: "rgba(242,234,204,0.7)",
                  fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
                }}
              >
                [ 에디터 모드 ]
              </span>
            </div>
          )}
        </div>

        {/* Right: HP + Auth + Mobile menu */}
        <div className="flex items-center gap-3">
          {children}
          <HpHearts filled={4} total={5} />
          <HeaderAuth />
          <button
            className="md:hidden p-2"
            aria-label="메뉴"
            style={{ color: "#f2eacc" }}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

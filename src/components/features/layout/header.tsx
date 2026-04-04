"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "default" | "editor";
  children?: React.ReactNode;
}

const navLinks = [
  { href: "/julian", label: "Essays" },
  { href: "/archive", label: "Archive" },
  { href: "/manifesto", label: "Manifesto" },
];

export function Header({ variant = "default", children }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] bg-[rgba(250,250,245,0.8)]">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <Logo />
          {variant === "default" && (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-heading text-[16px] leading-[24px] tracking-[-0.4px] pb-1 transition-colors",
                      isActive
                        ? "text-foreground border-b border-foreground"
                        : "text-text-secondary hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}
          {variant === "editor" && (
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary text-[14px] tracking-[-0.35px] hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          {children}
          <button className="md:hidden p-2" aria-label="메뉴">
            <Menu className="size-5 text-foreground" />
          </button>
        </div>
      </div>
      <div className="h-px bg-muted w-full" />
    </header>
  );
}

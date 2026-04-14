import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = [
  { href: "/privacy", label: "개인정보" },
  { href: "/terms", label: "이용약관" },
  { href: "/rss", label: "RSS" },
  { href: "/contact", label: "문의" },
];

export function Footer() {
  return (
    <footer
      className="px-6 py-6"
      style={{
        background: "var(--muted)",
        borderTop: "3px solid var(--border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Logo + copyright */}
          <div className="flex flex-col gap-3">
            <Logo size="sm" />
            <p
              className="font-pixel text-[7px] text-muted-foreground"
              style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
            >
              (C) 2024 MEOGLE. ALL RIGHTS RESERVED.
            </p>
          </div>

          {/* Nav + CTA */}
          <div className="flex flex-col items-end gap-4">
            <nav className="hidden sm:flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-pixel text-[7px] text-muted-foreground hover:text-foreground"
                  style={{
                    fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
                    transition: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* 새 퀘스트 버튼 */}
            <Link
              href="/posts/create"
              className="pixel-btn-primary font-pixel text-[9px] px-5 py-3 tracking-wide"
              style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
            >
              ▶ 새 퀘스트 시작
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

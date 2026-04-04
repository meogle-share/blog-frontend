import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/rss", label: "RSS" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-muted border-t border-dashed border-[rgba(198,198,198,0.3)] px-8 py-12">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Logo size="sm" />
          <p className="text-[12px] text-text-secondary tracking-[0.3px]">
            &copy; 2024 CURATOR EDITORIAL
          </p>
        </div>
        <nav className="hidden sm:flex items-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary text-[12px] tracking-[0.3px] opacity-80 hover:opacity-100 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

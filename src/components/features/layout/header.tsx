"use client"

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Logo } from "./logo"
import type { Profile } from "@/types"

interface HeaderProps {
  user?: Profile | null
  currentUsername?: string
}

const NAV_ITEMS = [
  { label: "홈", href: "#" },
  { label: "Frontend", href: "#" },
  { label: "Backend", href: "#" },
  { label: "AI", href: "#" },
]

export function Header({ user, currentUsername }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card header-height">
      <div className="container-global flex h-full items-center justify-between gap-4">
        <Logo />

        <div className="hidden flex-1 items-center justify-center gap-4 md:flex">
          {user && (
            <Link
              href={currentUsername ? `/${currentUsername}` : "/profiles"}
              className="flex items-center gap-2"
            >
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                  unoptimized
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {user.name[0]}
                </div>
              )}
              <span className="text-sm font-medium">{user.name}</span>
            </Link>
          )}

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="검색어를 입력하세요..."
              className="w-full rounded-lg border bg-input/50 py-2 pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

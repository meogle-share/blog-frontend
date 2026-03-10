"use client"

import Link from "next/link"
import Image from "next/image"
import { LogOut } from "lucide-react"
interface AuthHeaderProps {
  user: { name: string; username: string; avatar?: string }
}

export function AuthHeader({ user }: AuthHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b bg-card px-6 py-4 header-height">
      <div className="flex items-center gap-3">
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-medium">
            {user.name[0]}
          </div>
        )}
        <div>
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-muted-foreground">@{user.username}</p>
        </div>
      </div>
      <Link
        href="/login"
        className="flex items-center gap-1 text-sm text-link hover:underline"
      >
        로그아웃
        <LogOut className="size-4" />
      </Link>
    </header>
  )
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, User as UserIcon } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";
import { GitHubIcon } from "./github-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function HeaderAuth() {
  const { user, isLoading, login, logout, initialize } = useAuthStore();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const handleGitHubLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);

    // TODO: Replace with real GitHub OAuth flow
    setTimeout(() => {
      login({
        id: "mock-user-1",
        name: "GitHub User",
        username: "julian",
        email: "user@example.com",
        avatarUrl: undefined,
      });
      setIsLoggingIn(false);
    }, 1000);
  };

  if (isLoading) {
    return <div className="size-8 animate-pulse rounded-full bg-muted" />;
  }

  if (!user) {
    return (
      <button
        onClick={handleGitHubLogin}
        disabled={isLoggingIn}
        className="hidden md:inline-flex items-center gap-1.5 bg-[#3A3A3A] text-white rounded-md h-6 px-2 text-[13px] leading-none font-medium cursor-pointer hover:bg-[#4A4A4A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoggingIn ? (
          <>
            <span className="size-3.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            로그인 중…
          </>
        ) : (
          <>
            <GitHubIcon className="size-3.5" />
            Login
          </>
        )}
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="hidden md:inline-flex rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
          aria-label="사용자 메뉴"
        >
          <Avatar>
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.name} />}
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>
          <span className="block truncate">{user.name}</span>
          <span className="block truncate text-[11px] font-normal text-muted-foreground">
            @{user.username}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/${user.username}`} className="cursor-pointer">
            <UserIcon />
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={logout} className="cursor-pointer">
          <LogOut />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
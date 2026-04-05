"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogOut, User as UserIcon } from "lucide-react";
import { useAuth } from "@/hooks/api/use-auth";
import { getGitHubLoginUrl } from "@/lib/api/auth";
import { GitHubIcon } from "./github-icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

type Toast = { message: string; visible: boolean } | null;

export function HeaderAuth() {
  const { user, isLoading, justLoggedIn, logout } = useAuth();
  const [toast, setToast] = useState<Toast>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = (message: string) => {
    clearTimeout(timerRef.current);
    setToast({ message, visible: true });
    timerRef.current = setTimeout(() => {
      setToast((prev) => (prev ? { ...prev, visible: false } : null));
      timerRef.current = setTimeout(() => setToast(null), 700);
    }, 1300);
  };

  useEffect(() => {
    if (justLoggedIn) showToast("Login :)");
  }, [justLoggedIn]);

  const handleLogout = async () => {
    await logout();
    showToast("Logout :(");
  };

  const handleGitHubLogin = () => {
    window.location.href = getGitHubLoginUrl();
  };

  if (isLoading) {
    return <div className="size-8 animate-pulse rounded-full bg-muted" />;
  }

  if (toast) {
    return (
      <span
        className={`hidden md:inline-flex text-[13px] text-muted-foreground transition-opacity duration-700 ${
          toast.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {toast.message}
      </span>
    );
  }

  if (!user) {
    return (
      <button
        onClick={handleGitHubLogin}
        className="hidden md:inline-flex items-center gap-1.5 bg-[#3A3A3A] text-white rounded-md h-6 px-2 text-[13px] leading-none font-medium cursor-pointer hover:bg-[#4A4A4A] transition-colors"
      >
        <GitHubIcon className="size-3.5" />
        Login
      </button>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="hidden md:inline-flex rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
          aria-label="사용자 메뉴"
        >
          <Avatar>
            <AvatarFallback>{getInitials(user.nickname)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>
          <span className="block truncate">{user.nickname}</span>
          <span className="block truncate text-[11px] font-normal text-muted-foreground">
            @{user.nickname}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/${user.nickname}`} className="cursor-pointer">
            <UserIcon />
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleLogout} className="cursor-pointer">
          <LogOut />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

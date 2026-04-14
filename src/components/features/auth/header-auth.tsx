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
    if (justLoggedIn) showToast("LOGIN :)");
  }, [justLoggedIn]);

  const handleLogout = async () => {
    await logout();
    showToast("LOGOUT :(");
  };

  const handleGitHubLogin = () => {
    window.location.href = getGitHubLoginUrl();
  };

  if (isLoading) {
    return (
      <div
        className="h-8 w-16 animate-pulse font-pixel text-[7px] flex items-center justify-center"
        style={{
          background: "rgba(242,234,204,0.2)",
          border: "2px solid rgba(242,234,204,0.4)",
          color: "rgba(242,234,204,0.6)",
          fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
        }}
      >
        ...
      </div>
    );
  }

  if (toast) {
    return (
      <span
        className="hidden md:inline-flex font-pixel text-[8px]"
        style={{
          color: "#f2eacc",
          opacity: toast.visible ? 1 : 0,
          fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
          transition: "none",
        }}
      >
        {toast.message}
      </span>
    );
  }

  if (!user) {
    return (
      <button
        onClick={handleGitHubLogin}
        className="hidden md:inline-flex items-center gap-2 font-pixel text-[8px] px-3 py-2 cursor-pointer"
        style={{
          background: "rgba(242,234,204,0.15)",
          border: "2px solid rgba(242,234,204,0.5)",
          boxShadow: "2px 2px 0 rgba(0,0,0,0.3)",
          color: "#f2eacc",
          fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
          transition: "none",
        }}
      >
        <GitHubIcon className="size-3.5" style={{ color: "#f2eacc" }} />
        LOGIN
      </button>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="hidden md:inline-flex outline-none cursor-pointer"
          aria-label="사용자 메뉴"
        >
          <Avatar
            style={{
              border: "2px solid rgba(242,234,204,0.6)",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.3)",
              background: "var(--accent)",
              width: "36px",
              height: "36px",
            }}
          >
            <AvatarFallback
              className="font-pixel text-[9px] text-foreground"
              style={{
                background: "var(--accent)",
                fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
              }}
            >
              {getInitials(user.username)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52"
        style={{
          background: "var(--card)",
          border: "3px solid var(--border)",
          boxShadow: "4px 4px 0 var(--border)",
          borderRadius: 0,
          fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
        }}
      >
        <DropdownMenuLabel className="py-3">
          <span
            className="block truncate font-pixel text-[9px] text-foreground"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            ▶ {user.username}
          </span>
          <span
            className="block truncate font-pixel text-[7px] text-muted-foreground mt-1"
            style={{ fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace" }}
          >
            @{user.username}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator
          style={{ background: "var(--border)", height: "2px", margin: 0 }}
        />

        <DropdownMenuItem asChild>
          <Link
            href={`/${user.username}`}
            className="cursor-pointer font-pixel text-[8px] text-foreground flex items-center gap-2 py-3 hover:bg-muted"
            style={{
              fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
              transition: "none",
              borderRadius: 0,
            }}
          >
            <UserIcon className="size-3.5 text-primary" />
            내 프로필
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator
          style={{ background: "var(--border)", height: "2px", margin: 0 }}
        />

        <DropdownMenuItem
          variant="destructive"
          onClick={handleLogout}
          className="cursor-pointer font-pixel text-[8px] flex items-center gap-2 py-3 hover:bg-muted"
          style={{
            fontFamily: "var(--font-pixel, 'Press Start 2P'), monospace",
            color: "var(--destructive)",
            transition: "none",
            borderRadius: 0,
          }}
        >
          <LogOut className="size-3.5" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

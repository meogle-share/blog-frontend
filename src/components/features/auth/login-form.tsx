'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { useAuthStore } from '@/stores/auth-store'

export function LoginForm() {
  const router = useRouter()
  const { user, isLoading: isAuthLoading, login, initialize } = useAuthStore()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  useEffect(() => {
    initialize()
  }, [initialize])

  useEffect(() => {
    if (!isAuthLoading && user) {
      router.replace('/profiles')
    }
  }, [isAuthLoading, user, router])

  const handleGitHubLogin = async () => {
    setIsLoggingIn(true)

    // Mock login — replace with real Supabase GitHub OAuth
    setTimeout(() => {
      login({
        id: 'mock-user-1',
        name: 'GitHub User',
        email: 'user@example.com',
        avatarUrl: undefined,
      })
    }, 1000)
  }

  if (isAuthLoading) {
    return null
  }

  if (user) {
    return null
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-auth px-4">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3">
            <span className="text-3xl font-bold text-white">Meogle</span>
          </div>
          <p className="text-xl text-muted-foreground">
            여러분의 개발 이야기를 공유하세요
          </p>
        </div>

        {/* Login Card */}
        <Card className="w-full shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">로그인</CardTitle>
            <CardDescription>
              GitHub 계정으로 간편하게 시작하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button
              className="h-12 w-full bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90"
              onClick={handleGitHubLogin}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <span className="flex items-center gap-2">
                  <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  로그인 중...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Github className="size-5" />
                  GitHub로 계속하기
                </span>
              )}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              로그인 시{' '}
              <span className="underline underline-offset-4">이용약관</span> 및{' '}
              <span className="underline underline-offset-4">
                개인정보처리방침
              </span>
              에 동의합니다.
            </p>
          </CardContent>
        </Card>

        {/* Info banner */}
        <div className="rounded-lg border border-border bg-card px-4 py-3 text-center text-sm text-muted-foreground">
          실제 GitHub 로그인은 Supabase 연동 후 활성화됩니다.
        </div>
      </div>
    </div>
  )
}

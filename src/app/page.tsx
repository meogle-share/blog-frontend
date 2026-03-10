import Link from "next/link"
import { Logo } from "@/components/features/layout/logo"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-auth px-4">
      <Logo className="text-3xl" />
      <p className="mt-4 text-muted-foreground">
        여러분의 개발 이야기를 공유하세요
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/login"
          className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
        >
          로그인
        </Link>
        <Link
          href="/profiles"
          className="rounded-lg border px-6 py-3 font-medium hover:bg-muted"
        >
          프로필 선택
        </Link>
        <Link
          href="/kimjinmyeong"
          className="rounded-lg border px-6 py-3 font-medium hover:bg-muted"
        >
          블로그 보기
        </Link>
      </div>
    </div>
  )
}

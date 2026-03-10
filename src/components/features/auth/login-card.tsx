import { Logo } from "../layout/logo"
import { GithubLoginButton } from "./github-login-button"

export function LoginCard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-auth px-4 py-12 safe-bottom">
      <div className="flex flex-col items-center gap-4 text-center">
        <Logo className="text-2xl" />
        <p className="text-muted-foreground">
          여러분의 개발 이야기를 공유하세요
        </p>
      </div>

      <div className="card-base mt-8 w-full max-w-md p-8">
        <h1 className="text-2xl font-bold">로그인</h1>
        <p className="mt-2 text-muted-foreground">
          GitHub 계정으로 간편하게 시작하세요
        </p>
        <div className="mt-6">
          <GithubLoginButton />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          로그인하면 서비스 이용약관 및 개인정보 보호정책에 동의하게 됩니다.
        </p>
      </div>

      <p className="mt-6 flex items-center gap-2 text-sm text-brand-blue">
        <span className="size-2 rounded-full bg-brand-blue" />
        실제 GitHub 로그인은 Supabase 연동이 필요합니다
      </p>
    </div>
  )
}

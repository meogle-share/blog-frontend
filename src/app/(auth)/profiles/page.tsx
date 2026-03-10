import { AuthHeader } from "@/components/features/auth/auth-header"
import { ProfileCard } from "@/components/features/auth/profile-card"
import { AddProfileCard } from "@/components/features/auth/add-profile-card"
import { Logo } from "@/components/features/layout/logo"
import { DUMMY_PROFILES } from "@/lib/dummy-data"

export default function ProfilesPage() {
  const currentUser = DUMMY_PROFILES[0]

  return (
    <div className="min-h-screen bg-auth">
      <AuthHeader
        user={{
          name: "GitHub User",
          username: "githubuser",
          avatar: currentUser.avatar,
        }}
      />

      <main className="container-global pt-24 pb-12">
        <div className="flex flex-col items-center text-center">
          <Logo className="text-3xl" />
          <p className="mt-4 text-lg text-muted-foreground">
            블로그를 시작할 프로필을 선택하세요
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DUMMY_PROFILES.map((profile, i) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              selected={i === 1}
            />
          ))}
          <AddProfileCard />
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          각 프로필은 독립적인 블로그 공간을 제공합니다
        </p>
      </main>
    </div>
  )
}

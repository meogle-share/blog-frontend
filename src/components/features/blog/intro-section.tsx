import type { Profile } from "@/types"

interface IntroSectionProps {
  profile: Profile
}

export function IntroSection({ profile }: IntroSectionProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">{profile.name}의 블로그</h1>
      <p className="mt-2 text-muted-foreground">{profile.description}</p>
    </div>
  )
}

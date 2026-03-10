"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Profile } from "@/types"

interface ProfileCardProps {
  profile: Profile
  selected?: boolean
}

export function ProfileCard({ profile, selected }: ProfileCardProps) {
  return (
    <Link
      href={`/${profile.username}`}
      className={cn(
        "card-base flex flex-col items-center p-6 transition-colors hover:opacity-90",
        selected
          ? "border-2 border-primary"
          : "border border-border"
      )}
    >
      {profile.avatar ? (
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={100}
          height={100}
          className="rounded-full"
          unoptimized
        />
      ) : (
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-muted text-3xl font-bold">
          {profile.name[0]}
        </div>
      )}
      <h3 className="mt-4 text-xl font-bold">{profile.name}</h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        {profile.description}
      </p>
    </Link>
  )
}

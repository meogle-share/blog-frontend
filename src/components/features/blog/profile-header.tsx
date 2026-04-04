import Image from "next/image";
import type { User } from "@/types";
import { Badge } from "@/components/ui/badge";

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <section className="bg-muted border-b border-dashed border-[rgba(198,198,198,0.3)] overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(212,212,212,1)_0%,rgba(212,212,212,0)_70%)]" />
      <div className="relative max-w-[800px] mx-auto px-8 py-20">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          {/* Profile Image */}
          <div className="shrink-0 relative">
            <div className="size-[160px] rounded-[2px] border border-[rgba(198,198,198,0.2)] overflow-hidden relative">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover grayscale"
                />
              ) : (
                <div className="size-full bg-accent" />
              )}
              <div className="absolute inset-0 bg-white mix-blend-saturation" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col">
            {user.label && (
              <p className="text-[10px] text-muted-foreground tracking-[2px] uppercase pb-2">
                {user.label}
              </p>
            )}
            <h1 className="text-[48px] font-bold tracking-[-2.4px] leading-[48px] pb-6">
              {user.name}
            </h1>
            {user.bio && (
              <p className="text-[18px] text-[#474747] leading-[29.25px] max-w-[576px]">
                {user.bio}
              </p>
            )}
            <div className="flex gap-4 pt-8">
              {user.location && (
                <Badge variant="with-dot">{user.location}</Badge>
              )}
              {user.readerCount && (
                <Badge variant="with-dot">
                  {(user.readerCount / 1000).toFixed(1)}k Readers
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

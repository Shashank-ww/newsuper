"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TalentProfile } from "@/data/talent";

interface Props {
  profile: TalentProfile;
  onViewProfile?: () => void;
}

export default function ProfileFeedRow({ profile, onViewProfile }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "md:flex-row md:items-center md:gap-6",
        "border rounded-lg px-4 py-3",
        "hover:bg-amber-50/40 hover:shadow-sm transition"
      )}
    >
      {/* LEFT: Avatar + Name + Role */}
      <div className="relative flex items-center gap-3 min-w-60">
        <Image
          src={profile.image || "/webimgs/avatars/profiles/default.png"}
          alt={profile.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        {profile.verified && (
          <span className="absolute -bottom-1 left-8 bg-blue-500 rounded-full p-[2px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}

        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{profile.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {profile.headline || "Add bio"}
          </p>
        </div>
      </div>

      {/* MIDDLE: Skills + Meta */}
      <div className="flex-1 space-y-2">
        {profile.skills?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {profile.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="border border-gray-400/70 rounded-full px-3 py-[2px] text-[11px]"
              >
                {skill}
              </span>
            ))}
            {profile.skills.length > 4 && (
              <span className="text-[11px] text-muted-foreground">
                +{profile.skills.length - 4} more
              </span>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          {profile.rate && <span>{profile.rate}</span>}
          <span>{profile.experience} yrs</span>
          {profile.location && <span>Location: {profile.location}</span>}
        </div>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex gap-2 md:flex-col">
        <Button size="sm" className="w-full md:w-auto">
          Hire Now
        </Button>
        <Button size="sm" variant="outline" className="w-full md:w-auto" onClick={onViewProfile}>
          View Profile
        </Button>
      </div>
    </div>
  );
}

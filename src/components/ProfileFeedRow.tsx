"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Profile {
  name: string;
  role: string;
  rate: number;
  expertise: string[];
  lastWorkedAt: string;
  verified: boolean;
  experience: number;
  image?: string;
}

interface Props {
  profile: Profile;
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
      <div className="flex items-center gap-4 md:min-w-[220px]">
        <div className="relative">
          <Image
            src={profile.image || "/webimgs/avatars/profiles/default.png"}
            alt={profile.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />

          {profile.verified && (
            <span className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{profile.name}</p>
          <p className="text-xs text-muted-foreground truncate">
            {profile.role}
          </p>
        </div>
      </div>

      {/* MIDDLE: Expertise + Meta */}
      <div className="flex-1 space-y-2">
        {/* Expertise */}
        <div className="flex flex-wrap gap-2">
          {profile.expertise.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="border border-gray-400/70 rounded-full px-3 py-[2px] text-[11px]"
            >
              {skill}
            </span>
          ))}
          {profile.expertise.length > 4 && (
            <span className="text-[11px] text-muted-foreground">
              +{profile.expertise.length - 4} more
            </span>
          )}
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
          <span>₹{profile.rate}/hr</span>
          <span>{profile.experience} yrs</span>
          <span>Last: {profile.lastWorkedAt}</span>
        </div>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex gap-2 md:flex-col">
        <Button size="sm" className="w-full md:w-auto">
          Hire Now
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="w-full md:w-auto"
          onClick={onViewProfile}
        >
          View Profile
        </Button>
      </div>
    </div>
  );
}

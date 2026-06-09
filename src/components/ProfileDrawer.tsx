"use client";

import React from "react";
import { Profile } from "@/data/fallbackProfiles";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProfileDrawerProps {
  profile: Profile | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileDrawer({ profile, isOpen, onClose }: ProfileDrawerProps) {
  if (!profile) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md right-0 h-full p-6 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{profile.name}</DialogTitle>
          <DialogClose className="absolute top-4 right-4" />
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 py-4">
          <Image
            src={profile.image || "/webimgs/avatars/profiles/default.png"}
            alt={profile.name}
            width={128}
            height={128}
            className="rounded-full"
          />

          <p className="text-sm font-medium">{profile.role}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {profile.expertise.map((skill) => (
              <span key={skill} className="border border-gray-400 rounded-full px-3 py-1 text-xs">
                {skill}
              </span>
            ))}
          </div>

          <ul className="text-sm text-gray-700 mt-4 w-full space-y-1">
            <li>
              <span className="font-semibold">Rate: </span>₹{profile.rate}/hr
            </li>
            <li>
              <span className="font-semibold">Experience: </span>{profile.experience} yrs
            </li>
            <li>
              <span className="font-semibold">Last worked with: </span>{profile.lastWorkedAt}
            </li>
            <li>
              <span className="font-semibold">Category: </span>{profile.category}
            </li>
          </ul>

          <div className="flex gap-2 mt-4 w-full">
            <Button className="flex-1">Hire Now</Button>
            <Button variant="outline" className="flex-1">Send Message</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

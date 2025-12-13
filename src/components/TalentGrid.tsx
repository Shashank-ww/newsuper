"use client";

import React, { useState, useEffect } from "react";
import { Profile, profileData, Talents } from "@/data/profiles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProfileFeedRow from "@/components/ProfileFeedRow";
import FilterBar from "@/components/FilterBar";
import { Skeleton } from "@/components/ui/skeleton";
import { Drawer } from "@/components/ui/drawer"; // Drawer handles animation + backdrop internally
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const TalentGrid = () => {
  const [activeTalent, setActiveTalent] = useState<string>("All");
  const [visibleProfiles, setVisibleProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

  // Drawer state
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  // Filter profiles based on talent and verified
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = profileData.filter((p) => {
        const talentMatch = activeTalent === "All" || p.category === activeTalent;
        const verifiedMatch = !verifiedOnly || p.verified;
        return talentMatch && verifiedMatch;
      });

      setVisibleProfiles(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTalent, verifiedOnly]);

  // Handlers
  const handleViewProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setDrawerOpen(true);
  };

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <MaxWidthWrapper>
      {/* Filter Bar */}
      <FilterBar
        activeTalent={activeTalent}
        setActiveTalent={setActiveTalent}
        talents={Talents}
        verified={verifiedOnly}
        setVerifiedOnly={setVerifiedOnly}
      />

      {/* Profile Feed */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-3">
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton key={idx} className="h-28 rounded-lg w-full animate-pulse" />
            ))
          : visibleProfiles.map((profile) => (
              <ProfileFeedRow
                key={profile.id}
                profile={profile}
                onViewProfile={() => handleViewProfile(profile)}
              />
            ))}

        {!loading && visibleProfiles.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No profiles found for this category.
          </p>
        )}
      </div>

      {/* Profile Drawer */}
      {selectedProfile && (
  <Drawer open={drawerOpen} onClose={closeDrawer}>
    <div
      className={`fixed top-0 right-0 z-50 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={closeDrawer} className="p-1 rounded-full hover:bg-gray-200">
          <X size={20} className="text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-col items-center">
          <Image
            src={selectedProfile.image || "/webimgs/avatars/profiles/default.png"}
            alt={selectedProfile.name}
            width={96}
            height={96}
            className="rounded-full object-cover mb-2"
          />
          <h2 className="text-xl font-bold">{selectedProfile.name}</h2>
          <p className="text-sm text-gray-600">{selectedProfile.role}</p>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Rate:</strong> ₹{selectedProfile.rate}/hr</p>
          <p><strong>Experience:</strong> {selectedProfile.experience} yrs</p>
          <p><strong>Last Worked At:</strong> {selectedProfile.lastWorkedAt}</p>
          <p><strong>Expertise:</strong> {selectedProfile.expertise.join(", ")}</p>
        </div>

        <div className="mt-4 flex gap-3">
          <Button className="flex-1">Hire Now</Button>
          <Button variant="secondary" className="flex-1" onClick={() => alert("Send message")}>
            Send Message
          </Button>
        </div>

        <Button className="w-full mt-4" variant="outline" onClick={closeDrawer}>
          Close
        </Button>
      </div>
    </div>
  </Drawer>
)}
    </MaxWidthWrapper>
  );
};

export default TalentGrid;

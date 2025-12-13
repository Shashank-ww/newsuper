"use client";

import React, { useState, useEffect } from "react";
import { Profile, profileData, Talents } from "@/data/profiles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProfileFeedRow from "@/components/ProfileFeedRow";
import FilterBar from "@/components/FilterBar";
import { Skeleton } from "@/components/ui/skeleton";
import { Drawer } from "@/components/ui/drawer"; // Your installed drawer

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
      const filtered: Profile[] = profileData.filter((p) => {
        const talentMatch = activeTalent === "All" || p.category === activeTalent;
        const verifiedMatch = !verifiedOnly || p.verified;
        return talentMatch && verifiedMatch;
      });

      setVisibleProfiles(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTalent, verifiedOnly]);

  // Handler for opening drawer
  const handleViewProfile = (profile: Profile) => {
    setSelectedProfile(profile);
    setDrawerOpen(true);
  };

  return (
    <MaxWidthWrapper>
      {/* Sticky Filter Bar */}
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
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div className="p-4 space-y-3">
            <h2 className="text-lg font-semibold">{selectedProfile.name}</h2>
            <p><strong>Role:</strong> {selectedProfile.role}</p>
            <p><strong>Rate:</strong> ₹{selectedProfile.rate}/hr</p>
            <p><strong>Experience:</strong> {selectedProfile.experience} yrs</p>
            <p><strong>Last Worked At:</strong> {selectedProfile.lastWorkedAt}</p>
            <p><strong>Expertise:</strong> {selectedProfile.expertise.join(", ")}</p>
          </div>
        </Drawer>
      )}
    </MaxWidthWrapper>
  );
};

export default TalentGrid;

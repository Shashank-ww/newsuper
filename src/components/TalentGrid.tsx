"use client";

import React, { useState, useEffect } from "react";
import {
  Profile,
  profileData,
  TalentFilter,
  TalentCategories,
} from "@/data/profiles";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProfileFeedRow from "@/components/ProfileFeedRow";
import FilterBar from "@/components/FilterBar";
import { Skeleton } from "@/components/ui/skeleton";
import { Drawer } from "@/components/ui/drawer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FiAlertCircle } from "react-icons/fi";

const TalentGrid = () => {
  const [activeTalent, setActiveTalent] = useState<TalentFilter>("All");
  const [visibleProfiles, setVisibleProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = profileData.filter((p) => {
        if (activeTalent !== "All" && p.category !== activeTalent) return false;
        if (verifiedOnly && !p.verified) return false;
        return true;
      });

      setVisibleProfiles(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTalent, verifiedOnly]);

  return (
    <MaxWidthWrapper>
      {/* Filter bar */}
      <FilterBar
        talents={TalentCategories}
        activeTalent={activeTalent}
        setActiveTalent={setActiveTalent}
        verified={verifiedOnly}
        setVerifiedOnly={setVerifiedOnly}
      />

      {/* Profile list */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full rounded-lg" />
          ))
        ) : visibleProfiles.length > 0 ? (
          visibleProfiles.map((profile) => (
            <ProfileFeedRow
              key={profile.id}
              profile={profile}
              onViewProfile={() => {
                setSelectedProfile(profile);
                setDrawerOpen(true);
              }}
            />
          ))
        ) : (
          // Empty state when no profiles in category
          <div className="flex flex-col items-center justify-center py-12 text-destructive space-y-2">
            <FiAlertCircle size={36} />
            <p className="text-sm text-center">
              There are no profiles in <strong>{activeTalent}</strong> category yet.
            </p>
          </div>
        )}
      </div>

      {/* Drawer */}
      {selectedProfile && (
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div
            className={`fixed top-0 right-0 z-50 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
            ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

            {/* Profile content */}
            <div className="p-6 space-y-4">
              <div className="flex flex-col items-center">
                <Image
                  src={
                    selectedProfile.image ||
                    "/webimgs/avatars/profiles/default.png"
                  }
                  alt={selectedProfile.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover mb-2"
                />
                <h2 className="text-xl font-bold">{selectedProfile.name}</h2>
                <p className="text-sm text-gray-600">{selectedProfile.role}</p>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Rate:</strong> ₹{selectedProfile.rate}/hr
                </p>
                <p>
                  <strong>Experience:</strong> {selectedProfile.experience} yrs
                </p>
                <p>
                  <strong>Last Worked At:</strong> {selectedProfile.lastWorkedAt}
                </p>
                <p>
                  <strong>Expertise:</strong>{" "}
                  {selectedProfile.expertise.join(", ")}
                </p>
              </div>

              <div className="mt-4 flex gap-3">
                <Button className="flex-1">Hire Now</Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => alert("Send message")}
                >
                  Send Message
                </Button>
              </div>

              <Button
                className="w-full mt-4"
                variant="outline"
                onClick={() => setDrawerOpen(false)}
              >
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

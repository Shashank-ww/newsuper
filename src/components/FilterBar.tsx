"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TalentFilter } from "@/data/profiles";

interface Props {
  talents: readonly TalentFilter[];
  activeTalent: TalentFilter;
  setActiveTalent: React.Dispatch<React.SetStateAction<TalentFilter>>;
  verified: boolean;
  setVerifiedOnly: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FilterBar({
  talents,
  activeTalent,
  setActiveTalent,
  verified,
  setVerifiedOnly,
}: Props) {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200 h-16 flex items-center px-4 gap-4 flex-wrap">
      {/* Talent Filter */}
      <Select
        value={activeTalent}
        onValueChange={(val) => setActiveTalent(val as TalentFilter)}
      >
        <span className="font-normal text-sm hidden md:inline">
          Filter Talent by Category:
        </span>

        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select talent" />
        </SelectTrigger>

        <SelectContent>
          {/* Include "All" explicitly */}
          {["All", ...talents].map((t) => (
            <SelectItem key={t} value={t}>
              {t.replace(/([A-Z])/g, " $1").trim()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Verified */}
      <div className="flex items-center gap-2">
        <Checkbox
          checked={verified}
          onCheckedChange={(v) => setVerifiedOnly(!!v)}
        />
        <span className="text-sm">Verified only</span>
      </div>

      {/* Reset Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          setActiveTalent("All");
          setVerifiedOnly(false);
        }}
      >
        Reset
      </Button>
    </div>
  );
}

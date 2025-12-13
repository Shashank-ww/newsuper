// src/components/ui/skeleton.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gray-200 rounded-lg relative overflow-hidden",
        "animate-pulse", // Tailwind's built-in shimmer pulse
        className
      )}
    >
      {/* Optional: left-to-right shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-amber-300 to-blue-400 opacity-50 animate-[shimmer_1s_infinite]"></div>
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-[shimmer_2.5s_infinite] {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

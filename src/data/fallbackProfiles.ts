// src/data/fallbackProfiles.ts

import type { TalentProfile } from "@/data/talent";

/**
 * Categories
 */
export type TalentCategory =
  | "Developers"
  | "Designers"
  | "ProjectManagers"
  | "ProductManagers"
  | "MarketingExperts"
  | "Producers"
  | "VirtualAssistant"
  | "DataScientist";

export const TalentCategories: readonly TalentCategory[] = [
  "Developers",
  "Designers",
  "ProjectManagers",
  "ProductManagers",
  "MarketingExperts",
  "Producers",
  "VirtualAssistant",
  "DataScientist",
];

export type TalentFilter = "All" | TalentCategory;

/**
 * FALLBACK DATA ONLY
 * Used when API / Sheet returns empty or fails
 */
export const fallbackProfiles: TalentProfile[] = [
  {
    id: "fb-dev-1",
    name: "Gabriel Courtemanche",
    headline: "JavaScript Developer",
    talent: ["Developers"],
    experience: 1.5,
    skills: ["JavaScript", "Node.js", "Git"],
    availability: "Freelance",
    rate: "₹250/hr",
    location: "Remote",
    verified: true,
    featured: false,
    hidden: false,
    about: "Frontend-focused JavaScript developer.",
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: "self",
    },
    image: "",
  },

  {
    id: "fb-design-1",
    name: "Ananya Sharma",
    headline: "UI/UX Designer",
    talent: ["Designers"],
    experience: 4,
    skills: ["Figma", "Wireframing", "Design Systems"],
    availability: "Freelance",
    rate: "₹500/hr",
    location: "Delhi NCR",
    verified: false,
    featured: false,
    hidden: false,
    about: "Product-focused designer with SaaS experience.",
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: "admin",
    },
    image: "",
  },

  {
    id: "fb-marketing-1",
    name: "Rohit Verma",
    headline: "Growth Marketing Specialist",
    talent: ["MarketingExperts"],
    experience: 6,
    skills: ["Performance Marketing", "SEO", "Analytics"],
    availability: "Freelance",
    rate: "₹700/hr",
    location: "Remote",
    verified: true,
    featured: false,
    hidden: false,
    about: "Scaling D2C and SaaS brands.",
    meta: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      source: "admin",
    },
    image: "",
  },
];

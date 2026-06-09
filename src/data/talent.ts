// src/data/talent.ts

export type TalentProfile = {
  image: string;
  id: string;

  name: string;
  headline: string;

  talent: string[];
  experience: number;
  skills: string[];

  availability: "Full-time" | "Contract" | "Freelance";
  rate?: string;
  location: string;

  verified: boolean;
  featured: boolean;
  hidden?: boolean;

  about: string;

  meta: {
    createdAt: string;
    updatedAt: string;
    source: "google-form" | "admin" | "self";
  };
};

export type TalentCategory =
  | "Developers"
  | "Designers"
  | "ProjectManagers"
  | "ProductManagers"
  | "MarketingExperts"
  | "Producers"
  | "VirtualAssistant"
  | "DataScientist";

/**
 * Runtime array of categories
 */
export const TalentCategories: TalentCategory[] = [
  "Developers",
  "Designers",
  "ProjectManagers",
  "ProductManagers",
  "MarketingExperts",
  "Producers",
  "VirtualAssistant",
  "DataScientist",
];

/**
 * Used for filter buttons
 */
export const Talents = ["All", ...TalentCategories] as const;

export interface Profile {
  id: string;
  name: string;
  role: string;
  rate: number;
  expertise: string[];
  lastWorkedAt: string;
  experience: number;
  verified: boolean;
  image: string;
  category: TalentCategory;
}

/**
 * Flat, scalable profile list
 */
export const profileData: Profile[] = [
  {
    id: "dev-1",
    name: "Gabriel Courtemanche",
    role: "JavaScript Developer",
    rate: 250,
    expertise: ["DevOps", "Git", "Node.js", "JavaScript"],
    lastWorkedAt: "Shopify",
    experience: 1.5,
    verified: true,
    image: "/webimgs/avatars/profiles/girl1.jpg",
    category: "Developers",
  },
  {
    id: "dev-2",
    name: "Loren Suokoi",
    role: "Python Developer",
    rate: 140,
    expertise: ["Flask", "Django", "Git"],
    lastWorkedAt: "Google",
    experience: 1.5,
    verified: false,
    image: "/webimgs/avatars/profiles/boy1.jpg",
    category: "Developers",
  },

  {
    id: "des-1",
    name: "Alicia Johnson",
    role: "UX/UI Designer",
    rate: 240,
    expertise: ["Figma", "Sketch", "Adobe XD"],
    lastWorkedAt: "Figma",
    experience: 4,
    verified: true,
    image: "/webimgs/avatars/profiles/girl3.jpg",
    category: "Designers",
  },
  {
    id: "des-2",
    name: "Krish Srivastava",
    role: "Motion Graphics Designer",
    rate: 200,
    expertise: ["Premiere Pro", "AfterEffects", "3D Max", "Maya"],
    lastWorkedAt: "Appinventive",
    experience: 1.5,
    verified: true,
    image: "/webimgs/avatars/profiles/boy2.jpg",
    category: "Designers",
  },

  {
    id: "pm-1",
    name: "Alex Martin",
    role: "Project Manager",
    rate: 220,
    expertise: ["Agile", "Scrum", "Jira", "Trello"],
    lastWorkedAt: "Microsoft",
    experience: 2,
    verified: true,
    image: "/webimgs/avatars/profiles/girl4.jpg",
    category: "ProjectManagers",
  },
  {
    id: "pm-2",
    name: "Devi Sharma",
    role: "Senior Manager",
    rate: 180,
    expertise: ["Stakeholder Mgmt", "Delivery", "Reporting"],
    lastWorkedAt: "Google",
    experience: 2.6,
    verified: true,
    image: "/webimgs/avatars/profiles/girl6.jpg",
    category: "ProjectManagers",
  },

  {
    id: "prod-1",
    name: "Sophia Lee",
    role: "Product Manager",
    rate: 224,
    expertise: ["Roadmaps", "User Stories", "Market Research"],
    lastWorkedAt: "Amazon",
    experience: 2,
    verified: true,
    image: "",
    category: "ProductManagers",
  },

  {
    id: "mkt-1",
    name: "Mark Thompson",
    role: "Marketing Strategist",
    rate: 270,
    expertise: ["SEO", "Google Ads", "Content Marketing"],
    lastWorkedAt: "HubSpot",
    experience: 2.2,
    verified: true,
    image: "",
    category: "MarketingExperts",
  },

  {
    id: "prod-2",
    name: "David Smith",
    role: "Visual Effects Artist",
    rate: 140,
    expertise: ["Maya", "After Effects", "Cinema 4D"],
    lastWorkedAt: "Pixar",
    experience: 3.5,
    verified: false,
    image: "",
    category: "Producers",
  },

  {
    id: "va-1",
    name: "Jennifer Taylor",
    role: "Virtual Assistant",
    rate: 150,
    expertise: ["Calendar Management", "Email Support", "Data Entry"],
    lastWorkedAt: "RemoteCo",
    experience: 3,
    verified: true,
    image: "",
    category: "VirtualAssistant",
  },
    {
    id: "va-3",
    name: "Taylor Swift",
    role: "Virtual Assistant",
    rate: 250,
    expertise: ["Calendar Management", "Email Support", "Data Entry"],
    lastWorkedAt: "RemoteCo",
    experience: 3.2,
    verified: false,
    image: "",
    category: "VirtualAssistant",
  },
];

export type TalentFilter = "All" | TalentCategory;


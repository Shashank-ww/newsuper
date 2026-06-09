import { fallbackProfiles } from "@/data/fallbackProfiles";
import type { TalentProfile } from "@/data/talent";

export async function getTalents(): Promise<TalentProfile[]> {
  try {
    const res = await fetch("/api/talents", { cache: "no-store" });
    const data = await res.json();

    console.log("RAW API DATA:", data);

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("API returned empty array, using fallback");
      return fallbackProfiles;
    }

    const normalized: TalentProfile[] = data.map((row: any) => ({
      id: row.id,
      name: row.name,
      headline: row.headline || "",
      image: row.image || "/webimgs/avatars/profiles/default.png",

      talent: row.talent
        ? String(row.talent).split(",").map((t: string) => t.trim())
        : [],

      skills: row.skills
        ? String(row.skills).split(",").map((s: string) => s.trim())
        : [],

      experience: Number(row.experience || 0),
      location: row.location || "",
      rate: row.rate ? `${row.rate}` : undefined,

      availability: "Freelance",

      // ✅ SAFE DEFAULTS (Google Sheet friendly)
      verified:
        row.verified !== undefined
          ? row.verified === true || row.verified === "true"
          : true,

      featured:
        row.featured !== undefined
          ? row.featured === true || row.featured === "true"
          : true,

      hidden:
        row.hidden !== undefined
          ? row.hidden === true || row.hidden === "true"
          : false,

      about: row.about || "",

      meta: {
        createdAt: row.timestamp || new Date().toISOString(),
        updatedAt: row.timestamp || new Date().toISOString(),
        source: row.source || "google-form",
      },
    }));

    console.log("NORMALIZED:", normalized);

    // Only hide explicitly hidden profiles
    const visible = normalized.filter((p) => !p.hidden);

    console.log("VISIBLE:", visible);

    return visible;
  } catch (err) {
    console.error("getTalents failed, using fallback", err);
    return fallbackProfiles;
  }
}

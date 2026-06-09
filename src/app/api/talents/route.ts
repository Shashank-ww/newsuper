import { NextResponse } from "next/server";
import type { TalentProfile } from "@/data/talent";

const SHEET_ID = "1yBegnsRhwQuX4MOwC3tqEzD4Qimjtjt2Ok1hTMz-1F8";
const SHEET_NAME = "Form Responses 1"; // exact tab name

//https://docs.google.com/spreadsheets/d/1yBegnsRhwQuX4MOwC3tqEzD4Qimjtjt2Ok1hTMz-1F8/edit?usp=sharing

export async function GET() {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${encodeURIComponent(
      SHEET_NAME
    )}&tqx=out:json`;

    const res = await fetch(url, { cache: "no-store" });
    const text = await res.text();

    // Google wraps JSON in a JS function → strip it
    const json = JSON.parse(text.substring(47).slice(0, -2));

    const headers = json.table.cols.map((c: any) =>
      c.label.toLowerCase().trim()
    );

    const rows = json.table.rows.map((r: any) => {
      const obj: any = {};
      r.c.forEach((cell: any, i: number) => {
        obj[headers[i]] = cell?.v ?? "";
      });
      return obj;
    });

    console.log("GOOGLE SHEET ROWS:", rows.length);

    const profiles: TalentProfile[] = rows.map((row: any, idx: number) => ({
      id: `gs-${idx}`,
      name: row.name,
      headline: row.headline || row.role || "",
      talent: row.category
        ? [row.category.trim()]
        : [],

      skills: row.skills
        ? row.skills.split(",").map((s: string) => s.trim())
        : [],

      experience: Number(row.experience) || 0,
      rate: row.rate ? `₹${row.rate}/hr` : undefined,
      location: row.location || "default",

        verified: row.verified === "true",
        featured: row.featured === "true",
        hidden: row.hidden === "true",


      about: "add about",
      availability: "Freelance",

      meta: {
        createdAt: row.timestamp || new Date().toISOString(),
        updatedAt: row.timestamp || new Date().toISOString(),
        source: "google-form",
      },
    }));

    return NextResponse.json(profiles);
  } catch (err) {
    console.error("GOOGLE SHEET FETCH FAILED", err);
    return NextResponse.json([], { status: 200 });
  }
}
 
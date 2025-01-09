import { NextResponse } from "next/server";

let cachedData: string | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function GET() {
  const currentTime = Date.now();
  const feedUrl = "https://medium.com/feed/@sherrygill.2002";

  if (cachedData && currentTime - lastFetchTime < CACHE_DURATION) {
    return new NextResponse(cachedData, {
      headers: {
        "Content-Type": "application/rss+xml",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text();
    
    // Update cache
    cachedData = data;
    lastFetchTime = currentTime;

    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/rss+xml",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json({ error: "Failed to fetch RSS feed" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}


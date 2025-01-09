import { NextResponse } from "next/server";
import RSSParser from "rss-parser";

interface BlogItem {
    title?: string;
    link?: string;
    contentSnippet?: string;
    enclosure?: { url: string };
    pubDate?: string;
}

interface Blog {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
    pubDate: string;
    slug: string;
}

export async function GET() {
    const parser = new RSSParser();
    const feedUrl = "https://medium.com/feed/@sherrygill.2002";

    try {
        const feed = await parser.parseURL(feedUrl);

        const blogs: Blog[] = feed.items.map((item: BlogItem) => ({
            title: item.title || "Untitled",
            link: item.link || "#",
            description: item.contentSnippet || "No description available.",
            thumbnail: item.enclosure?.url || "/placeholder.jpg",
            pubDate: item.pubDate || "Unknown date",
            slug: item.link?.split("/").pop() || "no-slug",
        }));

        return NextResponse.json(blogs);
    } catch (error) {
        console.error("Error fetching Medium blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}


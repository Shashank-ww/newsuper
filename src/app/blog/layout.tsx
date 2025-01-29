"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Blog {
  title: string;
  slug: string;
}

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/share" },
  { name: "LinkedIn", url: "https://www.linkedin.com/shareArticle" },
  { name: "Facebook", url: "https://www.facebook.com/sharer/sharer.php" },
];

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const [recentPosts, setRecentPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) throw new Error("Failed to fetch recent posts");

        const data = await response.json();
        setRecentPosts(data.slice(0, 5)); // Display the latest 5 posts
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="flex min-h-screen container mx-auto px-4 md:px-8 lg:px-16">
        {/* Main Content */}
        <div className="w-full lg:w-3/4 py-10">{children}</div>

        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 ml-10 pl-8 mt-32 border-l border-gray-200 shadow-border py-10 pt-16">
          {/* Recent Posts */}
          <div className="lg:sticky top-24 self-start">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
              <ul className="space-y-2 text-sm">
                {recentPosts.length > 0 ? (
                  recentPosts.map((post, index) => (
                    <li key={index}>
                      <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                        {post.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-600">Loading...</p>
                )}
              </ul>
            </div>

            {/* Social Sharing */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Share This Post</h2>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </MaxWidthWrapper>
  );
};

export default BlogLayout;

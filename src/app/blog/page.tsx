"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface Blog {
    title: string;
    link: string;
    description: string;
    thumbnail: string;
    pubDate: string;
    slug: string;
}

const Blog = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("/api/blogs");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setError("Failed to fetch blogs. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <main className="relative flex flex-col min-h-screen">
            <MaxWidthWrapper>
                <div className="py-20">
                    <h1 className="text-4xl font-bold mb-8">Superblogs</h1>
                    {isLoading ? (
                        <p className="text-gray-600">Loading blogs from medium...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                    <Image
                                        src={blog.thumbnail || "/placeholder.jpg"}
                                        alt={blog.title}
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                        <p className="text-gray-600 mb-4">{blog.pubDate}</p>
                                        <Link href={`/blog/${blog.slug}`}>
                                            <span className="text-primary hover:underline">
                                                Read Full &rarr;
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </MaxWidthWrapper>
        </main>
    );
};

export default Blog;


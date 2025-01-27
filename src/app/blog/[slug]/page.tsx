import { Suspense } from "react";
import { notFound } from "next/navigation";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RSSParser from "rss-parser";

interface BlogItem {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  "content:encoded"?: string;
}

async function getBlogPost(slug: string): Promise<BlogItem | null> {
  const parser = new RSSParser<BlogItem>();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  try {
    const response = await fetch(`${apiUrl}/api/rss-proxy`, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();
    const feed = await parser.parseString(xmlText);

    const cleanUrl = (url: string) => url.split("?")[0];

    const blog = feed.items.find((item: BlogItem) => {
      const itemSlug = cleanUrl(item.link || "").split("/").pop();
      return itemSlug === slug;
    });

    if (blog) {
      blog.content = blog["content:encoded"] || blog.content;
    }

    return blog || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const blog = await getBlogPost(slug);

  if (!blog) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <BlogContent blog={blog} />
    </Suspense>
  );
}

function BlogContent({ blog }: { blog: BlogItem }) {
  return (
    <main className="relative flex flex-col min-h-screen">
      <MaxWidthWrapper>
        <article className="py-20">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-600 mb-8">{blog.pubDate}</p>
          {blog.content ? (
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="prose prose-lg max-w-none"
            />
          ) : (
            <p>No content available</p>
          )}
        </article>
      </MaxWidthWrapper>
    </main>
  );
}

function Loading() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <MaxWidthWrapper>
        <div className="py-20">
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}


// USING REACT-MARKDOWN; However, it does not parse the HTML content properly. HTML-markdown is already installed

// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import RSSParser from "rss-parser";
// import ReactMarkdown from "react-markdown";

// interface BlogItem {
//   title?: string;
//   link?: string;
//   pubDate?: string;
//   content?: string;
//   markdownContent?: string;
// }

// async function getBlogPost(slug: string): Promise<BlogItem | null> {
//   const parser = new RSSParser<BlogItem>();
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   try {
//     const response = await fetch(`${apiUrl}/api/rss-proxy`, {
//       cache: "force-cache",
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const xmlText = await response.text();
//     const feed = await parser.parseString(xmlText);

//     const cleanUrl = (url: string) => url.split("?")[0];

//     const blog = feed.items.find((item: BlogItem) => {
//       const itemSlug = cleanUrl(item.link || "").split("/").pop();
//       return itemSlug === slug;
//     });

//     if (blog) {
//       // Convert HTML content to Markdown (use a library if needed)
//       blog.markdownContent = blog.content || "No content available.";
//     }

//     return blog || null;
//   } catch (error) {
//     console.error("Error fetching blog post:", error);
//     return null;
//   }
// }

// type PageProps = {
//   params: Promise<{ slug: string }>;
// };

// export default async function BlogPost({ params }: PageProps) {
//   const { slug } = await params;

//   if (!slug) {
//     notFound();
//   }

//   const blog = await getBlogPost(slug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <Suspense fallback={<Loading />}>
//       <BlogContent blog={blog} />
//     </Suspense>
//   );
// }

// function BlogContent({ blog }: { blog: BlogItem }) {
//   return (
//     <main className="relative flex flex-col min-h-screen">
//       <MaxWidthWrapper>
//         <article className="py-20">
//           <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//           <p className="text-gray-600 mb-8">{blog.pubDate}</p>
//           {blog.markdownContent ? (
//             <ReactMarkdown className="prose prose-lg max-w-none">
//               {blog.markdownContent}
//             </ReactMarkdown>
//           ) : (
//             <p>No content available</p>
//           )}
//         </article>
//       </MaxWidthWrapper>
//     </main>
//   );
// }

// function Loading() {
//   return (
//     <main className="relative flex flex-col min-h-screen">
//       <MaxWidthWrapper>
//         <div className="py-20">
//           <h1 className="text-4xl font-bold">Loading...</h1>
//         </div>
//       </MaxWidthWrapper>
//     </main>
//   );
// }

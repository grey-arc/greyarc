import { notFound } from "next/navigation";
import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";
import BlogContent from "@/components/blog/BlogContent";
import ViewTracker from "@/components/blog/ViewTracker";
import Footer from "@/components/home/Footer";

const SITE_URL = "https://www.greyarc.co";

export const dynamic = "force-dynamic";

async function getBlogBySlug(slug) {
  await connectDB();
  // Matches the original /api/blogs/[id] lookup's filter: active only,
  // no published check.
  const blog = await Blog.findOne({
    slug,
    active: true,
    author: { $ne: "services" },
  }).lean();
  return blog;
}

// Rough estimate from word count instead of a random placeholder.
function estimateReadTime(htmlContent) {
  if (!htmlContent) return 1;
  const text = htmlContent.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Post not found" };
  }

  const description = blog.excerpt || undefined;
  const url = `${SITE_URL}/blogs/${blog.slug}`;

  return {
    title: blog.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: blog.title,
      description,
      url,
      images: blog.coverImage ? [{ url: blog.coverImage }] : undefined,
      publishedTime: blog.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.coverImage ? [blog.coverImage] : undefined,
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const readMinutes = estimateReadTime(blog.content);
  const url = `${SITE_URL}/blogs/${blog.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage || undefined,
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    author: { "@type": "Organization", name: "GreyArc" },
    publisher: { "@type": "Organization", name: "GreyArc" },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ViewTracker slug={blog.slug} />
      <div className="min-h-screen flex justify-center">
        <article className="max-w-4xl w-full px-4 py-16 mt-12">
          {/* Category Tag */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-4 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-3">
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center text-gray-500 text-sm space-x-3 mb-8">
            <p>{blog.publishedAt ? new Date(blog.publishedAt).toISOString().split("T")[0] : ""}</p>
            <span>•</span>
            <p>{readMinutes} Min Read</p>
          </div>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            {blog.coverImage ? (
              <img
                src={blog.coverImage}
                alt={blog.title}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="bg-gray-100 h-96 text-gray-600 overflow-hidden p-8 space-y-2">
                <div className="bg-gray-200 h-32 w-full rounded-xl"></div>
                <div className="bg-gray-200 h-8 w-96 rounded-full mt-6"></div>
                <div className="bg-gray-200 h-4 w-full rounded-full mt-4"></div>
                <div className="bg-gray-200 h-4 w-full rounded-full mt-2"></div>
                <div className="bg-gray-200 h-4 w-full rounded-full mt-2"></div>
                <div className="bg-gray-200 h-4 w-96 rounded-full mt-2"></div>
              </div>
            )}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{blog.excerpt}</p>
          </div>

          {/* Content */}
          <BlogContent content={blog.content} />
        </article>
      </div>
      <Footer />
    </>
  );
}

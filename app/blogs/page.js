import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";
import BlogCard from "@/components/blog/BlogCard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description:
    "Insights on crop protection operations, agrochemical supply chains, manufacturing, and export enablement from the GreyArc team.",
  alternates: { canonical: "https://www.greyarc.co/blogs" },
};

function estimateReadTime(htmlContent) {
  if (!htmlContent) return 1;
  const text = htmlContent.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

async function getBlogs() {
  await connectDB();
  // Matches the original /api/blogs/fetchAll route's filter (the route
  // the public blog listing page actually called): active + published.
  // author exclusion added defensively — currently a no-op since all
  // "services" records are published: false, but prevents a service
  // record from ever appearing in the blog list if that changes.
  const blogs = await Blog.find({
    active: true,
    published: true,
    author: { $ne: "services" },
  })
    .sort({ createdAt: -1 })
    .lean();
  return blogs;
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Blogs
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto space-y-12">
        {blogs.map((post) => (
          <BlogCard
            key={post._id}
            data={post}
            read={estimateReadTime(post.content)}
          />
        ))}
      </div>
    </div>
  );
}

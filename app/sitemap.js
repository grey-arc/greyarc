import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";

const SITE_URL = "https://www.greyarc.co";

// Content here comes from the CMS (MongoDB), which changes independently
// of code deploys. Force this to run at request time rather than build
// time, so newly published posts/services show up without a redeploy.
// Cached for an hour to keep DB load reasonable for a low-traffic route.
export const dynamic = "force-dynamic";
export const revalidate = 3600;

export default async function sitemap() {
  await connectDB();

  const staticRoutes = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blogs`, changeFrequency: "weekly", priority: 0.7 },
  ];

  // Services are stored as Blog documents with author: "services".
  // NOTE: current service records are all published: false, so no
  // published/active filter is applied here (matches /api/services'
  // actual behavior) — otherwise the sitemap would omit every service.
  const services = await Blog.find(
    { author: "services" },
    "slug updatedAt"
  ).lean();

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Regular blog posts: matches /api/blogs/fetchAll's filter.
  const posts = await Blog.find(
    { active: true, published: true, author: { $ne: "services" } },
    "slug updatedAt"
  ).lean();

  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

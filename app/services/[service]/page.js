import { notFound } from "next/navigation";
import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";
import BlogContent from "@/components/blog/BlogContent";
import ViewTracker from "@/components/blog/ViewTracker";
import Footer from "@/components/home/Footer";

const SITE_URL = "https://www.greyarc.co";

export const dynamic = "force-dynamic";

async function getServiceBySlug(slug) {
  await connectDB();
  // Matches the original /api/services route's filter exactly: author
  // only. Service records in this dataset are currently all
  // published: false, so adding a published/active filter here would
  // silently 404 every service page.
  const service = await Blog.findOne({
    slug,
    author: "services",
  }).lean();
  return service;
}

export async function generateMetadata({ params }) {
  const { service: slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const description = service.excerpt || undefined;
  const url = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: service.title,
      description,
      url,
      images: service.coverImage ? [{ url: service.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description,
      images: service.coverImage ? [service.coverImage] : undefined,
    },
  };
}

export default async function ServiceDetail({ params }) {
  const { service: slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const url = `${SITE_URL}/services/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.excerpt,
    provider: { "@type": "Organization", name: "GreyArc" },
    areaServed: "IN",
    url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <ViewTracker slug={service.slug} />
      <div className="min-h-screen flex justify-center">
        <article className="max-w-4xl w-full px-4 py-16 mt-12">
          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            {service.coverImage ? (
              <img
                src={service.coverImage}
                alt={service.title}
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

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-3">
            {service.title}
          </h1>

          {/* Content */}
          <BlogContent content={service.content} />
        </article>
      </div>
      <Footer />
    </>
  );
}

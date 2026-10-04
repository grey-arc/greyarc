import { notFound } from "next/navigation";
import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";
import BlogContent from "@/components/blog/BlogContent";
import ViewTracker from "@/components/blog/ViewTracker";
import Footer from "@/components/home/Footer";
import Link from "next/link";
import { SITE_URL, AREA_SERVED, EXPERTISE_PAGES } from "@/lib/site";
import { SERVICE_SEO, SERVICE_RELATED } from "@/lib/seo-overrides";

export const dynamic = "force-dynamic";

// NOTE: Blog.excerpt is repurposed on service records as an icon lookup
// key (e.g. "Factory", "Package", "Truck" — see app/services/page.js's
// icon map), not a text description. Meta descriptions and JSON-LD here
// must be derived from `content` instead, or they'd literally show the
// icon name as the page description.
function extractDescription(htmlContent, maxLength = 160) {
  if (!htmlContent) return undefined;
  const text = htmlContent
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return undefined;
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

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

  const seo = SERVICE_SEO[service.slug];
  const description = seo?.description ?? extractDescription(service.content);
  const url = `${SITE_URL}/services/${service.slug}`;
  // Override titles are complete (they carry their own brand suffix where
  // it fits in 60 chars), so they bypass the layout's "%s | GreyArc" template.
  const title = seo?.title ? { absolute: seo.title } : service.title;
  const socialTitle = seo?.title ?? service.title;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: socialTitle,
      description,
      url,
      images: service.coverImage ? [{ url: service.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
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
  const seo = SERVICE_SEO[service.slug];
  const heading = seo?.h1 ?? service.title;
  const related = SERVICE_RELATED[service.slug];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: heading,
    description: seo?.description ?? extractDescription(service.content),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: AREA_SERVED,
    serviceType: "Agrochemical operations consulting",
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: heading, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            {heading}
          </h1>

          {/* Content */}
          <BlogContent content={service.content} />

          {related && (
            <p className="mt-8 text-gray-700">
              Related:{" "}
              <Link href={related.href} className="text-gray-700 underline underline-offset-4 hover:text-black">
                {related.label}
              </Link>
            </p>
          )}

          {/* Internal links to the keyword landing pages */}
          <nav aria-label="Related expertise" className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Related expertise</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {EXPERTISE_PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline underline-offset-4 hover:text-black">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/contact" className="inline-block rounded-full bg-[#131921] text-white px-6 py-3 text-sm font-medium hover:bg-black">
                Book a 30-minute conversation
              </Link>
            </p>
          </nav>
        </article>
      </div>
      <Footer />
    </>
  );
}

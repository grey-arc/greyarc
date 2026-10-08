import Link from "next/link";
import Footer from "@/components/home/Footer";
import { SITE_URL, AREA_SERVED, EXPERTISE_PAGES, MARKET_PAGES } from "@/lib/site";

// Server-rendered template for the code-managed keyword landing pages
// (expertise pillars and market pages). Everything — copy, FAQ answers and
// structured data — is in the initial HTML.
//
// `page` shape: { path, eyebrow, h1, lede, stats?, sections[{h2, body[], bullets?}],
//                 proof?[{label, result}], faqs?[{q, a}], serviceName, breadcrumb,
//                 kind?: "service" | "article", relatedLinks?[{href, label, note?}] }
// kind "article" (guides) emits Article schema instead of Service.
export default function LandingPage({ page }) {
  const url = `${SITE_URL}${page.path}`;

  const isArticle = page.kind === "article";

  const serviceJsonLd = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.h1,
        description: page.lede,
        about: page.serviceName,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        datePublished: page.datePublished,
        dateModified: page.dateModified || page.datePublished,
        mainEntityOfPage: url,
        url,
      }
    : {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.serviceName,
    description: page.lede,
    serviceType: page.serviceName,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: page.areaServed || AREA_SERVED,
    url,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
    ],
  };

  const faqJsonLd = page.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const related = [...EXPERTISE_PAGES, ...MARKET_PAGES].filter(
    (p) => p.href !== page.path
  );

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="bg-white">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-12">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{page.breadcrumb}</span>
          </nav>
          {page.eyebrow && (
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500 mb-3">
              {page.eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            {page.h1}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{page.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#131921] text-white px-6 py-3 text-sm font-medium hover:bg-black"
            >
              Book a 30-minute conversation
            </Link>
            <Link
              href="/success-stories"
              className="inline-block rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-50"
            >
              See client results
            </Link>
          </div>
        </section>

        {/* Stats */}
        {page.stats?.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 pb-8">
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {page.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-gray-100 p-6">
                  <dt className="text-sm text-gray-600 order-2">{s.label}</dt>
                  <dd className="text-3xl font-semibold text-gray-900 mb-1">{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Body sections */}
        <article className="max-w-4xl mx-auto px-6 py-8 space-y-12">
          {page.sections.map((sec) => (
            <section key={sec.h2}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{sec.h2}</h2>
              {sec.body?.map((para, i) => (
                <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              {sec.bullets?.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base md:text-lg">
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Proof */}
          {page.proof?.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Results from GreyArc engagements
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {page.proof.map((p) => (
                  <li key={p.label} className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-2xl font-semibold text-gray-900">{p.result}</p>
                    <p className="text-gray-600 mt-1">{p.label}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                <Link href="/success-stories" className="text-gray-700 underline underline-offset-4 hover:text-black">
                  Read the full client stories
                </Link>
              </p>
            </section>
          )}

          {/* FAQ — plain HTML so answers are always crawlable */}
          {page.faqs?.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {page.faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-gray-200 px-5 py-4">
                    <summary className="cursor-pointer text-base md:text-lg font-medium text-gray-900">
                      {f.q}
                    </summary>
                    <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="rounded-3xl bg-[#131921] text-white p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Start with a 30-minute conversation
            </h2>
            <p className="text-gray-300 mb-6">
              No commitment. Tell us where planning, inventory or warehouse
              performance is hurting, and we will tell you honestly whether and
              how we can help. First operational findings typically land within
              60 days of kickoff.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white text-[#131921] px-6 py-3 text-sm font-semibold hover:bg-gray-100"
            >
              Contact GreyArc
            </Link>
          </section>

          {/* Related services & reading — internal links to deeper pages */}
          {page.relatedLinks?.length > 0 && (
            <section aria-label="Related services and reading">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {isArticle ? "Related services and reading" : "Related services"}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {page.relatedLinks.map((l) => (
                  <li key={l.href} className="rounded-2xl border border-gray-200 p-5">
                    <Link href={l.href} className="font-medium text-gray-900 underline underline-offset-4 hover:text-black">
                      {l.label}
                    </Link>
                    {l.note && <p className="text-gray-600 mt-1 text-sm">{l.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Related */}
          <nav aria-label="Related pages" className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Explore more</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {related.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-gray-700 underline underline-offset-4 hover:text-black">
                    {p.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-gray-700 underline underline-offset-4 hover:text-black">
                  All services
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </main>
      <Footer />
    </>
  );
}

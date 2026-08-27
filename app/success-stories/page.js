import connectDB from "@/lib/mongoose";
import PageSection from "@/app/models/PageSection";
import Results from "@/components/home/Results";
import ClientStories from "@/components/home/ClientStories";
import Footer from "@/components/home/Footer";

// "results" and "client_stories" are also rendered inline on the homepage
// for the one-page scroll experience. This route exists so the case
// studies are independently indexable/linkable — see the Aug 2026 site
// audit: five quantified client results were previously only reachable
// as a homepage anchor and absent from the sitemap.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Success Stories | GreyArc Client Results",
  description:
    "Quantified results from GreyArc engagements with Indian agrochemical and crop protection manufacturers and distributors — stockout reduction, forecast accuracy, order fulfilment, and dispatch visibility improvements.",
  alternates: { canonical: "https://www.greyarc.co/success-stories" },
};

async function getSections() {
  await connectDB();
  const sections = await PageSection.find({
    section_name: { $in: ["results", "client_stories"] },
  })
    .sort({ section_sequence: 1 })
    .lean();
  return JSON.parse(JSON.stringify(sections));
}

export default async function SuccessStoriesPage() {
  const sections = await getSections();
  const results = sections.find((s) => s.section_name === "results");
  const clientStories = sections.find((s) => s.section_name === "client_stories");

  return (
    <>
      <div className="pt-24 mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mt-10">
          Success Stories
        </h1>
      </div>
      {results && <Results data={results} />}
      {clientStories && <ClientStories data={clientStories} />}
      <Footer />
    </>
  );
}

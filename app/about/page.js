import connectDB from "@/lib/mongoose";
import PageSection from "@/app/models/PageSection";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import Footer from "@/components/home/Footer";

// Same section is also rendered inline on the homepage (id="about") for the
// one-page scroll experience. This route exists so the team/credibility
// content is independently indexable and linkable — see the Aug 2026 site
// audit: "About" previously only existed as a homepage anchor and was
// missing from the sitemap entirely.
export const dynamic = "force-dynamic";

export const metadata = {
  title: { absolute: "About GreyArc – Agrochemical Consultants & GRACE Framework" },
  description:
    "Founded by ex-Bayer CropScience, Aventis and Cipla leaders with 110+ years in agrochemicals. Meet the team and our GRACE method.",
  alternates: { canonical: "https://www.greyarc.co/about" },
};

async function getSection() {
  await connectDB();
  const section = await PageSection.findOne({ section_name: "about" }).lean();
  return section ? JSON.parse(JSON.stringify(section)) : null;
}

export default async function AboutPage() {
  const section = await getSection();

  return (
    <>
      <div className="pt-24">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mt-10 mb-8 px-4">
          About GreyArc: Agrochemical Operations Consultants
        </h1>
        <MeetTheTeam data={section} />
      </div>
      <Footer />
    </>
  );
}

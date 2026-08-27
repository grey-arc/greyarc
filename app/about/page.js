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
  title: "About GreyArc | Agrochemical Operations Consulting Team",
  description:
    "Meet the GreyArc team: specialist agrochemical and crop protection operations consultants with 100+ years of combined experience across Bayer CropScience, Cipla, Aventis, and Hoechst.",
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
        <MeetTheTeam data={section} />
      </div>
      <Footer />
    </>
  );
}

import connectDB from "@/lib/mongoose";
import PageSection from "@/app/models/PageSection";
import CredentialsExpertise from "@/components/home/CredentialsExpertise";
import Footer from "@/components/home/Footer";

// Also rendered inline on the homepage (id="credentials") for the one-page
// scroll experience. This route exists so the team's credentials are
// independently indexable/linkable — see the Aug 2026 site audit.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Credentials & Expertise | GreyArc",
  description:
    "GreyArc's founding team credentials: IIM Kozhikode and NIT Jamshedpur education, professional experience at Bayer CropScience, Cipla, Aventis, and Hoechst, and specializations spanning SAP MM/WM, S&OP design, and demand planning.",
  alternates: { canonical: "https://www.greyarc.co/credentials" },
};

async function getSection() {
  await connectDB();
  const section = await PageSection.findOne({
    section_name: "credentials",
  }).lean();
  return section ? JSON.parse(JSON.stringify(section)) : null;
}

export default async function CredentialsPage() {
  const section = await getSection();

  return (
    <>
      <div className="pt-24">
        <CredentialsExpertise data={section} />
      </div>
      <Footer />
    </>
  );
}

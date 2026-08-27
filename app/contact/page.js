import connectDB from "@/lib/mongoose";
import PageSection from "@/app/models/PageSection";
import ContactFormSection from "@/components/home/ContactFormSection";
import Footer from "@/components/home/Footer";

// Also rendered inline on the homepage (id="contact") for the one-page
// scroll experience. This route exists so there is a dedicated, indexable
// contact URL — see the Aug 2026 site audit: no standalone /contact page
// existed previously.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact GreyArc | Agrochemical Operations Consulting",
  description:
    "Get in touch with GreyArc for agrochemical and crop protection operations consulting — warehousing, S&OP, manufacturing, export enablement, and toll manufacturing partner sourcing.",
  alternates: { canonical: "https://www.greyarc.co/contact" },
};

async function getSection() {
  await connectDB();
  const section = await PageSection.findOne({ section_name: "contact" }).lean();
  return section ? JSON.parse(JSON.stringify(section)) : null;
}

export default async function ContactPage() {
  const section = await getSection();

  return (
    <>
      <div className="pt-24">
        <ContactFormSection data={section} />
      </div>
      <Footer />
    </>
  );
}

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
  title: { absolute: "Contact GreyArc | Agrochemical Consultants, Thane–Mumbai" },
  description:
    "Talk to India's specialist agrochemical consultants. WeWork Zenia, Thane. Call +91 8356914504 or book a no-commitment 30-minute call.",
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
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mt-10 mb-8 px-4">
          Contact GreyArc's Agrochemical Consultants
        </h1>
        <ContactFormSection data={section} />
      </div>
      <Footer />
    </>
  );
}

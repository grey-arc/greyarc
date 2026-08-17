import connectDB from "@/lib/mongoose";
import PageSection from "@/app/models/PageSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import MissionSection from "@/components/home/MissionSection";
import MeetTheTeam from "@/components/home/MeetTheTeam";
import TeamSkills from "@/components/home/TeamSkills";
import CallToAction from "@/components/home/CallToAction";
import Results from "@/components/home/Results";
import ClientStories from "@/components/home/ClientStories";
import CredentialsExpertise from "@/components/home/CredentialsExpertise";
import ContactFormSection from "@/components/home/ContactFormSection";
import Footer from "@/components/home/Footer";
import FaqSection from "@/components/home/FaqSection";
import HashScrollHandler from "@/components/home/HashScrollHandler";

// Content is CMS-driven (MongoDB) independently of code deploys, so this
// renders per-request rather than being statically generated at build
// time — keeps it fresh and doesn't require DB access during the build.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "GreyArc | Crop Protection & Agrochemical Consulting",
  description:
    "GreyArc is a specialist growth and operations partner for crop protection manufacturers, covering operations & S&OP, manufacturing & warehousing, offshore structuring & export enablement, and toll manufacturing.",
  alternates: { canonical: "https://www.greyarc.co/" },
};

const sectionComponents = {
  home: HeroSection,
  SERVICES: ServicesSection,
  mission: MissionSection,
  about: MeetTheTeam,
  team_skills: TeamSkills,
  cta: CallToAction,
  results: Results,
  client_stories: ClientStories,
  credentials: CredentialsExpertise,
  contact: ContactFormSection,
  faq: FaqSection,
};

async function getSections() {
  await connectDB();
  // Matches the original /api/dataAllget route's query exactly.
  const sections = await PageSection.find({})
    .sort({ section_sequence: 1 })
    .lean();

  // Several section components below are Client Components. Next.js
  // requires props crossing the Server -> Client boundary to be plain,
  // JSON-serializable values — Mongoose's lean() still leaves ObjectId
  // and Date instances in place, which would throw at render time.
  return JSON.parse(JSON.stringify(sections));
}

export default async function HomePage() {
  const sections = await getSections();

  return (
    <>
      <HashScrollHandler />
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section.section_name];
        if (!SectionComponent) return null;
        return <SectionComponent key={section._id} data={section} />;
      })}
      <Footer />
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
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
// import ConsultationProcess from "@/components/home/ConsultationProcess";
import Footer from "@/components/home/Footer";
import Loading from "@/components/loading/loading";
import FaqSection from "@/components/home/FaqSection";

export default function HomeSectionsEditor() {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([
    {
      page_name: "",
      section_name: "",
      section_heading: "",
      section_description: "",
      section_image: "",
      section_list: [
        {
          list_item_header: "0",
          list_item_description: "Loading",
          list_item_image: "",
          list_item_svg: "",
        },
      ],
    },
  ]);
  const sectionComponents = {
    home: HeroSection,
    services: ServicesSection,
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

  async function loadData() {
    try {
      const res = await fetch("/api/dataAllget");
      const fetchedData = await res.json();
      console.log("Fetched Data:", fetchedData);
      setSections(fetchedData);
    } catch (error) {
      console.error("Error fetching sections");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Run only after sections are loaded
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          // Delay ensures DOM is fully rendered
          setTimeout(() => {
            const yOffset = -80; // adjust if navbar height differs
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
          }, 100);
        }
      }
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section.section_name];
        if (!SectionComponent) return null; // skip unknown sections
        return <SectionComponent key={section._id} data={section} />;
      })}
      {/*<ConsultationProcess />*/}
      <Footer />
    </>
  );
}

import LandingPage from "@/components/seo/LandingPage";
import { LANDING_PAGES, landingMetadata } from "@/lib/landing-content";

// Code-managed keyword landing page — copy lives in lib/landing-content.js.
export const metadata = landingMetadata("markets/europe");

export default function Page() {
  return <LandingPage page={LANDING_PAGES["markets/europe"]} />;
}

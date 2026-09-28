import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitTracker from "@/components/track/Tracker";
import Script from "next/script";
import PageLayout from "@/page-layout";
import { SITE_URL, ORG, AREA_SERVED, KNOWS_ABOUT } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "GreyArc Consulting transforms the agrochemical, chemical, and manufacturing sectors through strategic, operational, and people excellence — helping businesses move from fragmented systems to data-driven, efficient, scalable operations.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GreyArc | Crop Protection & Agrochemical Consulting",
    template: "%s | GreyArc",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "GreyArc",
    title: "GreyArc | Crop Protection & Agrochemical Consulting",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "GreyArc | Crop Protection & Agrochemical Consulting",
    description: SITE_DESCRIPTION,
  },
};

// ProfessionalService (a subtype of Organization/LocalBusiness) so search
// engines and AI assistants get the firm's address, markets served and
// areas of expertise — not just a name and URL.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: ORG.name,
  alternateName: "GreyArc",
  legalName: ORG.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  email: ORG.email,
  telephone: ORG.telephone,
  address: { "@type": "PostalAddress", ...ORG.address },
  areaServed: AREA_SERVED,
  knowsAbout: KNOWS_ABOUT,
  sameAs: [ORG.linkedin],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "GreyArc",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organization structured data — plain <script>, not next/script,
            so it's present in the initial server-rendered HTML for crawlers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L58X77949P"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L58X77949P');
          `}
        </Script>

        <VisitTracker />
        {/* PageLayout renders the Navbar (hidden on /admin) — it was
            previously rendered here too, duplicating the nav in the HTML. */}
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}

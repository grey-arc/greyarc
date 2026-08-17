import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VisitTracker from "@/components/track/Tracker";
import Navbar from "@/components/home/Navbar";
import Script from "next/script";
import PageLayout from "@/page-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.greyarc.co";
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GreyArc",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  email: "info@greyarc.co",
  telephone: "+91-9324799373",
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
        <Navbar />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}

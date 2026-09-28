/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 15 streams metadata (<title>, description, canonical) for pages
  // with async generateMetadata: regular browsers — and Googlebot, which is
  // not in Next's default "HTML-limited bots" list — receive those tags at
  // the END of <body>, injected late, instead of in <head>. Bingbot IS on
  // the list and gets them in <head>, which matches what we observed:
  // greyarc.co ranks #1-2 on Bing for its core terms but not at all on
  // Google. Matching every user agent makes all requests get blocking
  // metadata in <head>.
  htmlLimitedBots: /.*/,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "6c4tmn3q1b.ufs.sh", // wildcard works for subdomains
      },
    ],
  },
};

export default nextConfig;

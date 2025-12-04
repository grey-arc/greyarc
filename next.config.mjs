/** @type {import('next').NextConfig} */
const nextConfig = {
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

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 treats 127.0.0.1 as cross-origin against the dev server and
  // blocks HMR. Agents and browsers in this environment use that host.
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

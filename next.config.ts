import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ironstor.co.uk",
      },
    ],
  },
};

export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  // Other configurations can go here
};

export default nextConfig;

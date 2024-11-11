import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ images: {
    domains: ["placeholder.pics"],
    dangerouslyAllowSVG: true, // Add external domains here
  },
};

export default nextConfig;

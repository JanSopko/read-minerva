import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.economist.com",
      },
      {
        protocol: "https",
        hostname: "cdn.forbes.sk",
      },
      {
        protocol: "https",
        hostname: "imageio.forbes.com",
      },
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
      {
        protocol: "https",
        hostname: "www.washingtonpost.com",
      },
      {
        protocol: "https",
        hostname: "images.wsj.net",
      },
    ],
  },
};

export default nextConfig;


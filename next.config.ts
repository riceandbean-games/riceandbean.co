import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

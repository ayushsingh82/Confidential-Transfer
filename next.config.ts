import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exclude problematic packages from server components
  serverExternalPackages: [
    'pino',
    'thread-stream',
  ],
  // Turbopack configuration
  turbopack: {},
};

export default nextConfig;

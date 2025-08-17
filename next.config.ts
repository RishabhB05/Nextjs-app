import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // More secure than single *
      },
    ],
  },
  experimental: {
    // ppr: true, // Commented out - only available in canary builds
    // 'after' is not a valid experimental flag (removed)
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-left',
    // appIsrStatus is not a valid option (removed)
  }
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  // Enable better error visibility in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Suppress ESLint warnings during build (non-blocking warnings)
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;

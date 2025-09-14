/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Ensure static generation for all pages
  generateStaticParams: true,
  // Disable server-side features for static export
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;

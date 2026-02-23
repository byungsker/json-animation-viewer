import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Static page generation timeout optimization
  staticPageGenerationTimeout: 120,
  // Enable experimental features
  experimental: {
    optimizeCss: true, // CSS optimization
    optimizePackageImports: ["react", "react-dom", "lottie-web"], // Package import optimization
  },
  // Enable compression
  compress: true,
  // Generate source maps (even in production)
  productionBrowserSourceMaps: false,
  // React optimization
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);

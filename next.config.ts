import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  output: 'standalone',

  allowedDevOrigins: ['https://johndevstudio.com'],
};

export default nextConfig;

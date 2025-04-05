/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  },
  swcMinify: true,
  images: {
    domains: ['*']
  }
};

module.exports = nextConfig;

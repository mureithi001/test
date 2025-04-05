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
  compiler: {
    removeConsole: false
  },
  transpilePackages: ['@prisma/client'],
  images: {
    domains: ['*']
  }
};

module.exports = nextConfig;

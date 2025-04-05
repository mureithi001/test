/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@prisma/client'],
    serverComponentsExternalPackages: ['@prisma/client']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.optimization.nodeEnv = false;
    }
    return config;
  }
};

module.exports = nextConfig;

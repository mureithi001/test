/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    SERVICE_ROLE_SECRET: process.env.SERVICE_ROLE_SECRET,
  },
  typescript: {
    ignoreBuildErrors: true, // Only use this if you're confident about your types
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  staticPageGenerationTimeout: 120,
  images: {
    domains: ['*'],
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
>>>>>>> Ted
};

module.exports = nextConfig;

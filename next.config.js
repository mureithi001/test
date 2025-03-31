/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
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
  // Increase the timeout for static page generation
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;

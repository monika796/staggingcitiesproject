/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'backend.citiesprojectglobal.com'], // Trusted domains for images
  },
  env: {
    NEXT_STRIPE_PUBLISH_KEY: process.env.NEXT_STRIPE_PUBLISH_KEY,
    NEXT_BACKEND_STRIPE_URL: process.env.NEXT_BACKEND_STRIPE_URL,
    NEXT_STRIPE_DONATION_RETURN_URL: process.env.NEXT_STRIPE_DONATION_RETURN_URL,
    NEXT_STRIPE_VANTAGE_RETURN_URL: process.env.NEXT_STRIPE_VANTAGE_RETURN_URL,
  },
}

module.exports = nextConfig

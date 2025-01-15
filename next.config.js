/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'backend.citiesprojectglobal.com'], // Trusted domains for images
  },
}

module.exports = nextConfig

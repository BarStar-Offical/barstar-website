/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "api.barstar.ca", "lh3.googleusercontent.com"],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;

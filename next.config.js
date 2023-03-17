/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
    HOURLY_BASE_URL: process.env.HOURLY_BASE_URL,
  },
};

module.exports = nextConfig;

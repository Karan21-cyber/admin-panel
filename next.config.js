/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["pexels.com", "s3.us-west-004.backblazeb2.com"],
  },
};

module.exports = nextConfig;

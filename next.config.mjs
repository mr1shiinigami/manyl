/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  // Allow access on local network
  output: 'standalone',
  experimental: {
    // This will allow the app to be accessed from other devices on the network
    externalDir: true,
  }
};

export default nextConfig;

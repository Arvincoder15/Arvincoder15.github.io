/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  distDir: "out",   // Ensures the output directory is 'out'
  images: {
    unoptimized: true, // Fixes image issues in static export
  },
};

module.exports = nextConfig;

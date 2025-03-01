/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures static site export
  images: { unoptimized: true }, // Fix images for GitHub Pages
};

module.exports = nextConfig;

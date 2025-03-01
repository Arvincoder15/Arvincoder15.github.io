/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensure Next.js exports static HTML
  distDir: "out", // Ensure Next.js outputs files into `out/`
  images: {
    unoptimized: true, // Fix images for static export
  },
};

module.exports = nextConfig;

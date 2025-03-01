/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out", // Next.js will export static files to the 'out' folder
  images: {
    unoptimized: true, // Ensures images load properly on GitHub Pages
  },
  trailingSlash: true, // Ensures pages are generated as folders with an index.html
};

module.exports = nextConfig;

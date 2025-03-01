/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: "/Arvincoder15.github.io",
  assetPrefix: "/Arvincoder15.github.io/"
};

module.exports = nextConfig;

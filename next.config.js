
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/yetsyy',
  images: { unoptimized: true },
};

module.exports = nextConfig;

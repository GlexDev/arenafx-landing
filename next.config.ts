/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <- static export
  images: { unoptimized: true }, // avoids Cloudflare image loader issues
}
module.exports = nextConfig

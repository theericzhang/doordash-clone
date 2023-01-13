/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    formats: [
        // consider avif for future iteration
        // 'image/avif',
        'image/webp'
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['images.unsplash.com', 'via.placeholder.com'],
      formats: ['image/webp', 'image/avif'],
    },
    // Remove the experimental optimizeCss that's causing issues
    experimental: {
      // optimizeCss: true, // Removed this line
    },
  }
  
  export default nextConfig
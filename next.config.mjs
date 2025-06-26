/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization for better performance
    unoptimized: false,
    // Define image formats for optimization
    formats: ['image/webp', 'image/avif'],
    // Configure image domains if needed
    domains: [],
    // Add device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable static file serving optimization
  trailingSlash: false,
  // Optimize build output
  poweredByHeader: false,
};

export default nextConfig;

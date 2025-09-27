import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cấu hình tối ưu hình ảnh
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Dùng https cho production
        // Sử dụng biến môi trường thay vì hardcode
        // Điều này giúp config chạy được cả ở local và production
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || '127.0.0.1',
        port: process.env.NEXT_PUBLIC_API_HOSTNAME ? '' : '8000', // Chỉ dùng port 8000 khi ở local
        pathname: '/media/**',
      },
    ],
  },
  // Bạn có thể thêm các cấu hình khác của Next.js vào đây nếu cần
};

// Sử dụng 'export default' thay vì 'module.exports'
export default nextConfig;
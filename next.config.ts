import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Cấu hình tối ưu hình ảnh
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Dùng https cho production
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || '127.0.0.1',
        port: process.env.NEXT_PUBLIC_API_HOSTNAME ? '' : '8000',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
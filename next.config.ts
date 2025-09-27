/** @type {import('next').NextConfig} */
const nextConfig = {
  // Thêm đoạn code này vào
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**', // Cho phép tất cả các đường dẫn trong thư mục media
      },
    ],
  },
};

module.exports = nextConfig;
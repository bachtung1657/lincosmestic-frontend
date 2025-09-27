// src/types/index.ts
export type Post = {
  id: number;
  slug: string;
  cover_image: string;
  title: string;
  category: { name: string } | null;
  excerpt: string;
  content: string; // Thêm content để dùng ở trang chi tiết
  author: string; // Thêm author
  created_at: string; // Thêm ngày tạo
};
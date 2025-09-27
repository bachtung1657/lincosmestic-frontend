import Link from 'next/link'; // <-- SỬA LỖI: THÊM DÒNG NÀY VÀO

// API Service
import { getPosts } from '@/services/api';

// Components
import PostCard from '@/components/ui/PostCard';
import DevelopmentToast from '@/components/ui/DevelopmentToast';
import HeroSection from '@/components/ui/HeroSection';

// Styles
import styles from './HomePage.module.scss';

// Trang chủ là một Server Component. Next.js App Router cho phép chúng ta
// truy cập trực tiếp các tham số tìm kiếm (searchParams) của URL thông qua props.
export default async function HomePage({ searchParams }) {
  
  // ====================================================================
  // LOGIC LẤY DỮ LIỆU
  // ====================================================================
  const allPosts = await getPosts();
  const latestPosts = allPosts ? allPosts.slice(0, 3) : [];

  // ====================================================================
  // LOGIC HIỂN THỊ THÔNG BÁO
  // ====================================================================
  const showDevToast = searchParams.status === 'developing';

  return (
    <div>
      <DevelopmentToast isVisible={showDevToast} />

      {/* ==================================================================== */}
      {/* HERO SECTION - ĐÃ TÁCH RA THÀNH COMPONENT RIÊNG                    */}
      {/* ==================================================================== */}
      <HeroSection />

      {/* ==================================================================== */}
      {/* FEATURED NEWS SECTION - HIỂN THỊ CÁC BÀI VIẾT MỚI NHẤT            */}
      {/* ==================================================================== */}
      <section className={`${styles.featuredNews} container`}>
        <h2 className={styles.sectionTitle}>Tin Tức & Cảm Hứng</h2>
        
        <div className={styles.postsGrid}>
          {latestPosts.length > 0 ? (
            latestPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <p>Hiện chưa có bài viết nào để hiển thị.</p>
          )}
        </div>

        {/* Nút "Xem tất cả bài viết" */}
        {latestPosts.length > 0 && (
          <div className={styles.viewMoreContainer}>
            <Link href="/news" className={styles.viewMoreButton}>
              Xem tất cả bài viết
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
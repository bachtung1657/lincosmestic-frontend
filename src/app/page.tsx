import Link from 'next/link';
import { getPosts } from '@/services/api';
import styles from './HomePage.module.scss';
import PostCard from '@/components/ui/PostCard';
import DevelopmentToast from '@/components/ui/DevelopmentToast';
import HeroSection from '@/components/ui/HeroSection';
import { Post } from '@/types'; // <-- Import type Post

export default async function HomePage({ searchParams }: { searchParams: { status?: string } }) {
  const allPosts: Post[] = await getPosts();
  const latestPosts = allPosts ? allPosts.slice(0, 3) : [];
  const showDevToast = searchParams.status === 'developing';

  return (
    <div>
      <DevelopmentToast isVisible={showDevToast} />
      <HeroSection />
      <section className={`${styles.featuredNews} container`}>
        <h2 className={styles.sectionTitle}>Tin Tức & Cảm Hứng</h2>
        <div className={styles.postsGrid}>
          {latestPosts.length > 0 ? (
            // Khai báo kiểu cho 'post' trong hàm map
            latestPosts.map((post: Post, index: number) => (
              <PostCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <p>Hiện chưa có bài viết nào để hiển thị.</p>
          )}
        </div>
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
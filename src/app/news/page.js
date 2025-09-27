import { getPosts } from '@/services/api';
import PostCard from '@/components/ui/PostCard';
import styles from './NewsPage.module.scss';

export const metadata = {
  title: 'Tin Tức',
};

export default async function NewsPage() {
  const posts = await getPosts();

  return (
    <div className="container">
      <div className={styles.newsPage}>
        <h1 className={styles.newsPage__title}>Tin Tức & Cảm Hứng</h1>
        <div className={styles.newsPage__grid}>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <p>Chưa có bài viết nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}
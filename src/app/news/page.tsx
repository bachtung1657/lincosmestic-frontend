import { getPosts } from '@/services/api';
import PostCard from '@/components/ui/PostCard';
import styles from './NewsPage.module.scss';
import { Post } from '@/types'; // <-- Import type Post

export const metadata = {
  title: 'Tin Tức',
};

export default async function NewsPage() {
  const posts: Post[] = await getPosts(); // Khai báo posts là một mảng các Post

  return (
    <div className="container">
      <div className={styles.newsPage}>
        <h1 className={styles.newsPage__title}>Tin Tức & Cảm Hứng</h1>
        <div className={styles.newsPage__grid}>
          {posts && posts.length > 0 ? (
            // Khai báo kiểu cho 'post' trong hàm map
            posts.map((post: Post, index: number) => (
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
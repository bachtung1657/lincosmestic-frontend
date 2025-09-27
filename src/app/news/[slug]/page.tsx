import { getPosts, getPostBySlug } from '@/services/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './PostDetailPage.module.scss';
import { Post } from '@/types';

// === HÀM "BẤT TỬ" - CHỐNG LỖI BUILD ===
export async function generateStaticParams() {
  try {
    // Cố gắng gọi API để lấy danh sách bài viết
    const posts: Post[] | null = await getPosts();

    // Nếu API không trả về gì, hoặc trả về mảng rỗng, trả về một mảng rỗng
    if (!posts || posts.length === 0) {
      console.log('No posts found, returning empty array for static params.');
      return [];
    }

    // Nếu thành công, trả về danh sách slug
    console.log(`Found ${posts.length} posts to generate static pages.`);
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    // CỰC KỲ QUAN TRỌNG: Nếu API bị lỗi (backend sập, network error...)
    // Thay vì làm sập build, chúng ta sẽ bắt lỗi và trả về một mảng rỗng.
    console.error('Failed to fetch posts for generateStaticParams, returning empty array:', error);
    return [];
  }
}

// Thêm type cho params
type PageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PageProps) {
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return { title: 'Không tìm thấy bài viết' };
    }
    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function PostDetailPage({ params }: PageProps) {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className={styles.postDetail}>
            <div className={styles.postDetail__header}>
                <div className={`${styles.headerContent} container`}>
                    <h1 className={styles.postDetail__title}>{post.title}</h1>
                    <p className={styles.postDetail__meta}>
                        Bởi {post.author} vào {new Date(post.created_at).toLocaleDateString('vi-VN')}
                    </p>
                </div>
                <div className={styles.postDetail__imageWrapper}>
                     <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            <div className={`${styles.postDetail__content} container`}>
                <div
                    className="content-prose"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    );
}
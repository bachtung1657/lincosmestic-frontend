import { getPosts, getPostBySlug } from '@/services/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './PostDetailPage.module.scss';
import { Post } from '@/types'; // Import Post type

// --- THAY ĐỔI CHÍNH BẮT ĐẦU TỪ ĐÂY ---

// Bước 1: Thêm hàm generateStaticParams
// Hàm này sẽ được gọi lúc build để lấy danh sách tất cả các bài viết
export async function generateStaticParams() {
  const posts: Post[] = await getPosts();

  // Trả về một mảng các object, mỗi object chứa slug của một bài viết
  // Ví dụ: [ { slug: 'bai-viet-1' }, { slug: 'bai-viet-2' } ]
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// --- KẾT THÚC THAY ĐỔI CHÍNH ---


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
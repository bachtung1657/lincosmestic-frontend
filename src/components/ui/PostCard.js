import Link from 'next/link';
import Image from 'next/image';
import styles from './PostCard.module.scss';

export default function PostCard({ post, index = 0 }) {
  return (
    <Link 
      href={`/news/${post.slug}`} 
      className={styles.postCard} 
      style={{ '--delay': `${index * 100}ms` }}
    >
      <div className={styles.postCard__imageWrapper}>
        <Image
          src={post.cover_image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.postCard__content}>
        <span className={styles.postCard__category}>
          {post.category?.name || 'Tin tức'}
        </span>
        <h3 className={styles.postCard__title}>{post.title}</h3>
        <p className={styles.postCard__excerpt}>{post.excerpt}</p>
      </div>
    </Link>
  );
}
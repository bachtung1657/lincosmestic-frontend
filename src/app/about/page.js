import { getPageBySlug } from '@/services/api';
import { notFound } from 'next/navigation';
import styles from './AboutPage.module.scss';

export const metadata = {
  title: 'Về Chúng Tôi',
};

export default async function AboutPage() {
  // Lấy dữ liệu từ API với slug 'about-us'
  const page = await getPageBySlug('about-us');

  // Nếu API không trả về dữ liệu, hiển thị trang 404 chuẩn của Next.js
  if (!page) {
    notFound();
  }

  return (
    <div className="container">
      <div className={styles.aboutPage}>
        <h1 className={styles.aboutPage__title}>{page.title}</h1>
        <div 
          className="content-prose"
          // Dùng dangerouslySetInnerHTML để render HTML từ Admin
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </div>
  );
}
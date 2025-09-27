import { getPageBySlug } from '@/services/api';
import { notFound } from 'next/navigation';
import styles from './AboutPage.module.scss';

export const metadata = {
  title: 'Về Chúng Tôi',
};

export default async function AboutPage() {
  const page = await getPageBySlug('about-us');

  if (!page) {
    notFound();
  }

  return (
    <div className="container">
      <div className={styles.aboutPage}>
        <h1 className={styles.aboutPage__title}>{page.title}</h1>
        <div 
          className="content-prose"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </div>
    </div>
  );
}
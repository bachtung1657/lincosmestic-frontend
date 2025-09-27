import Link from 'next/link';
import styles from './YourLabPage.module.scss';
import { getPageBySlug } from '@/services/api';
import React from 'react'; // Cần import React cho type

export const metadata = {
  title: 'Your Lab',
};

// Thêm type cho props của NoteCard
type NoteCardProps = {
  title: string;
  description: string;
  notes: string[];
  className?: string;
};

const NoteCard = ({ title, description, notes, className }: NoteCardProps) => (
  <div className={`${styles.noteCard} ${className}`}>
    <h3 className={styles.noteCard__title}>{title}</h3>
    <p className={styles.noteCard__description}>{description}</p>
    <div className={styles.noteCard__notesList}>
      {notes.map(note => <span key={note}>{note}</span>)}
    </div>
  </div>
);

export default async function YourLabPage() {
  const page = await getPageBySlug('your-lab');
  const pageTitle = page ? page.title : "Your Lab: Kiến Tạo Mùi Hương";

  return (
    <div className={styles.yourLabPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.hero__title}>{pageTitle}</h1>
          <p className={styles.hero__subtitle}>
            Trở thành một nghệ nhân nước hoa và tự tay điều chế mùi hương mang đậm dấu ấn cá nhân của bạn.
          </p>
        </div>
      </section>

      <section className={`${styles.notesSection} container`}>
        <h2 className={styles.sectionTitle}>Hiểu Về Các Tầng Hương</h2>
        <div className={styles.notesGrid}>
          <NoteCard 
            title="TOP NOTES (Hương Đầu)"
            description="Ấn tượng đầu tiên, nhẹ nhàng và bay hơi nhanh nhất (5-15 phút). Thường là các nốt hương tươi mát như cam, chanh, bạc hà."
            notes={["Bergamot", "Lemon", "Mint", "Lavender"]}
            className={styles.topNote}
          />
          <NoteCard 
            title="MIDDLE NOTES (Hương Giữa)"
            description="Trái tim của chai nước hoa, xuất hiện sau khi hương đầu tan đi (20-60 phút). Thường là các nốt hương hoa cỏ, gia vị."
            notes={["Rose", "Jasmine", "Cinnamon", "Geranium"]}
            className={styles.middleNote}
          />
          <NoteCard 
            title="BASE NOTES (Hương Cuối)"
            description="Lớp hương nền tảng, đậm và lưu lại lâu nhất trên da (hơn 6 tiếng). Tạo nên chiều sâu và sự quyến rũ."
            notes={["Sandalwood", "Vanilla", "Musk", "Amber"]}
            className={styles.baseNote}
          />
        </div>
      </section>

      <section className={`${styles.ctaSection} container`}>
        <h2 className={styles.cta__title}>Sẵn Sàng Sáng Tạo?</h2>
        <p className={styles.cta__text}>
          Tính năng Your Lab đang trong giai đoạn hoàn thiện cuối cùng và sẽ sớm ra mắt.
          Hãy cùng chờ đón trải nghiệm độc đáo này!
        </p>
        <Link href="/?status=developing" className={styles.cta__button}>
          Khám Phá Trải Nghiệm (Sắp ra mắt)
        </Link>
      </section>
    </div>
  );
}
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <p>&copy; {new Date().getFullYear()} Lincosmetic. All rights reserved.</p>
        <div className={styles.footer__socials}>
          {/* Thay # bằng link mạng xã hội thật */}
          <a href="#">Instagram</a>
          <a href="https://www.facebook.com/kymman99">Facebook</a>
          <a href="https://www.tiktok.com/@keepyourmanners">Tiktok</a>
        </div>
      </div>
    </footer>
  );
}
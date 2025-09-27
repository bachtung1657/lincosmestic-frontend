"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Trang Chủ', href: '/' },
  { name: 'Về Chúng Tôi', href: '/about' },
  { name: 'Tin Tức', href: '/news' },
  { name: 'Your Lab', href: '/your-lab' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.header__container} container`}>
          <Link href="/" className={styles.header__logo}>
            {/* Logo giờ được tạo bằng 2 thẻ span để có màu khác nhau */}
            <span className={styles.logoText}>
              <span className={styles.logoText__white}>LIN</span>
              <span className={styles.logoText__blue}>COSMETIC</span>
            </span>
          </Link>
          
          <nav className={styles.header__nav_desktop}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.header__nav_link}>
                {link.name}
              </Link>
            ))}
          </nav>

          <button onClick={toggleMenu} className={styles.header__toggle}>
            <div className={`${styles.line} ${styles.line1} ${isOpen ? styles.open : ''}`}></div>
            <div className={`${styles.line} ${styles.line2} ${isOpen ? styles.open : ''}`}></div>
            <div className={`${styles.line} ${styles.line3} ${isOpen ? styles.open : ''}`}></div>
          </button>
        </div>
      </header>
      
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className={styles.header__nav_mobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.ul variants={menuVariants} initial="hidden" animate="visible">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={linkVariants}>
                  <Link href={link.href} className={styles.header__nav_link} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
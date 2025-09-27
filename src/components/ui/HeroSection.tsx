"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion"; 
import styles from "../../app/HomePage.module.scss";

// Định nghĩa các biến thể animation với kiểu 'Variants'
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "circOut",
    },
  },
};

const buttonVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "circOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__overlay}></div>
      <video autoPlay loop muted playsInline className={styles.hero__video}>
        <source src="/hero-video.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
      <motion.div
        className={`${styles.hero__content} container`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.hero__title} variants={itemVariants}>
          Nghệ Thuật Của Mùi Hương
        </motion.h1>
        <motion.p className={styles.hero__subtitle} variants={itemVariants}>
          Nơi mỗi giọt hương là một câu chuyện độc bản.
        </motion.p>
        <motion.div variants={buttonVariants}>
          <Link href="/about" className={styles.hero__cta}>
            Khám Phá Câu Chuyện
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
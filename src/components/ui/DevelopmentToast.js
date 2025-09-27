"use client"; // Bắt buộc phải là Client Component để dùng state và effect

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DevelopmentToast.module.scss';

export default function DevelopmentToast({ isVisible }) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible); // Cập nhật state khi prop thay đổi
    
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 4000); // Tự động ẩn sau 4 giây

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={styles.toast}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ ease: 'easeInOut' }}
        >
          Tính năng đang được phát triển. Vui lòng quay lại sau!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
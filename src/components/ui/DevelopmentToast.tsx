"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DevelopmentToast.module.scss';

// Thêm type cho props
type ToastProps = {
  isVisible: boolean;
};

export default function DevelopmentToast({ isVisible }: ToastProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
    
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 4000);

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
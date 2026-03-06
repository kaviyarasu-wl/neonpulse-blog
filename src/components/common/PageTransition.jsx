import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];

const PAGE_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: EASE },
  },
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={PAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

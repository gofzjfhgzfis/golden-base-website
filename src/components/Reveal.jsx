import { motion } from 'framer-motion';

/**
 * ئەنیمەیشنی نەرم کاتێک بەشێک دێتە ناو دیمەنەوە.
 * <Reveal delay={0.1}>...</Reveal>
 */
export default function Reveal({ children, delay = 0, y = 28, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

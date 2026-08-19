import { motion } from 'framer-motion';
import { asset } from '../data/site';
import './Loader.css';

/**
 * پەڕەی بارکردن — بازنەی پرتەقاڵی بە نەرمی دەکێشرێت،
 * پاشان لۆگۆکە بە fade-in دەردەکەوێت، لە کۆتاییدا هەمووی وون دەبێت.
 */
export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="loader__stage">
        {/* بازنەی دەوروبەری لۆگۆ */}
        <svg className="loader__ring" viewBox="0 0 200 200" aria-hidden="true">
          <motion.circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="var(--brand-orange)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: -90 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: '50% 50%', rotate: -90 }}
          />
        </svg>

        {/* لۆگۆ */}
        <motion.img
          src={asset('images/logo/logo.png')}
          alt="Golden Base Company"
          className="loader__logo"
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* هێڵی پێشکەوتن */}
      <motion.div
        className="loader__bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2.1, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

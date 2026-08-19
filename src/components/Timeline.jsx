import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import Reveal from './Reveal';
import './Timeline.css';

export default function Timeline() {
  const { t } = useLang();

  return (
    <section className="section timeline-section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{t.timeline.eyebrow}</span>
          <h2>{t.timeline.title}</h2>
        </Reveal>

        <div className="timeline">
          {/* هێڵی ناوەڕاست کە بە scroll دەکێشرێت */}
          <motion.span
            className="timeline__spine"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          {t.timeline.items.map((item, i) => (
            <motion.div
              key={item.year}
              className="tlitem"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tlitem__dot" aria-hidden="true" />
              <div className="tlitem__body">
                <span className="tlitem__year">{item.year}</span>
                <h3 className="tlitem__title">{item.title}</h3>
                <p className="tlitem__text">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

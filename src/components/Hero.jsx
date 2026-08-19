import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import { site } from '../data/site';
import './Hero.css';

const rise = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLang();
  const years = new Date().getFullYear() - site.foundedYear;

  return (
    <section className="hero">
      {/* پاشبنەمای جوڵاو */}
      <div className="hero__bg" aria-hidden="true">
        <motion.span
          className="hero__blob hero__blob--orange"
          animate={{ x: [0, 28, 0], y: [0, -22, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="hero__blob hero__blob--sky"
          animate={{ x: [0, -32, 0], y: [0, 26, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.svg
          className="hero__gear"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="21" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="50" y1="20" x2="50" y2="13"
                transform={`rotate(${i * 30} 50 50)`}
                strokeLinecap="round"
              />
            ))}
          </g>
        </motion.svg>
      </div>

      <div className="container hero__inner">
        <motion.span className="eyebrow" variants={rise} initial="hidden" animate="show" custom={0}>
          {t.hero.eyebrow}
        </motion.span>

        <motion.h1 className="hero__title" variants={rise} initial="hidden" animate="show" custom={1}>
          {t.hero.title}
        </motion.h1>

        <motion.p className="hero__slogan" variants={rise} initial="hidden" animate="show" custom={2}>
          {t.slogan}
        </motion.p>

        <motion.p className="lead hero__sub" variants={rise} initial="hidden" animate="show" custom={3}>
          {t.hero.subtitle}
        </motion.p>

        <motion.div className="hero__cta" variants={rise} initial="hidden" animate="show" custom={4}>
          <Link to="/products" className="btn btn--primary">{t.hero.cta1}</Link>
          <Link to="/contact" className="btn btn--ghost">{t.hero.cta2}</Link>
        </motion.div>

        <motion.div className="hero__stats" variants={rise} initial="hidden" animate="show" custom={5}>
          <Stat value={`+${years}`} label={t.stats.years} />
          <Stat value="9" label={t.stats.products} />
          <Stat value="100%" label={t.stats.quality} />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong className="stat__value">{value}</strong>
      <span className="stat__label">{label}</span>
    </div>
  );
}

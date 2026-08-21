import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { useLang } from '../context/LanguageContext';
import { products, getProduct, waLink, asset } from '../data/site';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const [failed, setFailed] = useState(false);

  const product = getProduct(slug);
  if (!product) return <Navigate to="/products" replace />;

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="pdetail">
        <span className="pdetail__glow" aria-hidden="true" />

        <div className="container">
          <Link to="/products" className="pdetail__back">
            <span aria-hidden="true" className="pdetail__backarrow">←</span>
            {t.products.backToAll}
          </Link>

          <div className="pdetail__grid">
            {/* ---- وێنە ---- */}
            <motion.div
              className="pdetail__media card"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {failed ? (
                <div className="pdetail__ph">{product.name}</div>
              ) : (
                <img src={asset(product.image)} alt={product.name} onError={() => setFailed(true)} />
              )}
            </motion.div>

            {/* ---- زانیاری ---- */}
            <motion.div
              className="pdetail__info"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">{t.products.eyebrow}</span>
              <h1 className="pdetail__name" dir="ltr">{product.name}</h1>

              <div className="pdetail__badges">
                <span className={`ebadge ebadge--${product.engine}`}>
                  {t.products.engine[product.engine]}
                </span>
                {product.api && <span className="ebadge ebadge--api" dir="ltr">{product.api}</span>}
              </div>

              <p className="pdetail__desc">{product.desc[lang]}</p>

              <div className="pdetail__spec">
                <span className="pdetail__spectitle">{t.products.sizes}</span>
                <div className="pdetail__tags">
                  {product.sizes.map((s) => (
                    <span key={s} className="tag tag--size" dir="ltr">{s}</span>
                  ))}
                </div>
              </div>

              <div className="pdetail__spec">
                <span className="pdetail__spectitle">{t.products.grades}</span>
                <div className="pdetail__tags">
                  {product.grades.map((g) => (
                    <span key={g} className="tag" dir="ltr">{g}</span>
                  ))}
                </div>
              </div>

              <ul className="pdetail__features">
                {product.features[lang].map((f) => (
                  <li key={f}>
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`${t.products.inquire}: ${product.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary pdetail__cta"
              >
                {t.products.inquireWa}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- بەرهەمی تر ---- */}
      <section className="section section--sunk">
        <div className="container">
          <Reveal>
            <h2 className="pdetail__relatedtitle">{t.products.related}</h2>
          </Reveal>
          <div className="pgrid pgrid--3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
      strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { asset } from '../data/site';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { t, lang } = useLang();
  const [failed, setFailed] = useState(false);

  const { name, sizes = [], grades = [] } = product;
  const shownGrades = grades.slice(0, 4);
  const extra = grades.length - shownGrades.length;

  return (
    <Link to={`/products/${product.slug}`} className={`pcard card pcard--${product.tone}`}>
      <div className="pcard__media">
        {failed ? (
          <div className="pcard__placeholder" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.6" cy="9" r="1.7" />
              <path d="M21 16l-5.2-5.2L6 20.6" />
            </svg>
            <span>{name}</span>
          </div>
        ) : (
          <img src={asset(product.image)} alt={name} loading="lazy" onError={() => setFailed(true)} />
        )}
        <span className={`pcard__engine pcard__engine--${product.engine}`}>
          {t.products.engine[product.engine]}
        </span>
      </div>

      <div className="pcard__body">
        <h3 className="pcard__name" dir="ltr">{name}</h3>

        <p className="pcard__desc">{product.desc[lang]}</p>

        {sizes.length > 0 && (
          <div className="pcard__spec">
            <span className="pcard__spectitle">{t.products.sizes}</span>
            <div className="pcard__tags">
              {sizes.map((s) => (
                <span key={s} className="tag tag--size" dir="ltr">{s}</span>
              ))}
            </div>
          </div>
        )}

        {shownGrades.length > 0 && (
          <div className="pcard__spec">
            <span className="pcard__spectitle">{t.products.grades}</span>
            <div className="pcard__tags">
              {shownGrades.map((g) => (
                <span key={g} className="tag" dir="ltr">{g}</span>
              ))}
              {extra > 0 && <span className="tag tag--more" dir="ltr">+{extra}</span>}
            </div>
          </div>
        )}

        <span className="pcard__cta">
          {t.products.details}
          <span className="pcard__arrow" aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

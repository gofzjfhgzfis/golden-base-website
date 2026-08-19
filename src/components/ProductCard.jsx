import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { waLink, asset } from '../data/site';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);

  const { name, sizes = [], grades = [] } = product;

  return (
    <article className={`pcard card pcard--${product.tone}`}>
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
      </div>

      <div className="pcard__body">
        <h3 className="pcard__name" dir="ltr">{name}</h3>

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

        {grades.length > 0 && (
          <div className="pcard__spec">
            <span className="pcard__spectitle">{t.products.grades}</span>
            <div className="pcard__tags">
              {grades.map((g) => (
                <span key={g} className="tag" dir="ltr">{g}</span>
              ))}
            </div>
          </div>
        )}

        <a
          href={waLink(`${t.products.inquire}: ${name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="pcard__cta"
        >
          {t.products.inquire}
          <span className="pcard__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

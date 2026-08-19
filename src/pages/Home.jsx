import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { useLang } from '../context/LanguageContext';
import { products, asset } from '../data/site';
import './Home.css';

export default function Home() {
  const { t } = useLang();
  const featured = products.slice(0, 3);

  return (
    <>
      <Hero />

      {/* ---- دەربارەمان (کورت) ---- */}
      <section className="section section--sunk">
        <div className="container about-teaser">
          <Reveal className="about-teaser__text">
            <span className="eyebrow">{t.aboutTeaser.eyebrow}</span>
            <h2>{t.aboutTeaser.title}</h2>
            <p className="lead">{t.aboutTeaser.text}</p>
            <Link to="/about" className="btn btn--ghost">{t.aboutTeaser.link}</Link>
          </Reveal>

          <Reveal delay={0.15} className="about-teaser__media">
            <div className="about-teaser__frame">
              <img src={asset('images/logo/logo.png')} alt="Golden Base Company" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- بەهاکان ---- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.values.eyebrow}</span>
            <h2>{t.values.title}</h2>
          </Reveal>

          <div className="values">
            {t.values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.09}>
                <div className="valuecard card">
                  <span className="valuecard__index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- بەرهەمە هەڵبژێردراوەکان ---- */}
      <section className="section section--sunk">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2>{t.products.title}</h2>
            <p className="lead">{t.products.subtitle}</p>
          </Reveal>

          <div className="pgrid pgrid--3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.09}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="center-cta">
              <Link to="/products" className="btn btn--primary">{t.products.viewAll}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

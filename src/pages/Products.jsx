import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { products } from '../data/site';

export default function Products() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.products.eyebrow}
        title={t.products.title}
        subtitle={t.products.subtitle}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pgrid pgrid--3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Reveal from '../components/Reveal';
import Timeline from '../components/Timeline';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const { t } = useLang();

  return (
    <>
      <PageHeader
        eyebrow={t.aboutTeaser.eyebrow}
        title={t.aboutTeaser.title}
        subtitle={t.aboutTeaser.text}
      />

      <Timeline />

      <section className="section section--sunk">
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
    </>
  );
}

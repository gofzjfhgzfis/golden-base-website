import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { site, asset } from '../data/site';
import './Footer.css';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col">
          <div className="footer__brand">
            <img src={asset('images/logo/logo.png')} alt="" className="footer__logo" />
            <span className="footer__names">
              <strong>{t.company}</strong>
              <em className="footer__slogan">{t.slogan}</em>
            </span>
          </div>
          <p className="footer__about">{t.footer.about}</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">{t.footer.links}</h4>
          <Link to="/" className="footer__link">{t.nav.home}</Link>
          <Link to="/about" className="footer__link">{t.nav.about}</Link>
          <Link to="/products" className="footer__link">{t.nav.products}</Link>
          <Link to="/contact" className="footer__link">{t.nav.contact}</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">{t.footer.contactTitle}</h4>
          <a href={`tel:${site.phoneRaw}`} className="footer__link" dir="ltr">{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`} className="footer__link" dir="ltr">{site.email}</a>
          <span className="footer__link footer__link--plain">{t.contact.addressValue}</span>
          <span className="footer__link footer__link--plain">{t.contact.hoursValue}</span>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            {t.contact.facebook}
          </a>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">
          <span>© {year} {t.company}. {t.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}

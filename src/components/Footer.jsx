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

          <a href={`tel:${site.phoneRaw}`} className="footer__link footer__link--icon">
            <PhoneIcon />
            <span dir="ltr">{site.phoneDisplay}</span>
          </a>

          <a href={`mailto:${site.email}`} className="footer__link footer__link--icon">
            <GmailIcon />
            <span dir="ltr">{site.email}</span>
          </a>

          <a
            href={site.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--icon"
          >
            <PinIcon />
            <span>{t.contact.addressValue}</span>
          </a>

          <span className="footer__link footer__link--icon footer__link--plain">
            <ClockIcon />
            <span>{t.contact.hoursValue}</span>
          </span>

          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--icon"
          >
            <FacebookIcon />
            <span>{t.contact.facebook}</span>
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

/* ---------- ئایکۆنەکان ---------- */

function PhoneIcon() {
  return (
    <svg className="fico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.35 1.8.7 2.6a2 2 0 0 1-.45 2.1L8.1 9.7a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.83.35 1.7.6 2.6.7a2 2 0 0 1 1.9 2.2z" />
    </svg>
  );
}

/* Gmail — بە ڕەنگە فەرمییەکانی خۆی */
function GmailIcon() {
  return (
    <svg className="fico fico--brand" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22 6.2v11.3a1.5 1.5 0 0 1-1.5 1.5H19V8.6l-7 5.1-7-5.1v10.4H3.5A1.5 1.5 0 0 1 2 17.5V6.2l1.6-1.2L12 11.2l8.4-6.2z" />
      <path fill="#34A853" d="M2 17.5V7.1l3 2.2v9.7H3.5A1.5 1.5 0 0 1 2 17.5z" />
      <path fill="#FBBC04" d="M19 19V9.3l3-2.2v10.4a1.5 1.5 0 0 1-1.5 1.5H19z" />
      <path fill="#EA4335" d="M2 6.2c0-1.2 1.4-1.9 2.4-1.2L12 10.6l7.6-5.6c1-.7 2.4 0 2.4 1.2v.9L12 14.3 2 7.1z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="fico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10.4c0 5.4-8 12.1-8 12.1s-8-6.7-8-12.1a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10.2" r="2.8" />
    </svg>
  );
}

/* کاتژمێر — ئاماژەکان لەسەر ٨:٠٠ */
function ClockIcon() {
  return (
    <svg className="fico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" />
      {/* ئاماژەی کاتژمێر → ٨ ، ئاماژەی خولەک → ١٢ */}
      <path d="M12 12 8.2 14.2" />
      <path d="M12 12V6.6" />
    </svg>
  );
}

/* Facebook — بە ڕەنگی فەرمی */
function FacebookIcon() {
  return (
    <svg className="fico fico--brand" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z"
      />
    </svg>
  );
}

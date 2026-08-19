import { useState } from 'react';
import Reveal from '../components/Reveal';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LanguageContext';
import { site, waLink } from '../data/site';
import './Contact.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// پاککردنەوەی input — نەهێشتنی هەر تاگێکی HTML
const clean = (s) => s.replace(/[<>]/g, '').slice(0, 1000).trim();

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: null }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = t.contact.form.errName;
    if (!form.message.trim()) er.message = t.contact.form.errMessage;
    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) er.email = t.contact.form.errEmail;
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = [
      `${t.contact.form.name}: ${clean(form.name)}`,
      form.email.trim() && `${t.contact.form.email}: ${clean(form.email)}`,
      form.phone.trim() && `${t.contact.form.phone}: ${clean(form.phone)}`,
      '',
      clean(form.message),
    ]
      .filter(Boolean)
      .join('\n');

    window.open(waLink(body), '_blank', 'noopener,noreferrer');
  };

  const details = [
    { label: t.contact.phone, value: site.phoneDisplay, href: `tel:${site.phoneRaw}`, ltr: true, icon: <PhoneIcon /> },
    { label: t.contact.whatsapp, value: site.phoneDisplay, href: waLink(), ltr: true, external: true, icon: <WaIcon /> },
    { label: t.contact.email, value: site.email, href: `mailto:${site.email}`, ltr: true, icon: <MailIcon /> },
    { label: t.contact.address, value: t.contact.addressValue, href: site.mapLink, external: true, icon: <PinIcon /> },
    { label: t.contact.hours, value: t.contact.hoursValue, icon: <ClockIcon /> },
    { label: t.contact.facebook, value: 'Golden Base Company', href: site.facebook, external: true, icon: <FbIcon /> },
  ];

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact">
          {/* ---- زانیاری پەیوەندی ---- */}
          <div className="contact__details">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <DetailCard {...d} />
              </Reveal>
            ))}
          </div>

          {/* ---- فۆرم ---- */}
          <Reveal delay={0.12} className="contact__formwrap">
            <div className="cform card">
              <h3 className="cform__title">{t.contact.form.title}</h3>

              <form onSubmit={onSubmit} noValidate>
                <Field
                  label={t.contact.form.name}
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder={t.contact.form.namePh}
                  error={errors.name}
                  required
                />
                <Field
                  label={t.contact.form.email}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder={t.contact.form.emailPh}
                  error={errors.email}
                  ltr
                />
                <Field
                  label={t.contact.form.phone}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  placeholder={t.contact.form.phonePh}
                  ltr
                />

                <div className="field">
                  <label htmlFor="message">{t.contact.form.message} *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    placeholder={t.contact.form.messagePh}
                    maxLength={1000}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary cform__submit">
                  {t.contact.form.send}
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* ---- نەخشە ---- */}
        <Reveal delay={0.1}>
          <div className="container">
            <div className="mapwrap card">
              <iframe
                title="map"
                src={`https://www.google.com/maps?q=${site.mapLat},${site.mapLng}&z=16&hl=en&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="mapwrap__btn btn btn--primary"
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.directions}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

/* ---------- helpers ---------- */

function DetailCard({ label, value, href, external, ltr, icon }) {
  const inner = (
    <>
      <span className="dcard__icon">{icon}</span>
      <span className="dcard__text">
        <span className="dcard__label">{label}</span>
        <span className="dcard__value" dir={ltr ? 'ltr' : undefined}>{value}</span>
      </span>
    </>
  );

  if (!href) return <div className="dcard card">{inner}</div>;

  return (
    <a
      className="dcard card"
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {inner}
    </a>
  );
}

function Field({ label, name, error, ltr, required, ...rest }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}{required ? ' *' : ''}</label>
      <input id={name} name={name} dir={ltr ? 'ltr' : undefined} aria-invalid={!!error} {...rest} />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}

/* ---------- icons ---------- */
const ico = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round' };
const PhoneIcon = () => <svg {...ico}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.35 1.8.7 2.6a2 2 0 0 1-.45 2.1L8.1 9.7a16 16 0 0 0 6 6l1.3-1.25a2 2 0 0 1 2.1-.45c.83.35 1.7.6 2.6.7a2 2 0 0 1 1.9 2.2z" /></svg>;
const MailIcon = () => <svg {...ico}><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m2.5 6.5 9.5 6.5 9.5-6.5" /></svg>;
const PinIcon = () => <svg {...ico}><path d="M20 10.4c0 5.4-8 12.1-8 12.1s-8-6.7-8-12.1a8 8 0 0 1 16 0z" /><circle cx="12" cy="10.2" r="2.8" /></svg>;
const ClockIcon = () => <svg {...ico}><circle cx="12" cy="12" r="9.2" /><path d="M12 6.8V12l3.4 2" /></svg>;
const FbIcon = () => <svg {...ico}><path d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
const WaIcon = () => <svg {...ico}><path d="M21 11.6a8.9 8.9 0 0 1-13.2 7.8L3 21l1.7-4.7A8.9 8.9 0 1 1 21 11.6z" /><path d="M8.6 9.1c.2 1.9 2.4 4.1 4.3 4.3l.9-1.1 1.9.9c-.2 1-1.1 1.6-2.1 1.6-2.9 0-6.3-3.4-6.3-6.3 0-1 .6-1.9 1.6-2.1l.9 1.9z" /></svg>;

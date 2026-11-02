import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';
import { Button, PageHeader, Section } from '../components/Site.jsx';
import { CONTACT_EMAIL, CONTACT_PHONE, COMPANY_ADDRESS, EMAILJS, SERVICES, SOCIAL_LINKS } from '../data.js';
import { IconAI, IconArrow, IconMail, IconPhone, IconPin } from '../icons.jsx';

export default function EmailContact() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Web Development', budget: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus('Sending your message...');

    try {
      await emailjs.send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          service: form.service,
          budget: form.budget,
          message: form.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey: EMAILJS.PUBLIC_KEY }
      );
      setStatus('Thanks - your message has been sent successfully.');
      setForm({ name: '', email: '', service: 'Web Development', budget: '', message: '' });
    } catch (error) {
      setStatus('We could not send your message right now. Please email us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Techlifai</title>
        <meta name="description" content="Book a meeting or send a project enquiry to Techlifai." />
      </Helmet>
      <PageHeader
        eyebrow="CONTACT"
        title="Let’s talk about what’s next."
        intro="Tell us what you’re working towards. We’ll reply within one business day with a useful next step."
      />
      <Section>
        <div className="contact-grid">
          <div id="book">
            <h2>Book a meeting</h2>
            <p>Pick a time for a focused 30-minute conversation.</p>
            <div className="booking-placeholder">
              <span className="icon-box"><IconAI /></span>
              <h3>Ready to discuss your project?</h3>
              <p>Send us a message and our team will follow up with the right next step.</p>
              <Button href={`mailto:${CONTACT_EMAIL}`}>Email us instead <IconArrow width="15" /></Button>
            </div>
            <div className="contact-details">
              <a href={`mailto:${CONTACT_EMAIL}`}><IconMail width="18" />{CONTACT_EMAIL}</a>
              <a href={`tel:${CONTACT_PHONE}`}><IconPhone width="18" />{CONTACT_PHONE}</a>
              <span><IconPin width="18" />{COMPANY_ADDRESS}</span>
            </div>
          </div>

          <div id="form" className="form-card">
            <h2>Send a message</h2>
            <form onSubmit={submit}>
              <div className="form-row">
                <label>Name<input required value={form.name} onChange={update('name')} placeholder="Your name" /></label>
                <label>Email<input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" /></label>
              </div>
              <div className="form-row">
                <label>Service<select value={form.service} onChange={update('service')}>{SERVICES.map((service) => <option key={service.title}>{service.title}</option>)}</select></label>
                <label>Budget<select value={form.budget} onChange={update('budget')}><option value="">Select a range</option><option>€2k-€5k</option><option>€5k-€10k</option><option>€10k+</option></select></label>
              </div>
              <label>Project details<textarea required value={form.message} onChange={update('message')} placeholder="What are you trying to achieve?" /></label>
              <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send message'} <IconArrow width="15" /></button>
              {status && <p className="form-status" role="status">{status}</p>}
            </form>
          </div>
        </div>
      </Section>
      <Section className="grey">
        <div className="social-row"><span>Find us online</span>{Object.entries(SOCIAL_LINKS).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}</div>
      </Section>
    </>
  );
}

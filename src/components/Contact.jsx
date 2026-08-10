import { useState } from 'react';
import Reveal from '../Reveal.jsx';
import { CONTACT_EMAIL } from '../data.js';
import { IconArrow, IconMail, IconPhone, IconPin } from '../icons.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: 'Web Development', message: '' });
  const [status, setStatus] = useState('');

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in your name, email and message.');
      return;
    }
    // NOTE: This is a static front end with no backend, so it can't silently
    // send email on its own. It opens a pre-filled draft in the visitor's
    // email app instead. To submit silently, wire this up to a service like
    // Formspree, EmailJS, or your own backend endpoint.
    const subject = encodeURIComponent(`New project inquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app to send this to Techlifai — hit send there to finish.');
  };

  return (
    <section id="contact" className="section-pad">
      <div className="wrap contact-grid">
        <div>
          <Reveal className="eyebrow">CONTACT</Reveal>
          <Reveal as="h2" delay={1} className="h2">
            Let's build something that ranks.
          </Reveal>
          <Reveal delay={2} as="p" className="sub">
            Tell us about your project and the right specialist on our team will get back to you within one business
            day.
          </Reveal>
          <Reveal delay={3}>
            <div className="contact-info-item">
              <div className="ic"><IconMail /></div>
              <div><b>Email</b><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
            </div>
            <div className="contact-info-item">
              <div className="ic"><IconPhone /></div>
              <div><b>Phone</b><span>+44 20 7123 4567</span></div>
            </div>
            <div className="contact-info-item">
              <div className="ic"><IconPin /></div>
              <div><b>Based in</b><span>78 Edgehill RdMitcham CR4 2HW, London, UK — working with clients worldwide</span></div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={1} className="form-card">
          <form onSubmit={submit}>
            <div className="form-row">
              <div className="field">
                <label>Full name</label>
                <input type="text" placeholder="Your name" value={form.name} onChange={update('name')} />
              </div>
              <div className="field">
                <label>Email address</label>
                <input type="email" placeholder="you@company.com" value={form.email} onChange={update('email')} />
              </div>
            </div>
            <div className="field">
              <label>Service you need</label>
              <select value={form.service} onChange={update('service')}>
                <option>Web Development</option>
                <option>WordPress</option>
                <option>Webflow Development</option>
                <option>Shopify Development</option>
                <option>App Development</option>
                <option>SEO</option>
                <option>AI Automation</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field">
              <label>Project details</label>
              <textarea placeholder="Tell us what you're trying to build..." value={form.message} onChange={update('message')}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send message <IconArrow width="16" height="16" />
            </button>
            <p className="form-note">This opens your email app with the message pre-filled to {CONTACT_EMAIL} — you just hit send.</p>
            {status && <p className="submit-status">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

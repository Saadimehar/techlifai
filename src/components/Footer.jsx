import { CONTACT_EMAIL } from '../data.js';
import { IconTwitter, IconLinkedin, IconInsta, IconDribbble } from '../icons.jsx';

export default function Footer() {
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="brand" style={{ fontSize: 19 }}>
              <span className="brand-mark">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="3.5" y="3.5" width="25" height="25" rx="8" stroke="#00e6a8" strokeWidth="1.6" />
                  <path d="M10 10.5h12" stroke="#eaeff5" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M14 10.5v11" stroke="#eaeff5" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M18 10.5v11" stroke="#eaeff5" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="22.5" cy="11" r="2.2" fill="#00e6a8" />
                </svg>
              </span>
              <span>Techlifai</span>
            </div>
            <p>A full-stack digital agency for web, commerce, apps and AI — built to help your business rank.</p>
            <div className="social-row">
              <a href="#" aria-label="Twitter"><IconTwitter /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedin /></a>
              <a href="#" aria-label="Instagram"><IconInsta /></a>
              <a href="#" aria-label="Dribbble"><IconDribbble /></a>
            </div>
          </div>

          <div>
            <h5>Navigate</h5>
            <ul>
              <li><a href="#about" onClick={go('about')}>About</a></li>
              <li><a href="#services" onClick={go('services')}>Services</a></li>
              <li><a href="#projects" onClick={go('projects')}>Projects</a></li>
              <li><a href="#team" onClick={go('team')}>Team</a></li>
            </ul>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              <li><a href="#services" onClick={go('services')}>Web Development</a></li>
              <li><a href="#services" onClick={go('services')}>Shopify</a></li>
              <li><a href="#services" onClick={go('services')}>SEO</a></li>
              <li><a href="#services" onClick={go('services')}>AI Automation</a></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li><a href="#contact" onClick={go('contact')}>Start a project</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Techlifai. All rights reserved.</span>
          <span>Designed &amp; built by the Techlifai team.</span>
        </div>
      </div>
    </footer>
  );
}

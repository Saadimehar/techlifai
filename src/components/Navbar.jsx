import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data.js';
import { IconArrow, IconMenu, IconClose } from '../icons.jsx';

export default function Navbar({ active, mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <a href="#home" className="brand" onClick={go('home')}>
            <span className="brand-mark">
              <svg viewBox="0 0 32 32" fill="none">
                <rect x="3.5" y="3.5" width="25" height="25" rx="8" stroke="#00e6a8" strokeWidth="1.6" />
                <path d="M10 10.5h12" stroke="#eaeff5" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M14 10.5v11" stroke="#eaeff5" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M18 10.5v11" stroke="#eaeff5" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="22.5" cy="11" r="2.2" fill="#00e6a8" />
              </svg>
            </span>
            <span>
              Techlifai
              <small>AI DIGITAL STUDIO</small>
            </span>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((it) => (
              <li key={it.id}>
                <a href={`#${it.id}`} className={active === it.id ? 'active' : ''} onClick={go(it.id)}>
                  {it.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a href="#contact" className="nav-cta" onClick={go('contact')}>
              Start a project <IconArrow width="14" height="14" />
            </a>
            <button className="nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <IconClose width="22" height="22" /> : <IconMenu width="22" height="22" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((it) => (
          <a key={it.id} href={`#${it.id}`} className={active === it.id ? 'active' : ''} onClick={go(it.id)}>
            {it.label}
          </a>
        ))}
      </div>
    </>
  );
}

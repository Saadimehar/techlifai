import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { NAV_ITEMS } from './data.js';
import { IconUp } from './icons.jsx';

export default function App() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));

    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll);

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow g1"></div>
      <div className="bg-glow g2"></div>

      <Navbar active={active} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />

      <button
        className={`totop${showTop ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <IconUp />
      </button>
    </>
  );
}

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import BlogPreview from './components/BlogPreview.jsx';
import BlogPage from './components/BlogPage.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { NAV_ITEMS } from './data.js';
import { IconUp } from './icons.jsx';

export default function App() {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [route, setRoute] = useState(() => window.location.pathname || '/');

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);

    const ids = NAV_ITEMS.map((n) => n.id);
    const sectionIds = [...ids, 'blog'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nextSection = entry.target.id;
            if (nextSection === 'blog') {
              setActive('blog');
            } else {
              setActive(nextSection);
            }
          }
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
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const navigateTo = (path, hash = '') => {
    const fullPath = hash ? `${path}${hash.startsWith('#') ? hash : `#${hash}`}` : path;
    setRoute(path);
    window.history.pushState({}, '', fullPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const targetId = window.location.hash.replace('#', '');
    if (route === '/' && targetId) {
      const timer = window.setTimeout(() => {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => window.clearTimeout(timer);
    }
  }, [route]);

  if (route === '/blog' || route === '/blog') {
    return (
      <>
        <div className="bg-grid"></div>
        <div className="bg-glow g1"></div>
        <div className="bg-glow g2"></div>
        <Navbar active="blog" mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} onNavigate={navigateTo} currentPath={route} />
        <BlogPage onBack={navigateTo} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow g1"></div>
      <div className="bg-glow g2"></div>

      <Navbar active={active} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} onNavigate={navigateTo} currentPath={route} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <BlogPreview onNavigate={navigateTo} />
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

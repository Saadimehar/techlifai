import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IconArrow, IconClose, IconMenu } from "../icons.jsx";
import {
  CONTACT_EMAIL,
  INDUSTRIES,
  NAV_ITEMS,
  SERVICES,
  SOCIAL_LINKS,
} from "../data.js";
import techlifaiIcon from "../logos/techlifai-chip-icon.svg";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(
        () =>
          document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth" }),
        80,
      );
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export function Button({ children, to, href, variant = "primary", ...props }) {
  const className = `btn btn-${variant}`;
  if (to)
    return (
      <Link className={className} to={to} {...props}>
        {children}
      </Link>
    );
  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
}

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Tag = motion[as] || motion.div;
  const reduce = useReducedMotion();
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  id,
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        {(eyebrow || title || intro) && (
          <Reveal className="section-heading">
            <span className="eyebrow">{eyebrow}</span>
            {title && <h2>{title}</h2>}
            {intro && <p>{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <div className="page-header">
      <div className="container">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>
      </div>
    </div>
  );
}

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    ...NAV_ITEMS.filter(
      (item) => !["home", "team", "services"].includes(item.id),
    ).map((item) => ({ label: item.label, to: `/${item.id}` })),
    { label: "Blog", to: "/blog" },
  ];
  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Link className="brand brand-lockup" to="/">
            <img src={techlifaiIcon} alt="Techlifai logo" />
            <span className="brand-copy">
              <strong>
                <span className="brand-t">T</span>echlifai
              </strong>
              <small>Digital growth studio</small>
            </span>
          </Link>
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {links.map((link) =>
              link.label === "Services" ? (
                <ServiceMenu key={link.to} closeMenu={() => setOpen(false)} />
              ) : link.label === "Industries" ? (
                <IndustryMenu key={link.to} closeMenu={() => setOpen(false)} />
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>
          <div className="nav-actions">
            <Button to="/contact#book">
              Book a meeting <IconArrow width="15" />
            </Button>
            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </header>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function ServiceMenu({ closeMenu }) {
  const [expanded, setExpanded] = useState(false);
  const closeTimer = useRef(null);
  const navigate = useNavigate();
  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setExpanded(true);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setExpanded(false), 280);
  };
  const goToServices = () => {
    closeMenu();
    setExpanded(false);
    navigate("/services");
  };
  return (
    <div
      className={`services-menu ${expanded ? "expanded" : ""}`}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        className="services-trigger"
        onClick={goToServices}
        onMouseEnter={openMenu}
        aria-expanded={expanded}
      >
        Services <span aria-hidden="true">⌄</span>
      </button>
      <div
        className="services-dropdown"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className="simple-dropdown-grid">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              to={`/services#${service.title.toLowerCase().replaceAll(" ", "-")}`}
              onClick={closeMenu}
            >
              <span>{service.title}</span>
              <IconArrow width="13" />
            </Link>
          ))}
        </div>
        <Link
          className="simple-dropdown-footer"
          to="/services"
          onClick={closeMenu}
        >
          View all services <IconArrow width="14" />
        </Link>
      </div>
    </div>
  );
}

function IndustryMenu({ closeMenu }) {
  const [expanded, setExpanded] = useState(false);
  const closeTimer = useRef(null);
  const navigate = useNavigate();
  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setExpanded(true);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setExpanded(false), 280);
  };
  const goToIndustries = () => {
    closeMenu();
    setExpanded(false);
    navigate("/industries");
  };
  return (
    <div
      className={`industries-menu ${expanded ? "expanded" : ""}`}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        className="industries-trigger"
        onClick={goToIndustries}
        onMouseEnter={openMenu}
        aria-expanded={expanded}
      >
        Industries <span aria-hidden="true">⌄</span>
      </button>
      <div
        className="industries-dropdown"
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className="simple-dropdown-grid">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.title}
              to={`/industries#${industry.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and").replaceAll("---", "-")}`}
              onClick={closeMenu}
            >
              <span>{industry.title}</span>
              <IconArrow width="13" />
            </Link>
          ))}
        </div>
        <Link
          className="simple-dropdown-footer"
          to="/industries"
          onClick={closeMenu}
        >
          View all industries <IconArrow width="14" />
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link className="brand brand-lockup" to="/">
            <img src={techlifaiIcon} alt="Techlifai logo" />
            <span className="brand-copy">
              <strong>
                <span className="brand-t">T</span>echlifai
              </strong>
              <small>Digital growth studio</small>
            </span>
          </Link>
          <p>
            Digital products, growth systems and AI automation for ambitious
            companies.
          </p>
        </div>
        <div>
          <span className="footer-label">Explore</span>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <span className="footer-label">Connect</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Techlifai. All rights reserved.
        </span>
        <Link to="/contact">
          Start a conversation <IconArrow width="14" />
        </Link>
      </div>
    </footer>
  );
}

export function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

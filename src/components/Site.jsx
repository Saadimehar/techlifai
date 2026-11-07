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

const BUTTON_VARIANTS = {
  primary:
    "border-transparent bg-mint text-white px-[1.15rem] py-[0.82rem] hover:-translate-y-0.5 hover:shadow-btn",
  secondary:
    "border-[#cbd7e8] bg-white text-ink px-[1.15rem] py-[0.82rem] hover:-translate-y-0.5 hover:shadow-btn",
  glow: "border-transparent bg-glow text-ink px-[1.15rem] py-[0.82rem] hover:-translate-y-0.5 hover:shadow-btn",
  text: "border-0 bg-transparent p-0 text-mint hover:opacity-80",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-full border font-semibold transition duration-250 ease-out ${
    BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary
  } ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a className={classes} href={href} {...props}>
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
  grey = false,
}) {
  const isGrey = grey || className.split(" ").includes("grey");
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-28 ${isGrey ? "bg-soft" : ""} ${className}`.trim()}
    >
      <div className="container-site">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-[680px]">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="mb-4 text-[clamp(2rem,4vw,3.8rem)] font-bold text-ink">
                {title}
              </h2>
            )}
            {intro && <p className="m-0 text-[1.05rem] text-muted">{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <div className="border-b border-line bg-soft pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mb-4 max-w-[800px] text-[clamp(2.7rem,10vw,4.3rem)] font-bold text-ink md:text-[clamp(3rem,7vw,6.6rem)]">
            {title}
          </h1>
          <p className="m-0 max-w-[650px] text-base text-muted md:text-[1.15rem]">
            {intro}
          </p>
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
      <header
        className={`sticky top-0 z-30 border-b bg-white/95 backdrop-blur-md transition duration-250 ${
          scrolled
            ? "border-line shadow-[0_3px_20px_rgba(10,14,23,0.04)]"
            : "border-transparent"
        }`}
      >
        <div className="container-site flex min-h-[80px] items-center justify-between gap-4 lg:min-h-[88px] lg:gap-8">
          <Link className="flex shrink-0 items-center gap-2 sm:gap-3" to="/">
            <img
              src={techlifaiIcon}
              alt="Techlifai logo"
              className="block h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10 lg:h-[46px] lg:w-[46px]"
            />
            <span className="flex flex-col gap-0.5 whitespace-nowrap">
              <strong className="font-display text-[1.05rem] leading-none font-bold tracking-[-0.03em] text-ink sm:text-[1.15rem] lg:text-[1.35rem]">
                <span className="text-mint">T</span>echlifai
              </strong>
              <small className="block font-mono text-[0.48rem] leading-[1.1] font-semibold tracking-[0.11em] text-muted uppercase sm:text-[0.54rem] sm:tracking-[0.16em] lg:text-[0.62rem]">
                Digital growth studio
              </small>
            </span>
          </Link>

          <nav
            className={`${
              open ? "flex" : "hidden"
            } absolute top-[80px] right-0 left-0 max-h-[calc(100svh-80px)] flex-col items-stretch overflow-y-auto border-b border-line bg-white px-5 pt-4 pb-6 shadow-[0_12px_25px_rgba(10,14,23,0.08)] lg:static lg:ml-auto lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-6 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
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
                  className={({ isActive }) =>
                    `border-b border-[#eef2f5] py-3 text-[0.87rem] transition duration-200 lg:border-0 lg:py-0 ${
                      isActive
                        ? "font-semibold text-ink"
                        : "text-muted hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              to="/contact#book"
              className="hidden text-[0.82rem] px-3.5 py-2.5 lg:inline-flex"
            >
              Book a meeting <IconArrow width="15" />
            </Button>
            <button
              className="block border-0 bg-transparent p-1.5 text-ink lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <IconClose className="w-[23px]" />
              ) : (
                <IconMenu className="w-[23px]" />
              )}
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
      className="relative block h-auto lg:flex lg:h-full lg:items-center"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        className={`flex w-full items-center justify-between gap-1.5 border-b border-[#eef2f5] bg-transparent py-3 text-[0.87rem] transition duration-200 lg:w-auto lg:justify-start lg:border-0 lg:py-4 ${
          expanded ? "text-ink" : "text-muted hover:text-ink"
        }`}
        onClick={goToServices}
        onMouseEnter={openMenu}
        aria-expanded={expanded}
      >
        Services{" "}
        <span
          aria-hidden="true"
          className={`text-[1.05rem] leading-none transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      <div
        className={`${
          expanded
            ? "block opacity-100 visible translate-y-0"
            : "hidden lg:block lg:opacity-0 lg:invisible lg:translate-y-2"
        } static w-full border-b border-[#eef2f5] bg-white py-1.5 transition-all duration-200 lg:absolute lg:top-[calc(100%+8px)] lg:-left-[120px] lg:w-[min(540px,calc(100vw-32px))] lg:rounded-2xl lg:border lg:border-line lg:p-4 lg:shadow-dropdown before:hidden lg:before:absolute lg:before:-top-2.5 lg:before:right-0 lg:before:left-0 lg:before:block lg:before:h-2.5 lg:before:content-['']`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              to={`/services#${service.title.toLowerCase().replaceAll(" ", "-")}`}
              onClick={closeMenu}
              className="flex items-center justify-between gap-3 border-b border-[#edf1f5] px-1.5 py-2.5 text-[0.78rem] text-ink transition-colors hover:text-mint lg:py-3 lg:text-[0.83rem]"
            >
              <span>{service.title}</span>
              <IconArrow width="13" className="shrink-0 text-[#a7b5c3]" />
            </Link>
          ))}
        </div>
        <Link
          className="flex items-center gap-1.5 px-1.5 pt-3.5 pb-0.5 text-[0.78rem] font-semibold text-mint"
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
      className="relative block h-auto lg:flex lg:h-full lg:items-center"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        className={`flex w-full items-center justify-between gap-1.5 border-b border-[#eef2f5] bg-transparent py-3 text-[0.87rem] transition duration-200 lg:w-auto lg:justify-start lg:border-0 lg:py-4 ${
          expanded ? "text-ink" : "text-muted hover:text-ink"
        }`}
        onClick={goToIndustries}
        onMouseEnter={openMenu}
        aria-expanded={expanded}
      >
        Industries{" "}
        <span
          aria-hidden="true"
          className={`text-[1.05rem] leading-none transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      <div
        className={`${
          expanded
            ? "block opacity-100 visible translate-y-0"
            : "hidden lg:block lg:opacity-0 lg:invisible lg:translate-y-2"
        } static w-full border-b border-[#eef2f5] bg-white py-1.5 transition-all duration-200 lg:absolute lg:top-[calc(100%+8px)] lg:-left-[170px] lg:w-[min(680px,calc(100vw-32px))] lg:rounded-2xl lg:border lg:border-line lg:p-4 lg:shadow-dropdown before:hidden lg:before:absolute lg:before:-top-2.5 lg:before:right-0 lg:before:left-0 lg:before:block lg:before:h-2.5 lg:before:content-['']`}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.title}
              to={`/industries#${industry.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "and")
                .replaceAll("---", "-")}`}
              onClick={closeMenu}
              className="flex items-center justify-between gap-3 border-b border-[#edf1f5] px-1.5 py-2.5 text-[0.78rem] text-ink transition-colors hover:text-mint lg:py-3 lg:text-[0.83rem]"
            >
              <span>{industry.title}</span>
              <IconArrow width="13" className="shrink-0 text-[#a7b5c3]" />
            </Link>
          ))}
        </div>
        <Link
          className="flex items-center gap-1.5 px-1.5 pt-3.5 pb-0.5 text-[0.78rem] font-semibold text-mint"
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
    <footer className="bg-ink pt-16 pb-6 text-white">
      <div className="container-site grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link className="flex shrink-0 items-center gap-3" to="/">
            <img
              src={techlifaiIcon}
              alt="Techlifai logo"
              className="block h-[42px] w-[42px] shrink-0 object-contain sm:h-[50px] sm:w-[50px]"
            />
            <span className="flex flex-col gap-0.5 whitespace-nowrap">
              <strong className="font-display text-[1.15rem] leading-none font-bold tracking-[-0.03em] text-white sm:text-[1.35rem]">
                <span className="text-mint">T</span>echlifai
              </strong>
              <small className="block font-mono text-[0.54rem] leading-[1.1] font-semibold tracking-[0.16em] text-[#b6c4d5] uppercase sm:text-[0.62rem]">
                Digital growth studio
              </small>
            </span>
          </Link>
          <p className="mt-4 mb-0 max-w-[280px] text-[#8792a2]">
            Digital products, growth systems and AI automation for ambitious
            companies.
          </p>
        </div>

        <div className="grid content-start gap-2.5">
          <span className="mono-label mb-1 text-mint">Explore</span>
          <Link
            to="/about"
            className="text-[0.85rem] text-[#aeb8c6] transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-[0.85rem] text-[#aeb8c6] transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="text-[0.85rem] text-[#aeb8c6] transition-colors hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className="text-[0.85rem] text-[#aeb8c6] transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>

        <div className="grid content-start gap-2.5">
          <span className="mono-label mb-1 text-mint">Connect</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[0.85rem] text-[#aeb8c6] transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-[0.85rem] text-[#aeb8c6] transition-colors hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <div className="container-site mt-12 flex flex-col justify-between gap-2.5 border-t border-[#29303a] pt-6 text-[0.75rem] text-[#8792a2] sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} Techlifai. All rights reserved.
        </span>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-glow transition-opacity hover:opacity-80"
        >
          Start a conversation <IconArrow width="14" />
        </Link>
      </div>
    </footer>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-6 shadow-card ${className}`.trim()}
    >
      {children}
    </div>
  );
}

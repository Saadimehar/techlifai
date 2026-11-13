import { NavLink, Link, useLocation } from "react-router-dom";
import {
  AnimatePresence,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "../data.js";
import { useTheme } from "../lib/theme.js";
import {
  getLenis,
  scrollToTarget,
  useSmoothScroll,
} from "../lib/smoothScroll.js";
import { Button } from "./Site.jsx";
import PageTransition from "./PageTransition.jsx";
import { IconArrow } from "../icons.jsx";

const LINKS = [
  { label: "Work", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Blog", to: "/blog" },
];

function ScrollManager() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(
        () => scrollToTarget(document.getElementById(hash.slice(1))),
        120,
      );
      return () => clearTimeout(timer);
    }
    scrollToTarget(0, { immediate: true });
  }, [hash]);
  return null;
}

export function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Techlifai home"
      className={`flex items-center gap-2.5 ${className}`}
    >
      <svg viewBox="0 0 64 64" width="28" height="28" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="currentColor" />
        <path
          d="M18 18h28M27 18v28M37 18v28"
          fill="none"
          stroke="var(--c-paper)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="45" cy="20" r="5" fill="var(--c-accent)" />
      </svg>
      <span className="font-display text-[1.15rem] font-semibold tracking-[-0.04em]">
        techlifai
      </span>
    </Link>
  );
}

function ThemeToggle() {
  const [theme, toggle] = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
    >
      <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 3.5a8.5 8.5 0 0 1 0 17z"
          fill="currentColor"
          style={{
            transformOrigin: "12px 12px",
            transform: theme === "dark" ? "rotate(0)" : "rotate(180deg)",
            transition: "transform .6s cubic-bezier(.16,1,.3,1)",
          }}
        />
      </svg>
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    addEventListener("scroll", fn, { passive: true });
    return () => removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-site flex h-[68px] items-center justify-between gap-6 md:h-[76px]">
        <Logo className="relative z-50 text-ink" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-2 text-[0.88rem] transition-colors duration-300 ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <span className={`link-u ${isActive ? "link-u-active" : ""}`}>
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2.5">
          <ThemeToggle />
          <Button
            to="/contact"
            className="!px-5 !py-2.5 !text-[0.85rem]"
            wrapperClassName="max-sm:hidden"
          >
            Start a project
          </Button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-[18px]">
              <span
                className={`absolute left-0 h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper px-6 pt-28 pb-8 lg:hidden"
          >
            <ul className="m-0 list-none p-0">
              {[...LINKS, { label: "Contact", to: "/contact" }].map(
                (link, i) => (
                  <m.li
                    key={link.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.05,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-line"
                  >
                    <Link
                      to={link.to}
                      className="flex items-baseline justify-between py-4 text-[2.1rem] font-medium tracking-[-0.04em] text-ink"
                    >
                      {link.label}
                      <span className="mono-label text-muted">
                        0{i + 1}
                      </span>
                    </Link>
                  </m.li>
                ),
              )}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-10 font-mono text-[0.85rem] text-muted"
            >
              {CONTACT_EMAIL}
            </a>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Karachi",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="mono-label inline-flex items-center gap-2 text-muted">
      <i className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
      Islamabad {time}
    </span>
  );
}

const FOOTER_LINKS = [
  ["Work", "/projects"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-line pt-20 md:pt-28">
      <div className="container-site">
        <span className="eyebrow">Next project</span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="group block w-fit max-w-full text-[clamp(1.7rem,6.4vw,5.6rem)] leading-[1.05] font-medium tracking-[-0.045em] break-all md:break-normal"
        >
          <span className="link-u">{CONTACT_EMAIL}</span>
          <IconArrow
            className="ml-3 inline-block h-[0.6em] w-[0.6em] text-mint transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>

        <div className="mt-20 flex flex-col gap-8 border-t border-line py-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3">
            {FOOTER_LINKS.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="text-[0.92rem] text-muted transition-colors duration-300 hover:text-ink"
              >
                <span className="link-u">{label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {["LinkedIn", "Instagram", "X"].map((name) => (
              <a
                key={name}
                href={SOCIAL_LINKS[name]}
                target="_blank"
                rel="noreferrer"
                className="text-[0.92rem] text-muted transition-colors duration-300 hover:text-ink"
              >
                <span className="link-u">{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-line py-6 text-[0.78rem] text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Techlifai</span>
          <LocalTime />
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }) {
  const location = useLocation();
  const { pathname } = location;
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  useSmoothScroll();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-mint focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <m.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-mint"
        style={{ scaleX: progress }}
      />
      <Header />
      <AnimatePresence mode="wait" initial>
        <m.div key={pathname}>
          <ScrollManager />
          {!reduce && <PageTransition pathname={pathname} />}
          <main id="main">{children(location)}</main>
          <Footer />
        </m.div>
      </AnimatePresence>
    </>
  );
}

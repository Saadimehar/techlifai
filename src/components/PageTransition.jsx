import { m } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];
const FLAT_TOP = "M0 100 Q50 100 100 100 Z";
const CURVE_TOP = "M0 100 Q50 0 100 100 Z";
const FLAT_BOTTOM = "M0 0 Q50 0 100 0 Z";
const CURVE_BOTTOM = "M0 0 Q50 100 100 0 Z";

const LABELS = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/industries": "Industries",
  "/projects": "Work",
  "/blog": "Journal",
  "/team": "Team",
  "/reviews": "Reviews",
  "/contact": "Contact",
};

const labelFor = (pathname) =>
  LABELS[pathname] || (pathname.startsWith("/blog/") ? "Journal" : "Techlifai");

const curveClass =
  "absolute left-0 h-[16vh] w-full fill-ink";

export default function PageTransition({ pathname }) {
  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] will-change-transform"
      initial={{ y: "0%" }}
      animate={{
        y: "-100%",
        transition: { duration: 0.95, delay: 0.35, ease: EASE },
      }}
      exit={{
        y: ["100%", "0%"],
        transition: { duration: 0.75, ease: EASE },
      }}
    >
      <div className="absolute inset-0 grid place-items-center bg-ink">
        <m.span
          className="font-display text-[clamp(2rem,7vw,5rem)] font-medium tracking-[-0.045em] text-paper"
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [16, 0, 0, -12],
            transition: { duration: 1.1, times: [0, 0.3, 0.7, 1], ease: "easeOut" },
          }}
          exit={{ opacity: 0 }}
        >
          {labelFor(pathname)}
        </m.span>
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={`${curveClass} bottom-full`}
      >
        <m.path
          initial={{ d: FLAT_TOP }}
          animate={{ d: FLAT_TOP }}
          exit={{
            d: [CURVE_TOP, FLAT_TOP],
            transition: { duration: 0.75, ease: EASE },
          }}
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className={`${curveClass} top-full`}
      >
        <m.path
          initial={{ d: FLAT_BOTTOM }}
          animate={{
            d: [FLAT_BOTTOM, CURVE_BOTTOM, FLAT_BOTTOM],
            transition: { duration: 0.95, delay: 0.35, ease: EASE },
          }}
        />
      </svg>
    </m.div>
  );
}

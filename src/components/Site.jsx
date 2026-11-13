import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { IconArrow } from "../icons.jsx";

const BUTTON_VARIANTS = {
  primary:
    "bg-ink text-paper border-ink px-6 py-3.5 hover:bg-mint hover:border-mint hover:text-on-accent",
  secondary:
    "bg-transparent text-ink border-line px-6 py-3.5 hover:border-ink",
  glow: "bg-mint text-on-accent border-mint px-6 py-3.5 hover:opacity-90",
  text: "group/text border-0 bg-transparent p-0 text-ink hover:text-mint",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2.5 rounded-full border text-[0.92rem] font-medium whitespace-nowrap transition-colors duration-300 ${
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
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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
      className={`py-20 md:py-28 lg:py-36 ${isGrey ? "bg-soft" : ""} ${className}`.trim()}
    >
      <div className="container-site">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-[760px] md:mb-16">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <h2 className="text-[clamp(2.1rem,5vw,4rem)] font-medium text-ink">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 mb-0 max-w-[520px] text-[1.05rem] text-muted">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <div className="border-b border-line pt-36 pb-14 md:pt-48 md:pb-20">
      <div className="container-site">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="max-w-[1000px] text-[clamp(2.6rem,8vw,6.5rem)] font-medium text-ink">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 mb-0 max-w-[480px] text-base text-muted md:text-[1.1rem]">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-line bg-paper p-6 transition-colors duration-300 hover:border-muted ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function ArrowLink({ to, href, children, className = "" }) {
  const cls = `group inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-ink transition-colors hover:text-mint ${className}`;
  const icon = (
    <IconArrow
      width="14"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );
  return to ? (
    <Link to={to} className={cls}>
      {children} {icon}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children} {icon}
    </a>
  );
}

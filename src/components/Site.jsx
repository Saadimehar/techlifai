import { useRef } from "react";
import { Link } from "react-router-dom";
import { m, useReducedMotion } from "framer-motion";
import { IconArrow } from "../icons.jsx";

const BUTTON_VARIANTS = {
  primary: {
    base: "bg-ink text-paper border-ink px-6 py-3.5 hover:text-on-accent hover:border-mint",
    fill: "bg-mint",
  },
  secondary: {
    base: "bg-transparent text-ink border-line px-6 py-3.5 hover:text-paper hover:border-ink",
    fill: "bg-ink",
  },
  glow: {
    base: "bg-mint text-on-accent border-mint px-6 py-3.5 hover:text-paper hover:border-ink",
    fill: "bg-ink",
  },
};

function Magnetic({ children, className = "" }) {
  const ref = useRef(null);
  const move = (event) => {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };
  const leave = () => {
    ref.current.style.transform = "";
  };
  return (
    <span
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`inline-flex transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  wrapperClassName = "",
  ...props
}) {
  if (variant === "text") {
    const cls = `group inline-flex items-center gap-2 text-ink transition-colors hover:text-mint ${className}`;
    return to ? (
      <Link className={cls} to={to} {...props}>
        <span className="link-u">{children}</span>
      </Link>
    ) : (
      <a className={cls} href={href} {...props}>
        <span className="link-u">{children}</span>
      </a>
    );
  }

  const v = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary;
  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full border text-[0.92rem] font-medium whitespace-nowrap transition-[color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${v.base} ${className}`.trim();
  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-x-[-10%] top-0 h-[140%] translate-y-full rounded-t-[60%] transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-[-20%] group-hover:rounded-t-[0%] ${v.fill}`}
      />
      <span className="relative block overflow-hidden">
        <span className="flex items-center gap-2.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[120%]">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 flex translate-y-[120%] items-center justify-center gap-2.5 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
    </>
  );

  return (
    <Magnetic className={wrapperClassName}>
      {to ? (
        <Link className={classes} to={to} {...props}>
          {content}
        </Link>
      ) : (
        <a className={classes} href={href} {...props}>
          {content}
        </a>
      )}
    </Magnetic>
  );
}

export function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Tag = m[as] || m.div;
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
              <h2 className="overflow-hidden pb-[0.1em] text-[clamp(2.1rem,5vw,4rem)] font-medium text-ink">
                <m.span
                  className="block"
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {title}
                </m.span>
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
  const cls = `group inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-ink transition-colors duration-300 hover:text-mint ${className}`;
  const icon = (
    <IconArrow
      width="14"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );
  return to ? (
    <Link to={to} className={cls}>
      <span className="link-u">{children}</span> {icon}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      <span className="link-u">{children}</span> {icon}
    </a>
  );
}

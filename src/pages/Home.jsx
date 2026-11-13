import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES, PROJECTS } from "../data.js";
import { ArrowLink, Button, Reveal, Section } from "../components/Site.jsx";
import { IconArrow } from "../icons.jsx";
import { Meta } from "./pageHelpers.jsx";

const WORDS = ["websites", "apps", "AI systems", "growth"];
const STACK = [
  "React",
  "Node.js",
  "Shopify",
  "Webflow",
  "WordPress",
  "React Native",
  "Next.js",
  "OpenAI",
  "Figma",
  "AWS",
];
const STATS = [
  ["40+", "Projects shipped"],
  ["15+", "Specialists"],
  ["98%", "Client retention"],
  ["24h", "Reply time"],
];
const PROCESS = [
  ["Discover", "Goals, users, constraints."],
  ["Design", "Systems before screens."],
  ["Build", "Clean code, fast pages."],
  ["Grow", "Measure, learn, iterate."],
];

function Hero() {
  const [word, setWord] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-10 md:pb-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto grid w-[min(1240px,calc(100%-32px))] grid-cols-2 md:w-[min(1240px,calc(100%-64px))] md:grid-cols-4"
      >
        {[0, 1, 2, 3].map((i) => (
          <i
            key={i}
            className={`border-l border-line ${i > 1 ? "max-md:hidden" : ""} ${
              i === 3 ? "border-r" : ""
            } ${i === 1 ? "max-md:border-r" : ""}`}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] -right-[10%] h-[min(60vw,640px)] w-[min(60vw,640px)] rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: "var(--c-accent)" }}
      />

      <div className="container-site relative">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mono-label mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/60 px-3.5 py-2 text-muted backdrop-blur"
        >
          <i className="pulse-dot h-1.5 w-1.5 rounded-full bg-mint" />
          Booking new projects
        </motion.span>

        <h1 className="max-w-[1100px] text-[clamp(2.9rem,9.6vw,9rem)] font-medium">
          {["We design and build", "digital"].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
                {i === 1 && (
                  <span className="relative ml-[0.22em] inline-block overflow-hidden align-bottom text-mint">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={word}
                        className="block"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {WORDS[word]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col justify-between gap-8 border-t border-line pt-6 md:flex-row md:items-end"
        >
          <p className="m-0 max-w-[360px] text-[1.05rem] text-muted">
            A small senior studio for brands that care about craft and results.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact">
              Book a call <IconArrow width="15" />
            </Button>
            <Button to="/projects" variant="secondary">
              See work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...STACK, ...STACK];
  return (
    <div
      className="marquee overflow-hidden border-y border-line py-6"
      aria-label="Technologies we work with"
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {items.map((name, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-[1.6rem] tracking-[-0.03em] text-muted md:text-[2rem]"
          >
            {name}
            <i className="h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceRows() {
  return (
    <ul className="m-0 list-none border-t border-line p-0">
      {SERVICES.map((service, i) => {
        const Icon = service.icon;
        return (
          <li key={service.title}>
            <Reveal delay={Math.min(i * 0.03, 0.2)}>
              <Link
                to={`/services#${service.title.toLowerCase().replaceAll(" ", "-")}`}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-line py-6 transition-all duration-500 hover:bg-soft hover:px-4 md:grid-cols-[4rem_1.2fr_1fr_auto] md:py-8"
              >
                <span className="mono-label text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(1.4rem,3vw,2.4rem)] font-medium transition-transform duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <span className="mono-label hidden text-muted md:block">
                  {service.tag}
                </span>
                <span className="flex items-center gap-3">
                  <Icon
                    width="20"
                    className="hidden text-muted transition-colors group-hover:text-mint sm:block"
                  />
                  <IconArrow
                    width="22"
                    className="text-muted transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint"
                  />
                </span>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

function WorkCard({ project, offset }) {
  return (
    <Reveal className={offset ? "md:mt-24" : ""}>
      <Link to="/projects" className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-soft">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute top-4 right-4 grid h-11 w-11 scale-75 place-items-center rounded-full bg-mint text-on-accent opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <IconArrow width="18" />
          </span>
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="text-[1.5rem] font-medium">{project.title}</h3>
          <span className="mono-label text-muted">{project.tag}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Home() {
  const work = PROJECTS.filter((p) => p.image).slice(0, 4);
  return (
    <>
      <Meta
        title="Digital studio"
        description="Techlifai designs and engineers websites, apps, SEO and AI automation."
      />
      <Hero />
      <Marquee />

      <Section eyebrow="Services" title="What we do.">
        <ServiceRows />
      </Section>

      <Section eyebrow="Selected work" title="Built to perform." className="pt-0">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {work.map((project, i) => (
            <WorkCard key={project.title} project={project} offset={i % 2 === 1} />
          ))}
        </div>
        <div className="mt-16 md:mt-24">
          <Button to="/projects" variant="secondary">
            All projects <IconArrow width="15" />
          </Button>
        </div>
      </Section>

      <section className="border-y border-line">
        <div className="container-site grid grid-cols-2 md:grid-cols-4">
          {STATS.map(([value, label], i) => (
            <Reveal
              key={label}
              delay={i * 0.06}
              className={`py-10 md:py-16 ${i % 2 === 1 ? "border-l border-line pl-6" : ""} ${
                i > 0 ? "md:border-l md:border-line md:pl-8" : ""
              } ${i > 1 ? "max-md:border-t max-md:border-line" : ""}`}
            >
              <b className="block font-display text-[clamp(2.6rem,6vw,5rem)] leading-none font-medium tracking-[-0.05em]">
                {value}
              </b>
              <span className="mono-label mt-3 block text-muted">{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <Section eyebrow="Process" title="Four steps. No fluff.">
        <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map(([title, text], i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="group border-b border-line py-8 sm:pr-8 sm:odd:border-r lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="mono-label text-mint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-16 mb-3 text-[1.8rem] font-medium md:mt-24">
                {title}
              </h3>
              <p className="m-0 text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <blockquote className="m-0 max-w-[900px]">
            <p className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.15] font-medium tracking-[-0.03em]">
              "Our conversion rate jumped within the first month."
            </p>
            <footer className="mt-6 flex items-center justify-between gap-4">
              <span className="mono-label text-muted">
                Alina Cortez, Marrow Coffee
              </span>
              <ArrowLink to="/reviews">More reviews</ArrowLink>
            </footer>
          </blockquote>
        </Reveal>
      </Section>
    </>
  );
}

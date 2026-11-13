import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES, PROJECTS } from "../data.js";
import { Button, Card, Reveal, Section } from "../components/Site.jsx";
import { IconAI, IconArrow } from "../icons.jsx";
import { Meta, ProjectCard, serviceIcon } from "./pageHelpers.jsx";

export default function Home() {
  const words = ["websites", "apps", "AI systems", "SEO growth"];
  const [word, setWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setWord((current) => (current + 1) % words.length),
      2400,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Meta
        title="Digital growth studio"
        description="Techlifai builds high-performing websites, apps, AI systems and SEO growth engines."
      />

      <section className="flex items-center overflow-hidden bg-linear-to-b from-white from-56% to-soft pt-16 pb-16 lg:h-[calc(100svh-88px)] lg:min-h-[560px] lg:pt-8 lg:pb-12">
        <div className="container-site grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal>
            <span className="eyebrow">TECHLIFAI / DIGITAL GROWTH STUDIO</span>
            <h1 className="mb-4 max-w-[900px] text-[clamp(2.8rem,11vw,4.4rem)] font-bold text-ink lg:text-[clamp(3.2rem,5.4vw,5.2rem)]">
              We build <span className="text-mint">{words[word]}</span> that move
              business forward.
            </h1>
            <p className="my-5 max-w-[600px] text-base text-muted md:my-6 md:text-[1.08rem]">
              Strategy, design, engineering and automation for companies ready
              to grow with confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact#book">
                Book a meeting <IconArrow width="16" />
              </Button>
              <Button to="/projects" variant="secondary">
                See our work
              </Button>
            </div>
          </Reveal>

          <Reveal
            className="relative grid min-h-[280px] place-items-center sm:min-h-[340px] lg:min-h-[380px]"
            delay={0.15}
          >
            <div className="pointer-events-none absolute inset-[5%] bg-[linear-gradient(rgba(0,179,134,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,179,134,0.1)_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(circle,#000,transparent_70%)]" />
            <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(0,230,168,0.26),transparent_66%)] blur-[10px]" />

            <div className="relative z-10 w-[min(320px,80%)] -rotate-4 rounded-3xl border border-line bg-paper/90 p-5 shadow-card sm:p-6 lg:p-7">
              <span className="mono-label text-ink">SYSTEM / ONLINE</span>
              <strong className="my-5 block font-display text-[1.55rem] leading-[1.05] font-semibold text-ink sm:my-6 sm:text-[1.9rem]">
                Build smarter.
                <br />
                <em className="text-mint not-italic">Grow faster.</em>
              </strong>
              <div className="flex justify-between border-t border-line py-2.5 text-[0.75rem] text-muted sm:py-3 sm:text-[0.8rem]">
                <span>Conversion</span>
                <b className="text-mint">+42.8%</b>
              </div>
              <div className="flex justify-between border-t border-line py-2.5 text-[0.75rem] text-muted sm:py-3 sm:text-[0.8rem]">
                <span>Automation</span>
                <b className="text-mint">24/7</b>
              </div>
            </div>

            <div className=" absolute top-[4%] right-0 z-20 animate-float rounded-xl border border-line bg-paper px-3 py-2 text-[0.72rem] font-semibold text-ink shadow-card sm:top-[8%] sm:right-[5%] sm:px-4 sm:py-3 sm:text-[0.82rem]">
              ✦ AI workflow
              <br />
              <small className="block font-normal text-muted">
                Running smoothly
              </small>
            </div>

            <div className="absolute bottom-[4%] left-0 z-20 animate-float-reverse rounded-xl border border-line bg-paper px-3 py-2 text-[0.72rem] font-semibold text-ink shadow-card sm:bottom-[8%] sm:px-4 sm:py-3 sm:text-[0.82rem]">
              ↑ 3.4x
              <br />
              <small className="block font-normal text-muted">
                Organic growth
              </small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper">
        <div className="container-site grid grid-cols-2 gap-4 py-6 md:grid-cols-4 md:gap-0">
          {[
            ["40+", "Projects delivered"],
            ["9", "Service lines"],
            ["15+", "Specialists"],
            ["98%", "Client retention"],
          ].map(([value, label]) => (
            <Reveal
              key={label}
              className="md:border-r md:border-line md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <b className="block font-display text-[1.6rem] font-semibold text-mint md:text-[2rem]">
                {value}
              </b>
              <span className="mono-label tracking-[0.04em] text-muted">
                {label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <Section
        eyebrow="WHAT WE DO"
        title="Everything you need to build, launch and scale."
        intro="One senior team across digital products, commerce, growth and AI automation."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 7).map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <Card className="min-h-[225px] transition duration-250 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="mb-5 grid h-[46px] w-[46px] place-items-center rounded-xl bg-soft text-mint">
                  {serviceIcon(service)}
                </div>
                <h3 className="mb-3 text-[1.15rem] font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mb-4 text-[0.9rem] text-muted">{service.desc}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-mint"
                >
                  Explore <IconArrow width="14" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/services" variant="text">
            View all services <IconArrow width="15" />
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="SELECTED WORK"
        title="Built for outcomes, not just screenshots."
        intro="A selection of digital work shipped for brands with high standards."
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.filter((project) => project.image)
            .slice(0, 5)
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/projects" variant="text">
            See all projects <IconArrow width="15" />
          </Button>
        </div>
      </Section>

      <section className="bg-ink py-24 text-white">
        <div className="container-site grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow !text-glow">
              WHY TECHLIFAI / AI AUTOMATION
            </span>
            <h2 className="mb-4 text-[clamp(2rem,4vw,3.8rem)] font-bold text-white">
              Turn busywork into momentum.
            </h2>
            <p className="mb-6 max-w-[520px] text-[#a6afbd]">
              We connect the tools your team already uses with intelligent
              systems that qualify leads, support customers and keep follow-up
              moving.
            </p>
            <Button to="/contact" variant="glow">
              Explore automation <IconArrow width="15" />
            </Button>
          </Reveal>

          <Reveal
            className="relative grid grid-cols-2 gap-2 sm:grid-cols-4"
            delay={0.12}
          >
            {["Lead", "AI chatbot", "CRM", "Follow-up"].map((step, index) => (
              <div
                className="relative flex min-h-[115px] flex-col justify-between rounded-[14px] border border-glow/34 bg-paper/4 p-4 sm:min-h-[150px]"
                key={step}
              >
                <span className="font-mono text-[0.7rem] text-[#7b8797]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <IconAI width="20" className="text-glow" />
                <b className="font-semibold text-white">{step}</b>
                {index < 3 && (
                  <i className="absolute top-1/2 -right-4 hidden text-glow not-italic sm:inline">
                    →
                  </i>
                )}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Section className="pt-16">
        <Reveal className="mb-12 border-l-3 border-mint pl-4 text-muted">
          “Techlifai rebuilt our storefront and our conversion rate jumped
          within the first month.”{" "}
          <b className="text-ink">— Alina Cortez, Marrow Coffee</b>
        </Reveal>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-line bg-soft p-6 sm:p-10 md:flex-row md:items-center">
          <div>
            <span className="eyebrow">READY WHEN YOU ARE</span>
            <h2 className="mb-0 text-[clamp(2rem,4vw,3.8rem)] font-bold text-ink">
              Let’s make your next move count.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 max-md:w-full">
            <Button to="/contact#book" className="max-md:w-full">
              Book a free 30-min meeting <IconArrow width="15" />
            </Button>
            <Button
              to="/contact#form"
              variant="secondary"
              className="max-md:w-full"
            >
              Send us a message <IconArrow width="15" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

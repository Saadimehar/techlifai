import { SERVICES } from "../data.js";
import { Button, PageHeader, Section } from "../components/Site.jsx";
import { IconArrow } from "../icons.jsx";
import { Meta, serviceIcon } from "./pageHelpers.jsx";

export default function Services() {
  return (
    <>
      <Meta
        title="Services"
        description="Web, commerce, app, SEO and AI automation services from Techlifai."
      />
      <PageHeader
        eyebrow="SERVICES / CAPABILITIES"
        title="One senior team for every digital growth challenge."
        intro="From the first strategic question to the final QA pass, we combine specialist craft with a clear path to measurable outcomes."
      />

      <Section className="pt-8 pb-16">
        <div className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 after:pointer-events-none after:absolute after:-top-[190px] after:-right-[120px] after:h-[420px] after:w-[420px] after:rounded-full after:border after:border-glow/35 after:shadow-[0_0_0_35px_rgba(0,230,168,0.04),0_0_0_70px_rgba(0,230,168,0.03)] after:content-['']">
          <div className="relative z-10">
            <span className="eyebrow">HOW WE HELP</span>
            <h2 className="mb-4 max-w-[560px] text-[clamp(2rem,4vw,3.8rem)] font-bold text-white">
              Strategy that turns into something useful.
            </h2>
            <p className="mb-0 max-w-[560px] text-[#b6c4d5]">
              Choose one focused service or bring us a bigger challenge. We
              shape the right delivery team around your goals, audience and
              timeline.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-3 content-end gap-2 sm:gap-4">
            {[
              ["09", "specialist services"],
              ["40+", "projects delivered"],
              ["98%", "client retention"],
            ].map(([val, label]) => (
              <div key={label} className="border-l border-white/20 pl-3 sm:pl-4">
                <b className="block font-display text-[1.55rem] font-semibold text-glow sm:text-[2.2rem]">
                  {val}
                </b>
                <span className="block text-[0.62rem] text-[#b6c4d5] sm:text-[0.72rem]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div>
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              id={service.title.toLowerCase().replaceAll(" ", "-")}
              className={`relative overflow-hidden ${
                isEven
                  ? "bg-soft before:pointer-events-none before:absolute before:top-[50px] before:-right-[120px] before:h-[300px] before:w-[300px] before:rounded-full before:border before:border-mint/12 before:content-['']"
                  : "after:pointer-events-none after:absolute after:bottom-[40px] after:-left-[90px] after:h-[180px] after:w-[180px] after:rounded-full after:bg-glow/6 after:content-['']"
              }`}
              key={service.title}
            >
              <div className="container-site grid grid-cols-1 gap-6 py-16 md:grid-cols-[52px_1fr] lg:grid-cols-[80px_1fr_0.6fr] lg:gap-8 lg:py-24">
                <div className="mono-label text-[1.1rem] text-mint">
                  0{index + 1}
                </div>
                <div>
                  <div className="mb-5 inline-grid h-[46px] w-[46px] place-items-center rounded-xl bg-soft text-mint">
                    {serviceIcon(service)}
                  </div>
                  <span className="mono-label block tracking-[0.06em] text-mint">
                    {service.tag}
                  </span>
                  <h2 className="mt-1 mb-4 text-[clamp(2rem,4vw,3.2rem)] font-bold text-ink">
                    {service.title}
                  </h2>
                  <p className="mb-4 max-w-[650px] text-[1.1rem] text-muted">
                    {service.desc}
                  </p>
                  <div className="my-8 border-y border-line py-4">
                    <span className="mono-label text-mint">WHAT YOU GET</span>
                    <p className="mt-2 mb-0 text-muted">
                      Strategy, production, QA, launch support and a clear
                      handover for your team.
                    </p>
                  </div>
                  <Button to="/contact">
                    Talk about {service.title} <IconArrow width="15" />
                  </Button>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

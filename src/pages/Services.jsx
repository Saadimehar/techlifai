import { SERVICES } from "../data.js";
import { Button, PageHeader, Reveal, Section } from "../components/Site.jsx";
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
        eyebrow="Services"
        title="Everything digital, one team."
        intro="Pick one service or combine several."
      />
      <Section className="!pt-0">
        {SERVICES.map((service, index) => (
          <section
            id={service.title.toLowerCase().replaceAll(" ", "-")}
            key={service.title}
            className="scroll-mt-24 border-b border-line py-12 md:py-16"
          >
            <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-[5rem_1.2fr_1fr] md:gap-10">
              <span className="mono-label text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-medium">
                  {service.title}
                </h2>
                <span className="mono-label mt-3 block text-mint">
                  {service.tag}
                </span>
              </div>
              <div className="flex flex-col items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-mint">{serviceIcon(service)}</span>
                  <p className="m-0 max-w-[380px] text-muted">{service.desc}</p>
                </div>
                <Button to="/contact" variant="secondary">
                  Discuss this <IconArrow width="14" />
                </Button>
              </div>
            </Reveal>
          </section>
        ))}
      </Section>
    </>
  );
}

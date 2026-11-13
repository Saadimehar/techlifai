import { Link } from "react-router-dom";
import { INDUSTRIES } from "../data.js";
import { PageHeader, Reveal, Section } from "../components/Site.jsx";
import { IconArrow } from "../icons.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Industries() {
  return (
    <>
      <Meta
        title="Industries"
        description="Industry-aware digital strategy, websites, commerce and automation from Techlifai."
      />
      <PageHeader
        eyebrow="INDUSTRIES WE SERVE"
        title="Digital work shaped around your world."
        intro="Every industry has different customers, buying journeys and constraints. We bring the right digital approach to each one."
      />
      <Section
        eyebrow="SECTORS & SPECIALTIES"
        title="Experience that meets people where they are."
        intro="Explore the industries where our team creates the most leverage."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;
            const slug = industry.title
              .toLowerCase()
              .replaceAll(" ", "-")
              .replaceAll("&", "and")
              .replaceAll("---", "-");
            return (
              <Reveal
                key={industry.title}
                className="rounded-2xl border border-line bg-paper p-6 shadow-card transition duration-250 hover:-translate-y-1.5 hover:border-mint hover:shadow-card-hover"
                delay={index * 0.03}
              >
                <div id={slug} className="flex items-center justify-between">
                  <div className="grid h-[46px] w-[46px] place-items-center rounded-xl bg-soft text-mint">
                    <Icon width="23" />
                  </div>
                  <span className="mono-label text-mint">0{index + 1}</span>
                </div>
                <h2 className="mt-5 mb-3 text-[1.35rem] font-bold text-ink">
                  {industry.title}
                </h2>
                <p className="mb-0 text-[0.9rem] text-muted">
                  Build trust, simplify decisions and create a digital
                  experience that fits how your customers choose.
                </p>
                <ul className="my-4 list-none border-t border-line p-0">
                  {industry.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-line py-2 text-[0.78rem] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="flex items-center gap-1.5 text-[0.78rem] font-semibold text-mint"
                >
                  Talk about your industry <IconArrow width="14" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

import { INDUSTRIES } from "../data.js";
import { ArrowLink, PageHeader, Reveal, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Industries() {
  return (
    <>
      <Meta
        title="Industries"
        description="Industry-aware digital strategy, websites, commerce and automation from Techlifai."
      />
      <PageHeader
        eyebrow="Industries"
        title="Shaped around your sector."
        intro="Different customers, different journeys."
      />
      <Section className="!pt-0">
        <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
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
                delay={(index % 4) * 0.05}
                className="group scroll-mt-24 border-b border-line p-6 transition-colors duration-500 hover:bg-soft sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <div id={slug} className="flex items-center justify-between text-muted">
                  <Icon width="22" className="transition-colors group-hover:text-mint" />
                  <span className="mono-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-14 mb-5 text-[1.5rem] font-medium">
                  {industry.title}
                </h2>
                <ul className="m-0 mb-6 list-none p-0">
                  {industry.items.map((item) => (
                    <li key={item} className="py-1 text-[0.9rem] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
                <ArrowLink to="/contact">Talk to us</ArrowLink>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}

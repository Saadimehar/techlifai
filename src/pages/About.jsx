import { PageHeader, Reveal, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";
import { TeamGrid } from "./Team.jsx";

const VALUES = [
  ["Clarity", "Simple decisions, visible reasoning."],
  ["Craft", "Details are the product."],
  ["Ownership", "You keep everything we build."],
  ["Momentum", "Ship early, improve weekly."],
];

export default function About() {
  return (
    <>
      <Meta
        title="About"
        description="Meet the team and process behind Techlifai."
      />
      <PageHeader
        eyebrow="About"
        title="A small senior team with a wide range."
        intro="Strategy, design, engineering and growth under one roof."
      />
      <Section eyebrow="Principles" title="How we work.">
        <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([title, text], i) => (
            <Reveal
              key={title}
              delay={i * 0.07}
              className="border-b border-line py-8 sm:pr-8 lg:border-r lg:pl-8 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="mono-label text-mint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-14 mb-3 text-[1.7rem] font-medium">{title}</h3>
              <p className="m-0 text-muted">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="People" title="The team." className="pt-0">
        <TeamGrid />
      </Section>
    </>
  );
}

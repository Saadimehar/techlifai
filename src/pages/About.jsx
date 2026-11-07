import { TEAM } from "../data.js";
import { Card, PageHeader, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function About() {
  return (
    <>
      <Meta
        title="About"
        description="Meet the team and process behind Techlifai."
      />
      <PageHeader
        eyebrow="ABOUT TECHLIFAI"
        title="A small senior team with a wide range."
        intro="We help professional companies turn ambitious ideas into useful, measurable digital systems."
      />

      <Section
        title="Built around clarity, craft and momentum."
        intro="Techlifai brings strategy, design, engineering and growth together so projects move from idea to impact without the usual handoff gaps."
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="space-y-4">
            <p className="text-[1.1rem] text-muted">
              We believe great digital work should feel clear to use and easy to
              grow. That means asking better questions before we build, being
              honest about tradeoffs, and leaving every client with a system
              they can own.
            </p>
            <p className="text-[1.1rem] text-muted">
              From a conversion-focused website to an AI workflow that saves
              hours every week, our work is designed around the outcome your
              business actually needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              ["01", "Clarity"],
              ["02", "Craft"],
              ["03", "Ownership"],
              ["04", "Momentum"],
            ].map(([number, value]) => (
              <Card key={value} className="p-5">
                <span className="mono-label text-mint">{number}</span>
                <h3 className="mt-4 mb-2 text-[1.15rem] font-semibold text-ink">
                  {value}
                </h3>
                <p className="mb-0 text-[0.9rem] text-muted">
                  Thoughtful decisions, made visible and built to last.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section
        grey
        eyebrow="THE PEOPLE BEHIND THE WORK"
        title="Senior attention from day one."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person) => (
            <Card key={person.name}>
              <div
                className="mb-6 grid h-16 w-16 place-items-center rounded-full font-display text-[1.3rem] font-semibold text-white"
                style={{ background: person.grad }}
              >
                {person.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <span className="mono-label tracking-[0.06em] text-mint">
                {person.role}
              </span>
              <h3 className="mt-1 mb-2 text-[1.15rem] font-semibold text-ink">
                {person.name}
              </h3>
              <p className="mb-4 text-[0.9rem] text-muted">{person.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {person.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-soft px-2.5 py-1.5 text-[0.72rem] text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

import { TEAM, ROLE_CHIPS } from "../data.js";
import { PageHeader, Reveal, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export function TeamGrid({ headingLevel: H = "h3" }) {
  return (
    <div className="grid grid-cols-1 border-t border-line md:grid-cols-2 lg:grid-cols-3">
      {TEAM.map((person, i) => (
        <Reveal
          key={person.name}
          delay={(i % 3) * 0.06}
          className="group border-b border-line p-6 transition-colors duration-500 hover:bg-soft md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
        >
          <div className="flex items-center justify-between">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-line font-display text-lg font-medium transition-colors group-hover:border-mint group-hover:text-mint">
              {person.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </span>
            <span className="mono-label text-muted">{person.role}</span>
          </div>
          <H className="mt-10 mb-3 text-[1.6rem] font-medium">{person.name}</H>
          <p className="mb-5 text-[0.92rem] text-muted">{person.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {person.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line px-2.5 py-1 text-[0.72rem] text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Team() {
  return (
    <>
      <Meta
        title="Team"
        description="Meet the core Techlifai team and our specialist bench."
      />
      <PageHeader eyebrow="Team" title="Senior people, direct access." />
      <Section className="!pt-0">
        <TeamGrid headingLevel="h2" />
      </Section>
      <Section eyebrow="Extended bench" title="More talent on demand.">
        <div className="flex flex-wrap gap-2.5">
          {ROLE_CHIPS.map((role) => (
            <span
              key={role}
              className="rounded-full border border-line px-4 py-2 text-[0.9rem] text-muted"
            >
              {role}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}

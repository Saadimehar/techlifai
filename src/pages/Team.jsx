import { TEAM, ROLE_CHIPS } from "../data.js";
import { Card, PageHeader, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Team() {
  return (
    <>
      <Meta
        title="Team"
        description="Meet the core Techlifai team and our specialist bench."
      />
      <PageHeader
        eyebrow="TEAM"
        title="Senior attention, backed by specialists."
        intro="You work directly with the people making the important decisions, supported by a trusted bench of experts."
      />
      <Section title="The core team">
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
              <h2 className="mt-1 mb-2 text-[1.5rem] font-bold text-ink">
                {person.name}
              </h2>
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

      <Section
        grey
        eyebrow="THE BENCH"
        title="Extra capability, on demand."
      >
        <div className="flex flex-wrap gap-3">
          {ROLE_CHIPS.map((role) => (
            <span
              key={role}
              className="rounded-full border border-line bg-white px-4 py-2.5 text-[0.9rem] text-ink"
            >
              {role}
            </span>
          ))}
        </div>
      </Section>
    </>
  );
}

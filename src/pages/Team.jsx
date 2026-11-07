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
        <div className="team-grid">
          {TEAM.map((person) => (
            <Card key={person.name}>
              <div className="avatar" style={{ background: person.grad }}>
                {person.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <span className="tag">{person.role}</span>
              <h2>{person.name}</h2>
              <p>{person.desc}</p>
              <div className="chips">
                {person.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section
        className="grey"
        eyebrow="THE BENCH"
        title="Extra capability, on demand."
      >
        <div className="chips large">
          {ROLE_CHIPS.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </Section>
    </>
  );
}

import { Link } from "react-router-dom";
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
        <div className="two-col">
          <div>
            <p>
              We believe great digital work should feel clear to use and easy to
              grow. That means asking better questions before we build, being
              honest about tradeoffs, and leaving every client with a system
              they can own.
            </p>
            <p>
              From a conversion-focused website to an AI workflow that saves
              hours every week, our work is designed around the outcome your
              business actually needs.
            </p>
          </div>
          <div className="values-grid">
            {[
              ["01", "Clarity"],
              ["02", "Craft"],
              ["03", "Ownership"],
              ["04", "Momentum"],
            ].map(([number, value]) => (
              <Card key={value}>
                <span className="mono">{number}</span>
                <h3>{value}</h3>
                <p>Thoughtful decisions, made visible and built to last.</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
      <Section
        className="grey"
        eyebrow="THE PEOPLE BEHIND THE WORK"
        title="Senior attention from day one."
      >
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
              <h3>{person.name}</h3>
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
    </>
  );
}

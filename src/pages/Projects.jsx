import { useState } from "react";
import { PROJECTS, PROJECT_CATS } from "../data.js";
import { PageHeader, Section } from "../components/Site.jsx";
import { Meta, ProjectCard } from "./pageHelpers.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.cat === filter);
  return (
    <>
      <Meta
        title="Projects"
        description="Selected digital projects delivered by Techlifai."
      />
      <PageHeader
        eyebrow="PROJECTS"
        title="Proof in the work."
        intro="Explore real client projects across web, commerce, apps, SEO and AI automation."
      />
      <Section>
        <div className="filter-row">
          {PROJECT_CATS.filter(
            (category) =>
              !["Digital Marketing", "Video Editing"].includes(category),
          ).map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}

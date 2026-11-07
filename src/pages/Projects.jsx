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
        <div className="mb-8 flex flex-wrap gap-2">
          {PROJECT_CATS.filter(
            (category) =>
              !["Digital Marketing", "Video Editing"].includes(category),
          ).map((category) => (
            <button
              key={category}
              className={`rounded-full border px-3.5 py-2 text-[0.8rem] transition-colors ${
                filter === category
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-muted hover:border-ink hover:bg-ink hover:text-white"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}

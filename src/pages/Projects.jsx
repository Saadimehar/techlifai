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
      <PageHeader eyebrow="Work" title="Proof in the work." />
      <Section className="!pt-10">
        <div className="mb-12 flex flex-wrap gap-2" role="tablist">
          {PROJECT_CATS.filter(
            (category) =>
              !["Digital Marketing", "Video Editing"].includes(category),
          ).map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={filter === category}
              className={`rounded-full border px-4 py-2 text-[0.85rem] transition-colors duration-300 ${
                filter === category
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-muted hover:border-ink hover:text-ink"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
    </>
  );
}

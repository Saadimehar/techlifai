import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IconArrow } from "../icons.jsx";
import { Reveal } from "../components/Site.jsx";

export const Meta = ({ title, description }) => (
  <Helmet>
    <title>{title} | Techlifai</title>
    <meta name="description" content={description} />
  </Helmet>
);

export function ProjectCard({ project }) {
  return (
    <Reveal className="overflow-hidden rounded-2xl border border-line bg-white transition duration-250 hover:-translate-y-1.5 hover:shadow-card-hover">
      <div className="grid h-[190px] place-items-center overflow-hidden bg-linear-to-br from-[#dff5ed] to-soft text-mint">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-display text-xl font-semibold">
            {project.title.slice(0, 2)}
          </span>
        )}
      </div>
      <div className="p-5">
        <span className="mono-label tracking-[0.06em] text-mint">
          {project.tag}
        </span>
        <h3 className="mt-1.5 mb-2 text-[1.15rem] font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mb-4 text-[0.82rem] text-muted">{project.desc}</p>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-mint"
          >
            Visit site <IconArrow width="14" />
          </a>
        ) : (
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-mint"
          >
            Discuss a similar build <IconArrow width="14" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export const serviceIcon = (service) => {
  const Icon = service.icon;
  return <Icon width="24" height="24" />;
};

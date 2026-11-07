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
    <Reveal className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span>{project.title.slice(0, 2)}</span>
        )}
      </div>
      <div className="project-card-body">
        <span className="tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            Visit site <IconArrow width="14" />
          </a>
        ) : (
          <Link to="/contact">
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

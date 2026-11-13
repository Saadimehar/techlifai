import { Helmet } from "react-helmet-async";
import { ArrowLink, ImageReveal, Reveal } from "../components/Site.jsx";

export const Meta = ({ title, description }) => (
  <Helmet>
    <title>{title} | Techlifai</title>
    <meta name="description" content={description} />
  </Helmet>
);

export function ProjectCard({ project }) {
  return (
    <Reveal className="group">
      <ImageReveal className="relative aspect-[4/3] rounded-2xl border border-line bg-soft">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
        ) : (
          <span className="grid h-full place-items-center font-display text-5xl font-medium tracking-[-0.05em] text-muted">
            {project.title.slice(0, 2)}
          </span>
        )}
      </ImageReveal>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-[1.35rem] font-medium">{project.title}</h3>
        <span className="mono-label shrink-0 text-muted">{project.tag}</span>
      </div>
      <div className="mt-3">
        {project.link ? (
          <ArrowLink href={project.link}>Visit site</ArrowLink>
        ) : (
          <ArrowLink to="/contact">Build something similar</ArrowLink>
        )}
      </div>
    </Reveal>
  );
}

export const serviceIcon = (service) => {
  const Icon = service.icon;
  return <Icon width="24" height="24" />;
};

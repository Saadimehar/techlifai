import { useState } from 'react';
import Reveal from '../Reveal.jsx';
import { PROJECT_CATS, PROJECTS } from '../data.js';
import { IconArrow } from '../icons.jsx';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">PROJECTS</div>
          <h2 className="h2">Work across every service we offer.</h2>
          <p className="sub">Filter by field to see projects specific to that specialty, or browse everything at once.</p>
        </Reveal>

        <Reveal delay={1} className="filter-row">
          {PROJECT_CATS.map((c) => (
            <button key={c} className={`filter-btn${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>
              {c}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {filtered.map((p, i) => (
            <Reveal as="div" delay={(i % 3) + 1} className="project-card" key={p.title}>
              <div className="project-thumb">
                <span>{p.title.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="project-body">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a
                  href="#contact"
                  className="project-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View case study <IconArrow width="14" height="14" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

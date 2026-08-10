import Reveal from '../Reveal.jsx';
import { SERVICES } from '../data.js';

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">SERVICES</div>
          <h2 className="h2">Everything your business needs online.</h2>
          <p className="sub">Nine service lines, one team — pick one or combine them into a single roadmap.</p>
        </Reveal>

        <Reveal delay={1} className="services-grid">
          {SERVICES.map((s, i) => {
            const Ic = s.icon;
            return (
              <div className="service-card" key={i}>
                <Ic className="service-icon" />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-tag">{s.tag}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from '../Reveal.jsx';
import { TEAM, ROLE_CHIPS } from '../data.js';

export default function Team() {
  return (
    <section id="team" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">OUR TEAM</div>
          <h2 className="h2">The people behind Techlifai.</h2>
          <p className="sub">A small core team backed by specialists in every service we offer.</p>
        </Reveal>

        <div className="team-grid">
          {TEAM.map((m, i) => (
            <Reveal as="div" delay={i + 1} className="team-card" key={m.name}>
              <div className="avatar" style={{ background: m.grad }}>
                {m.name.split(' ').map((w) => w[0]).join('')}
              </div>
              <h3>{m.name}</h3>
              <div className="team-role">{m.role}</div>
              <p>{m.desc}</p>
              <div className="team-skills">
                {m.skills.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="team-more">
          <h4>Plus 15+ specialists across every field we offer</h4>
          <p>
            Behind our core team is a bench of experienced developers, designers and strategists who plug into your
            project based on what it needs.
          </p>
          <div className="role-chips">
            {ROLE_CHIPS.map((r) => (
              <span className="role-chip" key={r}>{r}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

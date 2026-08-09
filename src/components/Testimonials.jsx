import Reveal from '../Reveal.jsx';
import { TESTIMONIALS } from '../data.js';
import { IconStar } from '../icons.jsx';

export default function Testimonials() {
  return (
    <section id="reviews" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">CLIENT REVIEWS</div>
          <h2 className="h2">Trusted by teams who needed it done right.</h2>
        </Reveal>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="div" delay={i + 1} className="testi-card" key={t.name}>
              <div className="stars">
                {[...Array(5)].map((_, k) => (
                  <IconStar key={k} />
                ))}
              </div>
              <p>"{t.quote}"</p>
              <div className="testi-person">
                <div className="testi-avatar" style={{ background: t.grad }}>
                  {t.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2} className="trust-strip">
          <div className="stat"><b>40+</b><span>Projects delivered</span></div>
          <div className="stat"><b>7</b><span>Service lines</span></div>
          <div className="stat"><b>5.0</b><span>Average client rating</span></div>
          <div className="stat"><b>98%</b><span>Client retention</span></div>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from '../Reveal.jsx';
import { IconArrow, IconCode, IconWP, IconWebflow, IconShop, IconApp, IconAI } from '../icons.jsx';

const NODES = [
  { icon: IconCode, dur: '20s' },
  { icon: IconWP, dur: '26s' },
  { icon: IconWebflow, dur: '20s' },
  { icon: IconShop, dur: '26s' },
  { icon: IconApp, dur: '20s' },
  { icon: IconAI, dur: '26s' },
];

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal className="eyebrow">RANKIONS — DIGITAL GROWTH STUDIO</Reveal>
          <Reveal as="h1" delay={1}>
            We build what makes
            <br />
            businesses <span className="accent">rank.</span>
          </Reveal>
          <Reveal delay={2} as="p" className="lead">
            Code, commerce and AI under one roof. Rankions designs, builds and automates the web, app and marketing
            systems your business runs on.
          </Reveal>
          <Reveal delay={3} className="hero-ctas">
            <a href="#contact" className="btn btn-primary" onClick={scrollTo('contact')}>
              Start a project <IconArrow width="16" height="16" />
            </a>
            <a href="#projects" className="btn btn-ghost" onClick={scrollTo('projects')}>
              See our work
            </a>
          </Reveal>
          <Reveal delay={4} className="hero-stats">
            <div className="stat"><b>40+</b><span>PROJECTS SHIPPED</span></div>
            <div className="stat"><b>7</b><span>SERVICE LINES</span></div>
            <div className="stat"><b>15+</b><span>SPECIALISTS</span></div>
            <div className="stat"><b>98%</b><span>CLIENT RETENTION</span></div>
          </Reveal>
        </div>

        <div className="hero-orbit-wrap">
          <div className="orbit-ring r1"></div>
          <div className="orbit-ring r2"></div>
          <div className="orbit-ring r3"></div>
          <div className="orbit-core"><span>RNK</span></div>
          {NODES.map((n, i) => {
            const angle = (360 / NODES.length) * i;
            const radius = i % 2 === 0 ? 115 : 170;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const Ic = n.icon;
            return (
              <div
                key={i}
                className="orbit-node"
                style={{
                  left: `calc(50% + ${x}px - 26px)`,
                  top: `calc(50% + ${y}px - 26px)`,
                  animation: `spin ${n.dur} linear infinite ${i % 2 ? 'reverse' : ''}`,
                }}
              >
                <div style={{ animation: `spin ${n.dur} linear infinite ${i % 2 ? '' : 'reverse'}` }}>
                  <Ic style={{ color: 'var(--mint)' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

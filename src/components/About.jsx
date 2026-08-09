import Reveal from '../Reveal.jsx';

const STEPS = [
  { n: '01', t: 'Discover', d: 'We map your goals, users and constraints before a single line of code is written.' },
  { n: '02', t: 'Build', d: 'Design and development move in parallel with weekly check-ins, not a single reveal at the end.' },
  { n: '03', t: 'Scale', d: 'Post-launch, we monitor, optimize and automate so the system keeps improving without you.' },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap about-grid">
        <div>
          <Reveal className="eyebrow">ABOUT US</Reveal>
          <Reveal as="h2" delay={1} className="h2">
            A full-stack studio, run like an in-house team.
          </Reveal>
          <Reveal delay={2} className="process-list">
            {STEPS.map((s) => (
              <div className="process-item" key={s.n}>
                <div className="process-num">{s.n}</div>
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={1} className="about-card">
          <p>
            <strong>Rankions</strong> is a digital agency built for businesses that need more than one specialist. We
            cover custom web development, WordPress, Webflow, Shopify, app development, SEO and AI automation — all
            under one team that already knows how to talk to each other.
          </p>
          <p>
            Most agencies hand you off between departments. We don't have that problem, because the same core team
            stays on your project from the first sketch to the metrics dashboard. That's how a Shopify rebuild and
            its SEO strategy end up actually working together, instead of fighting each other.
          </p>
          <p>
            Whether you need a single landing page or a fully automated backend with an AI agent answering support
            tickets, our specialists are already assembled — you just tell us the goal.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

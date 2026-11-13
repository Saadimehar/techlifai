import { TESTIMONIALS } from "../data.js";
import { PageHeader, Reveal, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Reviews() {
  return (
    <>
      <Meta
        title="Reviews"
        description="What clients say about working with Techlifai."
      />
      <PageHeader eyebrow="Reviews" title="Kind words from clients." />
      <Section className="!pt-0">
        <div className="grid grid-cols-1 border-t border-line md:grid-cols-2">
          {TESTIMONIALS.map((review, i) => (
            <Reveal
              key={review.name}
              delay={(i % 2) * 0.06}
              className="flex flex-col justify-between gap-12 border-b border-line py-10 md:px-8 md:odd:border-r md:odd:pl-0 md:even:pr-0"
            >
              <blockquote className="m-0 text-[clamp(1.2rem,2vw,1.55rem)] leading-[1.3] tracking-[-0.02em]">
                "{review.quote}"
              </blockquote>
              <div>
                <strong className="block font-medium">{review.name}</strong>
                <span className="mono-label text-muted">{review.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

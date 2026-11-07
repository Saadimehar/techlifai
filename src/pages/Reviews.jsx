import { TESTIMONIALS } from "../data.js";
import { Card, PageHeader, Section } from "../components/Site.jsx";
import { IconStar } from "../icons.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Reviews() {
  return (
    <>
      <Meta
        title="Reviews"
        description="What clients say about working with Techlifai."
      />
      <PageHeader
        eyebrow="REVIEWS"
        title="Trusted by teams who care about the details."
        intro="The best measure of our work is what happens after launch."
      />
      <Section>
        <div className="mb-8 flex items-start gap-4 rounded-2xl bg-soft p-6 sm:items-center">
          <strong className="font-display text-[2.4rem] leading-none font-semibold text-ink sm:text-[3rem]">
            4.9
          </strong>
          <div>
            <div className="mb-1 flex gap-0.5 text-[#f6b51e]">
              {[1, 2, 3, 4, 5].map((number) => (
                <IconStar key={number} width="18" />
              ))}
            </div>
            <span className="text-[0.8rem] text-muted">
              Average client rating across delivered projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <Card key={review.name}>
              <div className="flex gap-0.5 text-[#f6b51e]">
                {[1, 2, 3, 4, 5].map((number) => (
                  <IconStar key={number} width="16" />
                ))}
              </div>
              <blockquote className="my-6 font-display text-[1.1rem] leading-[1.5] text-ink">
                “{review.quote}”
              </blockquote>
              <strong className="block font-semibold text-ink">
                {review.name}
              </strong>
              <span className="block text-[0.85rem] text-muted">
                {review.role}
              </span>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

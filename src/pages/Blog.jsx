import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data.js";
import { IconArrow } from "../icons.jsx";
import { PageHeader, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Blog() {
  return (
    <>
      <Meta
        title="Blog"
        description="Practical insights on SEO, AI automation, Shopify and modern websites."
      />
      <PageHeader
        eyebrow="INSIGHTS"
        title="Useful thinking for digital teams."
        intro="Practical notes on building better websites, smarter workflows and sustainable growth."
      />
      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              className="grid grid-cols-1 gap-4 rounded-2xl border border-line bg-white p-4 transition duration-250 hover:-translate-y-1.5 hover:shadow-card-hover sm:grid-cols-[180px_1fr] sm:gap-5"
              to={`/blog/${post.slug}`}
              key={post.slug}
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-40 w-full rounded-[10px] object-cover"
              />
              <div>
                <span className="mono-label tracking-[0.06em] text-mint">
                  {post.category} · {post.readTime}
                </span>
                <h2 className="mt-2.5 mb-2 text-[1.45rem] font-bold text-ink">
                  {post.title}
                </h2>
                <p className="mb-4 text-[0.88rem] text-muted">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-mint">
                  Read article <IconArrow width="14" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

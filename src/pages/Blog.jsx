import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../data.js";
import { IconArrow } from "../icons.jsx";
import { PageHeader, Reveal, Section } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function Blog() {
  return (
    <>
      <Meta
        title="Blog"
        description="Practical insights on SEO, AI automation, Shopify and modern websites."
      />
      <PageHeader eyebrow="Journal" title="Notes from the studio." />
      <Section className="!pt-0">
        <ul className="m-0 list-none border-t border-line p-0">
          {BLOG_POSTS.map((post, i) => (
            <li key={post.slug}>
              <Reveal delay={i * 0.04}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 items-center gap-6 border-b border-line py-8 transition-all duration-500 hover:bg-soft md:grid-cols-[220px_1fr_auto] md:hover:px-4"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-soft">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="mono-label text-muted">
                      {post.category} / {post.readTime}
                    </span>
                    <h2 className="mt-3 text-[clamp(1.4rem,2.6vw,2.1rem)] font-medium">
                      {post.title}
                    </h2>
                  </div>
                  <IconArrow
                    width="24"
                    className="hidden text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mint md:block"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

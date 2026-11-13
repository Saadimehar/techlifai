import { Link, useParams } from "react-router-dom";
import { BLOG_POSTS } from "../data.js";
import { PageHeader } from "../components/Site.jsx";
import { Meta } from "./pageHelpers.jsx";

export default function BlogPost() {
  const post = BLOG_POSTS.find((entry) => entry.slug === useParams().slug);
  if (!post) {
    return (
      <PageHeader
        eyebrow="404"
        title="Post not found"
        intro="That article may have moved."
      />
    );
  }

  return (
    <>
      <Meta title={post.title} description={post.excerpt} />
      <article className="pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="container-site">
          <div className="max-w-[760px]">
            <span className="eyebrow">
              {post.category} / {post.readTime}
            </span>
            <h1 className="mb-8 text-[clamp(2.2rem,6vw,4.4rem)] font-medium">
              {post.title}
            </h1>
          </div>
          <img
            src={post.image}
            alt={post.title}
            decoding="async"
            className="mb-12 aspect-[16/9] max-h-[520px] w-full rounded-2xl border border-line object-cover"
          />
          <div className="max-w-[680px]">
            {post.content.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-6 text-[1.1rem] leading-[1.7] text-muted"
              >
                {paragraph}
              </p>
            ))}
            <Link
              to="/blog"
              className="mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-ink transition-colors hover:text-mint"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

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
      <article className="py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-[800px]">
            <span className="eyebrow">
              {post.category} · {post.readTime}
            </span>
            <h1 className="mb-4 max-w-[850px] text-[clamp(2.4rem,6vw,5rem)] font-bold text-ink">
              {post.title}
            </h1>
            <p className="mb-4 text-[1.2rem] text-muted">{post.excerpt}</p>
            <img
              src={post.image}
              alt={post.title}
              className="my-8 max-h-[450px] w-full rounded-2xl object-cover"
            />
            {post.content.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-[1.1rem] leading-[1.85] text-muted"
              >
                {paragraph}
              </p>
            ))}
            <Link
              to="/blog"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-mint"
            >
              ← Back to insights
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

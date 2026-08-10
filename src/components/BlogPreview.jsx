import Reveal from '../Reveal.jsx';
import { BLOG_POSTS } from '../data.js';
import { IconArrow } from '../icons.jsx';

export default function BlogPreview({ onNavigate }) {
  return (
    <section id="blog" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">FROM THE BLOG</div>
          <h2 className="h2">Practical content for modern growth teams.</h2>
          <p className="sub">
            Explore clear, keyword-focused articles on web development, SEO, AI automation and conversion strategy.
          </p>
        </Reveal>

        <div className="blog-grid">
          {BLOG_POSTS.slice(0, 3).map((post, index) => (
            <Reveal as="article" delay={index + 1} className="blog-card" key={post.slug}>
              <img className="blog-card-image" src={post.image} alt={post.title} />
              <div className="blog-card-top">
                <span className="blog-badge">{post.category}</span>
                <span className="blog-meta">{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-chip-row">
                {post.keywords.slice(0, 2).map((keyword) => (
                  <span className="chip" key={keyword}>{keyword}</span>
                ))}
              </div>
              <a
                href="/blog"
                className="blog-read-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/blog', post.slug);
                }}
              >
                Read article <IconArrow width="14" height="14" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4} className="blog-cta-row">
          <a href="/blog" className="btn btn-primary" onClick={(e) => { e.preventDefault(); onNavigate('/blog'); }}>
            Browse all blog posts <IconArrow width="16" height="16" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

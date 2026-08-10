import { useEffect, useMemo, useState } from 'react';
import { BLOG_POSTS } from '../data.js';
import { IconArrow } from '../icons.jsx';

export default function BlogPage({ onBack }) {
  const [activeSlug, setActiveSlug] = useState(() => window.location.hash.replace('#', '') || '');

  useEffect(() => {
    document.title = 'Techlifai Blog | Web Development, SEO and AI Automation Insights';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Read Techlifai blog posts about SEO, web development, Shopify, Webflow, AI automation and conversion-focused growth strategies.'
    );
  }, []);

  const selectedPost = useMemo(() => BLOG_POSTS.find((post) => post.slug === activeSlug) || null, [activeSlug]);

  useEffect(() => {
    const slugFromHash = window.location.hash.replace('#', '');
    if (slugFromHash) {
      setActiveSlug(slugFromHash);
    }
  }, []);

  const openPost = (slug) => {
    setActiveSlug(slug);
    window.history.replaceState({}, '', `#/blog/${slug}`);
  };

  const closePost = () => {
    setActiveSlug('');
    window.history.replaceState({}, '', '#');
  };

  return (
    <main className="blog-page">
      <section className="section-pad">
        <div className="wrap">
          <div className="blog-page-head">
            <div>
              <div className="eyebrow">TECHLIFAI BLOG</div>
              <h1 className="h2">Search-friendly content for ambitious brands.</h1>
              <p className="sub">
                Discover practical guides on web performance, SEO, Shopify growth, automation and building a faster digital presence.
              </p>
            </div>
            <a href="/" className="btn btn-ghost" onClick={(e) => { e.preventDefault(); onBack('/'); }}>
              Back to home <IconArrow width="16" height="16" />
            </a>
          </div>

          {selectedPost ? (
            <div className="blog-article-view">
              <button className="blog-back-btn" onClick={closePost}>← Back to all articles</button>
              <img className="blog-article-image" src={selectedPost.image} alt={selectedPost.title} />
              <div className="blog-article-content">
                <div className="blog-card-top">
                  <span className="blog-badge">{selectedPost.category}</span>
                  <span className="blog-meta">{selectedPost.readTime}</span>
                </div>
                <h2>{selectedPost.title}</h2>
                <p className="blog-article-intro">{selectedPost.excerpt}</p>
                <div className="blog-chip-row">
                  {selectedPost.keywords.map((keyword) => (
                    <span className="chip" key={keyword}>{keyword}</span>
                  ))}
                </div>
                {selectedPost.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="blog-page-grid">
              {BLOG_POSTS.map((post) => (
                <article className="blog-card blog-card-large" key={post.slug}>
                  <img className="blog-card-image" src={post.image} alt={post.title} />
                  <div className="blog-card-top">
                    <span className="blog-badge">{post.category}</span>
                    <span className="blog-meta">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-chip-row">
                    {post.keywords.map((keyword) => (
                      <span className="chip" key={keyword}>{keyword}</span>
                    ))}
                  </div>
                  <button className="blog-read-btn" onClick={() => openPost(post.slug)}>
                    Read article <IconArrow width="14" height="14" />
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import BLOG_POSTS from '../blogData.js';
import { IconArrow } from '../icons.jsx';
import { PageHeader, Section } from '../components/Site.jsx';
import { Meta } from './pageHelpers.jsx';

export default function Blog() {
	return <><Meta title="Blog" description="Practical insights on SEO, AI automation, Shopify and modern websites." /><PageHeader eyebrow="INSIGHTS" title="Useful thinking for digital teams." intro="Practical notes on building better websites, smarter workflows and sustainable growth." /><Section><div className="blog-grid">{BLOG_POSTS.map((post) => <Link className="blog-card" to={`/blog/${post.slug}`} key={post.slug}><img src={post.image} alt="" /><div><span className="tag">{post.category} · {post.readTime}</span><h2>{post.title}</h2><p>{post.excerpt}</p><span className="read-link">Read article <IconArrow width="14" /></span></div></Link>)}</div></Section></>;
}

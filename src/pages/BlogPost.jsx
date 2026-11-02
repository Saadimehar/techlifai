import { Link, useParams } from 'react-router-dom';
import BLOG_POSTS from '../blogData.js';
import { PageHeader } from '../components/Site.jsx';
import { Meta } from './pageHelpers.jsx';

export default function BlogPost() {
	const post = BLOG_POSTS.find((entry) => entry.slug === useParams().slug);
	if (!post) return <PageHeader eyebrow="404" title="Post not found" intro="That article may have moved." />;
	return <><Meta title={post.title} description={post.excerpt} /><article className="article"><div className="container article-inner"><span className="eyebrow">{post.category} · {post.readTime}</span><h1>{post.title}</h1><p className="article-intro">{post.excerpt}</p><img src={post.image} alt="" />{post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<Link to="/blog" className="read-link">← Back to insights</Link></div></article></>;
}

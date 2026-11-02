import { TESTIMONIALS } from '../data.js';
import { Card, PageHeader, Section } from '../components/Site.jsx';
import { IconStar } from '../icons.jsx';
import { Meta } from './pageHelpers.jsx';

export default function Reviews() {
	return <><Meta title="Reviews" description="What clients say about working with Techlifai." /><PageHeader eyebrow="REVIEWS" title="Trusted by teams who care about the details." intro="The best measure of our work is what happens after launch." /><Section><div className="rating-strip"><strong>4.9</strong><div><div className="stars">{[1, 2, 3, 4, 5].map((number) => <IconStar key={number} width="18" />)}</div><span>Average client rating across delivered projects</span></div></div><div className="review-grid">{TESTIMONIALS.map((review) => <Card key={review.name}><div className="stars">{[1, 2, 3, 4, 5].map((number) => <IconStar key={number} width="16" />)}</div><blockquote>“{review.quote}”</blockquote><strong>{review.name}</strong><span>{review.role}</span></Card>)}</div></Section></>;
}

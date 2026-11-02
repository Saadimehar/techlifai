import { Link } from 'react-router-dom';
import { INDUSTRIES } from '../data.js';
import { PageHeader, Reveal, Section } from '../components/Site.jsx';
import { IconArrow } from '../icons.jsx';
import { Meta } from './pageHelpers.jsx';

export default function Industries() {
	return <><Meta title="Industries" description="Industry-aware digital strategy, websites, commerce and automation from Techlifai." /><PageHeader eyebrow="INDUSTRIES WE SERVE" title="Digital work shaped around your world." intro="Every industry has different customers, buying journeys and constraints. We bring the right digital approach to each one." /><Section eyebrow="SECTORS & SPECIALTIES" title="Experience that meets people where they are." intro="Explore the industries where our team creates the most leverage."><div className="industry-page-grid">{INDUSTRIES.map((industry, index) => { const Icon = industry.icon; return <Reveal key={industry.title} className="industry-page-card" delay={index * .03}><div className="industry-card-top"><div className="icon-box"><Icon width="23" /></div><span className="mono">0{index + 1}</span></div><h2>{industry.title}</h2><p>Build trust, simplify decisions and create a digital experience that fits how your customers choose.</p><ul>{industry.items.map((item) => <li key={item}>{item}</li>)}</ul><Link to="/contact">Talk about your industry <IconArrow width="14" /></Link></Reveal>; })}</div></Section></>;
}

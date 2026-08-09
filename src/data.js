import { IconCode, IconWP, IconWebflow, IconShop, IconApp, IconSEO, IconAI } from './icons.jsx';

export const CONTACT_EMAIL = 'itzsaadi.99@gmail.com';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'team', label: 'Team' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export const SERVICES = [
  { icon: IconCode, title: 'Web Development', tag: 'Custom code', desc: 'Hand-built websites and web apps in React, Node and modern frameworks, engineered for speed and scale.' },
  { icon: IconWP, title: 'WordPress', tag: 'CMS builds', desc: 'Custom themes, plugins and full site builds on WordPress that stay easy for your team to manage.' },
  { icon: IconWebflow, title: 'Webflow Development', tag: 'Visual + code', desc: 'Pixel-accurate Webflow builds with clean CMS structures, animations and fast load times.' },
  { icon: IconShop, title: 'Shopify Development', tag: 'E-commerce', desc: 'Custom Shopify themes, app integrations and checkout optimization built to convert.' },
  { icon: IconApp, title: 'App Development', tag: 'iOS · Android', desc: 'Native and cross-platform mobile apps, from first wireframe to App Store launch.' },
  { icon: IconSEO, title: 'SEO', tag: 'Growth', desc: 'Technical SEO, content strategy and link building that moves you up the results page and stays there.' },
  { icon: IconAI, title: 'AI Automation', tag: 'Chatbots · Workflows', desc: 'AI chatbots, agents and workflow automation that cut manual work out of your business.' },
];

export const PROJECT_CATS = ['All', 'Web Dev', 'WordPress', 'Webflow', 'Shopify', 'App Dev', 'SEO', 'AI'];

export const PROJECTS = [
  { cat: 'Web Dev', tag: 'Web Development', title: 'Northline Logistics Platform', desc: 'A React + Node dashboard for real-time fleet tracking across 300+ vehicles.' },
  { cat: 'WordPress', tag: 'WordPress', title: 'Alder & Co. Law Firm Site', desc: 'Custom WordPress theme with case-study CMS and a 40% faster load time.' },
  { cat: 'Webflow', tag: 'Webflow', title: 'Solace Wellness Studio', desc: 'Animated Webflow marketing site with CMS-driven class schedules.' },
  { cat: 'Shopify', tag: 'Shopify', title: 'Marrow Coffee Roasters', desc: 'Shopify storefront rebuild that lifted conversion rate by 28%.' },
  { cat: 'App Dev', tag: 'App Development', title: 'Fettle Fitness Tracker', desc: 'Cross-platform iOS/Android app with habit tracking and social streaks.' },
  { cat: 'SEO', tag: 'SEO', title: 'Bramwell Home Goods', desc: 'Technical SEO overhaul that took organic traffic from 4K to 41K monthly.' },
  { cat: 'AI', tag: 'AI Automation', title: 'Kestrel Support Bot', desc: 'AI chatbot + workflow automation that resolved 62% of tickets with zero agent time.' },
  { cat: 'Web Dev', tag: 'Web Development', title: 'Ivorton Real Estate Portal', desc: 'Listings platform with map search built on React and a headless CMS.' },
  { cat: 'Shopify', tag: 'Shopify', title: 'Palette Skincare', desc: 'Subscription-based Shopify build with custom bundle logic.' },
  { cat: 'AI', tag: 'AI Automation', title: 'Rowan HR Assistant', desc: 'Internal AI agent that automates onboarding paperwork and FAQs.' },
  { cat: 'App Dev', tag: 'App Development', title: 'Cobalt Field Ops', desc: 'Offline-first field service app for on-site technicians.' },
  { cat: 'WordPress', tag: 'WordPress', title: 'Milbrook Dental Group', desc: 'Multi-location WordPress site with booking and review integrations.' },
];

export const TEAM = [
  { name: 'Muhammad Saad', role: 'Founder & Lead Developer', desc: 'Full-stack engineer leading architecture across every build we ship.', skills: ['Webflow', 'UI/UX', 'Design Systems'], grad: 'linear-gradient(135deg,#00e6a8,#00b386)' },
  { name: 'Asadullah Turab', role: 'CTO & AI Specialist', desc: 'Designs and builds the visual systems behind our Webflow and brand work.', skills: ['React', 'Node.js', 'AI Agents'], grad: 'linear-gradient(135deg,#7c6bf0,#5644c9)' },
  { name: 'Muzammil Farooq', role: 'SEO Specialist & Lead', desc: 'Builds the chatbots and automation pipelines that run inside client businesses.', skills: ['SEO', 'Python', 'Workflow Automation'], grad: 'linear-gradient(135deg,#ffb020,#e08c00)' },
];

export const ROLE_CHIPS = ['Shopify Developers', 'WordPress Engineers', 'SEO Strategists', 'Mobile Developers', 'UI/UX Designers', 'QA Engineers', 'Project Managers', 'Content Writers'];

export const TESTIMONIALS = [
  { quote: 'Techlifai rebuilt our storefront and our conversion rate jumped within the first month. Communication was clear the entire way through.', name: 'Alina Cortez', role: 'Founder, Marrow Coffee', grad: 'linear-gradient(135deg,#00e6a8,#00b386)' },
  { quote: 'The AI support bot they built now handles most of our repetitive tickets. Our team finally has room to focus on real problems.', name: 'Devon Marsh', role: 'Ops Lead, Kestrel', grad: 'linear-gradient(135deg,#7c6bf0,#5644c9)' },
  { quote: 'Our organic traffic grew tenfold after their SEO work. They explained every decision instead of just handing us a report.', name: 'Priya Nathan', role: 'CEO, Bramwell Home Goods', grad: 'linear-gradient(135deg,#ffb020,#e08c00)' },
];

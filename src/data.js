import { IconCode, IconWP, IconWebflow, IconShop, IconApp, IconSEO, IconAI, IconMarketing, IconVideo } from './icons.jsx';

export const CONTACT_EMAIL = 'techlifai@gmail.com';

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
  { icon: IconMarketing, title: 'Digital Marketing', tag: 'SEO + ads', desc: 'Paid media, content strategy, email funnels and conversion tracking designed to turn traffic into revenue.' },
  { icon: IconVideo, title: 'Video Editing', tag: 'Motion content', desc: 'Short-form and long-form video editing for ads, social campaigns, reels and brand storytelling.' },
  { icon: IconApp, title: 'App Development', tag: 'iOS · Android', desc: 'Native and cross-platform mobile apps, from first wireframe to App Store launch.' },
  { icon: IconSEO, title: 'SEO', tag: 'Growth', desc: 'Technical SEO, content strategy and link building that moves you up the results page and stays there.' },
  { icon: IconAI, title: 'AI Automation', tag: 'Chatbots · Workflows', desc: 'AI chatbots, agents and workflow automation that cut manual work out of your business.' },
];

export const PROJECT_CATS = ['All', 'Web Dev', 'WordPress', 'Webflow', 'Shopify', 'Digital Marketing', 'Video Editing', 'App Dev', 'SEO', 'AI'];

export const PROJECTS = [
  { cat: 'Web Dev', tag: 'Web Development', title: 'Northline Logistics Platform', desc: 'A React + Node dashboard for real-time fleet tracking across 300+ vehicles.' },
  { cat: 'WordPress', tag: 'WordPress', title: 'Alder & Co. Law Firm Site', desc: 'Custom WordPress theme with case-study CMS and a 40% faster load time.' },
  { cat: 'Webflow', tag: 'Webflow', title: 'Solace Wellness Studio', desc: 'Animated Webflow marketing site with CMS-driven class schedules.' },
  { cat: 'Shopify', tag: 'Shopify', title: 'Marrow Coffee Roasters', desc: 'Shopify storefront rebuild that lifted conversion rate by 28%.' },
  { cat: 'Digital Marketing', tag: 'Digital Marketing', title: 'Northshore Growth Campaign', desc: 'Multi-channel digital marketing campaign with paid search, landing pages and email automation.' },
  { cat: 'Video Editing', tag: 'Video Editing', title: 'Pulse Media Content Engine', desc: 'Fast-paced short-form video editing system for social ads, YouTube shorts and product promos.' },
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
  { name: 'Athar Ali', role: 'COO', desc: 'Manages the day-to-day operations and ensures the company is running efficiently.', skills: ['SEO', 'Python', 'Workflow Automation'], grad: 'linear-gradient(135deg,#ffb020,#e08c00)' },
];

export const ROLE_CHIPS = ['Shopify Developers', 'WordPress Engineers', 'SEO Strategists', 'Digital Marketers', 'Video Editors', 'Mobile Developers', 'UI/UX Designers', 'QA Engineers', 'Project Managers', 'Content Writers'];

export const TESTIMONIALS = [
  { quote: 'Techlifai rebuilt our storefront and our conversion rate jumped within the first month. Communication was clear the entire way through.', name: 'Alina Cortez', role: 'Founder, Marrow Coffee', grad: 'linear-gradient(135deg,#00e6a8,#00b386)' },
  { quote: 'The AI support bot they built now handles most of our repetitive tickets. Our team finally has room to focus on real problems.', name: 'Devon Marsh', role: 'Ops Lead, Kestrel', grad: 'linear-gradient(135deg,#7c6bf0,#5644c9)' },
  { quote: 'Our organic traffic grew tenfold after their SEO work. They explained every decision instead of just handing us a report.', name: 'Priya Nathan', role: 'CEO, Bramwell Home Goods', grad: 'linear-gradient(135deg,#ffb020,#e08c00)' },
];

export const BLOG_POSTS = [
  {
    slug: 'seo-for-modern-websites',
    title: 'SEO for Modern Websites: How to Rank in a Competitive Market',
    excerpt: 'Learn how technical SEO, page speed and structured content help your website earn visibility for high-intent keywords.',
    category: 'SEO',
    readTime: '6 min read',
    keywords: ['SEO', 'technical SEO', 'keyword strategy'],
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    content: [
      'Search engine optimization is no longer just about stuffing keywords into page copy. Modern SEO requires a thoughtful mix of technical health, fast loading experiences, relevant content and strategic internal linking.',
      'A strong SEO foundation starts with a clear keyword strategy. Instead of chasing broad terms, businesses should focus on intent-based queries that align with what their audience is trying to accomplish.',
      'Technical details such as clean URL structure, schema markup, mobile responsiveness and optimized metadata all help search engines understand your site. When these are handled well, your content has a better chance to rank and convert.'
    ]
  },
  {
    slug: 'shopify-storefront-optimization',
    title: 'Shopify Storefront Optimization: Better UX, More Conversions',
    excerpt: 'A practical guide to improving product pages, mobile speed and checkout flow for ecommerce growth.',
    category: 'Shopify',
    readTime: '5 min read',
    keywords: ['Shopify', 'conversion rate', 'ecommerce'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    content: [
      'Shopify stores can gain a lot from a deliberate focus on storefront performance. The fastest wins usually come from improving mobile usability, simplifying navigation and sharpening the product page experience.',
      'A strong product page should answer key questions quickly: what does the product do, why should someone buy it and what makes it trustworthy? Clear visuals, strong copy and social proof can dramatically increase confidence.',
      'Optimizing the checkout journey matters just as much. Reducing friction for returning visitors, improving page speed and using well-placed upsells can raise average order values without making the experience feel overcomplicated.'
    ]
  },
  {
    slug: 'ai-automation-for-small-business',
    title: 'AI Automation for Small Business: Where to Start Without Overcomplicating Things',
    excerpt: 'See how intelligent automations can reduce repetitive admin work while improving customer experience.',
    category: 'AI',
    readTime: '4 min read',
    keywords: ['AI automation', 'workflow automation', 'small business'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    content: [
      'Many businesses are tempted to automate everything at once. In practice, the best automation projects begin with a single repetitive workflow that consumes time and creates avoidable errors.',
      'A great first step is often customer support, lead qualification or internal reporting. These tasks benefit from AI because they are repetitive, predictable and easy to measure.',
      'The real advantage of automation is not just speed. It is consistency, faster response times and more room for your team to focus on high-value work that requires human judgment.'
    ]
  },
  {
    slug: 'webflow-vs-react-for-growth-sites',
    title: 'Webflow vs React for Growth Sites: What Should You Choose?',
    excerpt: 'Compare the tradeoffs between visual editors and custom code to decide what fits your growth goals best.',
    category: 'Web Development',
    readTime: '7 min read',
    keywords: ['Webflow', 'React', 'growth website'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    content: [
      'A growth site often needs both speed and flexibility. Webflow can be ideal for teams that want polished marketing pages and a fast visual workflow, while React is better when custom logic and deep integrations are required.',
      'The right choice usually depends on the complexity of the product and how much control your team needs over the frontend experience. If the site is mainly content and marketing-focused, Webflow can be a strong fit.',
      'If your team needs advanced interactions, custom APIs or a unique user experience, a React-based build gives more freedom. In many cases, the best result comes from combining the strengths of both approaches.'
    ]
  }
];

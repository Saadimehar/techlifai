import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Site.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Industries from './pages/Industries.jsx';
import Projects from './pages/Projects.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Team from './pages/Team.jsx';
import Reviews from './pages/Reviews.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const basename = window.location.pathname === '/techlifai' || window.location.pathname.startsWith('/techlifai/') ? '/techlifai' : undefined;
  return <HelmetProvider><BrowserRouter basename={basename}><Layout><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/industries" element={<Industries />} /><Route path="/projects" element={<Projects />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<BlogPost />} /><Route path="/team" element={<Team />} /><Route path="/reviews" element={<Reviews />} /><Route path="/contact" element={<EmailContact />} /></Routes></Layout></BrowserRouter></HelmetProvider>;
}

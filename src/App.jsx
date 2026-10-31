import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Site.jsx';
import { Home, About, Services, Industries, Projects, Blog, BlogPost, Team, Reviews, Contact } from './pages/Pages.jsx';

export default function App() {
  return <HelmetProvider><BrowserRouter><Layout><Routes><Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/industries" element={<Industries />} /><Route path="/projects" element={<Projects />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<BlogPost />} /><Route path="/team" element={<Team />} /><Route path="/reviews" element={<Reviews />} /><Route path="/contact" element={<Contact />} /></Routes></Layout></BrowserRouter></HelmetProvider>;
}

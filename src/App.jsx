import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import { Layout } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Industries = lazy(() => import("./pages/Industries.jsx"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const Reviews = lazy(() => import("./pages/Reviews.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

export default function App() {
  const basename =
    window.location.pathname === "/techlifai" ||
    window.location.pathname.startsWith("/techlifai/")
      ? "/techlifai"
      : undefined;
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
      <BrowserRouter basename={basename}>
        <Layout>
          <Suspense fallback={<div className="min-h-[100svh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/team" element={<Team />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
      </LazyMotion>
    </HelmetProvider>
  );
}

/**
 * Main App Component
 * 
 * This is the root component of the portfolio application.
 * It includes all major sections and global components like
 * navigation, scroll progress, and animations.
 * 
 * @author Sailesh Mandal
 */

import { SEO } from "./components/layout/SEO";
import { Navigation } from "./components/layout/Navigation";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { PageLoader } from "./components/layout/PageLoader";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { ParticleBackground } from "./components/layout/ParticleBackground";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      {/* SEO meta tags for better search engine visibility */}
      <SEO />
      
      {/* Page loader animation shown on initial load */}
      <PageLoader />
      
      {/* Scroll progress indicator at the top */}
      <ScrollProgress />
      
      {/* Animated particle background */}
      <ParticleBackground />
      
      <div className="min-h-screen relative">
        {/* Main navigation bar */}
        <Navigation />
        
        {/* Main content sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        
        {/* Footer section */}
        <Footer />
        
        {/* Scroll to top button */}
        <ScrollToTop />
        
        {/* Toast notifications */}
        <Toaster />
      </div>
    </>
  );
}
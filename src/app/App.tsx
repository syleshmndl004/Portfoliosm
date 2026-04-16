/**
 * Main App Component
 * 
 * This is the root component of the portfolio application.
 * It includes all major sections and global components like
 * navigation, scroll progress, and animations.
 * 
 * @author Sailesh Mandal
 */

import { SEO } from "./components/SEO";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageLoader } from "./components/PageLoader";
import { ScrollToTop } from "./components/ScrollToTop";
import { ParticleBackground } from "./components/ParticleBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
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
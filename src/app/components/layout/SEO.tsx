/**
 * SEO Component
 * 
 * Manages all SEO-related meta tags for the portfolio.
 * This includes Open Graph tags for social media sharing,
 * Twitter Card tags, and standard SEO meta tags.
 * 
 * @author Sailesh Mandal
 */

import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string[];
  ogImage?: string;
  url?: string;
}

export function SEO({
  title = "Sailesh Mandal - Full Stack Developer & UI/UX Designer",
  description = "Professional portfolio of Sailesh Mandal, a Full Stack Developer and UI/UX Designer specializing in React, TypeScript, Node.js, and modern web technologies. Building beautiful and functional digital experiences.",
  author = "Sailesh Mandal",
  keywords = [
    "Sailesh Mandal",
    "Full Stack Developer",
    "UI/UX Designer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Design",
    "JavaScript",
    "HTML",
    "CSS",
    "Figma",
  ],
  ogImage = "https://saileshmandal.me/Files/pfile.png",
  url = "https://saileshmandal.me",
}: SEOProps = {}) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    // Standard meta tags
    setMetaTag("description", description);
    setMetaTag("author", author);
    setMetaTag("keywords", keywords.join(", "));
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("robots", "index, follow");
    setMetaTag("language", "English");
    setMetaTag("revisit-after", "7 days");

    // Open Graph meta tags (for Facebook, LinkedIn, etc.)
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:url", url, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:site_name", "Sailesh Mandal Portfolio", true);
    setMetaTag("og:locale", "en_US", true);

    // Twitter Card meta tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);
    setMetaTag("twitter:creator", "@saileshmandal");

    // Additional SEO tags
    setMetaTag("theme-color", "#0891b2");
    setMetaTag("mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-capable", "yes");
    setMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");
    setMetaTag("apple-mobile-web-app-title", "Sailesh Mandal");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, author, keywords, ogImage, url]);

  return null; // This component doesn't render anything
}

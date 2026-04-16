# 📁 Portfolio File Structure

This document provides a detailed overview of the project's file organization and purpose of each directory and file.

## 📂 Root Directory

```
sailesh-mandal-portfolio/
├── src/                    # Source code directory
├── package.json            # Project dependencies and metadata
├── vite.config.ts         # Vite bundler configuration
├── postcss.config.mjs     # PostCSS configuration for Tailwind CSS
├── README.md              # Main project documentation
└── FILE_STRUCTURE.md      # This file
```

## 📂 Source Directory (`/src`)

### `/src/app/` - Application Code

Main application directory containing all React components and logic.

#### `/src/app/App.tsx`
**Main Application Component**
- Root component of the portfolio
- Imports and renders all section components
- Includes global features (SEO, navigation, loaders)
- Fully documented with JSDoc comments

---

### `/src/app/components/` - Component Directory

All React components organized by functionality.

#### **Main Section Components**

| File | Description |
|------|-------------|
| `Hero.tsx` | Landing section with name, role, typing animation, and CTA buttons |
| `About.tsx` | About me section with description and GitHub stats |
| `Skills.tsx` | Skills showcase with progress bars and skill cloud |
| `Projects.tsx` | Project portfolio with cards and descriptions |
| `Experience.tsx` | Professional timeline of work experience and education |
| `Testimonials.tsx` | Client testimonials carousel |
| `Contact.tsx` | Contact form with validation and social links |
| `Footer.tsx` | Footer with copyright and social media links |

#### **Navigation & UI Components**

| File | Description |
|------|-------------|
| `Navigation.tsx` | Sticky navigation bar with active section highlighting and theme toggle |
| `SEO.tsx` | SEO meta tags manager (Open Graph, Twitter Cards, etc.) |
| `ScrollProgress.tsx` | Top scroll progress indicator bar |
| `ScrollToTop.tsx` | Floating scroll-to-top button |
| `PageLoader.tsx` | Initial page loading animation |

#### **Interactive Components**

| File | Description |
|------|-------------|
| `GitHubStats.tsx` | Animated GitHub statistics cards with counting animation |
| `SkillCloud.tsx` | Circular floating skill badges with hover effects |
| `TypingAnimation.tsx` | Auto-typing text animation for hero section |
| `ParticleBackground.tsx` | Animated floating particles background |

---

### `/src/app/components/ui/` - Reusable UI Components

Pre-built, accessible UI components from Radix UI and custom implementations.

**Core Components:**
- `button.tsx` - Button component with variants
- `card.tsx` - Card container component
- `input.tsx` - Form input field
- `textarea.tsx` - Multi-line text input
- `label.tsx` - Form label component
- `badge.tsx` - Badge/tag component
- `progress.tsx` - Progress bar component

**Advanced Components:**
- `accordion.tsx` - Collapsible content sections
- `alert.tsx` - Alert/notification messages
- `alert-dialog.tsx` - Modal alert dialogs
- `avatar.tsx` - User avatar component
- `breadcrumb.tsx` - Navigation breadcrumbs
- `calendar.tsx` - Date picker calendar
- `carousel.tsx` - Image/content carousel
- `chart.tsx` - Data visualization charts
- `checkbox.tsx` - Checkbox input
- `collapsible.tsx` - Collapsible content
- `command.tsx` - Command palette
- `context-menu.tsx` - Right-click menu
- `dialog.tsx` - Modal dialogs
- `drawer.tsx` - Slide-out drawer
- `dropdown-menu.tsx` - Dropdown menus
- `form.tsx` - Form management
- `hover-card.tsx` - Hover popover card
- `input-otp.tsx` - OTP input field
- `menubar.tsx` - Menu bar
- `navigation-menu.tsx` - Navigation menu
- `pagination.tsx` - Pagination controls
- `popover.tsx` - Popover component
- `radio-group.tsx` - Radio button group
- `resizable.tsx` - Resizable panels
- `scroll-area.tsx` - Custom scrollbar
- `select.tsx` - Select dropdown
- `separator.tsx` - Visual separator
- `sheet.tsx` - Slide-in panel
- `sidebar.tsx` - Sidebar navigation
- `skeleton.tsx` - Loading skeleton
- `slider.tsx` - Range slider
- `sonner.tsx` - Toast notifications
- `switch.tsx` - Toggle switch
- `table.tsx` - Data tables
- `tabs.tsx` - Tab navigation
- `toggle.tsx` - Toggle button
- `toggle-group.tsx` - Toggle button group
- `tooltip.tsx` - Tooltip component

**Utility Files:**
- `utils.ts` - Utility functions (cn, etc.)
- `use-mobile.ts` - Mobile detection hook

---

### `/src/app/components/figma/` - Figma Integration

| File | Description |
|------|-------------|
| `ImageWithFallback.tsx` | Image component with loading states and fallback |

---

### `/src/imports/` - Assets Directory

Static assets like images used in the portfolio.

| File | Purpose |
|------|---------|
| `image.png` | Professional headshot/profile picture |
| `image-1.png` | Additional profile image |
| `Project1.png` | Project screenshot 1 |
| `Project2.png` | Project screenshot 2 |
| `Project3.png` | Project screenshot 3 |

---

### `/src/styles/` - Stylesheets

Global styles and theme configuration.

| File | Description |
|------|-------------|
| `globals.css` | Global CSS variables, theme colors, and base styles |
| `default_theme.css` | Default theme configuration |
| `index.css` | CSS entry point (imports other stylesheets) |

**Key Features in `globals.css`:**
- CSS custom properties for theming
- Dark mode support
- Tailwind CSS configuration
- Typography defaults
- Color system
- Spacing and sizing variables

---

## 🎨 Component Architecture

### Component Categories

1. **Layout Components**
   - `App.tsx` - Main layout
   - `Navigation.tsx` - Site navigation
   - `Footer.tsx` - Site footer

2. **Content Sections**
   - `Hero.tsx` - Introduction
   - `About.tsx` - About me
   - `Skills.tsx` - Technical skills
   - `Projects.tsx` - Portfolio work
   - `Experience.tsx` - Career timeline
   - `Testimonials.tsx` - Social proof
   - `Contact.tsx` - Contact form

3. **Interactive Features**
   - `TypingAnimation.tsx` - Text effects
   - `SkillCloud.tsx` - Skill visualization
   - `GitHubStats.tsx` - Data display
   - `ParticleBackground.tsx` - Visual effects

4. **Utility Components**
   - `SEO.tsx` - Meta tag management
   - `ScrollProgress.tsx` - Progress indicator
   - `ScrollToTop.tsx` - Navigation aid
   - `PageLoader.tsx` - Loading state

---

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `SkillCloud.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`, `use-mobile.ts`)
- **Styles**: kebab-case (e.g., `globals.css`, `default_theme.css`)
- **Config**: kebab-case (e.g., `vite.config.ts`, `postcss.config.mjs`)

---

## 🔧 Configuration Files

### `package.json`
- Project metadata (name, version, author)
- Dependencies list
- Build scripts
- Project keywords for SEO

### `vite.config.ts`
- Vite bundler configuration
- React plugin setup
- Build optimization settings

### `postcss.config.mjs`
- PostCSS plugins
- Tailwind CSS integration
- CSS processing rules

---

## 📊 Component Dependencies

```
App.tsx
├── SEO.tsx
├── PageLoader.tsx
├── ScrollProgress.tsx
├── ParticleBackground.tsx
├── Navigation.tsx
├── Hero.tsx
│   └── TypingAnimation.tsx
├── About.tsx
│   └── GitHubStats.tsx
├── Skills.tsx
│   └── SkillCloud.tsx
├── Projects.tsx
├── Experience.tsx
├── Testimonials.tsx
├── Contact.tsx
├── Footer.tsx
└── ScrollToTop.tsx
```

---

## 🎯 Best Practices Implemented

1. **Component Organization**
   - One component per file
   - Clear file naming
   - Logical directory structure

2. **Code Quality**
   - TypeScript for type safety
   - JSDoc comments for documentation
   - Descriptive variable names
   - Modular and reusable components

3. **Performance**
   - Code splitting
   - Lazy loading
   - Optimized animations
   - Efficient re-renders

4. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support
   - Screen reader friendly

5. **Maintainability**
   - Clear separation of concerns
   - Consistent coding style
   - Well-documented code
   - Reusable components

---

## 🚀 Adding New Components

To add a new component:

1. Create file in `/src/app/components/`
2. Add JSDoc comments at the top
3. Import in `App.tsx` if it's a section
4. Add to navigation if needed
5. Update this documentation

Example template:

```tsx
/**
 * Component Name
 * 
 * Brief description of what the component does.
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 * 
 * @component
 * @author Sailesh Mandal
 */

import { useState } from "react";

export function ComponentName() {
  // Component logic here
  
  return (
    <section id="component-name">
      {/* Component JSX */}
    </section>
  );
}
```

---

**Last Updated:** April 16, 2026  
**Maintained By:** Sailesh Mandal

# ⚡ Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Installation

### 1. Prerequisites
Ensure you have:
- **Node.js** 18+ installed ([Download](https://nodejs.org/))
- **pnpm** installed (or use npm)

```bash
# Install pnpm (if not installed)
npm install -g pnpm
```

### 2. Install Dependencies

```bash
# Install all project dependencies
pnpm install
```

### 3. Start Development Server

```bash
# Start the dev server
pnpm dev
```

Visit `http://localhost:5173` to see your portfolio! 🎉

---

## ✏️ Personalize Your Portfolio

### Step 1: Update Personal Info in Hero (2 min)

**File:** `/src/app/components/Hero.tsx`

```tsx
// Line ~113: Update your name
<span className="text-primary">Your Name Here</span>

// Line ~120-125: Update roles
<TypingAnimation 
  texts={[
    "Your Title 1",
    "Your Title 2",
    "Your Title 3",
    "Your Title 4"
  ]}
/>

// Line ~130: Update tagline
<p>Your tagline or description here</p>

// Line ~181: Update profile image
src="YOUR_IMAGE_URL_HERE"
```

### Step 2: Update About Section (3 min)

**File:** `/src/app/components/About.tsx`

```tsx
// Line ~33: Update description
<p>Your personal description here...</p>

// Lines ~59-82: Update personality points
{
  icon: YourIcon,
  title: "Your Trait",
  description: "Description here",
}
```

### Step 3: Update Skills (5 min)

**File:** `/src/app/components/Skills.tsx`

```tsx
// Lines ~6-29: Update your skills
const skills = [
  {
    category: "Your Category",
    technologies: [
      { name: "Skill Name", icon: "🎨", level: 90 },
    ],
  },
];
```

### Step 4: Update Projects (10 min)

**File:** `/src/app/components/Projects.tsx`

```tsx
// Lines ~7-57: Replace with your projects
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "project_image.png",
    tags: ["Tech1", "Tech2"],
    liveUrl: "https://...",
    githubUrl: "https://github.com/...",
  },
];
```

### Step 5: Update Experience (5 min)

**File:** `/src/app/components/Experience.tsx`

```tsx
// Lines ~9-41: Update timeline entries
const timelineEvents = [
  {
    type: "work" or "education",
    title: "Position/Degree",
    organization: "Company/University",
    location: "City, Country",
    period: "Month Year - Present",
    description: "What you did...",
  },
];
```

### Step 6: Update Contact Info (2 min)

**File:** `/src/app/components/Contact.tsx`

```tsx
// Lines ~65-67: Update contact details
<Mail className="size-5" />
<span>your@email.com</span>

// Line ~72: Update location
<span>Your City, Country</span>
```

**File:** `/src/app/components/Footer.tsx`

```tsx
// Lines ~10-27: Update social links
{ 
  icon: Platform, 
  href: "YOUR_SOCIAL_URL", 
  label: "Platform" 
}
```

### Step 7: Update SEO (3 min)

**File:** `/src/app/components/SEO.tsx`

```tsx
// Lines ~24-26: Update default values
title = "Your Name - Your Title"
description = "Your SEO description"
keywords = ["Your", "Keywords", "Here"]
```

---

## 📸 Replace Images

1. Add your images to `/src/imports/`
2. Update image references in components:
   - Profile picture in `Hero.tsx`
   - Project images in `Projects.tsx`

---

## 🎨 Customize Colors (Optional)

**File:** `/src/styles/globals.css`

```css
/* Line 4-11: Update color variables */
:root {
  --primary: #YOUR_COLOR;
  --background: #YOUR_COLOR;
  --foreground: #YOUR_COLOR;
}
```

---

## 🔨 Build for Production

```bash
# Create production build
pnpm build

# Preview production build
pnpm preview
```

---

## 🚀 Deploy

Choose your preferred platform:

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### GitHub Pages
```bash
pnpm add -D gh-pages
# Update package.json with deploy script
pnpm deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📚 Next Steps

1. ✅ Personalize content (above)
2. ✅ Replace images
3. ✅ Test locally
4. ✅ Build for production
5. ✅ Deploy to hosting
6. ✅ Set up custom domain (optional)
7. ✅ Submit to search engines

---

## 🆘 Need Help?

- **Full Documentation:** [README.md](./README.md)
- **File Structure:** [FILE_STRUCTURE.md](./FILE_STRUCTURE.md)
- **Deployment Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Project Overview:** [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

---

## 🎯 Essential Files to Customize

| Priority | File | What to Update |
|----------|------|----------------|
| 🔴 High | `Hero.tsx` | Name, titles, image |
| 🔴 High | `About.tsx` | Bio, personality |
| 🔴 High | `Projects.tsx` | Your projects |
| 🟡 Medium | `Skills.tsx` | Your skills |
| 🟡 Medium | `Experience.tsx` | Work history |
| 🟡 Medium | `Contact.tsx` | Contact info |
| 🟡 Medium | `Footer.tsx` | Social links |
| 🟢 Low | `SEO.tsx` | Meta tags |
| 🟢 Low | `globals.css` | Colors |

---

## ⏱️ Time Estimate

- **Basic Setup:** 5 minutes
- **Content Updates:** 30-45 minutes
- **Image Replacement:** 10 minutes
- **Testing:** 15 minutes
- **Deployment:** 10 minutes

**Total:** ~1-1.5 hours for a fully personalized portfolio! 🎉

---

**Happy Building! 🚀**

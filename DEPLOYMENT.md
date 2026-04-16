# 🚀 Deployment Guide

This guide explains how to deploy the Sailesh Mandal Portfolio to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed these steps:

- [ ] Update all personal information in components
- [ ] Replace placeholder images with actual images
- [ ] Update resume download link in `Hero.tsx`
- [ ] Verify all social media links in `Footer.tsx` and `Contact.tsx`
- [ ] Update SEO meta tags in `SEO.tsx`
- [ ] Test the contact form functionality
- [ ] Run `pnpm build` to check for build errors
- [ ] Test the production build locally
- [ ] Update GitHub stats values (if not using real API)
- [ ] Verify all external links work
- [ ] Check responsive design on multiple devices

## 🏗️ Build Process

### Local Build

```bash
# Install dependencies
pnpm install

# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

The production build will be created in the `dist/` directory.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Zero configuration deployment
- Automatic HTTPS
- Global CDN
- Excellent performance
- Free tier available

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

**Alternative: Deploy via Git**

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

**Configuration (`vercel.json`):**
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

### Option 2: Netlify

**Steps:**

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   pnpm build
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```

4. **Deploy to production**
   ```bash
   netlify deploy --prod
   ```

**Alternative: Deploy via Git**

1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist`

**Configuration (`netlify.toml`):**
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Update `package.json`**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "pnpm build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.ts`**
   ```ts
   export default {
     base: '/portfolio/', // Replace with your repo name
   }
   ```

4. **Deploy**
   ```bash
   pnpm deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages
   - Select `gh-pages` branch
   - Save

---

### Option 4: AWS Amplify

**Steps:**

1. Push code to GitHub
2. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click "Connect app"
4. Select your repository
5. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install -g pnpm
           - pnpm install
       build:
         commands:
           - pnpm build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

---

### Option 5: Firebase Hosting

**Steps:**

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub deploys: Optional

4. **Build and deploy**
   ```bash
   pnpm build
   firebase deploy
   ```

**Configuration (`firebase.json`):**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## 🔧 Environment Variables

If you add environment variables in the future:

1. Create `.env` file in root (don't commit this!)
2. Prefix variables with `VITE_`
3. Access in code: `import.meta.env.VITE_VARIABLE_NAME`

**Example `.env`:**
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=your@email.com
```

**Add to hosting platform:**
- **Vercel**: Environment Variables section in project settings
- **Netlify**: Site settings → Environment variables
- **GitHub Pages**: Use GitHub Secrets for GitHub Actions
- **AWS Amplify**: Environment variables in app settings
- **Firebase**: Firebase Functions config

---

## 🌍 Custom Domain Setup

### Vercel
1. Go to project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### GitHub Pages
1. Add CNAME file in `public/` folder with your domain
2. Update DNS A records to GitHub's IPs

### AWS Amplify
1. Domain management → Add domain
2. Verify domain ownership
3. Configure DNS records

### Firebase
1. Hosting → Add custom domain
2. Verify ownership
3. Update DNS records

---

## 📊 Performance Optimization

Before deployment, optimize your build:

1. **Image Optimization**
   - Compress images using tools like TinyPNG
   - Use WebP format where possible
   - Implement lazy loading

2. **Code Splitting**
   - Already handled by Vite
   - Consider lazy loading routes if added

3. **Bundle Analysis**
   ```bash
   pnpm build -- --mode analyze
   ```

4. **Enable Compression**
   - Most hosts enable gzip/brotli automatically
   - Verify in Network tab after deployment

---

## 🔒 Security Best Practices

- [ ] Use HTTPS (automatic on most platforms)
- [ ] Set security headers
- [ ] Implement Content Security Policy (CSP)
- [ ] Keep dependencies updated
- [ ] Don't commit sensitive data
- [ ] Use environment variables for API keys
- [ ] Enable CORS only for trusted domains

---

## 📈 Post-Deployment

After deployment:

1. **Test Everything**
   - All navigation links
   - Contact form submission
   - Responsive design
   - All animations
   - Page load speed
   - SEO tags (view page source)

2. **Monitor Performance**
   - Use Google PageSpeed Insights
   - Check Lighthouse scores
   - Monitor Core Web Vitals

3. **Set Up Analytics** (Optional)
   - Google Analytics
   - Plausible Analytics
   - Vercel Analytics

4. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Create and submit sitemap

---

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `node_modules` and reinstall
- Check for TypeScript errors

### Assets Not Loading
- Verify asset paths are relative
- Check build output in `dist/`
- Ensure assets are in correct directories

### 404 on Refresh
- Configure redirects for SPA routing
- See platform-specific redirect configs above

### Slow Performance
- Check bundle size
- Optimize images
- Enable caching headers
- Use CDN for static assets

---

## 📞 Support

If you encounter issues:

1. Check platform-specific documentation
2. Review build logs
3. Test production build locally first
4. Search platform community forums

---

## ✅ Deployment Checklist

- [ ] Code is tested locally
- [ ] Production build works
- [ ] All personal info updated
- [ ] Images optimized
- [ ] SEO configured
- [ ] Platform selected
- [ ] Deployment successful
- [ ] Custom domain configured (optional)
- [ ] HTTPS enabled
- [ ] Performance tested
- [ ] Mobile responsiveness verified
- [ ] Analytics set up (optional)
- [ ] Submitted to search engines

---

**Happy Deploying! 🎉**

For questions or issues, create an issue in the GitHub repository.

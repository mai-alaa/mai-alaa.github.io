# Deployment Guide

This guide covers various deployment options for your Flutter Developer Portfolio.

## 🌐 Static Hosting Platforms

### Netlify (Recommended)
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Or drag & drop**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `dist` folder to the deploy area

### Vercel
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Pages
1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🔧 Build Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=your-email@example.com
```

### Custom Domain Setup
1. **Update meta tags** in `index.html`
2. **Configure DNS** with your hosting provider
3. **Enable HTTPS** (usually automatic with modern hosts)

## 📊 Performance Optimization

### Before Deployment
- Run `npm run build` to create optimized production build
- Check bundle size with `npm run preview`
- Test on different devices and browsers

### Post-Deployment
- Enable gzip compression on your server
- Set up proper caching headers
- Monitor Core Web Vitals

## 🔒 Security Headers

Add these headers to your hosting configuration:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## 📱 PWA Setup (Optional)

To make your portfolio a Progressive Web App:

1. **Add manifest.json**
2. **Implement service worker**
3. **Add PWA meta tags**
4. **Test with Lighthouse**

## 🚀 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './dist'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📈 Analytics Setup

### Google Analytics 4
Add to `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO Optimization

- Update meta descriptions and titles
- Add structured data (JSON-LD)
- Create sitemap.xml
- Submit to Google Search Console
- Optimize images with proper alt tags

## 📞 Support

If you encounter any deployment issues:
1. Check the build logs for errors
2. Verify all dependencies are installed
3. Test the build locally with `npm run preview`
4. Contact your hosting provider's support if needed
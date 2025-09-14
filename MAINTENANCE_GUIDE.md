# Bhajans Website - Maintenance Guide

## 🎯 Easy Configuration Management

### 📁 Configuration Files Location
All website settings are centralized in `/src/config/` for easy maintenance:

```
src/config/
├── site.ts          # Site-wide settings (name, description, navigation)
├── festivals.ts     # Festival data (easy to add new festivals)
├── gods.ts          # Deities data (easy to add new gods)
├── adsense.ts       # AdSense settings (ad slots, placement)
└── deployment.ts    # Cloudflare & build settings
```

## 🔧 Common Maintenance Tasks

### Adding a New Festival
1. Edit `/src/config/festivals.ts`
2. Add new festival object to `festivalsConfig` array:
```typescript
{
  id: "new-festival",
  name: "New Festival",
  title: "Festival Description",
  description: "Detailed description...",
  duration: "X days",
  icon: "🎉",
  color: "from-blue-400 to-purple-500",
  featured: true // Show on homepage
}
```
3. Create page: `/src/app/festivals/new-festival/page.tsx`
4. Deploy via Cloudflare Pages

### Adding a New God/Deity
1. Edit `/src/config/gods.ts`
2. Add new deity object to `godsConfig` array
3. Create page: `/src/app/gods/new-god/page.tsx`
4. Deploy

### Updating AdSense Settings
1. Edit `/src/config/adsense.ts`
2. Update ad slot IDs or placement settings
3. No code changes needed - configuration is centralized

### Changing Site Information
1. Edit `/src/config/site.ts`
2. Update name, description, contact info, navigation
3. Changes apply site-wide automatically

## 🚀 Cloudflare Pages Management

### Automatic Deployments (Recommended Setup)

#### Option 1: GitHub Integration
1. **Push to GitHub**: Create repository and push your code
2. **Connect Cloudflare**: 
   - Go to Cloudflare Dashboard → Pages
   - Connect to Git → Select your repository
   - Build settings:
     - Build command: `cd bhakti-app && npm run build`
     - Build output directory: `bhakti-app/out`
     - Root directory: `/`

#### Option 2: Direct Upload
1. **Build locally**: `cd bhakti-app && npm run build`
2. **Upload**: Drag `bhakti-app/out/` folder to Cloudflare Pages
3. **Custom domain**: Set `bhajans.justhobby.net`

### Cloudflare Pages Settings

#### Build Configuration
```
Build command: cd bhakti-app && npm run build
Build output directory: bhakti-app/out
Root directory: /
Node.js version: 18
```

#### Environment Variables
```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

#### Custom Domain Setup
1. Pages → Custom domains → Add domain
2. Add `bhajans.justhobby.net`
3. Update DNS records as instructed

## 📊 Monitoring & Analytics

### Cloudflare Analytics
- **Built-in**: Automatic traffic analytics
- **Real User Monitoring**: Performance metrics
- **Security insights**: Threat monitoring

### Google Analytics (Optional)
1. Update GA4 ID in `/src/config/deployment.ts`
2. Add tracking code to layout.tsx

## 🔄 Deployment Workflows

### Quick Content Updates
1. **Edit config files** (festivals.ts, gods.ts, etc.)
2. **Test locally**: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy**: Upload `out/` folder or push to Git

### Adding New Pages
1. **Create page**: `/src/app/new-page/page.tsx`
2. **Update navigation**: Edit `/src/config/site.ts`
3. **Build & deploy**

### Emergency Updates
1. **Direct file upload** to Cloudflare Pages
2. **Rollback**: Use Cloudflare Pages deployment history
3. **Custom redirects**: Edit `_redirects` file

## 🛡️ Security & Performance

### Automatic Optimizations
- **Static generation**: Ultra-fast loading
- **CDN**: Global edge caching
- **Image optimization**: WebP conversion
- **Minification**: CSS/JS compression

### Security Headers
Configured in `_headers` file:
- X-Frame-Options: DENY
- Content Security Policy
- XSS Protection

## 📝 Content Management Tips

### SEO Optimization
- Update meta descriptions in config files
- Add structured data for festivals/gods
- Optimize images with descriptive alt text

### Performance Monitoring
- Use Cloudflare Web Analytics
- Monitor Core Web Vitals
- Check PageSpeed Insights regularly

## 🚨 Troubleshooting

### Build Failures
1. Check Node.js version (use 18+)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check TypeScript errors in config files

### Deployment Issues
1. Verify `out/` folder contains all files
2. Check `_redirects` and `_headers` syntax
3. Review Cloudflare Pages build logs

### Configuration Errors
1. Validate TypeScript in config files
2. Check import/export statements
3. Verify data structure matches interfaces

## 📞 Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Next.js Docs**: https://nextjs.org/docs
- **Configuration Files**: All settings in `/src/config/`

---

**Remember**: All major settings are in config files - no need to edit component code for most changes!

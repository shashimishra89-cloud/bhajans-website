# Bhakti - Hindu Festivals & Sacred Songs

A modern, static website dedicated to Hindu festivals, deities, and devotional content. Built with Next.js and deployed on Cloudflare Pages.

## 🚀 Quick Start

```bash
cd bhakti-app
npm install
npm run dev
```

Visit `http://localhost:3000`

## 📁 Project Structure

```
Bhakti/
├── bhakti-app/                 # Next.js application
│   ├── src/
│   │   ├── app/               # Pages (App Router)
│   │   ├── components/        # Reusable components
│   │   └── config/           # Configuration files
│   ├── public/               # Static assets
│   ├── _headers              # Cloudflare headers
│   └── _redirects            # Cloudflare redirects
├── database/
│   └── init.sql              # Database schema & seed data
├── wrangler.toml             # Cloudflare configuration
└── MAINTENANCE_GUIDE.md      # Detailed maintenance guide
```

## 🔧 Configuration

All website settings are centralized in `/src/config/`:

- `site.ts` - Site-wide settings
- `festivals.ts` - Festival data
- `gods.ts` - Deity data  
- `adsense.ts` - Ad configuration
- `deployment.ts` - Build settings

## 🚀 Deployment

### Build for Production
```bash
cd bhakti-app
npm run build
```

### Deploy to Cloudflare Pages
1. Upload `bhakti-app/out/` folder to Cloudflare Pages
2. Set custom domain: `bhajans.justhobby.net`

## 📖 Features

- **Static Site Generation** - Ultra-fast loading
- **Responsive Design** - Works on all devices
- **SEO Optimized** - Search engine friendly
- **AdSense Integration** - Monetization ready
- **Easy Maintenance** - Configuration-driven content

## 🎯 Pages

- `/` - Homepage
- `/festivals/` - Festival listings
- `/festivals/jivitputrika-vrat/` - Jivitputrika Vrat stories
- `/gods/` - Deity listings
- `/search/` - Search functionality

## 📚 Documentation

See `MAINTENANCE_GUIDE.md` for detailed maintenance instructions.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages
- **Database**: D1 (Cloudflare)
- **Storage**: R2 (Cloudflare)

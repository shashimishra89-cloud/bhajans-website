# Bhakti Website - Refactored Architecture

## Overview
This is a production-ready Next.js website for Hindu festivals, aartis, bhajans, and mantras with full AdSense integration and Cloudflare Workers compatibility.

## Architecture

### Folder Structure
```
bhakti-app/
├── app/                          # Next.js App Router pages
│   ├── festivals/
│   │   ├── page.tsx            # Festivals listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic festival detail pages
│   ├── aartis/
│   │   ├── page.tsx            # Aartis listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic aarti detail pages
│   ├── bhajans/
│   │   ├── page.tsx            # Bhajans listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic bhajan detail pages
│   ├── mantras/
│   │   ├── page.tsx            # Mantras listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic mantra detail pages
│   ├── layout.tsx              # Root layout with AdSense
│   ├── page.tsx                # Homepage
│   └── sitemap.xml/
│       └── route.ts            # Dynamic sitemap generation
├── components/                  # Reusable React components
│   ├── AdBlock.tsx             # AdSense integration
│   ├── SectionRenderer.tsx      # Content section renderer
│   ├── CategoryLayout.tsx       # Category page layout
│   ├── Breadcrumbs.tsx          # Navigation breadcrumbs
│   └── SEO.tsx                 # SEO utilities
├── lib/                        # Utility functions and types
│   ├── types.ts                # TypeScript type definitions
│   └── contentLoader.ts        # Content loading utilities
├── content/                     # JSON content files
│   ├── festivals/              # Festival content JSON
│   │   ├── diwali.json
│   │   ├── holi.json
│   │   ├── navratri.json
│   │   └── ganesh-chaturthi.json
│   ├── aartis/                # Aarti content JSON
│   ├── bhajans/               # Bhajan content JSON
│   └── mantras/               # Mantra content JSON
└── public/                     # Static assets
    ├── ads.txt                 # AdSense verification
    ├── robots.txt              # SEO robots file
    └── sitemap.xml             # Auto-generated sitemap
```

## Key Features

### 1. Content Management
- **JSON-based content**: All content stored in structured JSON files
- **Type-safe**: Full TypeScript support for content schemas
- **Dynamic loading**: Content loaded from JSON with fallback to static data
- **Easy expansion**: Add new content by simply adding JSON files

### 2. AdSense Integration
- **Publisher ID**: ca-pub-6946776427046584
- **Automatic injection**: Ads placed after every 2 sections
- **Multiple ad types**: Banner, square, and in-content ads
- **Edge compatible**: Works with Cloudflare Workers

### 3. SEO Optimization
- **Dynamic metadata**: Auto-generated for each page
- **Structured data**: JSON-LD for breadcrumbs and events
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper search engine instructions
- **Ads.txt**: AdSense verification file

### 4. Component Architecture
- **Reusable components**: Modular, type-safe components
- **SectionRenderer**: Automatically renders different content types
- **AdBlock**: Flexible ad placement with hydration safety
- **Breadcrumbs**: Automatic navigation hierarchy
- **CategoryLayout**: Consistent category page layouts

## How to Add New Content

### Adding a New Festival
1. Create JSON file: `content/festivals/new-festival.json`
2. Follow the schema in `lib/types.ts`
3. Add to static festivals in `lib/contentLoader.ts` (fallback)
4. The festival will automatically appear on the site

### Adding New Content Types
1. Update TypeScript types in `lib/types.ts`
2. Add content loader methods in `lib/contentLoader.ts`
3. Create page components in `app/[category]/`
4. Update SectionRenderer for new content types

## AdSense Configuration

### Ad Slots Used
- **Banner Ad**: 1234567890 (728x90)
- **Square Ad**: 1234567891 (300x250)
- **In-Content Ad**: 1234567892 (fluid)

### Ad Placement
- **Homepage**: After hero section
- **Category pages**: After hero section
- **Detail pages**: After every 2 content sections
- **Automatic**: No manual ad placement needed

## Deployment

### Cloudflare Workers Compatibility
- **Edge runtime**: No Node.js specific APIs
- **Static generation**: Pre-built pages where possible
- **Client components**: Only where necessary (ads, interactivity)
- **Optimized bundles**: Minimal JavaScript for fast loading

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Content Schema

### Festival Schema
```typescript
{
  id: string;
  name: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  color: string;
  significance?: string;
  rituals?: string[];
  sections: Section[];
  featured?: boolean;
  seo?: {
    keywords: string[];
    description: string;
  };
}
```

### Section Schema
```typescript
{
  type: 'shloka' | 'story' | 'bhajan' | 'aarti' | 'mantra' | 'ritual';
  title: string;
  content: string | ShlokaContent | BhajanContent;
}
```

## Performance Features

- **Static generation**: Fast loading with ISR
- **Image optimization**: Next.js Image component
- **Code splitting**: Automatic with App Router
- **Edge caching**: Cloudflare Workers optimization
- **Minimal JavaScript**: Only essential client-side code

## SEO Features

- **Meta tags**: Dynamic title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Optimized for Twitter
- **Structured data**: Rich snippets for search
- **Canonical URLs**: Prevent duplicate content
- **XML sitemap**: Automatic search engine discovery

This architecture provides a scalable, maintainable, and production-ready foundation for the Bhakti website with excellent SEO performance and seamless AdSense integration.

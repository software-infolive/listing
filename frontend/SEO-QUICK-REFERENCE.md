# SEO Quick Reference Card

## 🚀 Quick Start

### Before Deployment
1. Update `frontend/app/config/site.ts`
   - Change `url` to your production domain
   - Add real contact info
   - Add Google verification code (after creating Search Console property)

2. Build and test locally
   ```bash
   cd frontend
   npm run build
   npm start
   ```

3. Verify locally
   - `/sitemap.xml` ✓
   - `/robots.txt` ✓
   - Meta tags present ✓

### After Deployment
1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Request indexing for main pages
4. Set up Google Analytics 4

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/config/site.ts` | Site-wide configuration |
| `app/sitemap.ts` | Dynamic sitemap generator |
| `app/robots.ts` | Robots.txt configuration |
| `app/lib/metadata-utils.ts` | Metadata helper functions |
| `app/components/StructuredData.tsx` | JSON-LD structured data |

---

## 🔗 URL Patterns

```
Static:
  / (home)
  /about
  /services
  /contact
  /login
  /signup

Categories:
  /categories

Listings:
  /listings
  /listings?category=Electronics
  /listings?location=Mumbai
  /listing/{slug}

Blog:
  /blog
  /blog/{slug}

Locations:
  /locations
  /locations/{state}
  /locations/{state}/{district}
  /locations/{state}/{district}/{city}
```

---

## 🎯 Metadata Checklist

Every page should have:
- [x] Unique title tag
- [x] Meta description
- [x] Keywords
- [x] Canonical URL
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Robots meta

---

## 📊 Sitemap Stats

- **Total URLs**: ~200+
- **Static Pages**: 6
- **Categories**: 1
- **Listings**: 13
- **Blog Posts**: 19
- **Locations**: ~160 (states/districts/cities)

---

## 🔍 Priority Levels

| Priority | Page Type | Change Frequency |
|----------|-----------|------------------|
| 1.0 | Homepage | Daily |
| 0.9 | Main sections | Daily/Weekly |
| 0.8 | Blog, Locations | Daily/Weekly |
| 0.7 | States, Listings | Weekly |
| 0.6 | Districts, Posts | Weekly/Monthly |
| 0.5 | Cities | Weekly |

---

## 🛠️ Testing Tools

| Tool | URL | Purpose |
|------|-----|---------|
| Rich Results Test | https://search.google.com/test/rich-results | Validate structured data |
| Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Check mobile usability |
| PageSpeed Insights | https://pagespeed.web.dev/ | Test performance |
| Lighthouse | Chrome DevTools | Full audit |

---

## ✅ SEO Checklist

### Technical SEO
- [x] Sitemap.xml created
- [x] Robots.txt configured
- [x] Canonical URLs on all pages
- [x] Structured data implemented
- [x] Mobile-responsive design
- [x] Fast page load times
- [x] Clean URL structure
- [x] HTTPS (when deployed)

### On-Page SEO
- [x] Unique titles
- [x] Meta descriptions
- [x] Header hierarchy (H1, H2, H3)
- [x] Internal linking
- [x] Alt text for images
- [x] Keyword optimization

### Content SEO
- [x] Quality content
- [x] Location-specific pages
- [x] Category pages
- [x] Blog posts
- [x] Regular updates

---

## 🎓 Best Practices

1. **URLs**: Lowercase, hyphens, descriptive
2. **Titles**: < 60 characters, include keywords
3. **Descriptions**: 150-160 characters, compelling
4. **Keywords**: Relevant, not stuffed
5. **Images**: Optimized, with alt text
6. **Links**: Descriptive anchor text
7. **Content**: Unique, valuable, updated
8. **Speed**: < 3 seconds load time

---

## 📈 Expected Timeline

| Timeline | What to Expect |
|----------|----------------|
| Week 1 | Initial crawling, some pages indexed |
| Week 2-4 | More pages indexed, search queries appearing |
| Month 2-3 | Rankings improve, traffic increases |
| Month 6-12 | Established presence, consistent traffic |

---

## 🔧 Common Commands

```bash
# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint

# Deploy to Vercel
vercel --prod

# Clear Next.js cache
rm -rf .next
```

---

## 📞 Quick Links

### Search Console
- Google: https://search.google.com/search-console
- Bing: https://www.bing.com/webmasters

### Analytics
- Google Analytics: https://analytics.google.com

### Testing
- PageSpeed: https://pagespeed.web.dev/
- Rich Results: https://search.google.com/test/rich-results

---

## 🚨 Emergency Fixes

### Site Not Indexed
1. Check robots.txt
2. Submit sitemap
3. Request indexing
4. Check for manual actions

### Slow Performance
1. Check PageSpeed Insights
2. Optimize images
3. Minimize JavaScript
4. Enable caching

### Broken Links
1. Use Google Search Console
2. Check Coverage report
3. Fix or redirect broken URLs

### Duplicate Content
1. Check canonical URLs
2. Use 301 redirects
3. Add noindex where needed

---

## 📚 Documentation

- **Full Guide**: `SEO-DOCUMENTATION.md`
- **Permalinks**: `PERMALINKS.md`
- **Summary**: `SEO-SUMMARY.md`
- **Deployment**: `SEO-DEPLOYMENT-GUIDE.md`
- **Structure**: `SEO-STRUCTURE.md`
- **This Card**: `SEO-QUICK-REFERENCE.md`

---

## 💡 Pro Tips

1. **Content is King**: Focus on quality over quantity
2. **Mobile First**: 60%+ traffic is mobile
3. **Speed Matters**: Every second counts
4. **Update Regularly**: Fresh content ranks better
5. **Monitor Analytics**: Data-driven decisions
6. **Build Backlinks**: Quality over quantity
7. **Local SEO**: Optimize for location searches
8. **User Experience**: Happy users = better SEO

---

## 📝 Notes

- Update `site.ts` before deployment
- Submit sitemap after every major update
- Monitor Search Console weekly
- Add new blog posts monthly
- Review and update old content quarterly
- Run performance audits regularly

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Status**: ✅ Production Ready

---

## 🎯 Target Metrics (First 6 Months)

| Metric | Target |
|--------|--------|
| Pages Indexed | 150+ |
| Organic Traffic | 1,000+ visits/month |
| Avg. Position | < 20 |
| Click-Through Rate | > 2% |
| Bounce Rate | < 60% |
| Page Load Time | < 3 seconds |
| Mobile Score | > 90 |
| SEO Score | > 95 |

---

Print this card or keep it handy for quick reference! 🚀


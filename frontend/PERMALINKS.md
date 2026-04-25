# Permalinks Reference Guide

Quick reference for all URL structures in InfoLive List.

## Static Pages

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Contact | `/contact` |
| Login | `/login` |
| Signup | `/signup` |

## Categories

| Type | URL Pattern | Example |
|------|-------------|---------|
| All Categories | `/categories` | `/categories` |
| Filtered Listings | `/listings?category={name}` | `/listings?category=Electronics` |

**Available Categories:**
- Electronics
- Furniture
- Fashion & Accessories
- Automotive
- Real Estate
- Books & Media
- Services
- Pets & Animals
- Sports & Fitness
- Home & Garden
- Jobs
- Business & Industrial

## Listings

| Type | URL Pattern | Example |
|------|-------------|---------|
| All Listings | `/listings` | `/listings` |
| Listing Detail | `/listing/{slug}` | `/listing/apple-iphone-15-pro` |
| Category Filter | `/listings?category={name}` | `/listings?category=Electronics` |
| Location Filter | `/listings?location={city}` | `/listings?location=Mumbai` |
| Multiple Filters | `/listings?category={name}&location={city}` | `/listings?category=Electronics&location=Mumbai` |

**Example Listing URLs:**
```
/listing/apple-iphone-15-pro
/listing/professional-travel-kit
/listing/nikon-dslr-camera
/listing/modern-office-chair
/listing/executive-meeting-chair
/listing/story-book-collection
/listing/cctv-security-camera
/listing/samsung-galaxy-s24
/listing/designer-handbag
/listing/gaming-laptop
/listing/vintage-watch
/listing/home-theater-system
```

## Blog

| Type | URL Pattern | Example |
|------|-------------|---------|
| All Posts | `/blog` | `/blog` |
| Blog Post | `/blog/{slug}` | `/blog/how-to-choose-perfect-smartphone` |

**Example Blog URLs:**
```
/blog/how-to-choose-perfect-smartphone
/blog/top-10-tips-selling-online
/blog/complete-guide-furniture-buying
/blog/fashion-trends-2024
/blog/buying-used-car-checklist
/blog/real-estate-investment-tips
/blog/best-online-selling-platforms
/blog/photography-equipment-guide
/blog/home-organization-ideas
/blog/sustainable-fashion-guide
```

## Locations (India)

| Level | URL Pattern | Example |
|-------|-------------|---------|
| All States | `/locations` | `/locations` |
| State | `/locations/{state}` | `/locations/maharashtra` |
| District | `/locations/{state}/{district}` | `/locations/maharashtra/mumbai` |
| City | `/locations/{state}/{district}/{city}` | `/locations/maharashtra/mumbai/andheri` |

**Example Location URLs:**

### States
```
/locations/maharashtra
/locations/karnataka
/locations/tamil-nadu
/locations/delhi
/locations/rajasthan
/locations/west-bengal
/locations/gujarat
/locations/uttar-pradesh
/locations/telangana
/locations/kerala
```

### Districts
```
/locations/maharashtra/mumbai
/locations/maharashtra/pune
/locations/karnataka/bangalore-urban
/locations/karnataka/mysore
/locations/tamil-nadu/chennai
```

### Cities
```
/locations/maharashtra/mumbai/andheri
/locations/maharashtra/mumbai/bandra
/locations/maharashtra/pune/kothrud
/locations/karnataka/bangalore-urban/whitefield
/locations/tamil-nadu/chennai/t-nagar
```

## URL Parameters

### Query Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `category` | string | Filter by category | `?category=Electronics` |
| `location` | string | Filter by location | `?location=Mumbai` |
| `search` | string | Search keyword (future) | `?search=iphone` |
| `sort` | string | Sort order (future) | `?sort=price-low-high` |
| `page` | number | Pagination (future) | `?page=2` |

### Combining Parameters
```
/listings?category=Electronics&location=Mumbai
/listings?category=Furniture&location=Bangalore&sort=price-low-high
```

## Slug Generation Rules

### How Slugs are Created

1. **Convert to lowercase**: `Apple iPhone` → `apple iphone`
2. **Replace spaces with hyphens**: `apple iphone` → `apple-iphone`
3. **Remove special characters**: `iPhone!` → `iphone`
4. **Remove multiple consecutive hyphens**: `apple--iphone` → `apple-iphone`
5. **Trim leading/trailing hyphens**: `-apple-iphone-` → `apple-iphone`

### Examples

| Original Title | Generated Slug |
|----------------|----------------|
| Apple iPhone 15 Pro | `apple-iphone-15-pro` |
| Modern Office Chair | `modern-office-chair` |
| CCTV Security Camera | `cctv-security-camera` |
| Designer Handbag | `designer-handbag` |
| Story Book Collection | `story-book-collection` |

## SEO-Friendly URL Best Practices

### ✅ Good URLs
```
/listing/apple-iphone-15-pro
/blog/how-to-choose-perfect-smartphone
/locations/maharashtra/mumbai
/listings?category=Electronics&location=Mumbai
```

### ❌ Bad URLs
```
/listing?id=1&name=apple-iphone
/blog?post=123
/location?state=MH&city=Mumbai
/listings?cat=1&loc=2
```

## URL Character Limits

| Element | Recommended Limit | Hard Limit |
|---------|------------------|------------|
| Slug | 50-60 characters | 100 characters |
| Full URL | < 100 characters | 2083 characters |
| Parameters | < 200 characters | No hard limit |

## Canonical URLs

All pages include canonical URLs in the format:
```
https://yourdomain.com{path}
```

Examples:
```
https://yourdomain.com/
https://yourdomain.com/categories
https://yourdomain.com/listing/apple-iphone-15-pro
https://yourdomain.com/locations/maharashtra/mumbai
https://yourdomain.com/blog/how-to-choose-perfect-smartphone
```

## Sitemap Structure

All URLs are included in the XML sitemap at:
```
https://yourdomain.com/sitemap.xml
```

Priority levels:
- **1.0**: Homepage
- **0.9**: Main pages (Categories, Listings, Services)
- **0.8**: Blog, Locations
- **0.7**: States, Listing details
- **0.6**: Districts, Blog posts
- **0.5**: Cities

## Robots.txt

Located at:
```
https://yourdomain.com/robots.txt
```

Allows all search engines to crawl all pages.

## URL Redirects (Future)

When implementing URL changes:
- Use 301 redirects for permanent changes
- Use 302 redirects for temporary changes
- Update sitemap after changes
- Update internal links

Example:
```
/listing/1/apple-iphone → 301 → /listing/apple-iphone-15-pro
```

## Quick Tips

1. **Keep URLs short and descriptive**
2. **Use hyphens, not underscores**
3. **Use lowercase only**
4. **Avoid special characters**
5. **Include target keywords**
6. **Use hierarchical structure for locations**
7. **Avoid deep nesting (max 4-5 levels)**
8. **Make URLs readable by humans**

## API Endpoints (Future)

When building API:
```
/api/listings
/api/listings/{slug}
/api/categories
/api/locations/{state}
/api/blog/posts
/api/blog/posts/{slug}
```

---

**Last Updated**: October 2025
**Version**: 1.0.0


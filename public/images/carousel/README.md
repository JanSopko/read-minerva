# Carousel Images Directory

This directory contains images for the homepage carousel component.

## Required Images

You need to add the following 6 images to this directory:

1. `placeholder-1.jpg`
2. `placeholder-2.jpg`
3. `placeholder-3.jpg`
4. `placeholder-4.jpg`
5. `placeholder-5.jpg`
6. `placeholder-6.jpg`

## Image Requirements

### Format
- **Recommended:** JPG or WebP
- **Also supported:** PNG
- **Avoid:** GIF (for photos)

### Dimensions
- **Minimum resolution:** 640x480px (2x for retina displays)
- **Aspect ratio:** 4:3 (preferred) or 16:9
- **Desktop display size:** 320x240px
- **Mobile display size:** 240x180px

### File Size
- **Target:** <200KB per image
- **Maximum:** <500KB per image
- Use image compression tools if needed

### Optimization Tips
1. Use tools like TinyPNG, ImageOptim, or Squoosh
2. Export at 85% quality for JPG
3. Consider WebP format for better compression
4. Remove EXIF data for smaller file size

## How to Add Images

1. **Prepare your images** according to the requirements above
2. **Rename them** to match the expected filenames (placeholder-1.jpg through placeholder-6.jpg)
3. **Copy them** to this directory (`public/images/carousel/`)
4. **Update descriptions** in `src/data/carouselData.ts` with actual titles and descriptions
5. **Test** by running `npm run dev` and visiting http://localhost:3000

## Temporary Placeholder

Until you add actual images, you can use a placeholder image service:

- https://placehold.co/640x480/2563eb/ffffff?text=Image+1
- https://placehold.co/640x480/3b82f6/ffffff?text=Image+2
- https://via.placeholder.com/640x480
- https://picsum.photos/640/480

**Note:** External placeholder services require network access and won't work with Next.js Image optimization unless you configure `remotePatterns` in `next.config.ts`.

## Alternative: Use Your Own Images

For now, you can:
1. Take screenshots
2. Use stock photos (check licensing)
3. Use company/product photos
4. Use design mockups
5. Use brand assets

## After Adding Images

Remember to update `src/data/carouselData.ts` with:
- Descriptive `altText` for accessibility
- Actual `title` for each image
- Meaningful `description` text

Example:
```typescript
{
  id: "item-1",
  imageUrl: "/images/carousel/placeholder-1.jpg",
  altText: "Modern office workspace with laptop",
  title: "Productive Workspace",
  description: "Create your ideal work environment"
}
```


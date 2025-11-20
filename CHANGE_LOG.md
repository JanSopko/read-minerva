# Change Log

## [2025-11-09] - Carousel Section Component for Homepage

### Added
- **Carousel Section Component**
  - Created `src/components/CarouselSection.tsx` with auto-scroll functionality
  - Built `src/components/CarouselSection.module.css` with responsive styles
  - Auto-scrolling carousel with requestAnimationFrame animation
  - Pause-on-hover interaction for user control
  - Infinite scroll with seamless looping
  - Gradient fade at carousel edges for visual effect
  
- **Carousel Item Component**
  - Created `src/components/CarouselItem.tsx` for individual items
  - Built `src/components/CarouselItem.module.css` with hover effects
  - Text overlay with fade-in animation
  - Image zoom and item lift on hover
  - Mobile tap-to-reveal text functionality
  
- **Carousel Data System**
  - Created `src/data/carouselData.ts` with TypeScript interfaces
  - Configurable carousel settings (speed, dimensions, gap)
  - 6 placeholder carousel items
  - User can easily update content

- **Image Directory Structure**
  - Created `public/images/carousel/` directory
  - Added README.md with image requirements
  - Instructions for adding actual images

### Modified
- **Homepage (`src/app/page.tsx`)**
  - Added CarouselSection component
  - Positioned after main hero section
  
- **Homepage Styles (`src/app/page.module.css`)**
  - Updated layout to accommodate full-width carousel
  - Changed justify-content to flex-start
  - Added full-width section styles

### Features
- ✅ Auto-scroll at 30 pixels/second (configurable)
- ✅ Smooth 60fps animation with requestAnimationFrame
- ✅ Pause on hover (desktop) or tap (mobile)
- ✅ Text overlay appears on hover with fade-in
- ✅ Infinite scroll with no visible jump
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Theme integration (light/dark mode)
- ✅ Next.js Image optimization
- ✅ Gradient edge fade effect
- ✅ Keyboard accessible
- ✅ Zero console errors or warnings

### Technical Details
- Animation: requestAnimationFrame for 60fps performance
- Images: Next.js Image component with lazy loading
- Infinite scroll: Item duplication method
- Hover effects: CSS transforms (GPU accelerated)
- Mobile: Touch-friendly interactions
- Responsive breakpoints: 768px, 480px

### User Action Required
**Add actual images to:** `public/images/carousel/`
- Format: JPG, PNG, or WebP
- Minimum resolution: 640x480px (2x for retina)
- Aspect ratio: 4:3 preferred
- File size: <200KB each
- Filenames: placeholder-1.jpg through placeholder-6.jpg

**Update data file:** `src/data/carouselData.ts`
- Replace placeholder titles and descriptions
- Add descriptive alt text for accessibility
- Adjust configuration if needed

---

## [2025-11-09] - Language Switcher with i18n Support

### Added
- **Language Switcher Component**
  - Created `src/components/LanguageSwitcher.tsx` with dropdown functionality
  - Built `src/components/LanguageSwitcher.module.css` with responsive styles
  - Supports three languages: English (EN), Slovak (SK), Czech (CZ)
  - Positioned in navbar between nav links and CTA button
  
- **Internationalization System**
  - Created `src/contexts/LanguageContext.tsx` with Context API
  - Implemented `useLanguage` hook for accessing translations
  - Translation files: `src/locales/en.json`, `sk.json`, `cz.json`
  - localStorage persistence for language preference
  - Browser language detection on first visit

### Modified
- **All Page Components**
  - Updated `src/app/page.tsx` with `useLanguage` hook
  - Updated `src/app/pricing/page.tsx` with translations
  - Updated `src/app/about/page.tsx` with translations
  - Updated `src/app/get-started/page.tsx` with translations
  - All pages now use client components with `"use client"` directive
  
- **Navbar Component (`src/components/Navbar.tsx`)**
  - Added LanguageSwitcher component to desktop navigation
  - Added LanguageSwitcher to mobile menu
  - All navigation items now use translated text
  
- **Navbar Styles (`src/components/Navbar.module.css`)**
  - Added `.mobileLangSwitcher` styles
  - Adjusted desktop nav gap to accommodate language switcher
  
- **Root Layout (`src/app/layout.tsx`)**
  - Wrapped application with LanguageProvider
  - All child components now have access to translation context

### Features
- ✅ Three languages fully supported (EN, SK, CZ)
- ✅ Dropdown with language options
- ✅ Active language highlighted with checkmark
- ✅ Language persistence (localStorage)
- ✅ Browser language detection
- ✅ Responsive design (desktop/mobile)
- ✅ Smooth dropdown animation
- ✅ Click-outside to close dropdown
- ✅ Keyboard accessible (tab, enter, escape)
- ✅ ARIA labels for screen readers
- ✅ Works seamlessly with theme switching
- ✅ Zero console errors or warnings

### Technical Details
- Context API for state management (no external dependencies)
- TypeScript type-safe translations (inferred from en.json)
- Translation files ~5KB total (bundled)
- Browser language detection with fallback to English
- Maps Czech language codes (cs/cz) correctly
- Dropdown closes on selection or outside click
- Mobile menu includes language switcher

### Language Support
**English (EN):**
- Default language
- Fallback for unsupported browser languages

**Slovak (SK):**
- Full translations with proper Slovak characters
- Browser auto-detected for Slovak users

**Czech (CZ):**
- Full translations with proper Czech characters
- Browser auto-detected for Czech users
- Maps both 'cs' and 'cz' language codes

### Design Elements
**Desktop Layout:**
- Language switcher between nav links and CTA button
- Dropdown aligned to the right
- Shows language code (EN/SK/CZ) with dropdown arrow

**Mobile Layout:**
- Language switcher in mobile menu
- Positioned between nav links and CTA button
- Full-width trigger button
- Static dropdown (no absolute positioning)

---

## [2025-11-09] - Theme Flash Bug Fix

### Fixed
- **Theme Flash on Page Load (FOUC)**
  - Fixed Flash of Unstyled Content when loading with dark mode preference
  - Theme now applies instantly before first paint
  - No visible flash or transition on page load

### Added
- **ThemeScript Component (`src/components/ThemeScript.tsx`)**
  - Inline blocking script that runs in `<head>` before React hydrates
  - Checks localStorage for saved theme preference
  - Falls back to system preference (prefers-color-scheme)
  - Sets `data-theme` attribute before first paint
  - Adds/removes `.no-transitions` class to prevent flash

### Modified
- **Root Layout (`src/app/layout.tsx`)**
  - Added `<head>` section with ThemeScript component
  - Script executes before body content loads
  
- **Theme CSS (`src/styles/theme.css`)**
  - Added `.no-transitions` class to disable transitions on load
  - Prevents visible transition during initial theme application
  - Transitions re-enabled after DOMContentLoaded
  
- **useTheme Hook (`src/hooks/useTheme.ts`)**
  - Simplified to read theme from document (already set by script)
  - Removed localStorage read from useEffect (redundant)
  - Theme state now syncs with existing DOM attribute

### Technical Details
- **Script size:** ~200 bytes (inline)
- **Execution time:** <1ms (synchronous, blocking)
- **Placement:** In `<head>` for early execution
- **Format:** IIFE (Immediately Invoked Function Expression)
- **Error handling:** Try-catch block for graceful fallback
- **Browser support:** All modern browsers

### Benefits
- ✅ No visible flash on page load
- ✅ Theme applied before first paint
- ✅ Works with localStorage preference
- ✅ Works with system preference
- ✅ Smooth transitions still work when toggling
- ✅ Zero console errors
- ✅ No hydration warnings
- ✅ Industry standard solution

---

## [2025-11-09] - Navbar Component Implementation

### Added
- **Responsive Navbar Component**
  - Created `src/components/Navbar.tsx` with state management for mobile menu
  - Built `src/components/Navbar.module.css` with responsive styles
  - Added logo placeholder "Minerva" (left-aligned)
  - Implemented navigation links: Pricing, About us
  - Created emphasized "Get started" CTA button
  
- **Navigation Pages**
  - Created `src/app/pricing/page.tsx` - Pricing page placeholder
  - Created `src/app/about/page.tsx` - About page placeholder
  - Created `src/app/get-started/page.tsx` - Get started page placeholder

### Modified
- **Root Layout (`src/app/layout.tsx`)**
  - Integrated Navbar component at the top
  - Navbar appears above ThemeToggle
  
- **Theme Toggle (`src/components/ThemeToggle.module.css`)**
  - Repositioned from `top: 1rem` to `top: 5rem` to avoid navbar overlap
  - Updated placeholder positioning as well

### Features
- ✅ Sticky navbar (always visible at top)
- ✅ Responsive design with 768px breakpoint
- ✅ Desktop: Horizontal navigation layout
- ✅ Mobile: Collapsible hamburger menu (☰/✕)
- ✅ Smooth slide-down animation (0.3s)
- ✅ Theme-aware colors (light/dark mode)
- ✅ Hover effects: underline animation on links, lift effect on button
- ✅ Mobile menu closes on navigation
- ✅ Keyboard accessible with ARIA labels
- ✅ Zero linting errors

### Technical Details
- Client component with React hooks (`useState`)
- Next.js Link components for optimized navigation
- CSS custom properties for theme integration
- Media queries at 768px and 480px breakpoints
- Z-index: navbar at 100, theme toggle at 1000
- Hamburger icon toggles between ☰ and ✕
- Mobile links have left border accent on hover

### Design Elements
**Desktop Layout:**
- Logo (left) + Navigation items (right)
- 2rem gap between nav items
- CTA button with primary color background

**Mobile Layout:**
- Logo (left) + Hamburger icon (right)
- Vertical menu slides down when open
- Full-width navigation items
- Stacked layout with 3px left border accent

---

## [2025-11-09] - Theme System Implementation

### Added
- **Theme System with Light/Dark Mode Support**
  - Created `src/styles/theme.css` with CSS custom properties for both themes
  - Implemented `src/hooks/useTheme.ts` hook for theme state management
  - Built `src/components/ThemeToggle.tsx` component with theme toggle button
  - Added `src/components/ThemeToggle.module.css` for toggle button styling
  
### Modified
- **Global Styles (`src/app/globals.css`)**
  - Imported theme.css
  - Applied CSS custom properties for backgrounds and text colors
  - Added hover states for links with primary colors
  
- **Page Styles (`src/app/page.module.css`)**
  - Updated to use CSS custom properties throughout
  - Added card-style main container with shadows and borders
  - Implemented gradient text effect for h1 using blue theme colors
  - Enhanced code block styling with theme colors
  
- **Layout Component (`src/app/layout.tsx`)**
  - Integrated ThemeToggle component
  - Added `suppressHydrationWarning` to prevent theme flashing
  - Updated metadata with project name and description

### Features
- ✅ Automatic system preference detection
- ✅ Persistent theme preference (localStorage)
- ✅ Smooth transitions between themes
- ✅ WCAG AA compliant color contrasts
- ✅ Blue-centered color palette
- ✅ No hydration mismatches
- ✅ Keyboard accessible theme toggle

### Technical Details
- Theme state managed via React hooks
- CSS custom properties enable instant theme switching
- Theme preference stored in localStorage
- Respects `prefers-color-scheme` media query
- Fixed-position toggle button (top-right corner)
- Gradient text effect on headings using blue shades

### Color Palette
**Light Mode:**
- Primary: `#2563eb` (vibrant blue)
- Background: `#fafbfc` (off-white)
- Text: `#0f172a` (dark slate)

**Dark Mode:**
- Primary: `#3b82f6` (brighter blue for contrast)
- Background: `#0f172a` (deep blue-tinted dark)
- Text: `#f1f5f9` (light slate)

---

## [2025-11-09] - Project Initialization

### Added
- Next.js 16 project with TypeScript
- App Router structure with `src/` directory
- ESLint configuration
- Initial page and layout components
- Project documentation structure
- Task management system
- Project memory file

### Configuration
- TypeScript with strict mode
- Path aliases (`@/*` → `./src/*`)
- ESLint 9 with Next.js config
- CSS Modules for styling
- No Tailwind CSS (by design)

---

**Changelog Format:**
- `Added` for new features
- `Changed` for changes in existing functionality
- `Deprecated` for soon-to-be removed features
- `Removed` for now removed features
- `Fixed` for any bug fixes
- `Security` for vulnerability fixes


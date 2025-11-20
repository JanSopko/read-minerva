# Project Minerva - Memory

## Project Overview

Next.js 16 application with TypeScript, focusing on blue-themed design with light/dark mode support.

**Project Name:** Project Minerva  
**Framework:** Next.js 16 (App Router)  
**Language:** TypeScript  
**Styling:** CSS Modules + CSS Custom Properties (no Tailwind)  
**Package Manager:** npm  
**Node Version Required:** >=20.9.0 (currently running 18.20.3)

---

## Active Tasks

_No active tasks_

## Completed Tasks

### Task 005: Implement Carousel Section Component for Homepage

**Status:** ✅ Completed  
**Priority:** High  
**Created:** 2025-11-09  
**Completed:** 2025-11-09  
**Description:** Create an auto-scrolling carousel section component for the homepage featuring images with hover-to-reveal text overlays. Includes auto-play functionality, infinite scroll, pause on hover, and responsive design for all devices.  
**Result:** Successfully implemented with requestAnimationFrame-based auto-scroll, CarouselItem component with hover interactions, infinite scroll loop, gradient edge fade, and full theme integration. User needs to add actual images to public/images/carousel/ directory.

### Task 004: Implement Language Switcher with i18n Support

**Status:** ✅ Completed  
**Priority:** High  
**Created:** 2025-11-09  
**Completed:** 2025-11-09  
**Description:** Create a language switcher component in the navbar supporting English, Slovak, and Czech languages. Includes translation files, context API for state management, and integration across all pages.  
**Result:** Successfully implemented with context-based i18n system, language switcher component in navbar, localStorage persistence, browser language detection, and translations for all three languages. All acceptance criteria met.

### Task 003: Fix Theme Flash on Page Load (FOUC)

**Status:** ✅ Completed  
**Priority:** High  
**Created:** 2025-11-09  
**Completed:** 2025-11-09  
**Type:** Bug Fix  
**Description:** Fix the Flash of Unstyled Content (FOUC) that occurs when loading the page with dark theme preference.  
**Result:** Successfully fixed using inline blocking script in <head>. Theme now applies instantly before first paint with no visible flash. All acceptance criteria met.

### Task 002: Implement Responsive Navbar Component

**Status:** ✅ Completed  
**Priority:** High  
**Created:** 2025-11-09  
**Completed:** 2025-11-09  
**Description:** Create a responsive navigation bar with logo placeholder, navigation links, and a prominent CTA button. Includes collapsible mobile menu with hamburger icon.  
**Result:** Successfully implemented with sticky positioning, mobile hamburger menu, theme integration, and three placeholder pages. All acceptance criteria met.

### Task 001: Implement Blue-Centered Light/Dark Theme System

**Status:** ✅ Completed  
**Priority:** High  
**Created:** 2025-11-09  
**Completed:** 2025-11-09  
**Description:** Create a comprehensive theme system with light/dark mode support, centered around blue color palette.  
**Result:** Successfully implemented with CSS custom properties, React hooks, and theme toggle component. All acceptance criteria met.

---

## Design Conventions

### Color System

- **Primary Color:** Blue
  - Light mode: `#2563eb`
  - Dark mode: `#3b82f6` (slightly brighter for contrast)
- **Light Mode Philosophy:**
  - Backgrounds: White-ish (#fafbfc, not pure white)
  - Text: Dark (#0f172a)
  - Purpose: Reduce eye strain, maintain readability
- **Dark Mode Philosophy:**
  - Backgrounds: Dark (#0f172a, not pure black)
  - Text: Light (#f1f5f9)
  - Purpose: Comfortable night viewing, maintain brand identity

### Styling Approach

- **No Tailwind CSS** - Using CSS Modules and custom properties
- **CSS Variables** for theme management
- **Component-scoped styles** via CSS Modules
- **Global styles** for typography and base elements

### Accessibility Standards

- WCAG AA compliance minimum (4.5:1 contrast ratio)
- Keyboard navigation support
- Screen reader friendly
- Respects system preferences

---

## Technical Stack

### Core Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **React 19** - UI library
- **ESLint 9** - Code linting

### Project Structure

```
project_minerva/
├── src/
│   ├── app/              # Application routes (App Router)
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── *.module.css  # Page-specific styles
│   ├── components/       # Reusable React components
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── locales/         # Translation files (i18n)
│   └── styles/          # Global style configurations
├── tasks/               # Task definitions and specifications
├── descriptions/        # Module and feature descriptions
├── reviews/            # Project review and sync reports
├── _project_memory.md  # This file - project knowledge base
├── CHANGE_LOG.md       # Project change history
└── RUN_PROJECT_UPDATE_PROMPT.md  # Sync workflow instructions
```

### Path Aliases

- `@/*` maps to `./src/*`
- Usage: `import { useTheme } from '@/hooks/useTheme'`

---

## Development Setup

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
# Runs on http://localhost:3000
```

### Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

---

## Project History

### 2025-11-09 - Theme System Implementation (Task 001 ✅)

- Created comprehensive theme system with light/dark mode
- Implemented CSS custom properties for theming
- Built useTheme React hook for state management
- Created ThemeToggle component with persistent preferences
- Updated all styles to use theme variables
- Integrated theme system into layout
- All acceptance criteria met, zero linting errors

### 2025-11-09 - Project Initialization

- Created Next.js 16 project with TypeScript
- Configured App Router structure
- Set up ESLint with Next.js configuration
- Established `src/` directory convention
- Created initial project memory and task structure
- Defined theme system requirements (Task 001)

---

## Design Decisions

### Why No Tailwind?

- User preference for more control over styling
- Smaller bundle size
- More explicit CSS learning opportunity
- Better integration with CSS custom properties for theming

### Why CSS Custom Properties?

- Native browser support
- Excellent for theming (runtime changes)
- No build step required
- Easy to maintain and modify
- Performance benefits over CSS-in-JS

### Why App Router?

- Modern Next.js approach (recommended by Next.js team)
- Better performance with Server Components
- Improved data fetching patterns
- Future-proof architecture

---

## Known Issues

### Node Version Warning (Low Priority)

- **Current:** v18.20.3
- **Required:** >=20.9.0
- **Impact:** Warning during install, but project should function
- **Resolution:** Upgrade Node.js using nvm, fnm, or Homebrew

---

## Maintenance History

### 2025-11-09 (Evening)

- Completed Task 001 - Theme System Implementation
- Created CHANGE_LOG.md with comprehensive documentation
- Generated project review document (reviews/project_update_2025-11-09.md)
- Updated project memory with completion status
- Zero technical debt introduced
- Created Task 002 - Responsive Navbar Component specification
- Completed Task 002 - Responsive Navbar Component implementation
- Identified bug: Theme flash (FOUC) on page load with dark mode
- Created Task 003 - Fix Theme Flash bug specification
- Completed Task 003 - Theme Flash bug fixed with inline script
- Created Task 004 - Language Switcher with i18n specification
- Completed Task 004 - Language Switcher with i18n implementation
- Updated Task 004 - Repositioned language switcher outside navbar menu
- Created Task 005 - Carousel Section Component specification
- Completed Task 005 - Carousel Section Component implementation

### 2025-11-09 (Morning)

- Initial project setup and configuration
- Created task management structure
- Defined theme system architecture
- Documented design decisions and conventions

---

## Future Considerations

### Planned Features (Beyond Task 001)

- Additional color variants (success, warning, error)
- Multiple theme presets
- Theme customization panel
- Enhanced animations
- High contrast mode support

### Technical Debt

- Node.js version upgrade needed
- Consider adding testing framework (Jest, Vitest)
- Set up CI/CD pipeline
- Add pre-commit hooks

---

## Quick Reference

### Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Install dependencies
npm install
```

### Key Files to Review

- `/tasks/` - For current work items
- `/descriptions/` - For feature documentation
- `src/app/layout.tsx` - Root layout and global setup
- `src/app/globals.css` - Global styles
- `tsconfig.json` - TypeScript configuration

---

**Last Updated:** 2025-11-09  
**Project Status:** 🟢 Active Development

# Personal Portfolio Website - Replit Agent Guide

## Overview

This is a modern personal portfolio website for Dan Li, built with React, TypeScript, and Tailwind CSS. The site features a blog system with markdown support, project showcase, contact form, and is optimized for performance (targeting Lighthouse scores ≥95). The application follows a minimalist design approach prioritizing accessibility, performance, and clean user experience.

The site is deployed to GitHub Pages at https://itsdanli.github.io and includes sections for Home, Projects, Blog, About, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18+ with TypeScript for type safety and modern component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for client-side routing (lightweight alternative to React Router)

**UI Component System:**
- Shadcn/ui components based on Radix UI primitives for accessible, customizable components
- Tailwind CSS for styling with custom design tokens defined in CSS variables
- Component variant system using `class-variance-authority` for consistent component APIs
- Design system follows "New York" style from Shadcn with neutral base colors

**State Management:**
- TanStack Query (React Query) for server state management and data fetching
- React Context API for theme management (light/dark mode)
- Local component state with React hooks for UI interactions

**Design Principles:**
- Mobile-first responsive design with breakpoints at 768px (tablet) and 1024px (desktop)
- System font stack for optimal performance (no custom web fonts)
- Minimalist aesthetic with generous whitespace and typography-driven hierarchy
- Subtle scroll animations using IntersectionObserver that respect `prefers-reduced-motion`
- WCAG AA accessibility compliance with proper landmarks, focus states, and skip-to-content link

### Content Architecture

**Static Data Management:**
- Blog posts stored as TypeScript objects in `client/src/data/blog-posts.ts`
- Markdown content for blog posts stored in the same file as a record mapping slugs to content
- Projects data stored in `client/src/data/projects.ts` as typed arrays
- Schema validation using Zod schemas defined in `shared/schema.ts`

**Content Types:**
- BlogPostMeta: slug, title, description, date, tags, coverImage (optional), readTime
- Project: id, title, description, techStack array, githubUrl, demoUrl, featured flag

**Markdown Processing:**
- ReactMarkdown for rendering blog content with `remark-gfm` plugin for GitHub Flavored Markdown
- Syntax highlighting using `react-syntax-highlighter` with theme switching (oneDark for dark mode, oneLight for light mode)

### Backend Architecture

**Server Setup (Development):**
- Express.js server for development environment with Vite middleware
- Minimal API surface - currently uses in-memory storage interface
- Route registration system in `server/routes.ts` (currently empty, ready for future API endpoints)
- Request logging middleware for API routes

**Production Build:**
- Static site generation - Vite builds React app to `dist/public`
- Server bundle created with esbuild for Node.js deployment
- Designed for GitHub Pages hosting (static files only)

**Storage Interface:**
- Abstract `IStorage` interface in `server/storage.ts`
- `MemStorage` implementation for development (in-memory)
- Architecture supports future database integration (Drizzle ORM configured for PostgreSQL)

### Theme System

**Implementation:**
- ThemeContext provider managing light/dark mode state
- Persists theme preference to localStorage
- Detects system preference on initial load using `prefers-color-scheme` media query
- CSS custom properties (CSS variables) for color tokens with separate light/dark definitions
- Theme toggle button in header with appropriate icons (Moon/Sun)

**Color System:**
- HSL-based color tokens for easy manipulation
- Neutral base with single accent color approach
- Separate border colors for cards, popovers, and buttons
- Computed border colors for interactive elements using CSS calc

### Accessibility Features

**Implementation:**
- Semantic HTML with proper heading hierarchy
- ARIA labels on icon-only buttons
- Skip-to-content link (visually hidden until focused)
- Keyboard navigation support throughout
- Focus visible styles on interactive elements
- Color contrast meeting WCAG AA standards
- Reduced motion support - animations disabled when user prefers reduced motion

### Performance Optimizations

**Build Optimizations:**
- Vite's code splitting and tree shaking
- CSS purging through Tailwind's JIT compiler
- Image optimization configured in Vite
- Minimal bundle size with system fonts

**Runtime Optimizations:**
- React lazy loading preparation (not currently implemented but architecture supports it)
- TanStack Query caching with infinite stale time (data doesn't refetch unnecessarily)
- IntersectionObserver for efficient scroll animations
- Subtle animations only - no heavy animation libraries

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown-menu, select, toast, tooltip, etc.)
- **Shadcn/ui**: Pre-styled components built on Radix UI
- **Lucide React**: Icon library for UI icons

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional class name utilities

### Content & Markdown
- **react-markdown**: Markdown rendering component
- **remark-gfm**: GitHub Flavored Markdown support
- **react-syntax-highlighter**: Code syntax highlighting with Prism themes

### Forms & Validation
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **Zod**: Schema validation library (used in shared/schema.ts)

### Routing & State
- **Wouter**: Lightweight client-side routing
- **TanStack Query**: Server state management and data fetching

### Utilities
- **date-fns**: Date formatting and manipulation
- **nanoid**: Unique ID generation

### Database (Configured but Not Currently Active)
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- Drizzle configured to use PostgreSQL with migrations in `./migrations` directory
- Schema file at `shared/schema.ts` currently only contains Zod validation schemas
- Note: The application currently uses static data files, but the database infrastructure is ready for future dynamic content

### Contact Form
- **Formspree Integration**: Contact form submissions handled via Formspree API
- Environment variable `VITE_FORMSPREE_ID` required for production email delivery
- Graceful degradation with demo mode when Formspree ID not configured

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)
- **TypeScript**: Type checking with strict mode enabled
- **ESBuild**: Server bundle compilation for production
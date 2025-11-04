# Design Guidelines for itsdanli Personal Portfolio

## Design Approach

**Selected Approach:** Design System (Minimalist/Function-First)  
**Justification:** Personal portfolio prioritizing performance (Lighthouse ≥95), accessibility, and content readability. Clean, minimal aesthetic with utility-focused interactions.

**Core Principles:**
- Minimal, elegant aesthetic with maximum whitespace
- Performance-first (fast load times, small bundle)
- Subtle motion that respects accessibility
- Content hierarchy through typography and spacing
- One accent color with neutral foundation

---

## Typography

**Font Stack:**  
System font stack for optimal performance:
```
font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
```

**Type Scale:**
- **Hero Heading:** text-5xl md:text-6xl lg:text-7xl, font-bold, tracking-tight
- **Section Headings:** text-3xl md:text-4xl, font-bold
- **Card Titles:** text-xl md:text-2xl, font-semibold
- **Body Text:** text-base md:text-lg, leading-relaxed (max-w-prose for optimal reading)
- **Small Text:** text-sm (footer, metadata, tags)
- **Code Blocks:** font-mono, text-sm with syntax highlighting (Shiki)

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 8, 12, 16, 20, 24** (e.g., p-4, gap-8, my-20)

**Container System:**
- Global max-width: `max-w-6xl mx-auto px-4 md:px-8`
- Content sections: Generous vertical padding `py-16 md:py-24`
- Card grids: `gap-6 md:gap-8`
- Prose content: `max-w-prose` (optimal ~65-75 characters per line)

**Responsive Breakpoints:**
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)

---

## Component Library

### Header (Sticky Navigation)
- Sticky position with subtle backdrop blur when scrolling
- Logo/Name on left, navigation links on right
- Mobile: Hamburger menu icon, slide-in overlay menu
- Height: `h-16 md:h-20`
- Include: Home, Projects, Blog, About, Contact links
- Theme toggle button with sun/moon icon

### Hero Section (Homepage)
- Clean, spacious layout with large heading
- Short tagline/bio (1-2 sentences)
- Primary CTA buttons: "View Projects" and "Read Blog" with `gap-4`
- Minimal: No background image, rely on typography and whitespace
- Vertical padding: `py-24 md:py-32 lg:py-40`

### Project Cards
- Grid layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Card styling: Rounded corners (`rounded-lg`), subtle shadow, border
- Hover state: Gentle lift effect (`hover:-translate-y-1 transition-transform`)
- Card content: Title, brief description, tech stack tags (small pills), link icons (GitHub + demo)
- Tags: Small rounded pills with neutral background

### Blog Post Cards
- Similar grid to projects but `md:grid-cols-2 lg:grid-cols-3`
- Include: Cover image (optional), title, excerpt, date, read time, tags
- Card hover: Subtle lift
- Date format: "Jan 15, 2024" style

### Blog Post Page
- Single column, centered content
- Featured image at top (if provided)
- Title with large heading, metadata below (date, read time, tags)
- Prose content with comfortable line-height
- Code blocks with syntax highlighting
- Table of contents for longer posts (optional)

### Contact Form
- Clean, stacked layout
- Fields: Name, Email, Message (all required)
- Validation states with clear error messages
- Submit button with loading state
- Success/error feedback messages
- Formspree integration placeholder clearly documented
- Email fallback displayed below form

### Footer
- Three-column layout on desktop, stacked on mobile
- Left: Copyright notice
- Center: Social icons (GitHub, LinkedIn) with hover states
- Right: Theme toggle
- Minimal padding: `py-12`

### 404 Page
- Centered content with large "404" heading
- Friendly message
- Navigation links back to Home and Projects

---

## Design Details

### Cards & Surfaces
- Rounded corners: `rounded-lg` (8px)
- Subtle shadows: `shadow-sm` for cards
- Border: `border border-gray-200 dark:border-gray-800`

### Buttons
- Primary: Solid background with accent color, `px-6 py-3 rounded-lg font-medium`
- Secondary: Border with transparent background
- Hover: Slight scale or background color shift
- Focus: Clear focus ring for accessibility

### Links
- Animated underline on hover (subtle slide-in effect)
- Accent color for active/visited states
- Ensure sufficient contrast in both light/dark modes

### Tags/Pills
- Small, rounded badges: `px-3 py-1 text-xs rounded-full`
- Neutral background with subtle border
- Clickable tags link to filtered views

### Theme Toggle
- Smooth transition between light/dark modes
- Icon swap (sun ↔ moon)
- Persist preference in localStorage
- Respect system preference on first visit

---

## Animations

**Philosophy:** Subtle, purposeful, and respectful of accessibility

**Approved Animations:**
- Scroll-triggered fade-in/slide-up for sections (IntersectionObserver)
- Gentle card hover lift: `hover:-translate-y-1 transition-transform duration-200`
- Animated link underline: Width transition on hover
- Theme toggle smooth transition: `transition-colors duration-200`

**Forbidden:**
- Heavy parallax effects
- Continuous/looping animations
- Distracting motion

**Accessibility:**
- Wrap all animations in `@media (prefers-reduced-motion: no-preference)`
- Provide instant state changes when reduced motion is preferred

---

## Images

**Hero Section:** No hero image—rely on typography and clean whitespace for impact

**Blog Posts:** Optional cover images for individual posts (16:9 aspect ratio, rounded corners)

**About Page:** Professional headshot photo (square or circular, ~300-400px)

**Project Cards:** Optional project screenshots/thumbnails (maintain consistent aspect ratio)

**Image Optimization:** Use Astro's built-in image optimization for all images

---

## Accessibility

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Skip-to-content link visible on keyboard focus
- Focus indicators on all interactive elements: `focus:ring-2 focus:ring-accent`
- Color contrast ratios meeting WCAG AA standards
- ARIA labels for icon-only buttons
- Keyboard navigable mobile menu
- Alt text for all images

---

## Color Guidance (Applied Later)

**Structure:** One accent color + neutral grays + black/white foundation  
**Usage:** Accent for CTAs, links, active states; neutrals for text, borders, backgrounds  
**Dark Mode:** Ensure proper contrast ratios; invert brightness but maintain accent color visibility
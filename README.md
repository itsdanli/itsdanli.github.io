# Personal Portfolio Website

A modern, performant personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a blog system with markdown support, project showcase, contact form, and optimized for excellent Lighthouse scores.

**Live Site:** [https://itsdanli.github.io](https://itsdanli.github.io)

## Features

- ✨ Modern, minimal design with clean typography and whitespace
- 🌓 Light/dark mode with system preference detection
- 📱 Fully responsive and mobile-friendly
- ♿ Accessible (WCAG AA compliant)
- 🚀 Optimized for performance (Lighthouse ≥95)
- 📝 Blog system with markdown support and syntax highlighting
- 🎨 Project showcase with tech stack tags
- 📧 Contact form with Formspree integration
- 🔍 SEO optimized (sitemap, robots.txt, RSS feed, meta tags)
- ⚡ Subtle scroll animations (respects prefers-reduced-motion)
- 🎯 Skip-to-content link for accessibility

## Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/itsdanli/itsdanli.github.io.git
cd itsdanli.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5000`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Content Management

### Adding a Blog Post

1. Open `client/src/data/blog-posts.ts`
2. Add a new entry to the `blogPosts` array with frontmatter:

```typescript
{
  slug: "my-new-post",
  title: "My New Post",
  description: "A brief description of the post",
  date: "2025-01-15",
  tags: ["React", "TypeScript"],
  readTime: 5,
}
```

3. Add the post content to the `blogPostContent` object:

```typescript
"my-new-post": `
# My New Post

Your markdown content here...

## Code Examples

\`\`\`typescript
const hello = "world";
\`\`\`
`,
```

4. Update `client/public/sitemap.xml` to include your new post URL
5. Update `client/public/rss.xml` with the new post entry

### Adding a Project

1. Open `client/src/data/projects.ts`
2. Add a new project to the `projects` array:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  description: "Brief description of the project",
  techStack: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/yourusername/repo",
  demoUrl: "https://demo-url.com", // optional
  featured: true,
}
```

### Updating Personal Information

#### Social Links

Update social links in two places:

1. **Footer** (`client/src/components/Footer.tsx`):
   - GitHub: Line with `href="https://github.com/itsdanli"`
   - LinkedIn: Line with `href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"`

2. **Contact Email** (`client/src/pages/Contact.tsx`):
   - Update `href="mailto:contact@example.com"` with your email
   - Update the displayed email address

#### About Page

Edit `client/src/pages/About.tsx` to update:
- Your bio and personal information
- Professional timeline
- Skills and technologies

#### Home Page

Edit `client/src/pages/Home.tsx` to update:
- Hero section title and description
- About section content

### Configuring the Contact Form

This site uses [Formspree](https://formspree.io) for contact form submissions.

**Your form is already configured!** Form ID: `meopbbye`

#### Local Development

The contact form is already set up with the Formspree endpoint `https://formspree.io/f/meopbbye`. To use it locally:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. The `.env` file already contains your form ID:
   ```bash
   VITE_FORMSPREE_ID=meopbbye
   ```

3. The form will now send real emails when you test locally

**Note:** The form works in demo mode if `VITE_FORMSPREE_ID` is not set.

#### Production Deployment (GitHub Actions)

For GitHub Pages deployment with GitHub Actions:

1. Go to your repository Settings → Secrets and variables → Actions
2. Add a new repository secret:
   - Name: `FORMSPREE_ID`
   - Value: `meopbbye` (your configured form ID)
3. The `.github/workflows/deploy.yml` already includes the environment variable injection:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_FORMSPREE_ID: ${{ secrets.FORMSPREE_ID }}
```

The complete build step should look like:

```yaml
- name: Build
  run: npm run build
  env:
    VITE_FORMSPREE_ID: ${{ secrets.FORMSPREE_ID }}
```

## Deployment to GitHub Pages

### Prerequisites

- Repository name must be `yourusername.github.io` (e.g., `itsdanli.github.io`)
- GitHub Pages must be enabled in repository settings

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist` folder
3. Deploy the contents of `dist` to the `gh-pages` branch or configure GitHub Pages to build from a branch

### Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_FORMSPREE_ID: ${{ secrets.FORMSPREE_ID }}
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger deployment

### Important Configuration

Make sure your site URL is correct in:

1. **Public files:**
   - `client/public/sitemap.xml` - Update all URLs to your GitHub Pages URL
   - `client/public/rss.xml` - Update all URLs to your GitHub Pages URL

2. **Meta tags:**
   - `client/index.html` - Update Open Graph URL

3. **Vite base URL** (if deploying to a subdirectory):
   - Add `base: '/repository-name/'` to `vite.config.ts` if not using a custom domain

## Project Structure

```
├── client/
│   ├── public/              # Static assets
│   │   ├── favicon.png
│   │   ├── sitemap.xml
│   │   ├── robots.txt
│   │   └── rss.xml
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── BlogPostCard.tsx
│   │   ├── contexts/        # React contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── data/            # Content data
│   │   │   ├── projects.ts
│   │   │   └── blog-posts.ts
│   │   ├── hooks/           # Custom hooks
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── not-found.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── index.css        # Global styles
│   │   └── main.tsx         # Entry point
│   └── index.html
├── server/                  # Express server (dev only)
├── shared/                  # Shared TypeScript types
├── design_guidelines.md     # Design system documentation
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with shadcn/ui components
- **Routing:** Wouter (lightweight routing)
- **Markdown:** react-markdown with syntax highlighting
- **Icons:** Lucide React
- **Date Formatting:** date-fns
- **Form Handling:** Formspree

### Design System

The site uses a minimal design system with:
- System font stack for optimal performance
- One primary accent color (customizable in `client/src/index.css`)
- Consistent spacing scale
- Subtle animations that respect prefers-reduced-motion
- Dark mode support

See `design_guidelines.md` for complete design documentation.

## SEO Optimization

The site includes:
- ✅ Semantic HTML with proper landmarks
- ✅ Meta tags (title, description, Open Graph)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt
- ✅ RSS feed for blog
- ✅ Accessible markup (ARIA labels, focus styles)
- ✅ Fast loading times
- ✅ Mobile responsive

## Performance Targets

The site is optimized to achieve:
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

Tips for maintaining performance:
- Optimize images before adding them
- Keep bundle size small
- Use the built-in lazy loading for images
- Minimize third-party scripts

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Android)
- Graceful degradation for older browsers

## License

MIT License - feel free to use this as a template for your own portfolio!

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the documentation in this README

## Acknowledgments

Built with:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Formspree](https://formspree.io)

---

**Note:** Remember to update all placeholder content (social links, email, bio, projects, blog posts) with your actual information before deploying!

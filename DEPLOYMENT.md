# Deployment Guide for GitHub Pages

This is a quick reference guide for deploying your portfolio to GitHub Pages.

## Prerequisites

✅ All URLs are already configured for `https://itsdanli.github.io`  
✅ Contact form is set up with Formspree ID: `meopbbye`  
✅ GitHub Actions workflow is ready in `.github/workflows/deploy.yml`

## Deployment Steps

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Important:** Name it exactly `itsdanli.github.io`
3. Make it public
4. Don't initialize with README (you already have one)

### 2. Configure Formspree Secret

1. Go to your repository Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add:
   - **Name:** `FORMSPREE_ID`
   - **Value:** `meopbbye`
4. Click "Add secret"

### 3. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Under "Source", select **GitHub Actions**
3. Save

### 4. Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add your repository as remote
git remote add origin https://github.com/itsdanli/itsdanli.github.io.git

# Add all files
git add .

# Commit
git commit -m "Initial commit - Personal portfolio website"

# Push to main branch
git push -u origin main
```

### 5. Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at `https://itsdanli.github.io`

## Testing Your Deployment

After deployment:

1. Visit `https://itsdanli.github.io`
2. Test the contact form by submitting a test message
3. Check that you receive the email from Formspree
4. Test theme toggle (light/dark mode)
5. Navigate through all pages
6. Test mobile responsiveness

## Updating Your Site

After the initial deployment, updating is simple:

```bash
# Make your changes
# Add and commit
git add .
git commit -m "Update: description of changes"

# Push to trigger automatic deployment
git push
```

The site will automatically rebuild and deploy within 2-3 minutes.

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure `FORMSPREE_ID` secret is set correctly
- Verify all dependencies in package.json

### Contact Form Not Working
- Verify Formspree secret is set: `FORMSPREE_ID=meopbbye`
- Check Formspree dashboard for submissions
- Test in demo mode locally first

### 404 Errors
- Ensure repository name is exactly `itsdanli.github.io`
- Verify GitHub Pages source is set to "GitHub Actions"
- Check that the workflow completed successfully

## Custom Domain (Optional)

To use a custom domain instead of `itsdanli.github.io`:

1. Buy a domain from a registrar
2. Add your domain in repository Settings → Pages → Custom domain
3. Add DNS records at your registrar:
   - Type: `A` 
   - Name: `@`
   - Values: 
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. Wait for DNS propagation (up to 48 hours)
5. Enable "Enforce HTTPS" in Pages settings

## Next Steps

After deployment:

1. ✏️ **Update Personal Info:**
   - Email addresses in Contact page
   - LinkedIn URL in Footer
   - Bio and timeline in About page
   - Projects in `client/src/data/projects.ts`
   - Blog posts in `client/src/data/blog-posts.ts`

2. 📊 **Monitor:**
   - Check Formspree dashboard for contact form submissions
   - Monitor GitHub Actions for deployment status

3. 🎨 **Customize:**
   - Update colors in `client/src/index.css`
   - Add your projects and blog posts
   - Customize content to match your experience

Enjoy your new portfolio website! 🚀

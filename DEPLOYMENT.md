# Dying Light: The Beast Wiki - Deployment Guide

This guide will help you deploy the Dying Light: The Beast Wiki to Cloudflare Pages using GitHub Actions.

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
3. **Domain**: Your domain `dyinglightthebeast.online` (optional, can use Cloudflare subdomain)

## Step 1: Fork and Clone Repository

1. Fork this repository to your GitHub account
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dyinglightthebeast-wiki.git
   cd dyinglightthebeast-wiki
   ```

## Step 2: Configure Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages section

2. **Create New Project**
   - Click "Create a project"
   - Connect your GitHub account
   - Select your forked repository
   - Choose "dyinglightthebeast-wiki"

3. **Configure Build Settings**
   - **Framework preset**: Hugo
   - **Build command**: `hugo --minify`
   - **Build output directory**: `public`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables**
   - Add any required environment variables
   - For now, you can leave this empty

## Step 3: Configure GitHub Secrets

1. **Get Cloudflare API Token**
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Click "Create Token"
   - Use "Custom token" template
   - Permissions: `Cloudflare Pages:Edit`, `Zone:Read`
   - Account Resources: Include your account
   - Zone Resources: Include all zones (or specific zone)

2. **Get Account ID**
   - In Cloudflare Dashboard, right sidebar shows "Account ID"

3. **Add GitHub Secrets**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your account ID

## Step 4: Custom Domain Setup (Optional)

1. **Add Custom Domain**
   - In Cloudflare Pages project settings
   - Go to "Custom domains" tab
   - Add your domain: `dyinglightthebeast.online`

2. **Configure DNS**
   - Add CNAME record: `dyinglightthebeast.online` → `your-project.pages.dev`
   - Or use Cloudflare's automatic DNS setup

3. **SSL Certificate**
   - Cloudflare automatically provisions SSL certificates
   - Wait for certificate to be issued (usually 5-10 minutes)

## Step 5: Deploy

1. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Monitor Deployment**
   - Go to Cloudflare Pages dashboard
   - Watch the deployment progress
   - Check for any build errors

3. **Verify Deployment**
   - Visit your site URL
   - Test all functionality
   - Check mobile responsiveness

## Step 6: Configure Site Settings

1. **Update hugo.toml**
   ```toml
   baseURL = 'https://dyinglightthebeast.online'
   ```

2. **Add Analytics** (Optional)
   ```toml
   [params]
     googleAnalytics = "GA_TRACKING_ID"
   ```

3. **Configure Social Media**
   ```toml
   [params]
     twitter = "@YourTwitterHandle"
     facebook = "YourFacebookPage"
   ```

## Step 7: Content Management

### Adding New Content

1. **Create Content Files**
   ```bash
   hugo new quests/new-quest.md
   hugo new items/new-item.md
   ```

2. **Edit Content**
   - Use any Markdown editor
   - Follow the front matter structure
   - Add images to `static/images/`

3. **Preview Locally**
   ```bash
   hugo server -D
   ```

4. **Deploy Changes**
   ```bash
   git add .
   git commit -m "Add new content"
   git push origin main
   ```

### Content Structure

Each content file should include:

```yaml
---
title: "Page Title"
description: "SEO description"
date: 2024-01-01
type: "quest" # or "item", "character", "skill", "location"
categories: ["main-story"]
tags: ["tutorial", "beginner"]
featured_image: "/images/quests/image.jpg"
---
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Hugo version compatibility
   - Verify all required files are present
   - Check for syntax errors in Markdown files

2. **Search Not Working**
   - Ensure Lunr.js is loading correctly
   - Check browser console for errors
   - Verify search index is being generated

3. **Images Not Loading**
   - Check image paths in content files
   - Ensure images are in `static/images/` directory
   - Verify file permissions

4. **Mobile Issues**
   - Test responsive design
   - Check viewport meta tag
   - Verify CSS media queries

### Getting Help

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share tips
- **Documentation**: Check Hugo and Cloudflare docs

## Maintenance

### Regular Tasks

1. **Update Hugo Version**
   - Check for Hugo updates
   - Update GitHub Actions workflow
   - Test locally before deploying

2. **Content Updates**
   - Keep game information current
   - Add new quests and items
   - Update character information

3. **Performance Monitoring**
   - Check Cloudflare Analytics
   - Monitor page load times
   - Optimize images and assets

### Backup Strategy

1. **Git Repository**
   - Regular commits
   - Tag releases
   - Keep multiple branches

2. **Content Backup**
   - Export content regularly
   - Keep local copies
   - Use version control

## Security Considerations

1. **API Tokens**
   - Rotate tokens regularly
   - Use minimal permissions
   - Never commit tokens to repository

2. **Content Security**
   - Validate all user input
   - Sanitize Markdown content
   - Use HTTPS only

3. **Access Control**
   - Limit repository access
   - Use branch protection
   - Require reviews for changes

## Performance Optimization

1. **Image Optimization**
   - Use WebP format
   - Compress images
   - Implement lazy loading

2. **Caching**
   - Configure Cloudflare caching
   - Set appropriate cache headers
   - Use CDN for static assets

3. **Code Optimization**
   - Minify CSS and JS
   - Remove unused code
   - Optimize Hugo build

---

**Need Help?** Check the [main README](README.md) or open an issue on GitHub.

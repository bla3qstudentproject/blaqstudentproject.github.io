# GitHub Pages Deployment Guide

This guide will help you deploy the BLA³Q Student Project website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `bla3q-student-project`)
4. Make sure the repository is **public** (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

## Step 2: Upload Your Files

### Option A: Using Git Command Line

1. Open terminal/command prompt in your project directory
2. Initialize Git repository:
   ```bash
   git init
   ```
3. Add all files:
   ```bash
   git add .
   ```
4. Commit the files:
   ```bash
   git commit -m "Initial commit: BLA³Q Student Project website"
   ```
5. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
6. Push to GitHub:
   ```bash
   git push -u origin main
   ```

### Option B: Using GitHub Web Interface

1. Go to your newly created repository
2. Click "uploading an existing file"
3. Drag and drop all your project files
4. Add a commit message: "Initial commit: BLA³Q Student Project website"
5. Click "Commit changes"

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. GitHub will provide you with a URL like: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

## Step 4: Configure Custom Domain (Optional)

If you have a custom domain (like `bla3q.org`):

1. In your repository, go to Settings > Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS"
4. Update the `CNAME` file in your repository with your domain
5. Configure your domain's DNS settings to point to GitHub Pages

## Step 5: Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically deploy your site when you push changes to the main branch.

## Updating Your Website

To update your website:

1. Make changes to your files locally
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and deploy your site

## Troubleshooting

### Common Issues:

1. **Site not loading**: Wait a few minutes for GitHub Pages to build
2. **404 Error**: Make sure your main file is named `index.html`
3. **Styling issues**: Check that all CSS and JS files are properly linked
4. **Custom domain not working**: Verify DNS settings and CNAME file

### Checking Build Status:

1. Go to your repository on GitHub
2. Click on "Actions" tab
3. Check the status of your latest deployment

## File Structure

Your deployed website should have this structure:
```
/
├── index.html          # Main page
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── CNAME               # Custom domain (if applicable)
├── .gitignore          # Git ignore rules
├── package.json        # Project metadata
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

## Support

If you encounter any issues:

1. Check the GitHub Pages documentation
2. Verify your repository settings
3. Check the Actions tab for build errors
4. Ensure all file paths are correct

Your BLA³Q Student Project website should now be live on GitHub Pages!

# Deployment Guide - Social Work Toolkit

## GitHub Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Fill in the details:
   - **Repository name**: `social-work-toolkit` (or your preferred name)
   - **Description**: `Evidence-informed tools and frameworks for Australian social work practice`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **Create repository**

### Step 2: Push to GitHub

Open your terminal/command prompt and navigate to the project folder, then run these commands:

```bash
# Navigate to your project folder
cd c:\Users\Merrell\Documents\social-work-toolkit

# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Australian Social Work Practice Toolkit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/social-work-toolkit.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages (Optional - for free hosting)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/social-work-toolkit/`

## Alternative Hosting Options

### Netlify (Recommended for easy deployment)

1. Go to [Netlify](https://www.netlify.com)
2. Sign up/login with GitHub
3. Click **Add new site** → **Import an existing project**
4. Select your GitHub repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
6. Click **Deploy**
7. Your site will be live with a custom URL

### Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign up/login with GitHub
3. Click **Add New** → **Project**
4. Import your GitHub repository
5. Click **Deploy**

### Hostinger or Other Web Hosting

1. Upload all files via FTP/File Manager
2. Ensure `index.html` is in the root directory
3. Access via your domain

## Project Structure

```
social-work-toolkit/
├── index.html          # Main application
├── styles.css          # Styling (light mode)
├── app.js             # Application logic
├── data.js            # Tools database
├── README.md          # Documentation
├── .gitignore         # Git ignore rules
└── DEPLOYMENT.md      # This file
```

## Important Notes

- This is a static site (HTML/CSS/JS only)
- No server-side code or database required
- Works on any static hosting platform
- No build process needed
- All data is client-side

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

If using GitHub Pages, Netlify, or Vercel, your site will automatically update after pushing to GitHub.

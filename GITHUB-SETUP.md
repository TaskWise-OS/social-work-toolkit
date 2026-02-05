# Quick Start: Push to GitHub

## ⚠️ Git Not Installed

Git is not currently installed on your system. Here are your options:

---

## Option 1: Install Git (Recommended)

### Download and Install Git:
1. Go to: https://git-scm.com/download/win
2. Download the installer
3. Run the installer (use default settings)
4. Restart your terminal/command prompt

### After Installing Git:

Open Command Prompt or PowerShell and run:

```bash
# Navigate to your project
cd c:\Users\Merrell\Documents\social-work-toolkit

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Australian Social Work Practice Toolkit"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/social-work-toolkit.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Option 2: Use GitHub Desktop (Easiest - No Command Line)

### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com/
2. Install and sign in with your GitHub account

### Step 2: Add Your Project
1. Click **File** → **Add Local Repository**
2. Browse to: `c:\Users\Merrell\Documents\social-work-toolkit`
3. Click **Add Repository**
4. If prompted to create a repository, click **Create**

### Step 3: Publish to GitHub
1. Click **Publish repository** button
2. Set repository name: `social-work-toolkit`
3. Add description: `Evidence-informed tools for Australian social work practice`
4. Choose Public or Private
5. Click **Publish repository**

✅ Done! Your project is now on GitHub.

---

## Option 3: Manual Upload via GitHub Web Interface

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `social-work-toolkit`
3. Description: `Evidence-informed tools for Australian social work practice`
4. Choose Public or Private
5. **DO NOT** check "Add a README file"
6. Click **Create repository**

### Step 2: Upload Files
1. On the repository page, click **uploading an existing file**
2. Drag and drop ALL files from `c:\Users\Merrell\Documents\social-work-toolkit`
3. Add commit message: `Initial commit`
4. Click **Commit changes**

✅ Done! Your project is now on GitHub.

---

## 🚀 After Uploading to GitHub

### Enable GitHub Pages (Free Hosting)
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/social-work-toolkit/`

---

## 📁 Files to Upload

Make sure these files are included:
- ✅ index.html
- ✅ styles.css
- ✅ app.js
- ✅ data.js
- ✅ README.md
- ✅ .gitignore
- ✅ DEPLOYMENT.md

---

## Need Help?

Choose the option that works best for you:
- **Option 1**: Best for developers, gives you full Git functionality
- **Option 2**: Easiest for beginners, no command line needed
- **Option 3**: Quick and simple, but less flexible for future updates

I recommend **Option 2 (GitHub Desktop)** for the easiest experience!

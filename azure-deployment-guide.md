# Azure Deployment Guide for Rafaela's Portfolio

## Option 1: Azure Static Web Apps (Recommended)

### Prerequisites
1. Azure account (free tier available)
2. GitHub account
3. Git installed on your machine

### Step 1: Prepare the Repository
1. Create a new GitHub repository for the portfolio
2. Upload all portfolio files to the repository
3. Ensure the repository structure is clean

### Step 2: Deploy to Azure Static Web Apps
1. Log in to Azure Portal (https://portal.azure.com)
2. Click "Create a resource"
3. Search for "Static Web Apps" and select it
4. Click "Create"
5. Fill in the details:
   - **Subscription**: Your Azure subscription
   - **Resource Group**: Create new or use existing
   - **Name**: rafaela-portfolio (or preferred name)
   - **Plan Type**: Free (for personal projects)
   - **Region**: Choose closest to your location
   - **Source**: GitHub
   - **GitHub Account**: Authorize and select your account
   - **Repository**: Select the portfolio repository
   - **Branch**: main (or master)
   - **Build Preset**: Custom
   - **App Location**: / (root)
   - **Output Location**: / (root since it's a static site)

6. Click "Review + Create" then "Create"

### Step 3: Configure Domain (Optional)
- Azure will provide a default URL like: https://nice-field-12345.azurestaticapps.net
- You can add a custom domain later if needed

## Option 2: Azure Blob Storage + CDN

### Step 1: Create Storage Account
1. In Azure Portal, create a new Storage Account
2. Enable "Static website" in the settings
3. Set index.html as the index document

### Step 2: Upload Files
1. Use Azure Storage Explorer or Azure CLI
2. Upload all portfolio files to the $web container

### Step 3: Configure CDN (Optional)
1. Create an Azure CDN profile
2. Add a CDN endpoint pointing to your storage account

## Option 3: Azure App Service

### For simple deployment:
1. Create a new App Service
2. Choose "Static Web App" or "HTML" as the runtime
3. Deploy using Git, GitHub Actions, or FTP

## Recommended Approach: Azure Static Web Apps

**Benefits:**
- Free tier available
- Automatic HTTPS
- Custom domains supported
- Global CDN included
- Automatic deployments from GitHub
- Serverless functions support (if needed later)

**Cost:** Free for personal projects (100GB bandwidth/month)

## Post-Deployment Steps

1. **Update Image Paths**: Change local image paths to relative paths
2. **Test All Links**: Ensure all navigation and external links work
3. **SEO Optimization**: Add meta tags and structured data
4. **Performance**: Optimize images and enable compression
5. **Analytics**: Add Google Analytics if desired

## File Structure for Deployment
```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/
│       └── profile.jpg  (copy from OneDrive location)
├── pdf-extractor.html
├── image-uploader.html
└── README.md
```

## Important Notes

1. **Image Path Fix**: The current image path `C:\Users\spereira\OneDrive\CV\rafa.jpg` needs to be changed to a relative path
2. **HTTPS**: Azure automatically provides HTTPS
3. **Performance**: Static Web Apps include global CDN
4. **Updates**: Any push to GitHub will automatically update the live site

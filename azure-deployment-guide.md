# Azure Static Web Apps Deployment Guide

## Rafaella Rossi Pereira - Portfolio Website

This comprehensive guide provides step-by-step instructions for deploying your portfolio to Azure Static Web Apps.

## Prerequisites

1. **Azure Account**: Free tier available at https://azure.microsoft.com/free/
2. **GitHub Account**: Sign up at https://github.com if you don't have one
3. **Git**: Install from https://git-scm.com/
4. **Code Editor**: VS Code recommended
5. **Azure CLI** (optional): Install from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

## Step 1: Prepare Your GitHub Repository

### Create Repository
1. Go to https://github.com and click "New repository"
2. Name it `rafaella-portfolio` or similar
3. Make it **Public** (required for free Static Web Apps)
4. Initialize with README
5. Click "Create repository"

### Upload Your Code
Open PowerShell in your portfolio directory and run:

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/rafaella-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Azure Static Web Apps

### Via Azure Portal (Recommended)
1. **Login**: Go to https://portal.azure.com and sign in
2. **Create Resource**: Click "Create a resource" (+ icon)
3. **Search**: Type "Static Web Apps" and select it
4. **Create**: Click "Create"

### Configuration Details
Fill in the deployment form:

- **Subscription**: Select your Azure subscription
- **Resource Group**: 
  - Click "Create new"
  - Name: `rg-rafaella-portfolio`
- **Name**: `rafaella-portfolio` (must be globally unique)
- **Plan Type**: **Free** (perfect for portfolios)
- **Region**: Choose closest to your location (e.g., East US, West Europe)
- **Source**: **GitHub**
- **GitHub Account**: Click "Sign in with GitHub" and authorize
- **Organization**: Your GitHub username
- **Repository**: Select `rafaella-portfolio`
- **Branch**: `main`
- **Build Presets**: **Custom**
- **App Location**: `/` (root directory)
- **Api Location**: (leave empty)
- **Output Location**: (leave empty)

### Deploy
1. Click "Review + create"
2. Review your settings
3. Click "Create"
4. **Wait 3-5 minutes** for deployment to complete

## Step 3: Verify Your Deployment

### Check Status
1. Go to your resource group `rg-rafaella-portfolio`
2. Click on your Static Web App
3. Look for the **URL** in the overview (e.g., `https://kind-rock-12345.azurestaticapps.net`)
4. Click the URL to view your live portfolio

### GitHub Actions
Azure automatically created a GitHub Actions workflow:
1. Go to your GitHub repository
2. Click the "Actions" tab
3. You should see a successful deployment workflow

## Step 4: Test Your Portfolio

### Essential Tests
1. **Navigation**: Test all menu items work
2. **Responsive Design**: Check on mobile, tablet, desktop
3. **Contact Form**: Verify form submission (may need backend later)
4. **Images**: Ensure all images load correctly
5. **Performance**: Test loading speed

### Common Issues & Solutions

#### Images Not Loading
- Ensure all images use relative paths (e.g., `assets/images/profile.jpg`)
- Check file names match exactly (case-sensitive)

#### CSS/JS Not Loading
- Verify file paths are relative to `index.html`
- Check for typos in file names

#### 404 Errors
- Ensure all linked files exist in the repository
- Check that file names match exactly

## Step 5: Custom Domain Setup (Optional)

### Prerequisites
- Own a domain name
- Access to domain DNS settings

### Configuration
1. In Azure Portal, go to your Static Web App
2. Click "Custom domains" in the menu
3. Click "Add"
4. Enter your domain (e.g., `www.rafaellarossipereira.com`)
5. Follow DNS verification steps
6. Azure provides free SSL certificate

## Alternative Deployment Methods

### Method 2: Azure CLI
```powershell
# Install Azure CLI first
# Login to Azure
az login

# Create resource group
az group create --name rg-rafaella-portfolio --location eastus

# Create static web app with GitHub integration
az staticwebapp create \
  --name rafaella-portfolio \
  --resource-group rg-rafaella-portfolio \
  --source https://github.com/YOUR_USERNAME/rafaella-portfolio \
  --location eastus \
  --branch main \
  --app-location "/" \
  --login-with-github
```

### Method 3: VS Code Extension
1. Install "Azure Static Web Apps" extension in VS Code
2. Open your portfolio folder
3. Press `Ctrl+Shift+P` and type "Static Web Apps: Create"
4. Follow the prompts

## Post-Deployment Optimization

### Performance Enhancements
- **Image Optimization**: Compress images for web
- **Minification**: CSS and JS are automatically minified
- **CDN**: Azure Static Web Apps includes global CDN
- **Caching**: Automatic browser caching enabled

### SEO Improvements
Add to your `index.html` `<head>`:
```html
<!-- SEO Meta Tags -->
<meta name="description" content="Rafaella Rossi Pereira - Data Scientist & Researcher Portfolio">
<meta name="keywords" content="Data Science, Machine Learning, Research, Portfolio">
<meta name="author" content="Rafaella Rossi Pereira">

<!-- Open Graph Tags -->
<meta property="og:title" content="Rafaella Rossi Pereira - Portfolio">
<meta property="og:description" content="Data Scientist & Researcher Portfolio">
<meta property="og:url" content="https://your-domain.com">
<meta property="og:type" content="website">
```

### Analytics Setup
1. Get Google Analytics tracking ID
2. Add tracking code to your `index.html`
3. Monitor site traffic and user behavior

## Maintenance & Updates

### Automatic Deployments
- Any push to your GitHub `main` branch automatically updates your live site
- GitHub Actions handles the deployment process
- No manual intervention needed

### Making Updates
1. Edit files locally or on GitHub
2. Commit and push changes
3. Wait 2-3 minutes for automatic deployment
4. Refresh your live site to see changes

### Monitoring
- **Azure Portal**: View deployment history and logs
- **GitHub Actions**: Check deployment status
- **Application Insights**: Monitor performance (optional)

## Cost Management

### Free Tier Includes
- **Bandwidth**: 100 GB per month
- **Storage**: 0.5 GB
- **Custom Domains**: Unlimited with free SSL
- **Build Minutes**: 1000 minutes per month

### Upgrading (If Needed)
- Standard plan: $9/month for production applications
- Additional bandwidth and storage
- SLA guarantees

## Security Best Practices

### Automatic Security Features
- **HTTPS**: Enforced by default
- **DDoS Protection**: Built-in
- **Global WAF**: Web Application Firewall included

### Additional Security (Optional)
```html
<!-- Content Security Policy -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               style-src 'self' 'unsafe-inline' fonts.googleapis.com; 
               font-src fonts.gstatic.com; 
               img-src 'self' data:;">
```

## Troubleshooting Guide

### Build Failures
1. Check GitHub Actions logs
2. Verify all files are in the repository
3. Ensure no syntax errors in HTML/CSS/JS

### Deployment Issues
1. Check Azure deployment logs
2. Verify GitHub integration is active
3. Ensure repository is public (for free tier)

### Performance Issues
1. Optimize large images
2. Minimize HTTP requests
3. Use browser developer tools to identify bottlenecks

## Support Resources

### Documentation
- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Community Support
- [Azure Community Forums](https://docs.microsoft.com/en-us/answers/topics/azure-static-web-apps.html)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/azure-static-web-apps)

### Professional Support
- Azure Support Plans available
- Microsoft Learn training modules

---

## Quick Reference

**Your Live Portfolio URL**: `https://[random-name].azurestaticapps.net`

**GitHub Repository**: `https://github.com/YOUR_USERNAME/rafaella-portfolio`

**Deployment Time**: 3-5 minutes after each update

**Cost**: Free for personal portfolios

**Next Steps After Deployment**:
1. ✅ Test thoroughly on different devices
2. ✅ Share your portfolio URL
3. ✅ Add to LinkedIn and resume
4. ✅ Submit to search engines
5. ✅ Monitor analytics and feedback

---

*Ready to launch your professional portfolio? Follow these steps and you'll have a live, professional website in under 15 minutes!*

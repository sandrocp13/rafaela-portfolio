@echo off
echo ========================================
echo  Rafaela's Portfolio - Azure Deployment
echo ========================================
echo.

echo Step 1: Initialize Git Repository
git init
git add .
git commit -m "Initial commit - Rafaela's Professional Portfolio"

echo.
echo Step 2: GitHub Repository Setup
echo Please create a new repository on GitHub and then run:
echo git remote add origin https://github.com/YOUR_USERNAME/rafaela-portfolio.git
echo git branch -M main
echo git push -u origin main

echo.
echo Step 3: Azure Static Web Apps Deployment
echo 1. Go to https://portal.azure.com
echo 2. Create a resource ^> Static Web Apps
echo 3. Connect to your GitHub repository
echo 4. Use these settings:
echo    - App Location: /
echo    - Output Location: /
echo    - Build Preset: Custom

echo.
echo Step 4: Files Ready for Deployment
echo ✓ index.html - Main portfolio page
echo ✓ style.css - Complete styling
echo ✓ script.js - Interactive functionality
echo ✓ assets/images/profile.jpg - Professional photo
echo ✓ README.md - Documentation

echo.
echo Your portfolio will be available at:
echo https://[YOUR-APP-NAME].azurestaticapps.net

pause

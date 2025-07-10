@echo off
echo ==========================================
echo  Rafaella Portfolio - Deploy to GitHub
echo ==========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing git repository...
    git init
    echo.
)

REM Add all files
echo Adding files to git...
git add .
echo.

REM Commit with timestamp
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "timestamp=%YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"

echo Committing changes...
git commit -m "Portfolio update - %timestamp%"
echo.

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo ⚠️  SETUP REQUIRED ⚠️
    echo.
    echo Before running this script, you need to:
    echo 1. Create a GitHub repository at https://github.com
    echo 2. Run this command with your repository URL:
    echo.
    echo    git remote add origin https://github.com/YOUR_USERNAME/rafaella-portfolio.git
    echo.
    pause
    exit /b 1
)

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main
echo.

if errorlevel 0 (
    echo ✅ SUCCESS! Your portfolio has been pushed to GitHub.
    echo.
    echo Next steps:
    echo 1. Go to Azure Portal: https://portal.azure.com
    echo 2. Create a Static Web App
    echo 3. Connect it to your GitHub repository
    echo 4. Your portfolio will be live in 3-5 minutes!
    echo.
) else (
    echo ❌ Error occurred during push. Please check your GitHub credentials.
    echo.
)

echo Press any key to continue...
pause >nul

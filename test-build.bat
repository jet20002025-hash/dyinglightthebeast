@echo off
REM Dying Light: The Beast Wiki - Build Test Script (Windows)
REM This script tests the Hugo build process and validates the site structure

echo 🎮 Dying Light: The Beast Wiki - Build Test
echo ==========================================

REM Check if Hugo is installed
hugo version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Hugo is not installed. Please install Hugo Extended v0.100.0 or later.
    pause
    exit /b 1
)

REM Check Hugo version
for /f "tokens=*" %%i in ('hugo version') do (
    echo ✅ Hugo version: %%i
    goto :version_found
)
:version_found

REM Clean previous builds
echo 🧹 Cleaning previous builds...
if exist public rmdir /s /q public
if exist resources rmdir /s /q resources
if exist .hugo_build.lock del .hugo_build.lock

REM Test build
echo 🔨 Testing Hugo build...
hugo --quiet --buildDrafts --buildFuture
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Build successful!

REM Check if public directory was created
if exist public (
    echo ✅ Public directory created
) else (
    echo ❌ Public directory not created
    pause
    exit /b 1
)

REM Check for essential files
echo 📁 Checking essential files...

if exist "public\index.html" (
    echo ✅ public\index.html exists
) else (
    echo ❌ public\index.html missing
)

if exist "public\quests\index.html" (
    echo ✅ public\quests\index.html exists
) else (
    echo ❌ public\quests\index.html missing
)

if exist "public\items\index.html" (
    echo ✅ public\items\index.html exists
) else (
    echo ❌ public\items\index.html missing
)

if exist "public\characters\index.html" (
    echo ✅ public\characters\index.html exists
) else (
    echo ❌ public\characters\index.html missing
)

if exist "public\skills\index.html" (
    echo ✅ public\skills\index.html exists
) else (
    echo ❌ public\skills\index.html missing
)

if exist "public\map\index.html" (
    echo ✅ public\map\index.html exists
) else (
    echo ❌ public\map\index.html missing
)

REM Check for static assets
echo 🎨 Checking static assets...

if exist "public\css\custom.css" (
    echo ✅ public\css\custom.css exists
) else (
    echo ❌ public\css\custom.css missing
)

if exist "public\js\main.js" (
    echo ✅ public\js\main.js exists
) else (
    echo ❌ public\js\main.js missing
)

if exist "public\js\search.js" (
    echo ✅ public\js\search.js exists
) else (
    echo ❌ public\js\search.js missing
)

if exist "public\images\logo.svg" (
    echo ✅ public\images\logo.svg exists
) else (
    echo ❌ public\images\logo.svg missing
)

REM Check for search index
if exist "public\search-index.json" (
    echo ✅ Search index generated
) else (
    echo ⚠️  Search index not found (may be generated at runtime)
)

REM Test local server (optional)
if "%1"=="--serve" (
    echo 🚀 Starting local server...
    echo Visit http://localhost:1313 to view the site
    hugo server -D
    goto :end
)

echo.
echo 🎉 Build test completed!
echo The site is ready for deployment to Cloudflare Pages.
echo.
echo Next steps:
echo 1. Push to GitHub repository
echo 2. Configure Cloudflare Pages
echo 3. Set up custom domain (optional)
echo 4. Deploy!

:end
pause

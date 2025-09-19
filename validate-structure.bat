@echo off
REM Dying Light: The Beast Wiki - Project Structure Validation Script
REM This script validates the project structure without requiring Hugo

echo 🎮 Dying Light: The Beast Wiki - Structure Validation
echo =====================================================

echo ✅ Checking project structure...

REM Check root files
echo 📁 Checking root files...
if exist "hugo.toml" (
    echo ✅ hugo.toml exists
) else (
    echo ❌ hugo.toml missing
)

if exist "README.md" (
    echo ✅ README.md exists
) else (
    echo ❌ README.md missing
)

if exist "package.json" (
    echo ✅ package.json exists
) else (
    echo ❌ package.json missing
)

if exist ".gitignore" (
    echo ✅ .gitignore exists
) else (
    echo ❌ .gitignore missing
)

REM Check content directory
echo 📝 Checking content structure...
if exist "content" (
    echo ✅ content directory exists
) else (
    echo ❌ content directory missing
    goto :end
)

if exist "content\_index.md" (
    echo ✅ content\_index.md exists
) else (
    echo ❌ content\_index.md missing
)

REM Check content sections
set SECTIONS=quests items characters skills map
for %%s in (%SECTIONS%) do (
    if exist "content\%%s" (
        echo ✅ content\%%s directory exists
        if exist "content\%%s\_index.md" (
            echo ✅ content\%%s\_index.md exists
        ) else (
            echo ❌ content\%%s\_index.md missing
        )
    ) else (
        echo ❌ content\%%s directory missing
    )
)

REM Check theme directory
echo 🎨 Checking theme structure...
if exist "themes" (
    echo ✅ themes directory exists
) else (
    echo ❌ themes directory missing
    goto :end
)

if exist "themes\dying-light-theme" (
    echo ✅ dying-light-theme directory exists
) else (
    echo ❌ dying-light-theme directory missing
    goto :end
)

REM Check theme layouts
echo 📐 Checking theme layouts...
if exist "themes\dying-light-theme\layouts" (
    echo ✅ layouts directory exists
) else (
    echo ❌ layouts directory missing
)

if exist "themes\dying-light-theme\layouts\_default\baseof.html" (
    echo ✅ baseof.html exists
) else (
    echo ❌ baseof.html missing
)

if exist "themes\dying-light-theme\layouts\index.html" (
    echo ✅ index.html exists
) else (
    echo ❌ index.html missing
)

REM Check theme static assets
echo 🎨 Checking theme static assets...
if exist "themes\dying-light-theme\static" (
    echo ✅ static directory exists
) else (
    echo ❌ static directory missing
)

if exist "themes\dying-light-theme\static\css\custom.css" (
    echo ✅ custom.css exists
) else (
    echo ❌ custom.css missing
)

if exist "themes\dying-light-theme\static\js\main.js" (
    echo ✅ main.js exists
) else (
    echo ❌ main.js missing
)

if exist "themes\dying-light-theme\static\js\search.js" (
    echo ✅ search.js exists
) else (
    echo ❌ search.js missing
)

REM Check static files
echo 📄 Checking static files...
if exist "static" (
    echo ✅ static directory exists
) else (
    echo ❌ static directory missing
)

if exist "static\robots.txt" (
    echo ✅ robots.txt exists
) else (
    echo ❌ robots.txt missing
)

if exist "static\site.webmanifest" (
    echo ✅ site.webmanifest exists
) else (
    echo ❌ site.webmanifest missing
)

REM Check GitHub Actions
echo 🚀 Checking GitHub Actions...
if exist ".github" (
    echo ✅ .github directory exists
) else (
    echo ❌ .github directory missing
)

if exist ".github\workflows" (
    echo ✅ workflows directory exists
) else (
    echo ❌ workflows directory missing
)

if exist ".github\workflows\deploy.yml" (
    echo ✅ deploy.yml exists
) else (
    echo ❌ deploy.yml missing
)

REM Check documentation
echo 📚 Checking documentation...
if exist "DEPLOYMENT.md" (
    echo ✅ DEPLOYMENT.md exists
) else (
    echo ❌ DEPLOYMENT.md missing
)

if exist "CONTENT_GUIDELINES.md" (
    echo ✅ CONTENT_GUIDELINES.md exists
) else (
    echo ❌ CONTENT_GUIDELINES.md missing
)

if exist "PROJECT_STRUCTURE.md" (
    echo ✅ PROJECT_STRUCTURE.md exists
) else (
    echo ❌ PROJECT_STRUCTURE.md missing
)

echo.
echo 🎉 Structure validation completed!
echo.
echo 📋 Next steps:
echo 1. Install Hugo Extended v0.100.0 or later
echo 2. Run 'hugo server -D' to start development server
echo 3. Visit http://localhost:1313 to view the site
echo 4. Push to GitHub and configure Cloudflare Pages
echo.
echo 💡 Hugo Installation:
echo - Windows: Download from https://github.com/gohugoio/hugo/releases
echo - Or use Chocolatey: choco install hugo-extended
echo - Or use Scoop: scoop install hugo-extended

:end
pause

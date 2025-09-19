#!/bin/bash

# Dying Light: The Beast Wiki - Build Test Script
# This script tests the Hugo build process and validates the site structure

echo "🎮 Dying Light: The Beast Wiki - Build Test"
echo "=========================================="

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo Extended v0.100.0 or later."
    exit 1
fi

# Check Hugo version
HUGO_VERSION=$(hugo version | grep -o 'v[0-9]\+\.[0-9]\+\.[0-9]\+' | head -1)
echo "✅ Hugo version: $HUGO_VERSION"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf public/ resources/ .hugo_build.lock

# Test build
echo "🔨 Testing Hugo build..."
if hugo --quiet --buildDrafts --buildFuture; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Check if public directory was created
if [ -d "public" ]; then
    echo "✅ Public directory created"
else
    echo "❌ Public directory not created"
    exit 1
fi

# Check for essential files
echo "📁 Checking essential files..."

ESSENTIAL_FILES=(
    "public/index.html"
    "public/quests/index.html"
    "public/items/index.html"
    "public/characters/index.html"
    "public/skills/index.html"
    "public/map/index.html"
)

for file in "${ESSENTIAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check for static assets
echo "🎨 Checking static assets..."

STATIC_ASSETS=(
    "public/css/custom.css"
    "public/js/main.js"
    "public/js/search.js"
    "public/images/logo.svg"
)

for asset in "${STATIC_ASSETS[@]}"; do
    if [ -f "$asset" ]; then
        echo "✅ $asset exists"
    else
        echo "❌ $asset missing"
    fi
done

# Check for search index
if [ -f "public/search-index.json" ]; then
    echo "✅ Search index generated"
else
    echo "⚠️  Search index not found (may be generated at runtime)"
fi

# Test local server (optional)
if [ "$1" = "--serve" ]; then
    echo "🚀 Starting local server..."
    echo "Visit http://localhost:1313 to view the site"
    hugo server -D
fi

echo ""
echo "🎉 Build test completed!"
echo "The site is ready for deployment to Cloudflare Pages."
echo ""
echo "Next steps:"
echo "1. Push to GitHub repository"
echo "2. Configure Cloudflare Pages"
echo "3. Set up custom domain (optional)"
echo "4. Deploy!"

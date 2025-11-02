#!/bin/bash

# Script for testing Slidev integration locally

echo "🎯 Setting up Slidev integration test..."

# Check Node.js version
NODE_VERSION=$(node --version | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20 or higher is required. Current version: $(node --version)"
    echo "Please update Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version check passed: $(node --version)"

# Install Slidev if not already installed
if ! command -v slidev &> /dev/null; then
    echo "📦 Installing Slidev..."
    npm install -g @slidev/cli
fi

# Create test slidev directory
echo "📁 Creating test Slidev presentation..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"
mkdir -p test-presentation-slidev

# Copy images directory FIRST if it exists
if [ -d "$PROJECT_DIR/images" ]; then
    echo "📸 Copying images directory..."
    cp -r "$PROJECT_DIR/images" test-presentation-slidev/
fi

# If there's a test-presentation.md file, convert it to Slidev format
if [ -f "$PROJECT_DIR/infra/test-presentation.md" ]; then
    echo "📄 Converting test-presentation.md to Slidev format..."
    
    # Add Slidev frontmatter
    cat > test-presentation-slidev/slides.md << 'EOF'
---
theme: seriph
background: https://source.unsplash.com/1920x1080/?nature,water
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Test Presentasjon - Generated from infra/test-presentation.md
drawings:
  persist: false
title: Test Presentasjon
---

EOF
    
    # Convert markdown content and fix image paths
    tail -n +2 "$PROJECT_DIR/infra/test-presentation.md" | \
    sed 's/^# /---\n\n# /' | \
    sed 's|/images/|./images/|g' | \
    sed 's|\.\.\/images\/|\.\/images\/|g' >> test-presentation-slidev/slides.md
else
    # Generate default content if no test-presentation.md exists
    cat > test-presentation-slidev/slides.md << 'EOF'
---
theme: seriph
background: https://source.unsplash.com/1920x1080/?nature,water
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  Test Presentasjon - Generated with Slidev
drawings:
  persist: false
title: Test Presentasjon
---

# Test Presentasjon

Velkommen til presentasjonen

---

# Innhald

Her er nokre punkter som kan vere nyttige:

- Punkt ein
- Punkt to  
- Punkt tre

---

# Kode

```javascript
function hello() {
    console.log("Hei frå Slidev!");
}
```

---

# Bilete

Ein presentasjon kan ha bilete og grafisk innhald.

---

# Konklusjon

Dette var ein test av Slidev-funksjonaliteten i Jekyll.

EOF
fi

# Build the presentation
echo "🔨 Building Slidev presentation..."
cd test-presentation-slidev
export CI=true
export NODE_ENV=production
echo "yes" | slidev build slides.md --base "/test-presentation-slidev/dist/" --out dist

if [ $? -eq 0 ]; then
    echo "✅ Slidev presentation built successfully!"
    
    # Ensure images are available in the built presentation
    if [ -d "images" ] && [ -d "dist" ]; then
        cp -r images dist/
        echo "📸 Copied images to dist directory for runtime access"
    fi
    
    echo "📂 Files created in test-presentation-slidev/dist/"
    ls -la dist/
else
    echo "❌ Failed to build Slidev presentation"
    exit 1
fi

cd ..

# Test Jekyll build
echo "🏗️  Testing Jekyll build..."
cd "$PROJECT_DIR"
bundle exec jekyll build

if [ $? -eq 0 ]; then
    echo "✅ Jekyll build successful!"
    
    # Check if slidev files are in _site
    if [ -d "_site/test-presentation-slidev" ]; then
        echo "✅ Slidev presentation found in _site!"
    else
        echo "⚠️  Slidev presentation not found in _site"
    fi
else
    echo "❌ Jekyll build failed"
fi

echo "🚀 Test complete!"
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
mkdir -p test-presentation-slidev

# Generate Slidev content from markdown
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

# Build the presentation
echo "🔨 Building Slidev presentation..."
cd test-presentation-slidev
slidev build slides.md --base "/test-presentation-slidev/" --out dist --yes

if [ $? -eq 0 ]; then
    echo "✅ Slidev presentation built successfully!"
    echo "📂 Files created in test-presentation-slidev/dist/"
    ls -la dist/
else
    echo "❌ Failed to build Slidev presentation"
    exit 1
fi

cd ..

# Test Jekyll build
echo "🏗️  Testing Jekyll build..."
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
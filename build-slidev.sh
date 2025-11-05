#!/bin/sh

# POSIX-compatible script for building Slidev presentations
# Usage: ./build-slidev.sh [--local] [--help]

set -e  # Exit on any error

# Configuration
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

# Colors for output (if terminal supports it)
if [ -t 1 ]; then
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    BLUE='\033[0;34m'
    NC='\033[0m'
else
    RED=''
    GREEN=''
    YELLOW=''
    BLUE=''
    NC=''
fi

# Logging functions
log_info() {
    printf "%b[INFO]%b %s\n" "$BLUE" "$NC" "$1"
}

log_success() {
    printf "%b[SUCCESS]%b %s\n" "$GREEN" "$NC" "$1"
}

log_warning() {
    printf "%b[WARNING]%b %s\n" "$YELLOW" "$NC" "$1"
}

log_error() {
    printf "%b[ERROR]%b %s\n" "$RED" "$NC" "$1"
}

# Help function
show_help() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Build Slidev presentations from markdown files"
    echo ""
    echo "Options:"
    echo "  --local     Run in local mode (don't build, just prepare)"
    echo "  --help      Show this help message"
    echo ""
    echo "This script will:"
    echo "1. Find all internal links ending with '-slidev/'"
    echo "2. Find corresponding markdown files"
    echo "3. Copy images and process markdown files"
    echo "4. Build Slidev presentations"
}

# Parse command line arguments
LOCAL_MODE=0
while [ $# -gt 0 ]; do
    case $1 in
        --local)
            LOCAL_MODE=1
            shift
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            log_error "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
done

# Function to find all markdown files and their corresponding slidev links
find_slidev_targets() {
    log_info "Scanning for slidev links..."
    
    # Find all markdown and HTML files, excluding generated directories and build artifacts
    find . \( -type d \( -name "*-slidev" -o -name "_site" -o -name ".jekyll-cache" -o -name "node_modules" -o -name "dist" -o -name "build" -o -name "vendor" \) -prune \) -o \( -name "*.md" -o -name "*.html" \) -type f -print | \
        grep -v "^\./_" | \
        while read -r file; do
        # Look for links ending with -slidev/ or -slidev/dist/
        if grep -q '[a-zA-Z0-9/_-]*-slidev/' "$file" 2>/dev/null; then
            grep -o '[a-zA-Z0-9/_-]*-slidev/' "$file" 2>/dev/null | while read -r link; do
                # Extract the base name (remove -slidev/ suffix)
                basename="${link%-slidev/}"
                
                # Try different possible locations for the markdown file
                file_dir=$(dirname "$file")
                
                # Try same directory as the link reference
                if [ -f "$file_dir/${basename}.md" ]; then
                    echo "$file_dir/${basename}.md|$file_dir/${basename}-slidev"
                # Try absolute path from root
                elif [ -f ".${basename}.md" ]; then
                    echo ".${basename}.md|.${basename}-slidev"
                # Try relative to current directory
                elif [ -f "${basename}.md" ]; then
                    echo "${basename}.md|${basename}-slidev"
                fi
            done
        fi
    done | sort -u
}

# Function to copy and process images
process_images() {
    md_file="$1"
    slidev_dir="$2"
    
    log_info "Processing images for $md_file"
    
    # Create images directory
    mkdir -p "$slidev_dir/images"
    
    # Find all image references in the markdown file
    grep -E '!\[.*\]\([^)]+\)|image:\s*[^[:space:]]+' "$md_file" | while IFS= read -r line; do
        # Extract image path
        img_path=""
        if echo "$line" | grep -q '!\[.*\]'; then
            # Markdown image syntax: ![alt](path)
            img_path=$(echo "$line" | sed -n 's/.*!\[.*\](\([^)]*\)).*/\1/p' | sed 's/[[:space:]]*".*$//')
        elif echo "$line" | grep -q 'image:'; then
            # YAML image property: image: path
            img_path=$(echo "$line" | sed -n 's/.*image:[[:space:]]*\([^[:space:]]*\).*/\1/p')
        fi
        
        if [ -n "$img_path" ]; then
            # Determine source path based on reference type
            md_dir=$(dirname "$md_file")
            case "$img_path" in
                ../*)
                    # Relative to parent: ../images/file.png
                    src_path="${img_path#../}"
                    ;;
                ./*)
                    # Relative to current: ./images/file.png
                    src_path="$md_dir/${img_path#./}"
                    ;;
                /*)
                    # Absolute from root: /images/file.png
                    src_path="${img_path#/}"
                    ;;
                *)
                    # Relative path: images/file.png
                    src_path="$md_dir/$img_path"
                    ;;
            esac
            
            # Copy the image if it exists
            if [ -f "$src_path" ]; then
                img_filename=$(basename "$img_path")
                cp "$src_path" "$slidev_dir/images/$img_filename"
                log_success "Copied: $src_path → $slidev_dir/images/$img_filename"
            else
                log_warning "Image not found: $src_path (referenced as: $img_path)"
            fi
        fi
    done
}

# Function to process markdown file and fix image references
process_markdown() {
    md_file="$1"
    slidev_dir="$2"
    
    log_info "Processing markdown file: $md_file"
    
    # Check if source file has frontmatter
    if head -n 1 "$md_file" | grep -q "^---$"; then
        log_info "Source file has frontmatter, preserving it"
        cp "$md_file" "$slidev_dir/slides.md"
    else
        log_info "Adding default frontmatter"
        {
            echo "---"
            echo "theme: seriph"
            echo "background: https://unsplash.com/photos/clear-blue-running-water-at-daytime-OR_3rbIv5yI"
            echo "class: text-center"
            echo "highlighter: shiki"
            echo "lineNumbers: false"
            echo "info: |"
            echo "  Presentation generated from $(basename "$md_file")"
            echo "drawings:"
            echo "  persist: false"
            echo "---"
            echo ""
            cat "$md_file"
        } > "$slidev_dir/slides.md"
    fi
    
    # Fix all image references to point to ./images/
    log_info "Fixing image references..."
    
    # Create temporary file for processing
    cp "$slidev_dir/slides.md" "$slidev_dir/slides_original.md"
    
    # Fix image paths step by step
    # 1. Fix ../images/ to ./images/
    sed 's|\.\./images/|./images/|g' "$slidev_dir/slides_original.md" > "$slidev_dir/slides_temp1.md"
    
    # 2. Fix /images/ (but not ./images/) to ./images/ in specific contexts
    sed 's|(\s*/images/|(./images/|g; s|image:\s*/images/|image: ./images/|g' "$slidev_dir/slides_temp1.md" > "$slidev_dir/slides.md"
    
    # Clean up temp files
    rm -f "$slidev_dir/slides_temp1.md"
    
    log_success "Markdown processing complete"
}

# Function to build Slidev presentation
build_slidev() {
    slidev_dir="$1"
    
    if [ "$LOCAL_MODE" = "1" ]; then
        log_info "Local mode: Skipping Slidev build"
        return 0
    fi
    
    log_info "Building Slidev presentation in $slidev_dir"
    
    cd "$slidev_dir"
    
    # Extract the relative path from project root for GitHub Pages
    relative_path=$(echo "$slidev_dir" | sed 's|^\./||')
    base_path="/$relative_path/"
    
    log_info "Using base path: $base_path"
    
    # Build the presentation with correct base path for GitHub Pages
    if echo "yes" | slidev build slides.md --base "$base_path" --out dist; then
        log_success "Slidev build completed successfully"
        
        # Copy images to dist for runtime access
        if [ -d "images" ] && [ -d "dist" ]; then
            cp -r images dist/
            log_success "Copied images to dist directory"
        fi
        
        # Create 404.html for SPA routing with explicit redirect
        if [ -f "dist/index.html" ]; then
            cat > dist/404.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
        // Redirect to base presentation for SPA routing
        window.location.replace('./index.html');
    </script>
</head>
<body>
    <p>Redirecting to presentation...</p>
</body>
</html>
EOF
            log_success "Created 404.html with explicit redirect"
        fi
        
        # Prepare for deployment if in CI environment
        prepare_for_deployment "$(pwd)"
    else
        log_error "Slidev build failed"
        cd "$SCRIPT_DIR"
        return 1
    fi
    
    cd "$SCRIPT_DIR"
}

# Function to prepare slidev presentations for deployment (CI only)
prepare_for_deployment() {
    slidev_dir="$1"
    
    # Only run in CI environment
    if [ "$CI" != "true" ]; then
        return 0
    fi
    
    if [ ! -d "$slidev_dir/dist" ]; then
        log_error "No dist directory found in $slidev_dir"
        return 1
    fi
    
    log_info "Preparing $slidev_dir for deployment"
    
    # Remove build artifacts
    rm -rf "$slidev_dir/slides.md" "$slidev_dir/package"*.json "$slidev_dir/node_modules" "$slidev_dir/images" "$slidev_dir/slides_original.md"
    
    # Move dist content up to main directory
    mv "$slidev_dir/dist"/* "$slidev_dir/"
    rmdir "$slidev_dir/dist"
    
    # Add .nojekyll to prevent Jekyll from processing Vue.js files
    touch "$slidev_dir/.nojekyll"
    
    log_success "Prepared $slidev_dir for deployment"
}

# Function to verify markdown file
verify_markdown() {
    original="$1"
    generated="$2"
    
    log_info "Verifying generated markdown..."
    
    # Create temporary files without image references for comparison
    grep -v "images/" "$original" > "/tmp/original_no_images.md" 2>/dev/null || touch "/tmp/original_no_images.md"
    grep -v "images/" "$generated" > "/tmp/generated_no_images.md" 2>/dev/null || touch "/tmp/generated_no_images.md"
    
    if cmp -s "/tmp/original_no_images.md" "/tmp/generated_no_images.md"; then
        log_success "Content verification passed (excluding image references)"
    else
        log_warning "Content differs between original and generated (excluding images)"
    fi
    
    # Clean up
    rm -f "/tmp/original_no_images.md" "/tmp/generated_no_images.md"
}

# Main execution
main() {
    log_info "Starting Slidev build process..."
    
    if [ "$LOCAL_MODE" = "1" ]; then
        log_info "Running in LOCAL MODE (preparation only)"
    fi
    
    # Find all slidev targets
    targets=$(find_slidev_targets)
    
    if [ -z "$targets" ]; then
        log_warning "No slidev targets found"
        exit 0
    fi
    
    # Process each target
    printf "%s\n" "$targets" | while IFS='|' read -r md_file slidev_dir; do
        if [ -n "$md_file" ] && [ -n "$slidev_dir" ]; then
            log_info "Processing: $md_file → $slidev_dir"
            
            # Create slidev directory
            mkdir -p "$slidev_dir"
            
            # Process images
            process_images "$md_file" "$slidev_dir"
            
            # Process markdown
            process_markdown "$md_file" "$slidev_dir"
            
            # Verify the result
            verify_markdown "$md_file" "$slidev_dir/slides.md"
            
            # Build if not in local mode
            if ! build_slidev "$slidev_dir"; then
                log_error "Build failed for $slidev_dir"
                continue
            fi
            
            log_success "Completed: $md_file → $slidev_dir"
        fi
    done
    
    log_success "All slidev builds completed!"
}

# Run main function
main "$@"
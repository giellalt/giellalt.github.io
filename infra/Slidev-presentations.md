# Slidev Integration

This repository now supports [Slidev](https://sli.dev/) presentations as part of the Jekyll build process.

## How it works

1. **Write markdown** as usual
2. **Create links** ending with `-slidev/dist/` to reference a Slidev presentation
3. **The build process** detects these links and automatically generates Slidev presentations

## Example

If you have a file `introduction.md`:

```markdown
# Introduction to GiellaLT

## Chapter 1
Content here...

## Chapter 2  
More content...
```

And you create a link to `introduction-slidev/dist/` in another file:

```markdown
[View presentation](introduction-slidev/dist/)
```

The build process will automatically detect the link and generate a Slidev presentation from `introduction.md` that becomes available at `introduction-slidev/dist/`.

## How it works

1. **Detect links**: GitHub Actions scans all `.md` and `.html` files for links ending with `-slidev/dist/`
2. **Build presentations**: For each link, the corresponding `.md` file is converted to a Slidev presentation
3. **Publish**: Jekyll copies the presentations as static files to the published website

**Important**: Only links ending with `-slidev/dist/` will trigger presentation generation.

## Local testing

To test Slidev functionality locally:

```bash
# Install dependencies
npm install

# Test Slidev integration
./test-slidev.sh

# Or build Jekyll with Slidev support
bundle exec jekyll build
```

## Customizing presentations

Slidev presentations are generated with default theme and settings. You can customize these by editing the GitHub Actions workflow in `.github/workflows/docsygen.yml`.

### Default settings:
- **Theme**: seriph
- **Background**: Default Slidev background
- **Syntax highlighting**: shiki
- **Line numbers**: off

## Deployment

Slidev presentations are automatically built and deployed to GitHub Pages through `.github/workflows/docsygen.yml` when code is pushed to the `main` branch.

## Structure

```
.
├── introduction.md                    # Original markdown
├── introduction-slidev/               # Generated Slidev directory
│   └── dist/                          # Built presentation
│       ├── index.html                 # Main presentation
│       └── assets/                    # CSS, JS, etc.
└── _site/introduction-slidev/         # In Jekyll _site after build
```

## Troubleshooting

- **Presentation not generated**: Check that the link ends with `-slidev/dist/` and that the corresponding `.md` file exists
- **Build errors**: Verify that Node.js and Slidev are installed correctly
- **Styling issues**: Check Slidev theme settings in the GitHub Actions workflow
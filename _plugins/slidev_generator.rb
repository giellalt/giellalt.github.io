module Jekyll
  class SlidevGenerator < Generator
    safe true
    priority :normal

    def generate(site)
      # Find all pages that might have slidev links
      pages_with_slidev_links = []
      
      site.pages.each do |page|
        if page.content && page.content.match(/-slidev\//)
          pages_with_slidev_links << page
        end
      end
      
      # Process each page that has slidev links
      pages_with_slidev_links.each do |page|
        process_slidev_links(site, page)
      end
    end

    private

    def process_slidev_links(site, page)
      # Find all slidev links in the page content
      slidev_links = page.content.scan(/\[([^\]]+)\]\(([^)]*-slidev\/)\)/)
      
      slidev_links.each do |link_text, link_url|
        # Extract the base name from the slidev link
        base_name = link_url.gsub(/-slidev\/$/, '')
        
        # Look for corresponding markdown file
        md_file_path = find_markdown_file(site, base_name, page)
        
        if md_file_path
          create_slidev_presentation(site, md_file_path, base_name, link_text)
        end
      end
    end

    def find_markdown_file(site, base_name, referring_page)
      # Get the directory of the referring page
      page_dir = File.dirname(referring_page.path)
      
      # Possible paths for the markdown file
      possible_paths = [
        "#{base_name}.md",
        "#{page_dir}/#{base_name}.md",
        "./#{base_name}.md"
      ]
      
      possible_paths.each do |path|
        normalized_path = File.expand_path(path, site.source)
        if File.exist?(normalized_path)
          return normalized_path
        end
      end
      
      nil
    end

    def create_slidev_presentation(site, md_file_path, base_name, title)
      # Read the original markdown file
      content = File.read(md_file_path)
      
      # Create Slidev-formatted content
      slidev_content = convert_to_slidev_format(content, title)
      
      # Create the slidev directory structure
      slidev_dir = "#{base_name}-slidev"
      slidev_path = File.join(site.source, slidev_dir)
      
      unless File.exist?(slidev_path)
        FileUtils.mkdir_p(slidev_path)
      end
      
      # Write the Slidev slides file
      slides_file = File.join(slidev_path, "slides.md")
      File.write(slides_file, slidev_content)
      
      # Create a simple index.html for the slidev presentation
      index_content = create_slidev_index(title, base_name)
      index_file = File.join(slidev_path, "index.html")
      File.write(index_file, index_content)
      
      # Create a Jekyll page for the slidev presentation
      create_jekyll_slidev_page(site, slidev_dir, title, base_name)
    end

    def convert_to_slidev_format(content, title)
      # Slidev front matter
      slidev_content = <<~FRONTMATTER
        ---
        theme: seriph
        background: https://source.unsplash.com/1920x1080/?nature,water
        class: text-center
        highlighter: shiki
        lineNumbers: false
        info: |
          #{title} - Generated with Slidev
        drawings:
          persist: false
        title: #{title}
        ---

        # #{title}

        Welcome to the presentation

        ---

      FRONTMATTER
      
      # Remove Jekyll front matter if present
      content = content.gsub(/\A---\s*\n.*?\n---\s*\n/m, '')
      
      # Convert markdown headers to slides
      lines = content.split("\n")
      current_slide = []
      
      lines.each do |line|
        if line.match(/^#+\s/)
          # New slide starts with header
          unless current_slide.empty?
            slidev_content += current_slide.join("\n") + "\n\n---\n\n"
            current_slide = []
          end
          current_slide << line
        else
          current_slide << line
        end
      end
      
      # Add the last slide
      unless current_slide.empty?
        slidev_content += current_slide.join("\n") + "\n"
      end
      
      slidev_content
    end

    def create_slidev_index(title, base_name)
      <<~HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>#{title} - Slidev Presentation</title>
          <meta http-equiv="refresh" content="0; url=./dist/index.html">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              margin: 0;
              padding: 20px;
              background: #f5f5f5;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              padding: 40px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .btn {
              display: inline-block;
              padding: 12px 24px;
              background: #4f46e5;
              color: white;
              text-decoration: none;
              border-radius: 6px;
              margin: 10px 10px 10px 0;
              transition: background 0.2s;
            }
            .btn:hover {
              background: #3730a3;
            }
            .redirect-notice {
              background: #e0f2fe;
              border-left: 4px solid #0288d1;
              padding: 16px;
              margin-bottom: 20px;
              border-radius: 4px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="redirect-notice">
              <strong>Redirecting to presentation...</strong><br>
              If you are not redirected automatically, click the button below.
            </div>
            
            <h1>#{title}</h1>
            <p>This is a Slidev presentation. Choose how you want to view it:</p>
            
            <a href="./dist/index.html" class="btn">📺 View Presentation</a>
            <a href="./slides.md" class="btn">📝 View Source</a>
            
            <h2>Direct Link</h2>
            <p>Presentation URL: <code>#{base_name}-slidev/dist/index.html</code></p>
            
            <h2>About</h2>
            <p>This presentation was automatically generated from the corresponding Markdown file using <a href="https://sli.dev/">Slidev</a>.</p>
            
            <h2>Controls</h2>
            <ul>
              <li><strong>Space/Arrow keys:</strong> Navigate slides</li>
              <li><strong>F:</strong> Fullscreen</li>
              <li><strong>O:</strong> Overview mode</li>
              <li><strong>D:</strong> Dark mode toggle</li>
            </ul>
          </div>
        </body>
        </html>
      HTML
    end

    def create_jekyll_slidev_page(site, slidev_dir, title, base_name)
      # Create a Jekyll page that will be accessible at /slidev_dir/
      page = Page.new(site, site.source, slidev_dir, "index.html")
      page.data['layout'] = nil
      page.data['title'] = "#{title} - Slidev Presentation"
      page.data['permalink'] = "/#{slidev_dir}/"
      
      site.pages << page
    end
  end
end
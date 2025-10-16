---
layout: default
title: Debug GitHub Metadata
---

# Debug Output

Repository: {{ site.github.repository_nwo }}

Owner: {{ site.github.owner_name }}

Public Repositories Count: {{ site.github.public_repositories | size }}

First 10 repos:
{% for repo in site.github.public_repositories limit:10 %}
- {{ repo.name }} - {{ repo.description }}
{% endfor %}

Raw JSON (first 3):
```
{{ site.github.public_repositories | slice: 0, 3 | jsonify }}
```

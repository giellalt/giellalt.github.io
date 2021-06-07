# Speech technology resources and models

(WIP - most links go to nowhere / 404.)

Private repositories are not listed.

<div class="twocolumn repolist" markdown="1">
{% assign lang_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'speech-'" %}
{% for repository in lang_repos %}
  * [{{ repository.name }}]({{ repository.name }}/)
{% endfor %}
</div>

# Language models

(WIP - more to come.
For a full list of all language resources, see
[our GitHub org page](https://github.com/giellalt).)

<div class="twocolumn" markdown="1">
* [Northern Sámi](lang-sme/)
* [Southern Sámi](lang-sma/)
* [Lule     Sámi](lang-smj/)
* [Inari    Sámi](lang-smn/)
* [Skolt    Sámi](lang-sms/)
* [Finnish      ](lang-fin/)
</div>

## Automatic list

<div class="threecolumn repolist" markdown="1">
{% assign lang_repos = site.github.public_repositories | where_exp: "repository", "repository.name contains 'lang-'" %}
{% for repository in lang_repos %}
  * [{{ repository.name }}]({{ repository.name }}/)
{% endfor %}
</div>

# GiellaLT — Language games

The languages are grouped according to game.

{% assign games_repos = site.data.github_repos | where_exp: "r", "r.name contains 'wordguess-'" | jsonify %}

## Word guessing game

Simple word guessing game in the tradition of [MasterMind](<https://en.wikipedia.org/wiki/Mastermind_(board_game)>). For more information on the source code, see [this repo](https://github.com/giellalt/template-wordguess-und).

<div id="wordguess"></div>

<script type="module">
import { render } from '/assets/js/page/games.js';
render({{ games_repos }});
</script>

# Language games

The languages are grouped according to game.

{% assign games_repos = site.github.public_repositories|jsonify %}

# Word guessing game

Simple word guessing game in the tradition of MasterMind.

<div id="wordguess" ></div>


<script src="/assets/js/langtable.js"></script>
<script>
const domWordGames = document.querySelector('#wordguess');
domWordGames.appendChild(addGameTable({{games_repos}}, 'wordguess-', ['game']))
</script>

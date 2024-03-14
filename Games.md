# Language games

The languages are grouped according to game.

{% assign games_repos = site.github.public_repositories|jsonify %}

# Word guessing game

Simple MasterMind-inspired word guessing game.

<div id="wordguess" ></div>


<script src="/assets/js/langtable.js"></script>
<script>
const domWordGames = document.querySelector('#wordguess');
domWordGames.appendChild(addRepoTable({{games_repos}}, 'wordguess-', ['words']))
</script>

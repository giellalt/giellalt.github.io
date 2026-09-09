// Entry module for Games.md
import { mount } from '../table/mount.js';
import { addGameTable } from '../table/game.js';

export function render(repos) {
    return mount('#wordguess', addGameTable(repos, 'wordguess-', ['game']));
}

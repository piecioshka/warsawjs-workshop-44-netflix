import { Player } from './player/index.js';

function main() {
    console.log('film page');

    const $target = document.querySelector('.player-container');

    const p = new Player();
    p.setup($target);
}

main();

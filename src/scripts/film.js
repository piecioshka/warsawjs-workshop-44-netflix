import { Player } from './player/index.js';

function main() {
    console.log('film page');

    const $target = document.querySelector('.player-container');

    const p = new Player($target);
    p.setup();

    // for() {
    //     // ...
    //     if (video.playable) {
    //         VideoPlayableFactory.create();
    //     } else if (...) {
    //         // ...
    //     } else {
    //         VideoReadonlyFactory.create();
    //     }
    // }

}

main();

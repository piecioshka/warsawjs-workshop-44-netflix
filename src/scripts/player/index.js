import { PlayerCore } from './core/index.js';
import { PlayerGui } from './gui/index.js';

export class Player {
    constructor() {
        const $target = document.querySelector('.player-container');

        const core = new PlayerCore();
        const gui = new PlayerGui();

        gui.addListener('click:play', () => {
            core.play();
        });
        gui.triggerEvent('click:play', /* payload */ { foo: 1 });

        gui.build(DefaultTheme, $target);
    }
}

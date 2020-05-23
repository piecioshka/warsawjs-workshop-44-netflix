import { PlayerCore } from './core/index.js';
import { PlayerGui } from './gui/index.js';
import { DefaultTheme } from './gui/themes/default.js';

export class Player {
    constructor() {
        const $video = document.querySelector('video');
        this.core = new PlayerCore($video);
        this.gui = new PlayerGui();
    }

    setup() {
        const $target = document.querySelector('.player-container');

        // GUI => Core
        this.gui.addListener('click:play', () => {
            this.core.play();
        });
        this.gui.addListener('click:stop', () => {
            this.core.stop();
        });

        // Core => GUI
        this.core.addListener('update:progress', ({ progress }) => {
            this.gui.setProgress(progress);
        });

        this.gui.build(DefaultTheme, $target);
    }
}
